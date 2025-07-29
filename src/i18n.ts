import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Importa los archivos de traducción
import es from "./locales/es/es.json";
import en from "./locales/en/en.json";
import de from "./locales/de/de.json";

i18n
  .use(LanguageDetector) // Detecta automáticamente el idioma del navegador
  .use(initReactI18next) // Permite usar con React
  .init({
    fallbackLng: "es", // Idioma por defecto
    resources: {
      es: { translation: es },
      en: { translation: en },
      de: { translation: de },
    },
    interpolation: {
      escapeValue: false, // React ya hace el escape
    },
    detection: {
      order: ["localStorage", "navigator", "htmlTag"],
      caches: ["localStorage"],
    },
  });

export default i18n;
