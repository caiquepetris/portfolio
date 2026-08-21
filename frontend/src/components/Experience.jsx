import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

function Experience() {
  const { t } = useLanguage();
  const experiencias = t("experience.items");

  const [activeIndex, setActiveIndex] = useState(0);

  // In case the list changes length or language updates, ensure we don't crash
  const experienciaAtual = experiencias[activeIndex] || experiencias[0] || {};

  return (
    <section id="experiencias" className="py-20 bg-[#07090e] text-white">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-left pb-20">
          {t("experience.title")}
        </h2>

        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/4 flex flex-col space-y-4 text-lg">
            {experiencias.map((exp, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className="text-left px-4 py-2 rounded-md transition-colors"
                style={
                  activeIndex === i
                    ? {
                        color: exp.cor,
                        borderLeft: `2px solid ${exp.cor}`,
                        backgroundColor: "#111",
                      }
                    : {}
                }
              >
                {exp.empresa}
              </button>
            ))}
          </div>

          <div className="md:w-3/4 text-lg">
            <h3
              className="text-2xl font-semibold mb-3 leading-snug"
              style={{ color: experienciaAtual.cor }}
              dangerouslySetInnerHTML={{
                __html: experienciaAtual.titulo,
              }}
            />

            <p className="text-base text-gray-400 mb-6">
              {experienciaAtual.periodo}
            </p>

            <ul className="list-disc list-inside space-y-3 text-gray-300 leading-relaxed text-lg">
              {experienciaAtual.bullets.map((b, j) => (
                <li key={j} dangerouslySetInnerHTML={{ __html: b }} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;