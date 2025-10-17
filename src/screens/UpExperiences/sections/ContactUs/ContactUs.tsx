import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Icons, Images } from "../../../../lib/Constant";
import { ContactModal } from "../../../../components/ContactModal";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

function ContactUs() {
  const { t } = useTranslation();
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch gap-5 px-4 md:px-12 lg:px-[60px] w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:2000ms]">
        <div className="lg:pt-[118.5px] pb-[78.5px]">
          <Card className="flex flex-col w-full items-start gap-8 md:gap-10 p-6 bg-[#fbfbfb] rounded-[20px] shadow-[0px_2px_6px_#1018280f] border-0">
            <CardContent className="p-0 w-full">
              <div className="items-center gap-4 w-full flex flex-col">
                <div className="inline-flex items-center gap-1">
                  <h2 className="w-fit font-headings-desktop-h2-bold font-[number:var(--headings-desktop-h2-bold-font-weight)] text-black text-[length:var(--headings-desktop-h2-bold-font-size)] tracking-[var(--headings-desktop-h2-bold-letter-spacing)] leading-[var(--headings-desktop-h2-bold-line-height)] whitespace-nowrap [font-style:var(--headings-desktop-h2-bold-font-style)]">
                    {t("contactus.heading")}
                  </h2>
                </div>
              </div>

              <div className="flex flex-col items-start gap-8 w-full mt-10">
                <div className="flex flex-col items-start justify-center gap-8 w-full">
                  <div className="flex items-center gap-4 w-full">
                    <div className="inline-flex items-center gap-2.5 p-2 bg-[#f7e8ec66] rounded-lg">
                      <img
                        className="w-8 h-8"
                        alt="Line md phone"
                        src={Icons.PHONE}
                        style={{
                          filter:
                            "brightness(0) saturate(100%) invert(10%) sepia(55%) saturate(5437%) hue-rotate(315deg) brightness(92%) contrast(97%)",
                        }}
                      />
                    </div>

                    <div className="flex flex-col items-start gap-2 md:gap-[7px] flex-1">
                      <h3 className="w-full font-headings-mobile-h6-bold font-[number:var(--headings-mobile-h6-bold-font-weight)] text-black text-base md:text-[length:var(--headings-mobile-h6-bold-font-size)] tracking-[var(--headings-mobile-h6-bold-letter-spacing)] leading-[var(--headings-mobile-h6-bold-line-height)] [font-style:var(--headings-mobile-h6-bold-font-style)]">
                        {t("contactus.phone_number_label")}
                      </h3>

                      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-5 w-full">
                        <div className="flex items-center gap-3">
                          <img
                            className="w-[27.42px] h-[18px]"
                            alt="Group"
                            src={Icons.BRAZILFLAG}
                          />
                          <div className="inline-flex items-center justify-center gap-2.5 pt-0.5 pb-0 px-0">
                            <p className="w-fit font-headings-mobile-h6-regular font-[number:var(--headings-mobile-h6-regular-font-weight)] text-neutral-600 text-[length:var(--headings-mobile-h6-regular-font-size)] tracking-[var(--headings-mobile-h6-regular-letter-spacing)] leading-[var(--headings-mobile-h6-regular-line-height)] [font-style:var(--headings-mobile-h6-regular-font-style)]">
                              <a href="tel:+5521987838986">
                                {t("contactus.phone_brazil")}
                              </a>
                            </p>
                          </div>
                        </div>

                        <div className="inline-flex items-center gap-3">
                          <img
                            className="w-[26.57px] h-[18px]"
                            alt="Group"
                            src={Icons.UAEFLAG}
                          />
                          <div className="inline-flex items-center justify-center gap-2.5 pt-0.5 pb-0 px-0">
                            <p className="w-fit font-headings-mobile-h6-regular font-[number:var(--headings-mobile-h6-regular-font-weight)] text-neutral-600 text-[length:var(--headings-mobile-h6-regular-font-size)] tracking-[var(--headings-mobile-h6-regular-letter-spacing)] leading-[var(--headings-mobile-h6-regular-line-height)] [font-style:var(--headings-mobile-h6-regular-font-style)]">
                              <a href="tel:+971547881002">
                                {t("contactus.phone_uae")}
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-start gap-5 w-full">
                    <div className="flex items-start sm:items-center gap-4 flex-1 w-full sm:w-auto">
                      <div className="inline-flex items-center gap-2.5 p-2 bg-[#f7e8ec66] rounded-lg shrink-0">
                        <img
                          className="w-8 h-8"
                          alt="Globe"
                          src={Icons.GLOBE}
                          style={{
                            filter:
                              "brightness(0) saturate(100%) invert(10%) sepia(55%) saturate(5437%) hue-rotate(315deg) brightness(92%) contrast(97%)",
                          }}
                        />
                      </div>

                      <div className="flex flex-col items-start gap-[7px] flex-1">
                        <h3 className="w-full font-headings-mobile-h6-bold font-[number:var(--headings-mobile-h6-bold-font-weight)] text-black text-[length:var(--headings-mobile-h6-bold-font-size)] tracking-[var(--headings-mobile-h6-bold-letter-spacing)] leading-[var(--headings-mobile-h6-bold-line-height)] [font-style:var(--headings-mobile-h6-bold-font-style)]">
                          {t("contactus.website_label")}
                        </h3>

                        <div className="flex items-center gap-3 w-full">
                          <p className="flex-1 shrink-0 truncate font-headings-mobile-h6-regular font-[number:var(--headings-mobile-h6-regular-font-weight)] text-neutral-500 text-[length:var(--headings-mobile-h6-regular-font-size)] tracking-[var(--headings-mobile-h6-regular-letter-spacing)] leading-[var(--headings-mobile-h6-regular-line-height)] [font-style:var(--headings-mobile-h6-regular-font-style)]">
                            <a
                              href="https://upexperiences.com.br/"
                              target="_blank"
                            >
                              {t("contactus.website_url")}
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start ml-0 sm:ml-4 sm:items-center gap-4 flex-1 w-full sm:w-auto">
                      <div className="inline-flex items-center gap-2.5 p-2 bg-[#f7e8ec66] rounded-lg">
                        <img
                          className="w-8 h-8"
                          alt="Instagram logo"
                          src={Icons.INSTAGRAMLOGO}
                        />
                      </div>

                      <div className="flex flex-col items-start gap-[7px] flex-1 ">
                        <h3 className="w-full font-headings-mobile-h6-bold font-[number:var(--headings-mobile-h6-bold-font-weight)] text-black text-[length:var(--headings-mobile-h6-bold-font-size)] tracking-[var(--headings-mobile-h6-bold-letter-spacing)] leading-[var(--headings-mobile-h6-bold-line-height)] [font-style:var(--headings-mobile-h6-bold-font-style)]">
                          {t("contactus.instagram_label")}
                        </h3>

                        <div className="flex items-center gap-3 w-full">
                          <p className="flex-1 font-headings-mobile-h6-regular font-[number:var(--headings-mobile-h6-regular-font-weight)] text-neutral-500 text-[length:var(--headings-mobile-h6-regular-font-size)] tracking-[var(--headings-mobile-h6-regular-letter-spacing)] leading-[var(--headings-mobile-h6-regular-line-height)] [font-style:var(--headings-mobile-h6-regular-font-style)]">
                            <a
                              href="https://www.instagram.com/up.experiences"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {t("contactus.instagram_handle")}
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center gap-1 w-full mt-8">
                <p className="w-full font-headings-mobile-h6-regular font-[number:var(--headings-mobile-h6-regular-font-weight)] text-black text-[length:var(--headings-mobile-h6-regular-font-size)] text-center tracking-[var(--headings-mobile-h6-regular-letter-spacing)] leading-[var(--headings-mobile-h6-regular-line-height)] [font-style:var(--headings-mobile-h6-regular-font-style)]">
                  {t("contactus.live_your_up_moment")}
                </p>

                <p className="w-full font-headings-mobile-h6-bold font-[number:var(--headings-mobile-h6-bold-font-weight)] text-black text-[length:var(--headings-mobile-h6-bold-font-size)] text-center tracking-[var(--headings-mobile-h6-bold-letter-spacing)] leading-[var(--headings-mobile-h6-bold-line-height)] [font-style:var(--headings-mobile-h6-bold-font-style)]">
                  {t("contactus.locations")}
                </p>
              </div>

              <div className="flex flex-col items-center gap-[26px] w-full mt-8">
                <Button
                  onClick={() => setIsContactModalOpen(true)}
                  className="h-12 px-8 py-3 bg-[#7c0d48] rounded-md hover:bg-[#5a0a35] transition-colors"
                >
                  <span className="[font-family:'Orkney-Bold',Helvetica] font-bold text-white text-lg text-center tracking-[0] leading-[normal]">
                    {t("contactus.contact_button")}
                  </span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
        <div>
          <img
            className="w-full h-auto lg:h-[600px] max-h-[400px] lg:max-h-none object-contain"
            alt="Group"
            src={Images.CONTACTUS}
          />
        </div>
      </div>

      <ContactModal
        open={isContactModalOpen}
        onOpenChange={setIsContactModalOpen}
      />
    </>
  );
}

export default ContactUs;
