  import i18n from "i18next";
  import { initReactI18next } from "react-i18next";
  import i18nextHttpBackend from "i18next-http-backend";
  import translationAZ from "../src/locales/az/translation.json";
  import translationEN from "../src/locales/en/translation.json";
  import i18nextBrowserLanguageDetector from "i18next-browser-languagedetector";

  const resources = {
    en: {
      translation: translationEN,
    },
    az: {
      translation: translationAZ,
    },
  };
  i18n
    .use(i18nextHttpBackend)
    .use(i18nextBrowserLanguageDetector)
    .use(initReactI18next)
    .init({
      resources,
       lng: localStorage.getItem('language') || 'en',
      fallbackLng: "en",
      debug: true,
      interpolation: {
        escapeValue: false,
      },
      backend: {
        loadPath: "/locales/{{lng}}/translation.json",
      },
    });

  export default i18n;
