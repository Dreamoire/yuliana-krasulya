import { useEffect, useRef, useState } from "react";
import { Fancybox } from "@fancyapps/ui";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperInstance } from "swiper";
import { Autoplay, FreeMode } from "swiper/modules";

import "@fancyapps/ui/dist/fancybox/fancybox.css";
import "swiper/css";

import { graphics } from "../data/graphics";
import "../styles/GraphicsCarousel.css";

const GROUP_NAME = "graphics";
const GROUP_SELECTOR = `[data-fancybox='${GROUP_NAME}']`;

function GraphicsCarousel() {
  const swiperRef = useRef<SwiperInstance | null>(null);

  // État UI uniquement — la logique Swiper est appelée directement
  const [isPaused, setIsPaused] = useState(
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  useEffect(() => {
    Fancybox.bind(GROUP_SELECTOR);
    return () => {
      Fancybox.unbind(GROUP_SELECTOR);
      Fancybox.close();
    };
  }, []);

  // Stopper l'autoplay si préférence OS active au chargement
  const handleSwiperInit = (swiper: SwiperInstance) => {
    swiperRef.current = swiper;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      swiper.autoplay?.stop();
    }
  };

  // Écouter les changements de préférence OS en temps réel
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        swiperRef.current?.autoplay?.stop();
        setIsPaused(true);
      }
    };
    mq.addEventListener("change", handleChange);
    return () => mq.removeEventListener("change", handleChange);
  }, []);

  // Arrêter l'autoplay au démontage
  useEffect(() => {
    return () => {
      swiperRef.current?.autoplay?.stop();
    };
  }, []);

  const handlePrev = () => {
    const swiper = swiperRef.current;
    if (!swiper) return;
    swiper.autoplay?.stop();
    setIsPaused(true);
    swiper.slideToClosest(250);
    swiper.slidePrev(350);
  };

  const handleNext = () => {
    const swiper = swiperRef.current;
    if (!swiper) return;
    swiper.autoplay?.stop();
    setIsPaused(true);
    swiper.slideToClosest(250);
    swiper.slideNext(350);
  };

  const togglePause = () => {
    const swiper = swiperRef.current;
    if (!swiper) return;
    if (isPaused) {
      swiper.autoplay?.start();
      setIsPaused(false);
    } else {
      swiper.autoplay?.stop();
      // Lire la position visuelle réelle (mid-animation) via getComputedStyle
      // et geler le wrapper directement — setTransition/setTranslate ne sont
      // pas exposés dans les types Swiper.
      const wrapper = swiper.wrapperEl;
      const { transform } = window.getComputedStyle(wrapper);
      const { m41: currentX } = new DOMMatrixReadOnly(transform);
      wrapper.style.transitionDuration = "0ms";
      wrapper.style.transform = `translate3d(${currentX}px, 0px, 0px)`;
      setIsPaused(true);
    }
  };

  return (
    <div
      className="graphics-carousel"
      role="region"
      aria-roledescription="carrousel"
      aria-label="Créations visuelles"
    >
      <div className="graphics-frame">
        <button
          type="button"
          className="graphics-nav graphics-nav--prev"
          aria-label="Image précédente"
          onClick={handlePrev}
        />
        <button
          type="button"
          className="graphics-nav graphics-nav--next"
          aria-label="Image suivante"
          onClick={handleNext}
        />
        <button
          type="button"
          className="carousel-pause"
          aria-label={
            isPaused
              ? "Reprendre le défilement automatique"
              : "Mettre en pause le défilement automatique"
          }
          onClick={togglePause}
        >
          <span aria-hidden="true">{isPaused ? "▶" : "⏸"}</span>
        </button>

        <Swiper
          modules={[Autoplay, FreeMode]}
          onSwiper={handleSwiperInit}
          freeMode={{ enabled: true, sticky: false }}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
            reverseDirection: false,
          }}
          speed={19000}
          slidesPerView="auto"
          breakpoints={{
            0: { spaceBetween: 10 },
            768: { spaceBetween: 12 },
            1100: { spaceBetween: 16 },
          }}
          className="graphics-swiper"
        >
          {graphics.map((item) => (
            <SwiperSlide key={item.id} className="graphics-slide">
              <a
                href={item.fullSrc}
                data-fancybox={GROUP_NAME}
                data-caption={item.alt}
                aria-label={`Voir en grand : ${item.alt}`}
                className="graphics-link"
              >
                <img
                  src={item.thumbSrc}
                  alt={item.alt}
                  loading="lazy"
                  className="graphics-thumb"
                />
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default GraphicsCarousel;
