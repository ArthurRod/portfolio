import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

import { Skill } from "../../types/Skill";

interface SkillsCarouselProps {
  skills: Skill[];
}

export function SkillsCarousel({ skills }: SkillsCarouselProps) {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      pagination={{ clickable: true }}
      grabCursor={true}
      centeredSlides={true}
      loop={true}
      modules={[Autoplay, Pagination]}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
    >
      {skills.map((skill: Skill, i: number) => (
        <SwiperSlide key={i}>
          <span>{skill.name}</span>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
