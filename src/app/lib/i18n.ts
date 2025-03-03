import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "../../../locales/en/common.json";
import es from "../../../locales/es/common.json";

i18n
  .use(initReactI18next) // 🔥 Conecta i18next con React
  .use(LanguageDetector) // 🔥 Detecta el idioma del navegador
  .init({
    resources: {
      en: {
        translation: en,
      },
      es: {
        translation: es,
      },
    },
    lng: "en", // Idioma por defecto
    fallbackLng: "en", // Idioma de respaldo si no se encuentra el idioma del usuario
    interpolation: {
      escapeValue: false, // Recomendado para React
    },
  });

export default i18n;
