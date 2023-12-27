import { useEffect, useRef } from "react";
import { Trans, useTranslation } from "react-i18next";

import { ResumeType } from "../../types/ResumeType";
import { typeWritter } from "../../helpers/typeWritter";

import { SocialMedias } from "./socialMedias/SocialMedias";
import { LinkText } from "../../components";

import "./resume.scss";

interface ResumeProps {
  resume: ResumeType;
}

export function Resume({ resume }: ResumeProps) {
  const writterElementName = useRef(null!);
  const { t } = useTranslation();

  const { image, name, position, socialMedias } = resume;

  useEffect(() => {
    if (writterElementName.current) {
      typeWritter(writterElementName.current);
    }
  }, []);

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
                <h1 ref={writterElementName}>I'm {name}</h1>
              </div>
              <div className="position" aria-label="Cargo">
                <h3>{position}</h3>
              </div>
            </div>

            <div className="resume-description" aria-label="Descrição curta">
              <p>
                <Trans
                  i18nKey="shortDescription"
                  t={t}
                  components={{
                    link1: (
                      <LinkText
                        to="https://www.siriusdigital.com.br/"
                        title="Sirius Digital"
                        text="Sirius Digital"
                      />
                    ),
                    link2: (
                      <LinkText
                        to="https://leste.totvs.com/"
                        title="TOTVS Leste"
                        text="TOTVS Leste"
                      />
                    ),
                  }}
                />
              </p>
            </div>

            <SocialMedias socialMedias={socialMedias} />
          </div>
        </div>
      </div>
    </section>
  );
}
