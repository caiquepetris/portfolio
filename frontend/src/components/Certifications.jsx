function Certifications() {
  const certifications = [
    {
      titulo: "Cloud Computing Fundamentals",
      emissor: "IBM",
      ano: "2025",
      link: "https://www.credly.com/badges/d41ac20f-2042-4950-aaba-fc0e158759af/linked_in_profile",
    },
  ];

  return (
   <section id="certificacoes" className="py-16 bg-[#07090e] text-white">

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
            shadow-lg shadow-black/40/80 backdrop-blur-md"
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
  );
}

export default Certifications;
