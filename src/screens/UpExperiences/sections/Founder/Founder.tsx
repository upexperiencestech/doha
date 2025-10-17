import { Images } from "../../../../lib/Constant";
import { useTranslation } from "react-i18next";

const fontstyle = "font-medium text-[20px]";

export default function Founder() {
  const { t } = useTranslation();

  const founderFacts = [
    {
      text: t("founder.practices_sports"),
      className: `${fontstyle} top-[13%] left-[27%] max-w-[21%]`,
    },
    {
      text: t("founder.aquarius"),
      className: `${fontstyle} text-right top-[28%] left-[9%] max-w-[21%]`,
    },
    {
      text: t("founder.lived_places"),
      className: `${fontstyle} text-right top-[42%] left-[2%] max-w-[21%]`,
    },
    {
      text: t("founder.mother"),
      className: `${fontstyle} text-right bottom-[30%] left-[0%] max-w-[27%]`,
    },
    {
      text: t("founder.languages"),
      className: `${fontstyle} text-right bottom-[17%] left-[15%] max-w-[30%]`,
    },
    {
      text: t("founder.career_start"),
      className: `${fontstyle} bottom-[16%] left-[55%] max-w-[40%]`,
    },
    {
      text: t("founder.founded_up"),
      className: `${fontstyle} right-[5%] bottom-[33%] max-w-[20%] pl-2`,
    },
    {
      text: t("founder.qatar_cup"),
      className: `${fontstyle} top-[31%] right-[5%] max-w-[20%] pl-1`,
    },
    {
      text: t("founder.education"),
      className: `${fontstyle} top-[16%] right-[4%] max-w-[36%]`,
    },
    {
      text: t("founder.about_heading"),
      className:
        "right-[34%] bottom-[31%] max-w-[200px] font-[Orkney-Bold] text-[36px] font-bold text-center",
    },
  ];

  return (
    <div className="w-full flex justify-center">
      <div
        id="founder"
        className="relative w-full max-w-none bg-[#7C0D48] rounded-[16px] h-auto lg:h-[729px] mx-4 sm:mx-6 lg:mx-16 overflow-hidden"
      >
        <div className="hidden lg:block relative w-full h-[729px]">
          <img
            src={Images.FounderLTOP}
            alt="Founder Left Top"
            className="absolute left-0 top-1 w-14 lg:w-28 object-contain"
          />
          <img
            src={Images.FounderRTOP}
            alt="Founder Right Top"
            className="absolute right-0 top-0 w-14 lg:w-28 object-contain"
          />
          <img
            src={Images.FounderRBOTTOM}
            alt="Founder Right Bottom"
            className="absolute right-0 bottom-0 w-14 lg:w-28 object-contain"
          />
          <img
            src={Images.FounderLBOTTOM}
            alt="Founder Left Bottom"
            className="absolute left-0 bottom-0 w-14 lg:w-28 object-contain"
          />

          <img
            src={Images.FounderCENTRE}
            alt="Founder Centre"
            className="absolute top-[20%] h-[56%] object-contain left-1/2 -translate-x-1/2"
          />

          {founderFacts.map((fact, index) => (
            <p
              key={index}
              className={`absolute text-white leading-snug ${fact.className} font-[Orkney-Regular]`}
            >
              {fact.text}
            </p>
          ))}
        </div>

        <div className="block lg:hidden">
          <div className="relative pt-2 px-2">
            <img
              src={Images.FounderLTOP}
              alt="Founder Left Top"
              className="absolute left-0 top-1 w-14 lg:w-28 object-contain"
            />
            <img
              src={Images.FounderRTOP}
              alt="Founder Right Top"
              className="absolute right-0 top-0 w-14 lg:w-28 object-contain"
            />
            <div className="flex justify-center">
              <img
                src={Images.FounderCENTRE}
                alt="Founder Centre"
                className="sm:w-[280px] md:w-[360px] h-auto object-contain"
              />
            </div>
          </div>

          <h3 className="mt-6 text-white font-[Orkney-Bold] text-[28px] sm:text-[32px] font-bold text-center">
            {t("founder.about_heading")}
          </h3>

          <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-4 pt-2 px-2">
            <ul className="list-decimal pl-6">
              {founderFacts
                .filter((f) => f.text !== t("founder.about_heading"))
                .map((fact, idx) => (
                  <li
                    key={idx}
                    className="text-white text-left font-[Orkney-Regular] py-1 text-[16px] sm:text-[16px] md:text-[18px]"
                  >
                    <p className="font-medium">{fact.text}</p>
                  </li>
                ))}
            </ul>
          </div>

          <div className="mt-6 relative h-6">
            <img
              src={Images.FounderLBOTTOM}
              alt="Founder Left Bottom"
              className="absolute left-0 bottom-0 w-14 lg:w-28 object-contain"
            />
            <img
              src={Images.FounderRBOTTOM}
              alt="Founder Right Bottom"
              className="absolute right-0 bottom-0 w-14 lg:w-28 object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
