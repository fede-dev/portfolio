import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          {/* <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p> */}
          <h2 className="text-3xl md:text-4xl font-bold">Experiencia</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
        <ResumeCard
            title="Planner creativo y Product manager"
            subTitle="Escaparate.com.ar - Red social ecommerce"
            result="Argentina"
            des="Desarrollo estrategias creativas basadas en insights del mercado para guiar campañas publicitarias efectivas y lidero la visión, desarrollo y lanzamiento de productos alineados con las necesidades del mercado y los objetivos empresariales."
          />
           <ResumeCard
            title="Desarrollador Backend"
            subTitle="Naranja X"
            result="Argentina"
            des="Desarrollé soluciones backend eficientes y escalables, gestionando el diseño, la implementación y la integración de sistemas y APIs, optimizando el rendimiento y asegurando la calidad del código para aplicaciones web y móviles.."
          />
          <ResumeCard
            title="Freelance"
            subTitle="Obra Social y Sindicato Petroquímico"
            result="Argentina"
            des="Desarrollo web y gestión de comunicación externa e interna para la atención de afiliados online."
          />
             <ResumeCard
            title="Copywriter"
            subTitle="Ogilvy Digital"
            result="Madrid"
            des="Desarrollo conceptos originales y redacto textos persuasivos para diversas plataformas, colaborando con el equipo creativo y asegurando la alineación con la estrategia de marca."
          />
       
        </div>
      </div>
      {/* <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2001 - 2020</p>
          <h2 className="text-3xl md:text-4xl font-bold">Trainer Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Gym Instructor"
            subTitle="Rainbow Gym Center (2015 - 2020)"
            result="DHAKA"
            des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
          />
          <ResumeCard
            title="Web Developer and Instructor"
            subTitle="SuperKing College (2010 - 2014)"
            result="CANADA"
            des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          />
          <ResumeCard
            title="School Teacher"
            subTitle="Kingstar Secondary School (2001 - 2010)"
            result="NEVADA"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
        </div>
      </div> */}
    </motion.div>
  );
};

export default Experience;
