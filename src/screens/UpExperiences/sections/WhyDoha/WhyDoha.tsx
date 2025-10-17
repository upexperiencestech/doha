import { useTranslation } from "react-i18next";
import { Icons, Images } from "../../../../lib/Constant";
import { PlayButton } from "../../../../components/ui/PlayButton";

function WhyDoha() {
  const { t } = useTranslation();

  const whyDohaReasons = [
    t("whyDoha.reason1"),
    t("whyDoha.reason2"),
    t("whyDoha.reason3"),
    t("whyDoha.reason4"),
  ];

  return (
    <>
      <div
        id="why-doha"
        className="grid grid-cols-1 lg:grid-cols-2 items-stretch gap-6 md:gap-10 px-4 md:px-12 lg:px-[60px] py-1 md:py-20 w-full bg-[#f2f2f2] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms] scroll-mt-20"
      >
        <div className="flex flex-col w-full items-start gap-6 md:gap-8 py-4 px-1 lg:py-[91.5px]">
          <div className="flex flex-col items-start gap-4 w-full">
            <div className="flex items-start gap-1 w-full">
              <h2 className="flex items-center justify-center w-fit font-headings-desktop-h1-bold font-[number:var(--headings-desktop-h1-bold-font-weight)] text-black text-[28px] md:text-[32px] lg:text-[length:var(--headings-desktop-h1-bold-font-size)] tracking-[var(--headings-desktop-h1-bold-letter-spacing)] leading-tight md:leading-[var(--headings-desktop-h1-bold-line-height)] whitespace-nowrap [font-style:var(--headings-desktop-h1-bold-font-style)]">
                {t("whyDoha.title")}
              </h2>

              <img className="w-9 h-9" alt="Element" src={Icons.ELEMENT1} />
            </div>
          </div>

          <div className="flex flex-col items-start gap-3 w-full">
            {whyDohaReasons.map((reason, index) => (
              <div key={index} className="flex items-start gap-3 w-full">
                <PlayButton />
                <div className="flex items-center justify-center gap-2.5 pt-1.5 pb-0 px-0 flex-1">
                  <p className="flex-1 [font-family:'Orkney-Regular',Helvetica] font-normal text-neutral-600 text-xl tracking-[0] leading-[normal]">
                    {reason}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center">
          <img
            className="w-full h-auto max-h-[539px] max-w-[650px]"
            alt="Group"
            src={Images.WHYDOHABACK}
          />
        </div>
      </div>
    </>
  );
}

export default WhyDoha;
