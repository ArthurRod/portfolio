import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { createParagraphArray } from "../../helpers/createParagraphArray";

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
  const [projectTranslatedDescriptions, setProjectTranslatedDescriptions] =
    useState<string[]>([]);

  useEffect(() => {
    const projectTranslatedDescriptionKey =
      index === 0
        ? "projects.project1Description"
        : index === 1
        ? "projects.project2Description"
        : "";

    if (projectTranslatedDescriptionKey) {
      const projectTranslatedDescription = t(projectTranslatedDescriptionKey);

      setProjectTranslatedDescriptions(
        createParagraphArray(projectTranslatedDescription)
      );
    }
  }, [index, t]);

  return (
    <div className="project-card" aria-label="Projeto" data-animate="left">
      <div className="print" aria-label="Prints do Projeto">
        <img src={projectPrint} width={300} alt="Print Desktop" />
      </div>
      <div className="description" aria-label="Descrição do Projeto">
        {projectTranslatedDescriptions.map(
          (projectTranslatedDescription, index) => (
            <React.Fragment key={index}>
              <p>{projectTranslatedDescription}</p>
              {index !== projectTranslatedDescriptions.length - 1 && <br />}
            </React.Fragment>
          )
        )}
      </div>
      <div className="links" aria-label="Links do Projeto">
        <ul>
          <li aria-label="Link do Executável">
            <span>{t("projectLinkLabel")}</span>
            <a href={projectLink} target="_blank" rel="noopener noreferrer">
              {projectLink}
            </a>
          </li>
          {projectGithubLink && (
            <li aria-label="Link do GitHub">
              <span>{t("gitHubLinkLabel")}</span>
              <a
                href={projectGithubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                {projectGithubLink}
              </a>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}
