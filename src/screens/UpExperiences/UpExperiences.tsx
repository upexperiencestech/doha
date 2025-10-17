import { AboutUsSection } from "./sections/AboutUsSection";
import { FAQSection } from "./sections/HeaderImage";
import Navbar from "./sections/Navbar/Navbar";

export const UpExperiences = (): JSX.Element => {
  return (
    <main
      className="bg-white overflow-hidden w-full relative"
      data-model-id="6166:696"
    >
      {/* <div className="absolute top-0 left-0 w-full h-[600px] md:h-[888px] bg-[linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(243,231,237,1)_50%,rgba(218,180,200,1)_100%)]" /> */}
      <Navbar />
      <div className="relative z-10 translate-y-[-1rem] animate-fade-in opacity-0">
        <FAQSection />
      </div>

      <div className="relative z-10 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
        <AboutUsSection />
      </div>
    </main>
  );
};
