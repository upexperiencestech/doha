import { useTranslation } from "react-i18next";
import { Icons, Images } from "../../../../lib/Constant";
import StarIcon from "../../../../../public/icons/StarIcon";
import { Card, CardContent } from "../../../../components/ui/card";

function Testimonials() {
  const { t } = useTranslation();

  const testimonials = [
    {
      type: "image",
      src: Images.TESTMONIAL1,
    },
    {
      type: "card",
      avatar: Images.TESTCARD1,
      name: t("testimonials.miriam.name"),
      text: t("testimonials.miriam.text"),
    },
    {
      type: "image",
      src: Images.TESTMONIAL2,
    },
    {
      type: "card",
      avatar: Images.TESTCARD2,
      name: t("testimonials.heide.name"),
      text: t("testimonials.heide.text"),
    },
    {
      type: "image",
      src: Images.TESTMONIAL3,
    },
    {
      type: "card",
      avatar: Images.TESTCARD3,
      name: t("testimonials.luiz.name"),
      text: t("testimonials.luiz.text"),
    },
  ];

  return (
    <div
      id="testimonials"
      className="flex flex-col items-center gap-6 md:gap-8 p-4 md:p-12 lg:p-[60px] w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1400ms] scroll-mt-20"
    >
      <img
        className="absolute top-[74px] right-4 lg:left-[1256px] w-[100px] h-[120px] md:w-40 md:h-[185px] hidden lg:block"
        alt="Layer"
        src={Icons.LAYER21}
      />

      <div className="flex flex-col w-full md:w-[650px] items-center gap-1">
        <div className="inline-flex items-center gap-3">
          <h2 className="w-fit font-headings-desktop-h1-bold font-[number:var(--headings-desktop-h1-bold-font-weight)] text-black text-[length:var(--headings-desktop-h1-bold-font-size)] tracking-[var(--headings-desktop-h1-bold-letter-spacing)] leading-[var(--headings-desktop-h1-bold-line-height)] whitespace-nowrap [font-style:var(--headings-desktop-h1-bold-font-style)]">
            {t("testimonials.title")}
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full  items-start gap-4 md:gap-5 justify-center">
        {testimonials.map((item, index) => {
          const cardHeight = "h-[362px] md:h-[392px]";

          if (item.type === "image") {
            return (
              <div
                key={index}
                className={`relative w-full ${cardHeight} rounded-[20px] overflow-hidden`}
              >
                <img
                  className={`w-full ${cardHeight} object-cover rounded-[20px]`}
                  alt="Rectangle"
                  src={item.src}
                />
              </div>
            );
          }

          return (
            <Card
              key={index}
              className={`w-full ${cardHeight} bg-white rounded-[20px] border border-solid border-neutral-100 shadow-[0px_2px_6px_#1018280f] relative`}
            >
              <img
                className="w-9 h-9 absolute top-[18px] right-[18px]"
                alt="Element"
                src={Icons.TESTMONIALLOGO}
              />
              <CardContent className="flex flex-col w-full items-center gap-3 p-6 md:p-4">
                <div className="flex flex-col items-center gap-3 w-full">
                  <img
                    className="w-20 h-20 object-cover"
                    alt="Avatar"
                    src={item.avatar}
                  />
                  <div className="flex flex-col items-center gap-1 w-full">
                    <h3 className="w-full font-headings-desktop-h4-bold font-[number:var(--headings-desktop-h4-bold-font-weight)] text-black text-[length:var(--headings-desktop-h4-bold-font-size)] text-center tracking-[var(--headings-desktop-h4-bold-letter-spacing)] leading-[var(--headings-desktop-h4-bold-line-height)] [font-style:var(--headings-desktop-h4-bold-font-style)]">
                      {item.name}
                    </h3>
                    <div className="inline-flex items-center gap-[2.73px]">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon key={i} />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="w-full font-headings-mobile-h6-regular font-[number:var(--headings-mobile-h6-regular-font-weight)] text-black text-center tracking-[var(--headings-mobile-h6-regular-letter-spacing)] leading-[var(--headings-mobile-h6-regular-line-height)] [font-style:var(--headings-mobile-h6-regular-font-style)]">
                  {item.text}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

export default Testimonials;
