import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";

import { Skill } from "../../types/Skill";
import { SkillCard } from "../SkillCard";

import "swiper/css";
import "swiper/css/pagination";
import "../../styles/skills.scss";

interface SkillsProps {
  skills: Skill[];
}

export function Skills({ skills }: SkillsProps) {
  return (
    <section id="skills" className="skills" aria-label="Seção Habilidades">
      <div className="container">
        <div
          className="section-title"
          aria-label="Título da Seção de Habilidades"
        >
          <h2 data-animate="bottom">Habilidades</h2>
        </div>
        <Swiper
          slidesPerView={5}
          slidesPerGroup={3}
          spaceBetween={30}
          grabCursor={true}
          loop={true}
          speed={1000}
          pagination={{ clickable: true }}
          modules={[Autoplay, Pagination]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          data-animate="right"
        >
          {skills.map((skill: Skill, i: number) => {
            const { image, name, percentage } = skill;

            return (
              <SwiperSlide key={i}>
                <SkillCard
                  skillImage={image}
                  skillName={name}
                  skillPercentage={percentage}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}
