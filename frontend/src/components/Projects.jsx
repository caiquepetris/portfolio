function Projects() {
  const projects = [
    {
      title: "Portfólio",
      description: "Portfólio pessoal.",
      link: "https://github.com/caiquepetris/portfolio",
      tech: ["React", "TailwindCSS", "Node.js"],
    },
  ];

  return (
    <section className="py-16" style={{ backgroundColor: "#07090e" }}>
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center text-white">
          Projetos
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative bg-[#111318] rounded-xl shadow-md 
                         hover:shadow-2xl hover:scale-105 
                         transition transform duration-300 ease-in-out 
                         p-6 flex flex-col justify-between"
            >
              {/* Linha de cobertura com glow animado */}
              <span
                className="absolute top-0 left-0 w-full h-[2px] rounded-t-xl 
                           bg-gradient-to-r from-gray-700 via-gray-400/40 to-gray-700 
                           animate-pulse"
              ></span>

              <div className="mt-3">
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="bg-gray-700 text-gray-200 text-xs px-2 py-1 rounded-md"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 font-medium hover:text-white mt-auto transition"
              >
                Ver projeto →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
