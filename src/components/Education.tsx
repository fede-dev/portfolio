import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-16 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          {/* <p className="text-sm text-designColor tracking-[4px]">1998 - 2010</p> */}
          <h2 className="text-3xl md:text-4xl font-bold">Educación</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Bootcamp Desarrollador Web Fullstack Javascript"
            subTitle="Plataforma 5"
            // result="3.90/4"
            des="Realicé un bootcamp de desarrollo web full-stack en JavaScript donde desarrollé habilidades tanto en front-end como en back-end para crear aplicaciones e interfaces."
          />
          <ResumeCard
            title="Diplomatura en Marketing Digital"
            subTitle="ITBA"
            // result="4.75/5"
            des="Completé una Diplomatura en Marketing Digital y Negocios Digitales centrada en e-commerce donde adquirí conocimientos sobre el ecosistema digital, la conexión con el público objetivo y estrategias utilizando herramientas digitales como SEM, SEO y Social Media Marketing."
          />
          <ResumeCard
            title="Planner Creativo"
            subTitle="Miami Ad School"
            // result="5.00/5"
            des="Investigo el mercado, defino insights para el desarrollo de estrategias y guiar campañas publicitarias efectivas y alineadas con los objetivos del cliente."
          />
            <ResumeCard
            title="Product Manager"
            subTitle="Coderhouse"
            // result="5.00/5"
            des="Lidero la visión, el desarrollo y la gestión de productos, coordinando equipos interfuncionales y utilizando datos del mercado para definir estrategias, priorizar características y asegurar que el producto cumpla con las necesidades del cliente y los objetivos empresariales."
          />
            <ResumeCard
            title="Copywriter Creativo"
            subTitle="Underground"
            // result="5.00/5"
            des="Desarrollo conceptos creativos y redacto contenido persuasivo para campañas publicitarias, colaborando con el equipo creativo para asegurar que el mensaje sea impactante y alineado con la estrategia de la marca."
          />
        </div>
      </div>
      {/* part Two */}

       <div>
        {/* <div className="py-20 lgl:py-12 font-titleFont flex flex-col gap-4">
           <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p> 
          <h2 className="text-3xl md:text-4xl font-bold">Agencias</h2>
        </div> */}
        {/* <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Planner creativo - Product manager"
            subTitle="Escaparate.com.ar - Red social ecommerce"
            result="Argentina"
            des="Google's hiring process is an important part of our culture. Googlers care deeply about their teams and the people who make them up."
          />
          <ResumeCard
            title="Freelance"
            subTitle="Obra Social y Sindicato Petroquímico"
            result="Argentina"
            des="A popular destination with a growing number of highly qualified homegrown graduates, it's true that securing a role in Malaysia isn't easy."
          />
          <ResumeCard
            title="Copywriter"
            subTitle="Ogilvy"
            result="Madrid"
            des="The Oman economy has grown strongly over recent years, having transformed itself from a producer and innovation-based economy."
          />
        </div> */}
      </div> 
    </motion.div>
  );
};

export default Education;
