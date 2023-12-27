import { useTranslation } from "react-i18next";

import { ProgressBar } from "../../../components";

import "./skill-card.scss";

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
  const { t } = useTranslation();

  return (
    <div className="skill-card" aria-label={`Habilidade ${skillName}`}>
      <div
        className="skill-image"
        role="img"
        aria-label={`Imagem de ${skillName}`}
      >
        <img src={skillImage} alt={skillName} loading="lazy" />
      </div>
      <div
        className="skill-name"
        aria-label={`Nome da tecnologia ${skillName}`}
      >
        <h4>{skillName}</h4>
      </div>
      <div className="progress-title" aria-label="Nível de habilidade">
        <span>{t("skillLevelLabel")}</span>
      </div>
      <ProgressBar percentage={skillPercentage} />
    </div>
  );
}
