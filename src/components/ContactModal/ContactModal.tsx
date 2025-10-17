import React, { ChangeEvent, useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Icons } from "../../lib/Constant";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import { sendEmail } from "../../services/Email";

interface ContactModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const ContactModal = ({ open, onOpenChange }: ContactModalProps) => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState<string>("");
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess("");
    if (
      !formData.name.trim() ||
      !formData.phone.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      setError(t("contactmodal.error_fill_all_fields"));
      return;
    }
    setError("");
    setSending(true);

    const templateParams = { ...formData };

    try {
      const result = await sendEmail(
        import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID,
        templateParams
      );
      console.log("EmailJS result:", result);
      setSuccess(t("contactmodal.success_message"));
      setFormData({ name: "", phone: "", email: "", message: "" });
      setTimeout(() => {
        onOpenChange(false);
        setSuccess("");
      }, 1000);
    } catch (err) {
      console.error("Email send error:", err);
      setError(t("contactmodal.error_send"));
    } finally {
      setSending(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[90vw] md:max-w-[700px] max-h-[90vh] overflow-y-auto bg-[#fbfbfb] p-6 md:p-6 rounded-[20px]">
        <DialogHeader className="space-y-4">
          <DialogTitle className="flex items-center justify-center gap-3 text-center">
            <span className="[font-family:'Orkney-Bold',Helvetica] font-bold text-black text-[40px]">
              {t("contactmodal.heading")}
            </span>
            <div className="w-9 h-9">
              <img
                className="h-auto w-auto"
                alt="Contact icon"
                src={Icons.ELEMENT1}
              />
            </div>
          </DialogTitle>
          <DialogDescription className="text-left [font-family:'Orkney-Regular',Helvetica] font-normal text-neutral-600 text-base md:text-lg tracking-[0] leading-relaxed">
            {t("contactmodal.description")}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              type="text"
              placeholder={t("contactmodal.placeholder_name")}
              value={formData.name}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="h-10 px-4 border rounded-[4px] bg-[#FFFFFF] [font-family:'Orkney-Regular',Helvetica] text-black placeholder:text-neutral-400 border-[#f7f7f7]"
              required
            />

            <PhoneInput
              country={"pt"}
              value={formData.phone}
              onChange={(value) => setFormData({ ...formData, phone: value })}
              inputClass="mainphoneinput"
              containerClass="w-full"
              inputProps={{
                required: true,
                autoFocus: false,
                placeholder: t("contactmodal.placeholder_phone"),
                name: "phone",
              }}
            />
          </div>

          <Input
            type="email"
            placeholder={t("contactmodal.placeholder_email")}
            value={formData.email}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="h-10 px-4 border rounded-[4px] bg-[#FFFFFF] [font-family:'Orkney-Regular',Helvetica] text-black placeholder:text-neutral-400 border-[#f7f7f7]"
            required
          />

          <Textarea
            placeholder={t("contactmodal.placeholder_message")}
            value={formData.message}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setFormData({ ...formData, message: e.target.value })
            }
            className="min-h-[112px] px-4 py-3 rounded-[4px] border border-[#f7f7f7] bg-white [font-family:'Orkney-Regular',Helvetica] text-black placeholder:text-neutral-400 resize-none"
            required
          />

          {error && (
            <div className="text-red-600 text-sm font-medium text-center">
              {error}
            </div>
          )}

          <div className="flex justify-center pt-[2px]">
            <Button
              type="submit"
              disabled={sending}
              className={`h-12 px-8 rounded-lg transition-colors ${
                sending
                  ? "bg-[#a6346b] cursor-not-allowed"
                  : "bg-[#7c0d48] hover:bg-[#5a0a35]"
              }`}
            >
              {sending ? (
                <div className="flex items-center gap-2">
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                    ></path>
                  </svg>
                  {t("contactmodal.sending")}
                </div>
              ) : (
                <span className="[font-family:'Orkney-Bold',Helvetica] font-bold text-white text-lg tracking-[0] leading-[normal]">
                  {t("contactmodal.submit")}
                </span>
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
