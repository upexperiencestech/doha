// src/components/Navbar.tsx
import { X, Menu } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Icons, Images } from "../../../../lib/Constant";
import { useTranslation } from "react-i18next";
import i18n from "../../../../services/i18n";

function Navbar() {
  const { t } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // force re-render when language changes so UI updates
  const [, forceRerender] = useState(0);
  useEffect(() => {
    const onLangChange = () => forceRerender((s) => s + 1);
    i18n.on("languageChanged", onLangChange);
    return () => i18n.off("languageChanged", onLangChange);
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // use translations for menu labels
  const navItems = [
    { label: t("nav.whoItsFor"), sectionId: "who-its-for" },
    { label: t("nav.whyDoha"), sectionId: "why-doha" },
    { label: t("nav.whoWeAre"), sectionId: "who-we-are" },
    { label: t("nav.services"), sectionId: "services" },
    { label: t("nav.testimonials"), sectionId: "testimonials" },
    { label: t("nav.faqs"), sectionId: "faqs" },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // fixed header offset
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  const currentLang = i18n.language || "pt";

  const toggleLanguage = () => {
    const newLang = currentLang === "pt" ? "en" : "pt";
    i18n.changeLanguage(newLang);
    localStorage.setItem("appLang", newLang);
    document.documentElement.lang = newLang;
  };

  const langFlag = (lang: string) =>
    lang === "pt" ? Icons.BRAZILFLAG ?? Icons.US_FLAG : Icons.US_FLAG;

  const langLabel = (lang: string) => (lang === "pt" ? "PT" : "EN");
  const navBaseClasses =
    "relative max-w-auto mx-auto mt-4 md:mt-6 rounded-[12px] h-16 z-50 flex items-center justify-between w-full px-4 md:px-5 py-3 transition-all duration-300 shadow-md";
  const scrolledClasses = "bg-white";
  const notScrolledClasses = "bg-white";
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 md:px-[60px]">
      <nav
        className={`${navBaseClasses} ${
          isScrolled ? scrolledClasses : notScrolledClasses
        }`}
      >
        <img
          className="w-[100px] h-8 md:w-[127.6px] md:h-10 object-cover"
          alt="Experiences logo"
          src={Images.LOGO}
        />

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-4">
          {navItems.map((item, index) => (
            <button
              key={index}
              onClick={() => scrollToSection(item.sectionId)}
              className="inline-flex items-center justify-center gap-2.5 px-2 py-1 font-paragraph-medium-medium text-neutral-600 text-[length:var(--paragraph-medium-medium-font-size)] whitespace-nowrap transition-colors hover:text-neutral-900 cursor-pointer"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Desktop Language Switcher */}
        <div className="hidden lg:flex items-center justify-end gap-4 w-[114px]">
          <button
            onClick={toggleLanguage}
            className="inline-flex items-center justify-center gap-1 px-0.5 py-0 transition-opacity hover:opacity-80"
            title={t("common.switch_language_to", {
              lng: currentLang === "pt" ? "EN" : "PT",
            })}
            aria-label={t("common.switch_language_to", {
              lng: currentLang === "pt" ? "EN" : "PT",
            })}
          >
            <div className="relative w-4 h-3 bg-white rounded-[1.33px] overflow-hidden">
              <img
                className="absolute top-0 left-0 w-4 h-3 object-cover"
                alt="Flag"
                src={langFlag(currentLang === "pt" ? "en" : "pt")}
              />
            </div>
            <span className="[font-family:'Bricolage_Grotesque',Helvetica] font-bold text-black text-lg leading-7 whitespace-nowrap">
              {langLabel(currentLang === "pt" ? "en" : "pt")}
            </span>
            <img
              className="w-3 h-3"
              alt="Language switcher"
              src={Icons.ARRWOCLOCKWISE}
            />
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2 hover:bg-gray-100 rounded-md transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6 text-neutral-600" />
          ) : (
            <Menu className="w-6 h-6 text-neutral-600" />
          )}
        </button>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 mx-4 bg-white rounded-xl shadow-lg lg:hidden overflow-hidden animate-fade-in z-50">
            <div className="flex flex-col p-4">
              {navItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(item.sectionId)}
                  className="text-left px-4 py-3 font-paragraph-medium-medium text-neutral-600 text-[length:var(--paragraph-medium-medium-font-size)] transition-colors hover:bg-gray-50 hover:text-neutral-900 rounded-md"
                >
                  {item.label}
                </button>
              ))}

              <div className="border-t border-gray-200 mt-2 pt-2">
                <button
                  onClick={() => {
                    toggleLanguage();
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 transition-colors hover:bg-gray-50 rounded-md"
                >
                  <div className="relative w-4 h-3 bg-white rounded-[1.33px] overflow-hidden">
                    <img
                      className="absolute top-0 left-0 w-4 h-3 object-cover"
                      alt="Flag"
                      src={langFlag(currentLang === "pt" ? "en" : "pt")}
                    />
                  </div>
                  <span className="[font-family:'Bricolage_Grotesque',Helvetica] font-bold text-black text-base">
                    {langLabel(currentLang === "pt" ? "en" : "pt")}
                  </span>
                  <img
                    className="w-3 h-3"
                    alt="Language switcher"
                    src={Icons.ARRWOCLOCKWISE}
                  />
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
