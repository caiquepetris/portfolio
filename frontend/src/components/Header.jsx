import { FaEnvelope } from "react-icons/fa";
import { ReactTyped } from "react-typed";
import { useState, useEffect } from "react";
import BR from "country-flag-icons/react/3x2/BR";
import US from "country-flag-icons/react/3x2/US";
import '../assets/css/header.css';

const translations = {
  pt: {
    greeting: "Oi! Eu sou o",
    role: "Desenvolvedor Fullstack",
    connector: "em formação, apaixonado por",
    typed: ["tecnologia. ", "soluções digitais. ", "inovação. ", "impacto real. "],
    cta: "Me envie um e-mail!",
  },
  en: {
    greeting: "Hi! I'm",
    role: "Fullstack Developer",
    connector: "in training, passionate about",
    typed: ["technology. ", "digital solutions. ", "innovation. ", "real impact. "],
    cta: "Send me an email!",
  },
};

function Header() {
  const [lang, setLang] = useState("pt");
  const [darkMode, setDarkMode] = useState(true);
  const t = translations[lang];

  useEffect(() => {
    document.documentElement.classList.toggle("light", !darkMode);
  }, [darkMode]);

  return (
    <header className="h-screen relative text-white flex items-center justify-center">

      {/* Controles no canto superior direito */}
      <div className="absolute top-5 right-6 flex items-center gap-2 z-20">

        <button
          onClick={() => setLang("pt")}
          title="Português"
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-sm transition ${
            lang === "pt"
              ? "border-white/30 bg-white/10 text-white"
              : "border-white/10 bg-transparent text-white/50 hover:bg-white/5 hover:text-white/80"
          }`}
        >
          <BR className="w-5 h-auto rounded-sm" />
          PT
        </button>

        <button
          onClick={() => setLang("en")}
          title="English"
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-sm transition ${
            lang === "en"
              ? "border-white/30 bg-white/10 text-white"
              : "border-white/10 bg-transparent text-white/50 hover:bg-white/5 hover:text-white/80"
          }`}
        >
          <US className="w-5 h-auto rounded-sm" />
          EN
        </button>

        <div className="w-px h-5 bg-white/15 mx-1" />

        <button
          onClick={() => setDarkMode(!darkMode)}
          title={darkMode ? "Modo claro" : "Modo escuro"}
          className="w-12 h-6 rounded-full border border-white/15 bg-white/10 relative transition hover:bg-white/15"
        >
          <span
            className={`absolute top-0.5 w-5 h-5 rounded-full flex items-center justify-center text-xs transition-all duration-300 ${
              darkMode ? "bg-white/20" : "bg-white"
            }`}
            style={{ left: darkMode ? "2px" : "22px" }}
          >
            {darkMode ? "🌙" : "☀️"}
          </span>
        </button>

      </div>

      {/* Conteúdo central */}
      <div className="text-center px-6 relative z-10">
        <p className="text-2xl text-gray-400 mb-2">{t.greeting}</p>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
          Caique Petris
        </h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
          <span className="text-white font-semibold">{t.role}</span>{" "}
          {t.connector}{" "}
          <span className="text-gray-300 font-medium">
            <ReactTyped
              key={lang}
              strings={t.typed}
              typeSpeed={60}
              backSpeed={40}
              backDelay={2000}
              loop
            />
          </span>
        </p>
        <div className="mt-10">
          
            href="#forms"
            className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition"
          <a>
            <FaEnvelope /> {t.cta}
          </a>
        </div>
      </div>

    </header>
  );
}

export default Header;