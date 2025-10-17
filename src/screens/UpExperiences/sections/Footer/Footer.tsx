import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Icons, Images } from "../../../../lib/Constant";
import { Input } from "../../../../components/ui/input";
import { Button } from "../../../../components/ui/button";
import { sendEmail } from "../../../../services/Email";

const quickLinks = [
  ["whoItsFor", "whyDoha", "whoWeAre"],
  ["services", "testimonials", "faqs"],
];

function Footer() {
  const { t } = useTranslation();
  const [subscribeEmail, setSubscribeEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [sending, setSending] = useState(false);
  const handleSubscribe = async () => {
    setError("");
    setSuccess("");

    if (!subscribeEmail) {
      setError(t("footer.subscribeError"));
      return;
    }

    // 2️⃣ Validate email format using a simple regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(subscribeEmail)) {
      setError(t("footer.subscribeInvalid")); // add this key in your en.json / pt.json
      return;
    }

    setSending(true);

    try {
      const CLIENT_EMAIL = import.meta.env.VITE_CLIENT_EMAIL;
      const now = new Date().toLocaleString();

      // 1️⃣ Send email to user
      await sendEmail(import.meta.env.VITE_EMAILJS_TEMPLATE_SUBSCRIBE, {
        to_email: CLIENT_EMAIL, // main recipient
        cc_email: subscribeEmail, // subscriber
        subscriber_email: subscribeEmail, // template variable for message content
        message: `Received one subscribed user. Subscribed Email is: ${subscribeEmail}`,
        subscribed_at: now,
      });

      // // 2️⃣ Send email to client
      // await sendEmail(import.meta.env.VITE_EMAILJS_SUBSCRIBE_TEMPLATE_CLIENT, {
      //   subscriber_email: subscribeEmail, // Your EmailJS template variable
      // });

      setSuccess(t("footer.subscribeSuccess"));
      setSubscribeEmail("");
    } catch (err) {
      console.error(err);
      setError(t("footer.subscribeFailed"));
    } finally {
      setSending(false);
    }
  };
  return (
    <>
      <footer className="flex flex-col min-h-[348px] items-center gap-4 px-4 md:px-12 lg:px-[60px] py-6 md:py-[25px] w-full bg-black relative z-0">
        <div className="flex flex-col items-start gap-6 md:gap-7 w-full">
          <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-[100px] w-full">
            <div className="flex flex-col w-full lg:w-[427px] items-start gap-8 md:gap-[42px]">
              <img
                className="w-[120px] h-10 md:w-[153.12px] md:h-12 object-cover "
                alt="Element logoexperiences "
                src={Images.LOGOFOOTER}
              />

              <div className="flex flex-col items-start gap-4 md:gap-5 w-full">
                <p className="w-full font-headings-desktop-h6-bold font-[number:var(--headings-desktop-h6-bold-font-weight)] text-white text-[length:var(--headings-desktop-h6-bold-font-size)] tracking-[var(--headings-desktop-h6-bold-letter-spacing)] leading-[var(--headings-desktop-h6-bold-line-height)] [font-style:var(--headings-desktop-h6-bold-font-style)]">
                  {t("footer.newsletterText")}
                </p>

                <div className="flex items-center gap-4 w-full">
                  <div className="flex w-[293px] gap-4 px-3 py-2 rounded border border-solid border-neutral-300 items-center">
                    <Input
                      type="email"
                      placeholder={t("footer.emailPlaceholder")}
                      value={subscribeEmail}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setSubscribeEmail(e.target.value)
                      }
                      className="flex-1 [font-family:'Orkney-Regular',Helvetica] font-normal text-neutral-300 bg-transparent border-0 p-0 h-auto focus-visible:ring-0 focus-visible:ring-offset-0"
                      required
                    />
                  </div>
                  {/* <Button className="h-9 px-1 md:px-4 py-0 bg-white rounded hover:bg-neutral-100 transition-colors w-20 sm:w-auto">
                    <span className="font-paragraph-medium-semibold font-[number:var(--paragraph-medium-semibold-font-weight)] text-black text-sm md:text-[length:var(--paragraph-medium-semibold-font-size)] text-center tracking-[var(--paragraph-medium-semibold-letter-spacing)] leading-[var(--paragraph-medium-semibold-line-height)] whitespace-nowrap [font-style:var(--paragraph-medium-semibold-font-style)]">
                      {t("footer.subscribeButton")}
                    </span>
                  </Button> */}
                  <Button
                    className={`h-9 px-1 md:px-4 py-0 bg-white rounded hover:bg-neutral-100 transition-colors w-20 sm:w-auto ${
                      sending ? "cursor-not-allowed opacity-60" : ""
                    }`}
                    onClick={handleSubscribe}
                    disabled={sending}
                  >
                    <span className="font-paragraph-medium-semibold font-[number:var(--paragraph-medium-semibold-font-weight)] text-black text-sm md:text-[length:var(--paragraph-medium-semibold-font-size)] text-center tracking-[var(--paragraph-medium-semibold-letter-spacing)] leading-[var(--paragraph-medium-semibold-line-height)] whitespace-nowrap [font-style:var(--paragraph-medium-semibold-font-style)]">
                      {sending
                        ? t("footer.subscribing")
                        : t("footer.subscribeButton")}
                    </span>
                  </Button>
                </div>
                {error && <p className="text-red-600 text-sm mt-2">{error}</p>}
                {success && (
                  <p className="text-green-600 text-sm mt-2">{success}</p>
                )}
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-start gap-8 md:gap-[60px] flex-1">
              <div className="flex flex-col items-start gap-4 md:gap-5 flex-1">
                <div className="flex gap-2.5 px-0 py-1 w-full items-center">
                  <h3 className="w-fit [font-family:'Orkney-Bold',Helvetica] font-bold text-white text-lg leading-[normal] tracking-[0]">
                    {t("footer.quickLinks")}
                  </h3>
                </div>

                <div className="flex flex-col sm:flex-row items-start gap-6 sm:gap-[60px] w-full">
                  {quickLinks.map((column, colIndex) => (
                    <nav
                      key={colIndex}
                      className="flex flex-col items-start gap-3 flex-1"
                    >
                      {column.map((link, linkIndex) => {
                        const sectionId = t(`footer.links.${link}`)
                          .toLowerCase()
                          .replace(/\s+/g, "-")
                          .replace(/'/g, "");
                        return (
                          <button
                            key={linkIndex}
                            onClick={() => {
                              const element =
                                document.getElementById(sectionId);
                              if (element) {
                                const offset = 80;
                                const elementPosition =
                                  element.getBoundingClientRect().top;
                                const offsetPosition =
                                  elementPosition + window.pageYOffset - offset;
                                window.scrollTo({
                                  top: offsetPosition,
                                  behavior: "smooth",
                                });
                              }
                            }}
                            className="inline-flex gap-2.5 hover:text-neutral-300 transition-colors cursor-pointer text-left"
                          >
                            <span className="w-fit [font-family:'Orkney-Regular',Helvetica] font-normal text-neutral-200 text-base leading-6 whitespace-nowrap tracking-[0]">
                              {t(`footer.links.${link}`)}
                            </span>
                          </button>
                        );
                      })}
                    </nav>
                  ))}
                </div>
              </div>

              <div className="flex items-start gap-8 md:gap-[42px] flex-1 self-stretch">
                <div className="flex flex-col items-start gap-4 md:gap-5 flex-1 self-stretch">
                  <div className="flex gap-2.5 px-0 py-1 w-full items-center">
                    <h3 className="w-fit [font-family:'Orkney-Bold',Helvetica] font-bold text-white text-lg leading-[normal] tracking-[0]">
                      {t("footer.contactUs")}
                    </h3>
                  </div>

                  <div className="flex flex-col items-start justify-center gap-2 md:gap-1.5 w-full">
                    <div className="flex flex-col items-start gap-2 md:gap-3 w-full">
                      <a
                        href="https://upexperiences.com.br/"
                        target="_blank"
                        className="inline-flex items-center gap-3 hover:text-neutral-300 transition-colors"
                      >
                        <img
                          className="w-4 h-4"
                          alt="Globe"
                          src={Icons.GLOBE}
                        />

                        <div className="inline-flex gap-2.5 px-0 py-1 items-center">
                          <span className="w-fit [font-family:'Orkney-Regular',Helvetica] font-normal text-neutral-200 text-base leading-6 whitespace-nowrap tracking-[0]">
                            upexperiences.com.br/
                          </span>
                        </div>
                      </a>
                    </div>

                    <div className="flex flex-col items-start gap-2 md:gap-3 w-full">
                      <div className="inline-flex flex-col sm:flex-row items-start gap-3">
                        <div className="inline-flex items-center gap-2.5 pt-0.5 pb-0 px-0">
                          <img
                            className="w-4 h-4"
                            alt="Media icon unfilled"
                            src={Icons.PHONE}
                          />

                          <div className="inline-flex flex-col items-start justify-center gap-2 w-full sm:w-auto">
                            <div className="inline-flex items-start gap-2 w-full sm:w-auto">
                              <img
                                className="w-[27.42px] h-[18px]"
                                alt="Group"
                                src={Icons.BRAZILFLAG}
                              />

                              <a
                                href="tel:+5521987838986"
                                className="inline-flex gap-2 items-center"
                              >
                                <span className="w-fit [font-family:'Orkney-Regular',Helvetica] font-normal text-neutral-200 text-base leading-6 whitespace-nowrap tracking-[0]">
                                  +5521 98783 8986
                                </span>
                              </a>
                            </div>

                            <div className="inline-flex items-start gap-2 w-full sm:w-auto">
                              <img
                                className="w-[26.57px] h-[18px]"
                                alt="Group"
                                src={Icons.UAEFLAG}
                              />

                              <a
                                href="tel:+971547881002"
                                className="inline-flex gap-2 items-center"
                              >
                                <span className="w-fit [font-family:'Orkney-Regular',Helvetica] font-normal text-neutral-200 text-base leading-6 whitespace-nowrap tracking-[0]">
                                  +971 54 788 1002
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <hr className="w-full h-px bg-[#ffffff] border-0" />
        </div>

        <p className="[font-family:'Orkney-Regular',Helvetica] font-normal text-white text-sm md:text-base text-center tracking-[0] leading-6">
          {t("footer.copyright")}
        </p>
      </footer>
    </>
  );
}

export default Footer;
