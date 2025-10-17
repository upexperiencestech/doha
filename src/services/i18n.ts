import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "../../public/locales/en.json";
import pt from "../../public/locales/pt.json";

const DEFAULT_LANG = "pt";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      pt: { translation: pt },
    },
    lng: localStorage.getItem("appLang") || DEFAULT_LANG,
    fallbackLng: "en",
    interpolation: { escapeValue: false },
  });

export default i18n;
