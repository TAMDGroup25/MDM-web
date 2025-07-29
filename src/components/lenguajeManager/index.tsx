import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const LanguageManager = () => {
  const { i18n, t } = useTranslation();

  useEffect(() => {
    // Cambiar el idioma del HTML
    document.documentElement.lang = i18n.language;

    // Cambiar el título
    document.title = t("seo.title");

    // Función para actualizar una etiqueta <meta>
    const updateMeta = (nameOrProperty: string, content: string, isProperty = false) => {
      const selector = isProperty ? `meta[property='${nameOrProperty}']` : `meta[name='${nameOrProperty}']`;
      let meta = document.querySelector(selector);
      if (!meta) {
        meta = document.createElement("meta");
        if (isProperty) meta.setAttribute("property", nameOrProperty);
        else meta.setAttribute("name", nameOrProperty);
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", content);
    };

    // Actualizar metadatos
    updateMeta("description", t("seo.description"));
    updateMeta("og:title", t("seo.title"), true);
    updateMeta("og:description", t("seo.description"), true);
  }, [i18n.language, t]);

  return null;
};

export default LanguageManager;
