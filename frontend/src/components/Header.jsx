import { FaEnvelope } from "react-icons/fa";
import { ReactTyped } from "react-typed";


function Header() {
  return (
    <header className="h-screen relative bg-[#07090e] text-white flex items-center justify-center">
      {/* Camada das estrelas */}
      <div className="stars"></div>

      {/* Conteúdo */}
      <div className="text-center px-6 relative z-10">
        <p className="text-2xl text-gray-400 mb-2">Oi! Eu sou o</p>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
          Caique Petris
        </h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
          <span className="text-white font-semibold">
            Desenvolvedor Fullstack
          </span>{" "}
          em formação, apaixonado por{" "}
          <span className="text-gray-300 font-medium">
            <ReactTyped
              strings={[
                "tecnologia. ",
                "soluções digitais. ",
                "inovação. ",
                "impacto real. ",
              ]}
              typeSpeed={60}
              backSpeed={40}
              backDelay={2000}
              loop
            />
          </span>
        </p>
        <div className="mt-10">
          <a
            href="#forms"
            className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition"
          >
            <FaEnvelope /> Me envie um e-mail!
          </a>
        </div>
      </div>
    </header>
  );
}


export default Header;
