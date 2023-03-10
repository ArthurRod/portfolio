import "../../styles/resume.scss";
import { ResumeType } from "../../types/ResumeType";

interface ResumeProps {
  resume: ResumeType;
}

export function Resume({ resume }: ResumeProps) {
  const { name, position, resumeDescription } = resume;

  return (
    <section id="resume" className="resume" aria-label="Seção Resumo">
      <div className="name">
        <h1>{name}</h1>
      </div>
      <div className="position">
        <h2>{position}</h2>
      </div>
      <div className="resume-description">
        <p>{resumeDescription}</p>
      </div>
    </section>
  );
}
