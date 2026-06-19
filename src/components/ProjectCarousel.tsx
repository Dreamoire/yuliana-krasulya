import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperInstance } from "swiper";
import { Autoplay, FreeMode } from "swiper/modules";

import "swiper/css";

import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";
import "../styles/ProjectCarousel.css";

function ProjectCarousel() {
  const swiperRef = useRef<SwiperInstance | null>(null);

  // État UI uniquement — la logique Swiper est appelée directement
  const [isPaused, setIsPaused] = useState(
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

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
      className="project-carousel"
      role="region"
      aria-roledescription="carrousel"
      aria-label="Projets réalisés"
    >
      <div className="project-frame">
        <button
          type="button"
          className="project-nav project-nav--prev"
          aria-label="Projet précédent"
          onClick={handlePrev}
        />
        <button
          type="button"
          className="project-nav project-nav--next"
          aria-label="Projet suivant"
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
          className="project-swiper"
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id} className="project-slide">
              <Link
                to={`/projets#${project.slug}`}
                aria-label={`Ouvrir le projet ${project.title}`}
                className="project-link"
              >
                <ProjectCard project={project} />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default ProjectCarousel;
