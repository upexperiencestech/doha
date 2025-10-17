import { Button } from "../../../../components/ui/button";
// import { Icon, Menu, X } from "lucide-react";
import { Icons, Images } from "../../../../lib/Constant";
import { useTranslation } from "react-i18next";

export const FAQSection = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <section className="relative w-full min-h-[600px] md:min-h-[1098px] flex flex-col">
      <img
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] md:h-[888px] object-cover"
        alt={t("faq.bgAlt")}
        src={Icons.RECTANGLE}
      />

      <img
        className="absolute top-[41px] left-[20px] md:left-[-28px] w-[80px] h-[120px] md:w-[154px] md:h-[229px] object-contain hidden md:block"
        alt={t("faq.groupAlt")}
        src={Images.GROUP5}
      />

      <img
        className="absolute top-[300px] md:top-[400px] left-1/2 -translate-x-1/2 w-full h-[400px] md:h-[698px] object-cover object-top"
        alt={t("faq.groupSelfieAlt")}
        src={Images.HOMEBG}
      />

      <div className="relative z-0 flex flex-col items-center gap-5 w-full max-w-[863px] mx-auto mt-[99px] md:mt-[126px] px-4 md:px-3 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
        <div className="flex flex-col items-end gap-2 w-full">
          <h1 className="w-full [font-family:'Orkney-Bold',Helvetica] font-bold text-[28px] md:text-[42px] lg:text-[52px] text-center tracking-[0] leading-tight md:leading-[normal] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
            <span className="text-black">{t("faq.heading.part1")}</span>
            <span className="text-[#7c0d48]">{t("faq.heading.part2")}</span>
            <span className="text-black"> {t("faq.heading.part3")}</span>
          </h1>

          <p className="w-full [font-family:'Orkney-Medium',Helvetica] text-base md:text-lg lg:text-xl text-center tracking-[0] leading-relaxed md:leading-5 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
            <span className="font-medium text-neutral-800">{t("faq.description.part1")}</span>
            <span className="[font-family:'Orkney-Regular',Helvetica] text-neutral-600 leading-[0.1px]">
              {" "}
              {t("faq.description.part2")}
            </span>
            <span className="font-medium text-neutral-800">{t("faq.description.part3")}</span>
          </p>
        </div>

        <Button className="h-10 md:h-12 px-6 md:px-8 py-2 md:py-3 bg-[#7c0d48] hover:bg-[#5c0a36] rounded-md transition-colors translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms]">
          <span className="[font-family:'Orkney-Bold',Helvetica] font-bold text-white text-base md:text-lg text-center tracking-[0] leading-[normal]">
            {t("faq.button")}
          </span>
        </Button>
      </div>

      <img
        className="absolute top-[120px] md:top-[175px] right-[20px] md:right-[-40px] w-20 h-24 md:w-36 md:h-[170px] object-contain hidden md:block z-0"
        alt={t("faq.decorativeAlt")}
        src={Images.GROUP3}
      />
    </section>
  );
};
