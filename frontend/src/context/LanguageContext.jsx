import React, { createContext, useContext, useState, useEffect } from "react";
import { translations } from "./translations";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  // Try to load saved language, otherwise detect browser language, defaulting to 'pt'
  const getInitialLanguage = () => {
    const saved = localStorage.getItem("preferredLanguage");
    if (saved && (saved === "pt" || saved === "en")) {
      return saved;
    }
    const browserLang = navigator.language || navigator.userLanguage;
    if (browserLang && browserLang.startsWith("en")) {
      return "en";
    }
    return "pt";
  };

  const [language, setLanguageState] = useState(getInitialLanguage);

  const setLanguage = (lang) => {
    if (lang === "pt" || lang === "en") {
      setLanguageState(lang);
      localStorage.setItem("preferredLanguage", lang);
    }
  };

  // t function resolving dotted paths (e.g., 'forms.errors.name_empty')
  const t = (key) => {
    const keys = key.split(".");
    let value = translations[language];

    for (const k of keys) {
      if (value && value[k] !== undefined) {
        value = value[k];
      } else {
        // Fallback to Portuguese translations if missing in English
        let fallbackValue = translations["pt"];
        for (const fk of keys) {
          if (fallbackValue && fallbackValue[fk] !== undefined) {
            fallbackValue = fallbackValue[fk];
          } else {
            fallbackValue = key;
            break;
          }
        }
        return fallbackValue;
      }
    }
    return value;
  };

  // Sync HTML elements and SEO metadata
  useEffect(() => {
    const htmlElement = document.documentElement;
    htmlElement.lang = language === "pt" ? "pt-BR" : "en";

    // Dynamic document title
    document.title = t("meta.title");

    // Dynamic meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", t("meta.description"));
    }

    // Dynamic og:title and og:description
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute("content", t("meta.title"));
    }
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
      ogDesc.setAttribute("content", t("meta.description"));
    }
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
