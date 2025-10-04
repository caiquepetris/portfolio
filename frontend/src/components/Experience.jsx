import { useState } from "react";

function Experience() {
  const experiencias = [
    {
      empresa: "T-Systems",
      titulo: "Estágio de Suporte de TI Industrial @ T-Systems",
      periodo: "Abril de 2025 - Atualmente",
      bullets: [
        "Atuo diretamente no cliente <strong>Mercedes-Benz</strong>, oferecendo suporte de TI para ambientes industriais.",
        "Auxílio na resolução de incidentes, garantindo disponibilidade e continuidade dos sistemas críticos.",
        "Colaboração com equipes multifuncionais para melhoria contínua dos processos de suporte."
      ],
    } ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      id="experiencias"
      className="py-20 bg-[#07090e] text-white"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-14 text-center">
        Minha experiência
      </h2>

      <div className="flex flex-col md:flex-row gap-12 max-w-5xl mx-auto">
        {/* Sidebar empresas */}
        <div className="md:w-1/4 flex flex-col space-y-3 text-base">
          {experiencias.map((exp, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`text-left px-4 py-2 rounded-md transition-colors ${
                activeIndex === i
                  ? "text-yellow-500 border-l-2 border-yellow-500 bg-[#111]"
                  : "text-gray-400 hover:text-white hover:bg-[#111]"
              }`}
            >
              {exp.empresa}
            </button>
          ))}
        </div>

        {/* Detalhes */}
        <div className="md:w-3/4 text-base">
          <h3
            className="text-lg font-semibold mb-2"
            dangerouslySetInnerHTML={{ __html: experiencias[activeIndex].titulo }}
          />
          <p className="text-sm text-gray-400 mb-6">
            {experiencias[activeIndex].periodo}
          </p>
          <ul className="list-disc list-inside space-y-3 text-gray-300 leading-relaxed">
            {experiencias[activeIndex].bullets.map((b, j) => (
              <li key={j} dangerouslySetInnerHTML={{ __html: b }} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Experience;
