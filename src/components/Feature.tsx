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
          <Card
            title="Creative Planner"
            des="Estrategias de comunicación basadas en insights, investigación y análisis."
            icon={<AiFillAppstore />}
          />
          <Card
            title="Creative Copywriter"
            des="Creación de conceptos para conectar marcas con su audencia."
            icon={<SiProgress />}
          />
            <Card
            title="Marketing Digital"
            des="Creación de estrategias para atraer, convertir y fidelizar."
            icon={<SiAntdesign />}
          />
          <Card
            title="Product Manager"
            des="Desarrollo, lanzamiento y mejora continua, alineando las necesidades del mercado y objetivos."
            icon={<FaMobile />}
          />
        </div>
      </FadeIn>
    </section>
  );
};

export default Feature;
