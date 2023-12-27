import "./progress-bar.scss";

interface ProgressBarProps {
  percentage: number;
}

export function ProgressBar({ percentage }: ProgressBarProps) {
  return (
    <div
      className="progress-bar-wrapper"
      aria-label={`Barra de Progresso ${percentage}%`}
    >
      <div
        className="progress-bar"
        role="progressbar"
        aria-label={`Progresso de conhecimento da habilidade: ${percentage}%`}
        aria-valuenow={percentage}
        style={{ width: `${percentage}%` }}
      >
        <span>{percentage}%</span>
      </div>
    </div>
  );
}
