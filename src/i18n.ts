import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import ro from "./locales/ro.json";
import en from "./locales/en.json";
import ru from "./locales/ru.json";

export const languages = ["ro", "en", "ru"] as const;

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      ro: { translation: ro },
      en: { translation: en },
      ru: { translation: ru }
    },
    supportedLngs: languages,
    fallbackLng: "ro",
    interpolation: {
      escapeValue: false
    }
  } as const);

export default i18n;
