import minhaFoto from '../assets/images/IMG_5827.JPG';

function AboutMe() {
  return (
 <section className="flex flex-row-reverse items-center justify-center gap-8 p-8">
  <img 
    src={minhaFoto} 
    alt="Foto de Caique Petris" 
    className="w-[300px] h-[300px] object-cover rounded-lg shadow"
  />
  <div className="max-w-md">
    <h1 className="text-2xl font-bold mb-4">Sobre Mim:</h1>
    <p>
      Meu nome é Caique Petris, tenho 20 anos, sou estudante de ciências da computação.
    </p>
  </div>
</section>


  );
}

export default AboutMe;
