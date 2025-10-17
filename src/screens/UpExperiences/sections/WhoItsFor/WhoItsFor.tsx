import { useTranslation } from "react-i18next";
import CheckedBox from "../../../../components/ui/CheckedBox";
import { Icons, Images } from "../../../../lib/Constant";

function WhoItsFor() {
  const { t } = useTranslation();

  // Student features with i18n keys
  const studentFeatures = [
    t("whoItsFor.studentFeatures1"),
    t("whoItsFor.studentFeatures2"),
    t("whoItsFor.studentFeatures3"),
    t("whoItsFor.studentFeatures4"),
    t("whoItsFor.studentFeatures5"),
    t("whoItsFor.studentFeatures6"),
  ];

  // Traveler features with i18n keys
  const travelerFeatures = [
    t("whoItsFor.travelerFeatures1"),
    t("whoItsFor.travelerFeatures2"),
    t("whoItsFor.travelerFeatures3"),
    t("whoItsFor.travelerFeatures4"),
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between p-6 md:p-12 lg:p-[60px] w-full bg-[#f2f2f2] gap-6 md:gap-8 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]">
        <h2 className="w-full md:w-[400px] lg:w-[480px] font-display-small-bold font-[number:var(--display-small-bold-font-weight)] text-black text-[28px] md:text-[36px] lg:text-[length:var(--display-small-bold-font-size)] tracking-[var(--display-small-bold-letter-spacing)] leading-tight md:leading-[var(--display-small-bold-line-height)] [font-style:var(--display-small-bold-font-style)]">
          {t("whoItsFor.heroTitle")}
        </h2>

        <p className="w-full md:w-[500px] lg:w-[649px] font-headings-mobile-h5-regular font-[number:var(--headings-mobile-h5-regular-font-weight)] text-neutral-600 text-base md:text-lg lg:text-[length:var(--headings-mobile-h5-regular-font-size)] tracking-[var(--headings-mobile-h5-regular-letter-spacing)] leading-relaxed md:leading-[var(--headings-mobile-h5-regular-line-height)] [font-style:var(--headings-mobile-h5-regular-font-style)]">
          {t("whoItsFor.heroSubtitle")}
        </p>
      </div>

      {/* Who Its For Section */}
      <div
        id="who-its-for"
        className="flex flex-col items-start gap-8 md:gap-[52px] px-4 md:px-12 lg:px-[60px] py-10 md:py-20 w-full relative"
      >
        <img
          className="absolute top-[457px] right-4 lg:left-[1198px] w-[120px] h-[140px] md:w-[219px] md:h-[254px] hidden lg:block"
          alt="Layer"
          src={Icons.LAYER21}
        />

        <img
          className="absolute top-[1042px] left-4 md:left-7 w-[120px] h-[140px] md:w-[219px] md:h-[254px] hidden lg:block"
          alt="Layer"
          src={Icons.LAYER2}
        />

        <div className="flex flex-col items-start gap-6 md:gap-8 w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
          <div className="flex items-center justify-center gap-3 w-full">
            <h2 className="flex-1 font-headings-desktop-h1-bold font-[number:var(--headings-desktop-h1-bold-font-weight)] text-black text-[28px] md:text-[32px] lg:text-[length:var(--headings-desktop-h1-bold-font-size)] text-center tracking-[var(--headings-desktop-h1-bold-letter-spacing)] leading-tight md:leading-[var(--headings-desktop-h1-bold-line-height)] [font-style:var(--headings-desktop-h1-bold-font-style)]">
              {t("whoItsFor.sectionTitle")}
            </h2>
          </div>
        </div>

        {/* Student Features */}
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 items-stretch gap-8 md:gap-[60px] w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
          <div className="flex flex-col items-start justify-center gap-6 md:gap-8 flex-1 order-2 lg:order-1">
            <div className="flex flex-col items-start gap-4 w-full">
              <p className="w-full font-headings-mobile-h4-medium font-[number:var(--headings-mobile-h4-medium-font-weight)] text-[#7c0d48] text-[18px] md:text-[20px] lg:text-[length:var(--headings-mobile-h4-medium-font-size)] tracking-[var(--headings-mobile-h4-medium-letter-spacing)] leading-relaxed md:leading-[var(--headings-mobile-h4-medium-line-height)] [font-style:var(--headings-mobile-h4-medium-font-style)]">
                {t("whoItsFor.studentIntro")}
              </p>
            </div>

            <div className="flex flex-col items-start justify-center gap-8 md:gap-[92px] w-full">
              <div className="flex flex-col w-full items-start gap-3">
                {studentFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3 w-full">
                    <CheckedBox active />
                    <div className="flex items-center justify-center gap-2.5 pt-0 pb-0 px-0 flex-1">
                      <p className="flex-1 [font-family:'Orkney-Regular',Helvetica] font-normal text-neutral-600 text-base md:text-lg lg:text-xl tracking-[0] leading-relaxed md:leading-[normal]">
                        {feature}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <img
            className="w-full h-[300px] md:h-[400px] lg:h-[552px] object-cover rounded-[20px] order-1"
            alt="Rectangle"
            src={Images.STOPOVER}
          />
        </div>

        {/* Traveler Features */}
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 items-stretch gap-8 md:gap-[60px] w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
          <img
            className="w-full h-[300px] md:h-[400px] lg:h-[552px] object-cover rounded-[20px]"
            alt="Rectangle"
            src={Images.STOPOVER2}
          />

          <div className="flex flex-col items-start justify-center gap-6 md:gap-8 flex-1">
            <div className="flex flex-col items-start gap-4 w-full">
              <p className="w-full font-headings-mobile-h4-medium font-[number:var(--headings-mobile-h4-medium-font-weight)] text-[#7c0d48] text-[length:var(--headings-mobile-h4-medium-font-size)] tracking-[var(--headings-mobile-h4-medium-letter-spacing)] leading-[var(--headings-mobile-h4-medium-line-height)] [font-style:var(--headings-mobile-h4-medium-font-style)]">
                {t("whoItsFor.travelerIntro")}
              </p>
            </div>

            <div className="flex flex-col items-start justify-center gap-8 md:gap-[92px] w-full">
              <div className="flex flex-col w-full items-start gap-3">
                {travelerFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3 w-full">
                    <CheckedBox active />
                    <div className="flex items-center justify-center gap-2.5 pt-1.5 pb-0 px-0 flex-1">
                      <p className="flex-1 [font-family:'Orkney-Regular',Helvetica] font-normal text-neutral-600 text-xl tracking-[0] leading-[normal]">
                        {feature}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WhoItsFor;
