import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

interface ProjectCardProps {
  index: number;
  projectLink: string;
  projectGithubLink?: string;
  projectPrint: string;
}

export default function ProjectCard({
  index,
  projectLink,
  projectGithubLink,
  projectPrint,
}: ProjectCardProps) {
  const { t } = useTranslation();
  const [projectTranslatedDescription, setProjectTranslatedDescription] =
    useState("");

  useEffect(() => {
    switch (index) {
      case 0:
        const projectTranslatedDescription = t("projects.project1Description");

        setProjectTranslatedDescription(projectTranslatedDescription);
        break;
      case 1:
        const projectTranslatedDescription2 = t("projects.project2Description");

        setProjectTranslatedDescription(projectTranslatedDescription2);
        break;
      default:
        break;
    }
  }, []);

  return (
    <div className="project-card" aria-label="Projeto" data-animate="left">
      <div className="print" aria-label="Prints do Projeto">
        <img src={projectPrint} width={300} alt="Print Desktop" />
      </div>
      <div className="description" aria-label="Descrição do Projeto">
        <p>{projectTranslatedDescription}</p>
      </div>
      <div className="links" aria-label="Links do Projeto">
        <ul>
          <li aria-label="Link do Executável">
            <span>{t("projectLinkLabel")}</span>
            <a href={projectLink} target="_blank">
              {projectLink}
            </a>
          </li>
          {projectGithubLink && (
            <li aria-label="Link do GitHub">
              <span>{t("gitHubLinkLabel")}</span>
              <a href={projectGithubLink} target="_blank">
                {projectLink}
              </a>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}
