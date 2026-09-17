import { createContext, useContext, useEffect, useState } from "react";
import { english } from "./data/english";

const LanguageContext = createContext(null);
const storageKey = "azzam-portfolio-language";

function initialLanguage() {
  const query = new URLSearchParams(window.location.search).get("lang");
  if (query === "en" || query === "fr") return query;
  try {
    return localStorage.getItem(storageKey) === "en" ? "en" : "fr";
  } catch {
    return "fr";
  }
}

export function LanguageProvider({ children }) {
  const [language, updateLanguage] = useState(initialLanguage);
  const t = (text) => (language === "en" ? (english[text] ?? text) : text);
  // Recursively translate presentation data; identifiers and URLs have no
  // dictionary entries and remain stable across languages.
  const translate = (value) => {
    if (typeof value === "string") return t(value);
    if (Array.isArray(value)) return value.map(translate);
    if (value && typeof value === "object")
      return Object.fromEntries(
        Object.entries(value).map(([key, item]) => [key, translate(item)]),
      );
    return value;
  };
  const setLanguage = (next) => {
    updateLanguage(next);
    try {
      localStorage.setItem(storageKey, next);
    } catch {
      /* Storage is optional. */
    }
    const url = new URL(window.location.href);
    url.searchParams.set("lang", next);
    window.history.replaceState(null, "", url);
  };
  useEffect(() => {
    document.documentElement.lang = language;
    document.title =
      language === "fr"
        ? "Azzam El Kettani — Développeur full-stack & cofondateur de RZO Sports"
        : "Azzam El Kettani — Full-stack developer & RZO Sports co-founder";
    const description =
      language === "fr"
        ? "Étudiant en génie informatique à uOttawa et développeur full-stack. RZO Sports, Overy et Sports Facility Discovery : produit, backend en production et automatisation."
        : "Computer Engineering student at uOttawa and full-stack developer. RZO Sports, Overy and Sports Facility Discovery: product, backend in production and automation.";
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", description);
  }, [language]);
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, translate }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
