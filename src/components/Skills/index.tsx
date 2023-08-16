import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import { useTranslation } from "react-i18next";

import { Skill } from "../../types/Skill";
import { SkillCard } from "../SkillCard";

import "swiper/css";
import "swiper/css/pagination";
import "../../styles/skills.scss";

interface SkillsProps {
  skills: Skill[];
}

const breakpointsConfig = {
  320: {
    slidesPerView: 2,
    slidesPerGroup: 2,
    spaceBetween: 0,
  },
  375: {
    slidesPerView: 2,
    slidesPerGroup: 2,
    spaceBetween: 5,
  },
  768: {
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 20,
  },
  1280: {
    slidesPerView: 5,
    slidesPerGroup: 3,
    spaceBetween: 30,
  },
};

export function Skills({ skills }: SkillsProps) {
  const { t } = useTranslation();

  const skillDescriptions = t("skillDescriptions", {
    returnObjects: true,
  }) as string[];

  const skillDescriptionsList = skillDescriptions.map(
    (skillDescription, index) => {
      const delimiterIndex = skillDescription.indexOf("=>");
      const name = skillDescription.slice(0, delimiterIndex);
      const description = skillDescription.slice(
        delimiterIndex,
        skillDescription.length
      );

      return (
        <li key={index}>
          <b>{name}</b>
          <span>{description}</span>
        </li>
      );
    }
  );

  return (
    <section id="skills" className="skills" aria-label="Seção Habilidades">
      <div className="container">
        <div className="blur-content" data-animate="top">
          <div
            className="section-title"
            aria-label="Título da Seção de Habilidades"
            data-animate="left"
          >
            <h2>{t("titles.skills")}</h2>
          </div>
          <Swiper
            breakpoints={breakpointsConfig}
            grabCursor={true}
            loop={true}
            speed={1000}
            pagination={{ clickable: true }}
            modules={[Autoplay, Pagination]}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            data-animate="bottom"
          >
            {skills.map((skill: Skill, i: number) => (
              <SwiperSlide key={i}>
                <SkillCard
                  skillImage={skill.image}
                  skillName={skill.name}
                  skillPercentage={skill.percentage}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="skill-descriptions" data-animate="right">
            <ul>{skillDescriptionsList}</ul>
          </div>
        </div>
      </div>
    </section>
  );
}
