import { useTranslation } from "react-i18next";

import { AboutType } from "../../types/AboutType";

import "./about.scss";

interface AboutProps {
  about: AboutType;
}

export function About({ about }: AboutProps) {
  const { t } = useTranslation();
  const { image } = about;
  const aboutText = t("aboutText");

  return (
    <section id="about" className="about" aria-label="Seção sobre mim">
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
            <p>{aboutText}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
