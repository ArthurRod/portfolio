import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { createParagraphArray } from "../../helpers/createParagraphArray";
import { Video } from "../Video";

interface ProjectCardProps {
  index: number;
  projectName: string;
  projectLink: string;
  projectGithubLink?: string;
  projectPrint: string;
  projectVideo: string;
  projectVideoMobile: string;
}

export default function ProjectCard({
  index,
  projectName,
  projectLink,
  projectGithubLink,
  projectPrint,
  projectVideo,
  projectVideoMobile,
}: ProjectCardProps) {
  const { t } = useTranslation();
  const [projectTranslatedDescriptions, setProjectTranslatedDescriptions] =
    useState<string[]>([]);

  useEffect(() => {
    const projectTranslatedDescriptionKey = `projects.project${
      index + 1
    }Description`;

    if (projectTranslatedDescriptionKey.length > 0) {
      const projectTranslatedDescription = t(projectTranslatedDescriptionKey);

      setProjectTranslatedDescriptions(
        createParagraphArray(projectTranslatedDescription)
      );
    }
  }, [index, t]);

  return (
    <div className="project-card" aria-label="Projeto">
      <Video path={projectVideo} poster={projectPrint} />

      <Video path={projectVideoMobile} poster={projectPrint} />

      <div className="description" aria-label="Descrição do Projeto">
        <div className="name">
          <h3>{projectName}</h3>
        </div>
        {projectTranslatedDescriptions.map(
          (projectTranslatedDescription, index) => (
            <React.Fragment key={index}>
              <p>{projectTranslatedDescription}</p>
              {index !== projectTranslatedDescriptions.length - 1 && <br />}
            </React.Fragment>
          )
        )}
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
    </div>
  );
}
