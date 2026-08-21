import React from "react";
import { useLanguage } from "../context/LanguageContext";

const BrazilFlag = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 504" className="w-5 h-3.5 rounded-sm shadow-sm inline-block">
    <rect width="720" height="504" fill="#009c3b" />
    <polygon points="360,40 680,252 360,464 40,252" fill="#ffdf00" />
    <circle cx="360" cy="252" r="110" fill="#002776" />
  </svg>
);

const USAFlag = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 741 390" className="w-5 h-3.5 rounded-sm shadow-sm inline-block">
    <rect width="741" height="390" fill="#b22234" />
    <rect y="30" width="741" height="30" fill="#ffffff" />
    <rect y="90" width="741" height="30" fill="#ffffff" />
    <rect y="150" width="741" height="30" fill="#ffffff" />
    <rect y="210" width="741" height="30" fill="#ffffff" />
    <rect y="270" width="741" height="30" fill="#ffffff" />
    <rect y="330" width="741" height="30" fill="#ffffff" />
    <rect width="296" height="210" fill="#3c3b6e" />
    <circle cx="50" cy="40" r="6" fill="#ffffff" />
    <circle cx="110" cy="40" r="6" fill="#ffffff" />
    <circle cx="170" cy="40" r="6" fill="#ffffff" />
    <circle cx="230" cy="40" r="6" fill="#ffffff" />
    <circle cx="80" cy="105" r="6" fill="#ffffff" />
    <circle cx="140" cy="105" r="6" fill="#ffffff" />
    <circle cx="200" cy="105" r="6" fill="#ffffff" />
    <circle cx="50" cy="170" r="6" fill="#ffffff" />
    <circle cx="110" cy="170" r="6" fill="#ffffff" />
    <circle cx="170" cy="170" r="6" fill="#ffffff" />
    <circle cx="230" cy="170" r="6" fill="#ffffff" />
  </svg>
);

function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="fixed top-6 right-6 z-50 flex items-center bg-black/40 backdrop-blur-md border border-white/10 rounded-full p-1 shadow-xl transition-all duration-300 hover:border-white/20">
      <button
        onClick={() => setLanguage("pt")}
        aria-label="Mudar para Português"
        className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold tracking-wider transition-all duration-350 select-none ${
          language === "pt"
            ? "bg-white text-black shadow-lg scale-105"
            : "text-gray-400 hover:text-white hover:scale-105"
        }`}
      >
        <BrazilFlag />
        <span>PT</span>
      </button>
      <button
        onClick={() => setLanguage("en")}
        aria-label="Switch to English"
        className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold tracking-wider transition-all duration-350 select-none ${
          language === "en"
            ? "bg-white text-black shadow-lg scale-105"
            : "text-gray-400 hover:text-white hover:scale-105"
        }`}
      >
        <USAFlag />
        <span>EN</span>
      </button>
    </div>
  );
}

export default LanguageSwitcher;
