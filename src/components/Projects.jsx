import { motion } from "framer-motion";
import { projects } from "../data/projects";
import SectionTitle from "./SectionTitle";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section id="projects" className="relative">
      <div className="section-container">

        <SectionTitle
          eyebrow="My Work"
          title="Featured Projects"
          description="A selection of projects that showcase my skills in Artificial Intelligence, Full Stack Development, IoT, and modern web technologies."
        />

        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              delay={index * 0.08}
            />
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;