import "../../styles/progress-bar.scss";

interface ProgressBarProps {
  percentage: number;
}

export function ProgressBar({ percentage }: ProgressBarProps) {
  return (
    <div className="progress-bar-wrapper" aria-label="Barra de Progresso">
      <div
        className="progress-bar"
        role="progressbar"
        aria-label="Progresso de conhecimento da habilidade"
        aria-valuenow={percentage}
        style={{ width: `${percentage}%` }}
      >
        <label aria-label={`Progresso ${percentage}%`}>{percentage}%</label>
      </div>
    </div>
  );
}
