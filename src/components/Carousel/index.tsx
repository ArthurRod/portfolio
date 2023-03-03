import { useEffect, useState, useRef } from "react";

interface CarouselProps {
  children: JSX.Element[];
}

export function Carousel({ children }: CarouselProps) {
  const carouselItems = useRef<HTMLDivElement | null>(null);
  const scrollWidth = carouselItems.current?.scrollWidth;
  const offsetWidth = carouselItems.current?.offsetWidth;

  const [step, setStep] = useState(0);
  const [countClicks, setCountClicks] = useState(0);
  const [necessaryClicks, setNecessaryClicks] = useState(0);

  useEffect(() => {
    setCarouselParams();
  }, [scrollWidth, offsetWidth]);

  function setCarouselParams() {
    if (scrollWidth && offsetWidth && children && children[0]) {
      const itemWidth = children[0].props.width;
      const step = (offsetWidth * itemWidth) / 100;

      setStep(step);
      setCountClicks(Math.round(offsetWidth / step));
      setNecessaryClicks(Math.round(scrollWidth / step));
    }
  }

  function prevSlide() {
    if (
      carouselItems.current &&
      offsetWidth &&
      countClicks > Math.round(offsetWidth / step)
    ) {
      setCountClicks(countClicks - 1);

      carouselItems.current.scrollLeft -= step;
    }
  }

  function nextSlide() {
    if (carouselItems.current && scrollWidth && offsetWidth) {
      setCountClicks(countClicks + 1);

      if (countClicks === necessaryClicks) {
        carouselItems.current.scrollLeft = 0;
        setCountClicks(Math.round(offsetWidth / step));
      } else {
        carouselItems.current.scrollLeft += step;
      }
    }
  }

  return (
    <section className="container carousel">
      <div ref={carouselItems} className="items">
        {children}
      </div>
      <button onClick={prevSlide}>Prev</button>
      <button onClick={nextSlide}>Next</button>
    </section>
  );
}
