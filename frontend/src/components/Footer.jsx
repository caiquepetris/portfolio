import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";


function Footer() {
  return (
    <footer className="text-white py-6 mt-12 border-t border-gray-700 bg-[#07090e]">
      <div className="flex flex-col items-center space-y-4 max-w-5xl mx-auto px-4">
        {/* Links sociais */}
        <nav aria-label="Redes sociais">
          <ul className="flex space-x-6">
            <li>
              <a
                href="https://github.com/caiquepetris"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="hover:scale-110 transition-transform"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  className="w-6 h-6 text-white-500"
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/cpetris/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:scale-110 transition-transform"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="w-6 h-6 text-blue-500"
                />
              </a>
            </li>
            <li></li>
          </ul>
        </nav>

        {/* Texto institucional */}
        <div className="text-center text-xs text-gray-400 leading-relaxed">
          <p>
            <strong>&copy; PETRIS</strong> {new Date().getFullYear()} — Todos os
            direitos reservados.
          </p>
          <p className="mt-1">
            Desenvolvido com{" "}
            <span className="font-semibold text-gray-300">React</span>,{" "}
            <span className="font-semibold text-gray-300">TailwindCSS</span> e{" "}
            <span className="font-semibold text-gray-300">Node.js</span>.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
