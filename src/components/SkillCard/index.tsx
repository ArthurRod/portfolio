import { ProgressBar } from "../ProgressBar";

interface SkillCardProps {
  skillImage: string;
  skillName: string;
  skillPercentage: number;
}

export function SkillCard({
  skillImage,
  skillName,
  skillPercentage,
}: SkillCardProps) {
  return (
    <div className="skill-card" aria-label={`Habilidade ${skillName}`}>
      <div className="skill-image" role="img" aria-label="Imagem da tecnologia">
        <img src={skillImage} alt={skillName} loading="lazy" />
      </div>
      <div className="skill-name" aria-label="Nome da tecnologia">
        <h4>{skillName}</h4>
      </div>
      <div className="progress-title" aria-label="Nível de habilidade">
        <span>Nível de habilidade</span>
      </div>
      <ProgressBar percentage={skillPercentage} />
    </div>
  );
}
