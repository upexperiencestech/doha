import { useTranslation } from "react-i18next";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../../../../components/ui/accordion";

export default function Faqs() {
  const { t } = useTranslation();

  const faqItems = [
    {
      question: t("faqestion.visa_doha_question"),
      answer: t("faqestion.visa_doha_answer"),
    },
    {
      question: t("faqestion.visa_australia_question"),
      answer: t("faqestion.visa_australia_answer"),
    },
    {
      question: t("faqestion.schools_question"),
      answer: t("faqestion.schools_answer"),
    },
    {
      question: t("faqestion.connection_time_question"),
      answer: t("faqestion.connection_time_answer"),
    },
    {
      question: t("faqestion.portuguese_guides_question"),
      answer: t("faqestion.portuguese_guides_answer"),
    },
    {
      question: t("faqestion.safety_question"),
      answer: t("faqestion.safety_answer"),
    },
    {
      question: t("faqestion.personalized_itineraries_question"),
      answer: t("faqestion.personalized_itineraries_answer"),
    },
  ];

  return (
    <div
      id="faqs"
      className="flex flex-col items-center gap-8 md:gap-[52px] pt-10 md:pt-[60px] pb-10 md:pb-20 px-4 md:px-12 lg:px-[60px] w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1800ms] scroll-mt-20"
    >
      <div className="flex flex-col w-full md:w-[650px] items-center gap-1">
        <div className="flex items-center gap-3 w-full">
          <h2 className="flex-1 font-headings-desktop-h1-bold font-[number:var(--headings-desktop-h1-bold-font-weight)] text-black text-[length:var(--headings-desktop-h1-bold-font-size)] text-center tracking-[var(--headings-desktop-h1-bold-letter-spacing)] leading-[var(--headings-desktop-h1-bold-line-height)] [font-style:var(--headings-desktop-h1-bold-font-style)]">
            {t("faqestion.heading")}
          </h2>
        </div>
      </div>

      <Accordion type="single" collapsible className="flex flex-col items-start w-full">
        {faqItems.map((item, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="w-full border-b border-neutral-200"
          >
            <AccordionTrigger className="flex items-center gap-5 px-0 py-4 w-full hover:no-underline">
              <span className="flex-1 font-headings-mobile-h5-semibold font-[number:var(--headings-mobile-h5-semibold-font-weight)] text-neutral-900 text-[length:var(--headings-mobile-h5-semibold-font-size)] tracking-[var(--headings-mobile-h5-semibold-letter-spacing)] leading-[var(--headings-mobile-h5-semibold-line-height)] [font-style:var(--headings-mobile-h5-semibold-font-style)] text-left">
                {item.question}
              </span>
            </AccordionTrigger>
            <AccordionContent>
              <div className="">
                <p className="font-headings-mobile-h6-regular font-[number:var(--headings-mobile-h6-regular-font-weight)] text-neutral-600 text-[length:var(--headings-mobile-h6-regular-font-size)] tracking-[var(--headings-mobile-h6-regular-letter-spacing)] leading-[var(--headings-mobile-h6-regular-line-height)] [font-style:var(--headings-mobile-h6-regular-font-style)]">
                  {item.answer}
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
