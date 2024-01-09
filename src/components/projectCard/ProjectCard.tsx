import { useTranslation } from "react-i18next";

import { Video } from "../../components";

import "./project-card.scss";

interface ProjectCardProps {
  index: number;
  projectName: string;
  projectLink: string;
  projectGithubLink?: string;
  projectPrint: string;
  projectVideo: string;
  projectVideoMobile: string;
}

export function ProjectCard({
  index,
  projectName,
  projectLink,
  projectGithubLink,
  projectPrint,
  projectVideo,
  projectVideoMobile,
}: ProjectCardProps) {
  const { t } = useTranslation();
  const projectTranslatedDescription = t(
    `projects.project${index + 1}Description`
  );

  return (
    <div className="project-card" aria-label="Projeto">
      <div className="description" aria-label="Descrição do Projeto">
        <div className="name">
          <h3>{projectName}</h3>
        </div>

        <p>{projectTranslatedDescription}</p>

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

      <Video path={projectVideoMobile} poster={projectPrint} />

      <Video path={projectVideo} poster={projectPrint} />
    </div>
  );
}
