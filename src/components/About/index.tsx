import { useTranslation } from "react-i18next";

import { AboutType } from "../../types/AboutType";

import "../../styles/resume.scss";

interface AboutProps {
  about: AboutType;
}

import "../../styles/about.scss";
import { createParagraphArray } from "../../helpers/createParagraphArray";
import React from "react";

export function About({ about }: AboutProps) {
  const { t } = useTranslation();
  const { image } = about;

  const aboutText = t("aboutText");
  const aboutTextArray = createParagraphArray(aboutText);

  return (
    <section
      id="about"
      className="about"
      aria-label="Seção sobre mim"
      data-animate="animate"
    >
      <div className="container">
        <div className="image" aria-label="Imagem" data-animate="right">
          <img src={image} alt="Imagem de perfil" width={225} loading="lazy" />
        </div>
        <div
          className="description-wrapper"
          aria-label="Descrição"
          data-animate="left"
        >
          <div
            className="section-title-inverted"
            aria-label="Título da descrição"
          >
            <h2>{t("titles.about")}</h2>
          </div>

          <div className="description" aria-label="Descrição">
            {aboutTextArray.map((paragraph, index) => {
              return (
                <React.Fragment key={index}>
                  <p>{paragraph}</p>

                  {index !== aboutTextArray.length - 1 && <br />}
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
