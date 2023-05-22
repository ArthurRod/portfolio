import { Project } from "../../types/Project";
import ProjectCard from "../ProjectCard";

interface ProjectsProps {
  projects: Project[];
}

import "../../styles/projects.scss";

export default function Projects({ projects }: ProjectsProps) {
  return (
    <section
      id="projects"
      className="projects"
      aria-label="Seção Projetos"
      data-animate="animate"
    >
      <div className="container">
        <div
          className="section-title-inverted"
          aria-label="Título da seção de projetos"
          data-animate="left"
        >
          <h2>Principais projetos</h2>
        </div>
        <div
          className="projects-wrapper"
          aria-label="Descrição"
          data-animate="top"
        >
          {projects.map((project, index) => {
            const { name, description, link, githubLink, print } = project;
            return (
              <ProjectCard
                key={index}
                projectName={name}
                projectDescription={description}
                projectLink={link}
                projectGithubLink={githubLink}
                projectPrint={print}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
