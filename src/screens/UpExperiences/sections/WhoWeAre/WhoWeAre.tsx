import React from "react";
import { useTranslation } from "react-i18next";
import { Icons, Images } from "../../../../lib/Constant";

function WhoWeAre() {
  const { t } = useTranslation();

  return (
    <>
      <div
        id="who-we-are"
        className="grid grid-cols-1 lg:grid-cols-2 items-stretch p-4 md:p-12 lg:gap-[60px] lg:p-[60px] w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1000ms] scroll-mt-20"
      >
        <div>
          <img
            className="w-full md:flex-1 h-[250px] md:h-[300px] lg:h-[412px] object-cover rounded-[20px]"
            alt="Rectangle"
            src={Images.STOPOVER3}
          />
        </div>
        <div className="gap-8 md:gap-[60px] w-full py-[79px]">
          <div className="w-full md:w-full lg:w-[556px] items-start gap-6 md:gap-8 flex flex-col">
            <div className="flex flex-col items-start gap-4 w-full">
              <div className="flex items-start gap-1 w-full">
                <h2 className="flex items-center justify-center w-fit font-headings-desktop-h1-bold font-[number:var(--headings-desktop-h1-bold-font-weight)] text-black text-[length:var(--headings-desktop-h1-bold-font-size)] tracking-[var(--headings-desktop-h1-bold-letter-spacing)] leading-[var(--headings-desktop-h1-bold-line-height)] whitespace-nowrap [font-style:var(--headings-desktop-h1-bold-font-style)]">
                  {t("whoWeAre.title")}
                </h2>

                <img className="w-9 h-9" alt="Element" src={Icons.ELEMENT1} />
              </div>
            </div>

            <div className="flex items-start gap-3 flex-1 w-full">
              <div className="flex items-center justify-center gap-2.5 pt-1.5 pb-0 px-0 flex-1">
                <p className="flex-1 [font-family:'Orkney-Regular',Helvetica] font-normal text-transparent text-base md:text-lg lg:text-xl tracking-[0] leading-relaxed md:leading-5">
                  <span className="text-neutral-600">{t("whoWeAre.text1")}</span>
                  <span className="[font-family:'Orkney-Medium',Helvetica] font-medium text-neutral-800">
                    {t("whoWeAre.text2")}
                  </span>
                  <span className="text-neutral-600">{t("whoWeAre.text3")}</span>
                  <span className="[font-family:'Orkney-Medium',Helvetica] font-medium text-neutral-800">
                    {t("whoWeAre.text4")}
                  </span>
                  <span className="text-neutral-600">{t("whoWeAre.text5")}</span>
                  <span className="[font-family:'Orkney-Medium',Helvetica] font-medium text-neutral-800">
                    {t("whoWeAre.text6")}
                  </span>
                  <span className="text-neutral-600">{t("whoWeAre.text7")}</span>
                  <span className="[font-family:'Orkney-Medium',Helvetica] font-medium text-neutral-800">
                    {t("whoWeAre.text8")}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WhoWeAre;
