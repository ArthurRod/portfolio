interface ProjectCardProps {
  projectName: string;
  projectDescription: string;
  projectLink: string;
  projectGithubLink?: string;
  projectPrint: string;
}

export default function ProjectCard({
  projectName,
  projectDescription,
  projectLink,
  projectGithubLink,
  projectPrint,
}: ProjectCardProps) {
  return (
    <div className="project-card" aria-label="Projeto" data-animate="left">
      <div className="name" aria-label="Nome do Projeto">
        <h3>{projectName}</h3>
      </div>
      <div className="prints" aria-label="Prints do Projeto">
        <ul>
          <li>
            <img src={projectPrint} width={300} alt="Print Desktop" />
          </li>
        </ul>
      </div>
      <div className="description" aria-label="Descrição do Projeto">
        <p>{projectDescription}</p>
      </div>
      <div className="links" aria-label="Links do Projeto">
        <ul>
          <li aria-label="Link do Executável">
            <span>Link do projeto: </span>
            <a href={projectLink} target="_blank">
              {projectName}
            </a>
          </li>
          {projectGithubLink && (
            <li aria-label="Link do GitHub">
              <span>Link do GitHub: </span>
              <a href={projectGithubLink} target="_blank">
                {projectName}
              </a>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}
