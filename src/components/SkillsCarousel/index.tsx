import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";

import { Skill } from "../../types/Skill";
import { SkillCard } from "../SkillCard";

import "swiper/css";
import "swiper/css/pagination";
import "../../styles/skills-carousel.scss";

interface SkillsCarouselProps {
  skills: Skill[];
}

export function SkillsCarousel({ skills }: SkillsCarouselProps) {
  return (
    <section className="skills-carousel" aria-label="Seção Habilidades">
      <div className="container">
        <div className="section-title">
          <h2>Habilidades</h2>
        </div>
        <Swiper
          slidesPerView={5}
          slidesPerGroup={2}
          spaceBetween={30}
          grabCursor={true}
          loop={true}
          pagination={{ clickable: true }}
          modules={[Autoplay, Pagination]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
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
