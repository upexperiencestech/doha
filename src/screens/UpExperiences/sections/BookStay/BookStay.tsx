import React from "react";
import { useTranslation } from "react-i18next";
import { Images } from "../../../../lib/Constant";
import { Button } from "../../../../components/ui/button";

function BookStay() {
  const { t } = useTranslation();

  return (
    <>
      <div className="flex flex-col items-center gap-4 md:gap-10 px-4 md:px-[60px] py-6 md:py-[60px] w-full translate-y-0 md:translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:2200ms]">
        <div className="flex flex-col lg:flex-row w-full items-center justify-between md:px-[60px] py-4 md:py-[52px] rounded-[20px] bg-[linear-gradient(315deg,rgba(124,13,72,1)_0%,rgba(75,8,43,1)_49%,rgba(75,8,43,1)_67%,rgba(124,13,72,1)_100%)] relative gap-4 md:gap-6 lg:gap-0">
          <div className="flex flex-col w-full lg:w-[722px] items-center lg:items-start text-center lg:text-left gap-4 md:gap-8">
            <div className="flex flex-col w-full items-center lg:items-start gap-3">
              <h2 className="w-full font-headings-desktop-h1-bold font-[number:var(--headings-desktop-h1-bold-font-weight)] text-white text-[20px] md:text-[32px] lg:text-[length:var(--headings-desktop-h1-bold-font-size)] tracking-[var(--headings-desktop-h1-bold-letter-spacing)] leading-tight md:leading-[var(--headings-desktop-h1-bold-line-height)] [font-style:var(--headings-desktop-h1-bold-font-style)]">
                {t("bookstay.heading")}
              </h2>

              <p className="w-full [font-family:'Orkney-Regular',Helvetica] font-normal text-white text-sm md:text-lg lg:text-xl tracking-[0] leading-relaxed md:leading-[normal]">
                {t("bookstay.description")}
              </p>
            </div>

            <Button className="h-10 md:h-12 px-6 md:px-8 py-2 md:py-3 bg-white rounded-md hover:bg-neutral-100 transition-colors w-[320px] md:w-auto max-w-[420px] sm:w-auto">
              <span className="[font-family:'Orkney-Bold',Helvetica] font-bold text-black text-base md:text-lg text-center tracking-[0] leading-[normal]">
                {t("bookstay.button")}
              </span>
            </Button>
          </div>

          <img
            className="w-60 lg:w-[369px] h-auto lg:h-60 max-h-[160px] lg:max-h-none object-contain rounded-[16px] border-2 border-white self-center"
            alt="Rectangle"
            src={Images.BOOKSTAY}
          />
        </div>
      </div>
    </>
  );
}

export default BookStay;
