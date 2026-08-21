import minhaFoto from "../assets/images/IMG_5827.JPG";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

const aboutData = {
  nome: "Caique Petris",
  idade: 21,
};

function AboutMe() {
  const { t } = useLanguage();

  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col md:flex-row-reverse items-center justify-center gap-8 p-8 bg-[#07090e] text-white"
    >
      <figure className="shrink-0">
        <img
          src={minhaFoto}
          alt={`Foto de ${aboutData.nome}`}
          className="w-[280px] h-[280px] md:w-[350px] md:h-[350px] object-cover rounded-2xl shadow-xl"
          loading="lazy"
        />
      </figure>

      <article className="max-w-md text-center md:text-left">
        <h2 className="text-3xl font-bold mb-4 text-white ">{t("about.title")}</h2>
        <p className="text-gray-300 leading-relaxed">
          {t("about.age_prefix")} {aboutData.idade} {t("about.age_suffix")}{" "}
          <strong>{t("about.course")}</strong>.{t("about.description")}
        </p>
      </article>
    </motion.section>
  );
}

export default AboutMe;
