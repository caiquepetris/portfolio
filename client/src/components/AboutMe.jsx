import minhaFoto from '../assets/images/IMG_5827.JPG';

function AboutMe() {
  return (
    <section>
      <div>
        <h1>Sobre Mim:</h1>
          <img src={minhaFoto} alt="Foto de Caique Petris" className="w-[300px] h-[300px] object-cover rounded-lg shadow"/>
          <p> Meu nome é Caique Petris, tenho 20 anos e estou buscando experiência como desenvolvedor backend</p>
        </div>
    </section>
  );
}

export default AboutMe;
