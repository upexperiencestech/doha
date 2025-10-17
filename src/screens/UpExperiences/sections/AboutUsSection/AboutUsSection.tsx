import Founder from "../Founder/Founder";
import WhoItsFor from "../WhoItsFor/WhoItsFor";
import WhyDoha from "../WhyDoha/WhyDoha";
import WhoWeAre from "../WhoWeAre/WhoWeAre";
import Services from "../Services/Services";
import Testimonials from "../Testimonials/Testimonials";
import Faqs from "../Faqs/Faqs";
import ContactUs from "../ContactUs/ContactUs";
import BookStay from "../BookStay/BookStay";
import Footer from "../Footer/Footer";

export const AboutUsSection = (): JSX.Element => {

  return (
    <section className="flex flex-col w-full items-start relative">
      <WhoItsFor />

      <WhyDoha />

      <WhoWeAre />
      <Services />

      <Testimonials />

      <div className="flex flex-col items-center w-full">
        <Founder />
      </div>

      <Faqs />
      <ContactUs />

      <BookStay />
      <Footer />
    </section>
  );
};
