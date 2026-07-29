import { useState } from "react";

function Experience() {
  const experiencias = [
    {
      empresa: "T-Systems",
      cor: "#e20074",
      titulo:
        'Estágio de Suporte de TI Industrial <span class="font-semibold">@ T-Systems</span>',
      periodo: "Abril de 2025 - Atualmente",
      bullets: [
        "Atuo diretamente no cliente <strong>Mercedes-Benz</strong>, oferecendo suporte de TI para ambientes industriais.",
      ],
    },
    {
      empresa: "Takaya Móveis",
      cor: "#0be50b",
      titulo:
        'Desenvolvedor Web FullStack <span class="font-semibold">@ Takaya Móveis</span>',
      periodo: "Janeiro de 2025 - Abril de 2025",
      bullets: [
        "Atuei na criação de um site institucional do 0 para uma empresa de móveis planejados, utilizando HTML, CSS, JavaScript, MySQL e PHP.",
      ],
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const experienciaAtual = experiencias[activeIndex];

  return (
    <section id="experiencias" className="py-20 bg-[#07090e] text-white">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-left pb-20">
          Minhas experiências:
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