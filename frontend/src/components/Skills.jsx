import {
  FaReact,
  FaCss3Alt,
  FaJsSquare,
  FaGitAlt,
  FaBootstrap,
  FaFigma,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNodedotjs, // 👈 Import do ícone oficial do Node.js
} from "react-icons/si";

function Skills() {
  const categories = [
    {
      nome: "Frontend",
      skills: [
        { nome: "React", icon: <FaReact className="text-sky-400 w-12 h-12" /> },
        { nome: "JavaScript", icon: <FaJsSquare className="text-yellow-400 w-12 h-12" /> },
        { nome: "TailwindCSS", icon: <SiTailwindcss className="text-cyan-400 w-12 h-12" /> },
        { nome: "Bootstrap", icon: <FaBootstrap className="text-[#7952B3] w-12 h-12" /> },
        { nome: "CSS3", icon: <FaCss3Alt className="text-blue-500 w-12 h-12" /> },
        
      ],
    },
    {
      nome: "Backend",
      skills: [
        { nome: "Node.js", icon: <SiNodedotjs className="text-green-500 w-12 h-12" /> }, // ✅ Adicionado aqui
      ],
    },
    {
      nome: "Ferramentas",
      skills: [
        { nome: "Git", icon: <FaGitAlt className="text-[#F05033] w-12 h-12" /> },
        { nome: "Figma", icon: <FaFigma className="text-[#F24E1E] w-12 h-12" /> },
,
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-[#07090e] text-white text-center">
      <h2 className="text-4xl font-bold mb-16 text-gray-200">Minhas Skills</h2>

      <div className="flex flex-col items-center gap-16 max-w-6xl mx-auto px-6">
        {categories.map((category, index) => (
          <div key={index} className="w-full text-center">
            <h3 className="text-2xl font-semibold text-gray-300 mb-8 tracking-wide">
              {category.nome}
            </h3>

            <div className="flex flex-wrap justify-center gap-8">
              {category.skills.map((skill, i) => (
                <div
                  key={i}
                  className="group relative bg-[#0b0d12]/60 backdrop-blur-md rounded-2xl p-6 flex flex-col items-center justify-center
                             shadow-md shadow-black/40 hover:shadow-gray-400/30 transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="mb-3 transform group-hover:scale-110 transition-transform duration-300">
                    {skill.icon}
                  </div>
                  <h4 className="text-sm text-gray-400 group-hover:text-gray-100 transition-colors duration-300 tracking-wide">
                    {skill.nome}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <p className="text-gray-500 text-sm mt-16">
        Um conjunto equilibrado de tecnologias modernas para desenvolvimento web completo.
      </p>
    </section>
  );
}

export default Skills;
