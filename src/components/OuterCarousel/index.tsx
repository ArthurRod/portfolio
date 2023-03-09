import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

interface OuterCarouselProps {
  children: JSX.Element[];
}

export function OuterCarousel({ children }: OuterCarouselProps) {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      direction={"vertical"}
      loop={true}
      mousewheel={true}
      pagination={{
        clickable: true,
      }}
      modules={[Mousewheel, Pagination]}
    >
      {children &&
        children.length > 0 &&
        children.map((children: JSX.Element, i: number) => (
          <SwiperSlide key={i}>{children}</SwiperSlide>
        ))}
    </Swiper>
  );
}
