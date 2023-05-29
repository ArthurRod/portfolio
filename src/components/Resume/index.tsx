import "../../styles/resume.scss";
import { ResumeType } from "../../types/ResumeType";
import { SocialMedias } from "./SocialMedias";

interface ResumeProps {
  resume: ResumeType;
}

export function Resume({ resume }: ResumeProps) {
  const { image, name, position, socialMedias } = resume;

  return (
    <section id="resume" className="resume" aria-label="Seção Resumo">
      <div className="container">
        <div className="image-infos">
          <div className="image" aria-label="Imagem">
            <img
              src={image}
              alt={`Imagem de ${name}`}
              width={225}
              loading="lazy"
            />
          </div>
          <div className="infos" aria-label="Informações principais">
            <div className="name-position" aria-label="Nome e cargo">
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
                manutenção de e-commerce VTEX IO e VTEX CMS utilizando as
                tecnologias React, TypeScript, JavaScript, HTML5, CSS3 e Sass
                pela agência&nbsp;
                <a target="_blank" href="https://www.siriusdigital.com.br/">
                  Sirius Digital,
                </a>
                &nbsp;uma empresa subsidiária da&nbsp;
                <a target="_blank" href="https://leste.totvs.com/">
                  TOTVS Leste.
                </a>
              </p>
            </div>

            <SocialMedias socialMedias={socialMedias} />
          </div>
        </div>
      </div>
    </section>
  );
}
