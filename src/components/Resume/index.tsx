import "../../styles/resume.scss";
import { ResumeType } from "../../types/ResumeType";

interface ResumeProps {
  resume: ResumeType;
}

export function Resume({ resume }: ResumeProps) {
  const { image, name, position } = resume;

  return (
    <section id="resume" className="resume" aria-label="Seção Resumo">
      <div className="container">
        <div className="image" aria-label="Imagem">
          <img
            src={image}
            alt={`Imagem de ${name}`}
            width={225}
            loading="lazy"
          />
        </div>
        <div className="infos" aria-label="Informações principais">
          <div className="name-position">
            <div className="name" aria-label="Nome">
              <h2>Hello world!</h2>
              <h1>I'm {name}</h1>
            </div>
            <div className="position" aria-label="Cargo">
              <h2>{position}</h2>
            </div>
          </div>

          <div className="resume-description" aria-label="Descrição curta">
            <p>
              Engenheiro de Software formado pela Unicesumar e desenvolvedor
              Front-End Web. Há mais de dois anos atuando com implantação e
              manutenção de e-commerce utilizando VTEX IO e VTEX CMS com as
              tecnologias React, JavaScript, HTML, CSS e SCSS pela agência{" "}
              <a target="_blank" href="https://www.siriusdigital.com.br/">
                SIRIUS Digital
              </a>
              , uma empresa subsidiária da{" "}
              <a target="_blank" href="https://leste.totvs.com/">
                TOTVS Leste
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
