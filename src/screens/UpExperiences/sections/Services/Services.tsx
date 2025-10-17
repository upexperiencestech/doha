import React from "react";
import { useTranslation } from "react-i18next";
import { Icons } from "../../../../lib/Constant";
import { Card, CardContent } from "../../../../components/ui/card";

function Services() {
  const { t } = useTranslation();

  const services = [
    {
      icon: Icons.TRANSNSFERINOUT,
      title: t("services.transfer"),
    },
    {
      icon: Icons.USER,
      title: t("services.guides"),
    },
    {
      icon: Icons.AIRTICKET,
      title: t("services.airTickets"),
    },
    {
      icon: Icons.CULRURAL,
      title: t("services.culturalExperiences"),
    },
    {
      icon: Icons.ACCOMODATION,
      title: t("services.accommodation"),
    },
    {
      icon: Icons.HAPPY,
      title: t("services.travelInsurance"),
    },
  ];

  return (
    <>
      <div
        id="services"
        className="flex flex-col items-center gap-8 md:gap-[52px] px-4 md:px-12 lg:px-[60px] py-4 md:py-5 lg:py-20 w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1200ms] scroll-mt-20"
      >
        <div className="flex flex-col w-full md:w-[650px] items-center gap-1">
          <div className="inline-flex items-center gap-3">
            <h2 className="w-fit font-headings-desktop-h1-bold font-[number:var(--headings-desktop-h1-bold-font-weight)] text-black text-[length:var(--headings-desktop-h1-bold-font-size)] tracking-[var(--headings-desktop-h1-bold-letter-spacing)] leading-[var(--headings-desktop-h1-bold-line-height)] whitespace-nowrap [font-style:var(--headings-desktop-h1-bold-font-style)]">
              {t("services.title")}
            </h2>
          </div>
        </div>

        <img
          className="absolute top-[59px] right-4 lg:left-[1309px] w-[80px] h-[90px] md:w-[101px] md:h-[117px] hidden lg:block"
          alt="Layer"
          src={Icons.LAYER21}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full items-start gap-4 md:gap-[19px]">
          {services.map((service, index) => (
            <Card
              key={index}
              className="w-full bg-[#fbfbfb] rounded-xl border-0 lg:h-52"
            >
              <CardContent className="flex flex-col items-center gap-4 md:gap-6 px-5 py-9">
                <div className="inline-flex items-center gap-2.5 p-3 bg-[#7c0d48] rounded-lg">
                  <div className="w-8 h-8 flex items-center justify-center">
                    <img
                      className="max-w-full max-h-full object-contain"
                      alt={service.title}
                      src={service.icon}
                    />
                  </div>
                </div>

                <div className="flex flex-col items-start gap-2 w-full">
                  <h3 className="w-full [font-family:'Orkney-Bold',Helvetica] font-bold text-black text-[18px] md:text-[20px] lg:text-[22px] text-center tracking-[0] leading-[normal]">
                    {service.title}
                  </h3>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}

export default Services;
