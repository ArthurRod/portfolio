import { useTranslation } from "react-i18next";

import { Project } from "../../types/Project";
import ProjectCard from "../ProjectCard";

import "../../styles/projects.scss";

interface ProjectsProps {
  projects: Project[];
}

export default function Projects({ projects }: ProjectsProps) {
  const { t } = useTranslation();

  return (
    <section id="projects" className="projects" aria-label="Seção Projetos">
      <div className="container">
        <div
          className="section-title-inverted"
          aria-label="Título da seção de projetos"
          data-animate="left"
        >
          <h2>{t("titles.projects")}</h2>
        </div>
        <div
          className="projects-wrapper"
          aria-label="Descrição"
          data-animate="top"
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              index={index}
              projectLink={project.link}
              projectGithubLink={project.githubLink}
              projectPrint={project.print}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
