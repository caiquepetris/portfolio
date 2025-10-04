import { FaReact, FaCss3Alt, FaJsSquare,  } from "react-icons/fa";
import { SiTailwindcss, } from "react-icons/si";


function Skills() {
  const skills = [
    { nome: "React", icon: <FaReact className="text-sky-400 w-10 h-10" /> },
    { nome: "JavaScript", icon: <FaJsSquare className="text-yellow-400 w-10 h-10" /> },
    { nome: "TailwindCSS", icon: <SiTailwindcss className="text-cyan-400 w-10 h-10" /> },
    { nome: "CSS3", icon: <FaCss3Alt className="text-blue-500 w-10 h-10" /> },
  
  ];

  const certifications = [
    {
      titulo: "Cloud Computing Fundamentals",
      emissor: "IBM",
      ano: "2025",
      link: "https://www.credly.com/badges/d41ac20f-2042-4950-aaba-fc0e158759af/linked_in_profile",
    },
  ];

  return (
    <>
      {/* ===== Skills ===== */}
      <section
        id="skills"
        className="relative py-20 text-white overflow-hidden
        before:absolute before:top-0 before:left-0 before:w-full before:h-16 before:bg-[#0b0d12]/90 before:-skew-y-3
        after:absolute after:bottom-0 after:left-0 after:w-full after:h-16 after:bg-[#0b0d12]/90 after:skew-y-3"
        style={{
          background: "rgba(11, 13, 18, 0.9)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
        }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center relative z-10">
          Skills
        </h2>

        {/* Carrossel */}
        <div className="relative w-full overflow-hidden z-10">
          <div className="flex gap-6 animate-scroll">
            {[...skills, ...skills].map((skill, index) => (
              <div
                key={index}
                className="min-w-[180px] p-6 border border-gray-700 rounded-xl flex flex-col items-center gap-3
                bg-[#0d1117]/70 backdrop-blur-lg shadow-xl shadow-black/50"
              >
                {skill.icon}
                <h3 className="text-lg font-semibold">{skill.nome}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Certificações ===== */}
      <section id="certificacoes" className="py-16 bg-[#0d1016] text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Certificações
        </h2>

        <div
          className={`grid gap-6 max-w-4xl mx-auto ${
            certifications.length === 1
              ? "grid-cols-1 justify-items-center"
              : "md:grid-cols-2"
          }`}
        >
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="p-4 border border-gray-700 rounded-xl text-center w-full max-w-[300px] 
              shadow-lg shadow-black/40 bg-[#0d1117]/80 backdrop-blur-md"
            >
              <h3 className="text-xl font-semibold">{cert.titulo}</h3>
              <p className="text-gray-400 mb-2">
                {cert.emissor} • {cert.ano}
              </p>
              {cert.link && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  Ver certificado
                </a>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Skills;
