import { AiFillAppstore } from "react-icons/ai";
import { FaMobile } from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";
import Card from "./Card";
import Title from "./Title";
import { FadeIn } from "./FadeIn";

const Feature = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-gray-700"
    >
      <FadeIn>
        <Title title="Features" des="Skills" />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
          {/* <Card
            title="Business Strategy"
            des="Analizar el mercado, identificar oportunidades y crear estrategias para mantener una ventaja competitiva."
            icon={null}
          /> */}
          <Card
            title="Creative Planner"
            des="Estrategias de comunicación basadas en insights del consumidor, investigación y análisis."
            icon={<AiFillAppstore />}
          />
          <Card
            title="Ux Research"
            des="Como UX Research investigo y analizo las necesidades y comportamientos de los usuarios para mejorar su experiencia con productos o servicios."
            icon={<SiProgress />}
          />
          <Card
            title="Product Manager"
            des="Desarrollo, lanzamiento y mejora continua de un producto, alineando las necesidades del mercado y los objetivos del negocio para asegurar su éxito."
            icon={<FaMobile />}
          />
             {/* <Card
            title="Creative copywriter"
            des="Creación de conceptos, titulares y contenido para conectar marcas con su audencia."
            icon={<FaGlobe />}
          /> */}
          <Card
            title="Full stack developer"
            des="Desarrollador full-stack de web-apps con JavaScript."
            icon={<SiAntdesign />}
          />
       
        </div>
      </FadeIn>
    </section>
  );
};

export default Feature;
