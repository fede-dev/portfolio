import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaFacebookF, FaYoutube, FaLinkedinIn, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiNextdotjs } from "react-icons/si";
import { FadeIn } from "./FadeIn";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Planner Creativo.", "Product Manager", "Full Stack Developer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <FadeIn className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        {/* <h4 className=" text-lg font-normal">FEDERICO ENRIQUEZ</h4> */}
        <h1 className="text-6xl font-bold text-white">
          Hola, soy <span className="text-designColor capitalize">Fede</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor cursorStyle="|" cursorColor="#ff014f" />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wider">
        MI ENFOQUE ES LA FUSIÓN DE PLANIFICACIÓN ESTRATÉGICA, CREATIVIDAD Y TECNOLOGÍA
        PARA LLEVAR A CABO PROYECTOS INNOVADORES CREANDO VINCULOS POSITIVOS ENTRE MARCAS Y AUDIENCIAS.  
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Redes Sociales
          </h2>
          <div className="flex gap-4">
            {/* <a href="https://www.youtube.com/@reactjsBD" target="_blank">
              <span className="bannerIcon">
                <FaYoutube />
              </span>
            </a> */}
            <a
              href="https://www.linkedin.com/in/federico-enriquez-2974a037/"
              target="_blank"
            >
              <span className="bannerIcon">
                <FaLinkedinIn />
              </span>
            </a>
            {/* <a href="https://www.facebook.com/Noorlalu143/" target="_blank">
              <span className="bannerIcon">
                <FaFacebookF />
              </span>
            </a> */}
          </div>
        </div>
        {/* <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            SKILLS
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiNextdotjs />
            </span>
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
            <span className="bannerIcon">
              <SiFigma />
            </span>
          </div>
        </div> */}
      </div>
    </FadeIn>
  );
};

export default LeftBanner;
