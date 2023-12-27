import { useTranslation } from "react-i18next";

import { Project } from "../../types/Project";

import { ProjectCard } from "../../components";

import "./projects.scss";

interface ProjectsVtexProps {
  projectsVtex: Project[];
}

export function ProjectsVtex({ projectsVtex }: ProjectsVtexProps) {
  const { t } = useTranslation();

  return (
    <section
      id="projects"
      className="projects vtex"
      aria-label="Seção Projetos"
    >
      <div className="container">
        <div
          className="section-title-inverted"
          aria-label="Título da seção de projetos"
          data-animate="left"
        >
          <h2>{t("titles.projects")} VTEX-IO</h2>
        </div>
        <div
          className="projects-wrapper"
          aria-label="Descrição"
          data-animate="top"
        >
          {projectsVtex.map((projectVtex, index) => (
            <ProjectCard
              key={index}
              index={index}
              projectPrint={projectVtex.print}
              projectVideo={projectVtex.video}
              projectVideoMobile={projectVtex.videoMobile}
              projectName={projectVtex.name}
              projectLink={projectVtex.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
