import Title from "./Title";
import ProjectsCard from "./ProjectsCard";
import {   
  projectOne,
  projectTwo,
  projectThree,
  projectFour,
  projectFive,
  projectSix, } from "../assets";
import { FadeIn } from "./FadeIn";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-gray-700"
    >
      <FadeIn>
        <div className="flex justify-center items-center text-center">
          <Title
            title="TRABAJOS REALIZADOS"
            des="Proyectos"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
          <ProjectsCard
            title="ESCAPARATE Benchmark"
            des="Investigación de consumidor, análisis de mercado y de la competencia para crear una startup."
            src={projectOne}
            link="/pdf/esc_pm.pdf"
            
          />
            <ProjectsCard
            title="Escaparate Brand"
            des="Creación de marca y concepto a partir de modelo negocio y diferencial de marca."
            src={projectTwo}
            link="/pdf/esc_planning.pdf"
          />
            <ProjectsCard
            title="Escaparate site"
            des="Coding, UX Writing e interfaces creando interacción positiva con los usuarios."
            src={projectThree}
            link="https://escaparate.com.ar"
            pdf={false}
          />
          <ProjectsCard
            title="Rey León"
            des="ING Direct sortea entradas para que sus clientes puedan disfrutar de la obra El Rey León en el teatro."
            src={projectFour}
            link="/pdf/ing_.pdf"
          />
          <ProjectsCard
            title="FARMACITY"
            des="Contenido para RRSS insights del consumidor."
            src={projectFive}
            link="/pdf/FARMACITY.pdf"
          />
          <ProjectsCard
            title="Dove Men Care"
            des="Activación Dove Men Care para potenciar y motivar a los usuarios en los gimnasios."
            src={projectSix}
            link="/pdf/dove_men_care.pdf"
          />
        </div>
      </FadeIn>
    </section>
  );
};

export default Projects;
