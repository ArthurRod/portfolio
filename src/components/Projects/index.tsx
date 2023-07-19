import { useTranslation } from "react-i18next";

import { Project } from "../../types/Project";
import ProjectCard from "../ProjectCard";

interface ProjectsProps {
  projects: Project[];
}

import "../../styles/projects.scss";

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
          {projects.map((project, index) => {
            const { link, githubLink, print } = project;
            return (
              <ProjectCard
                key={index}
                index={index}
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
