import React, { useEffect, useState } from "react";
import SwiperCore from "swiper";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import Card from "./Card";
import LeftNavigationButton from "./LeftButton";
import RightNavigationButton from "./RightButton";
import styles from "../modules/Carousel.module.css";

SwiperCore.use([Navigation]);

const Carousel = ({ cards, isSongSection, onClick }) => {
  const [slidesPerView, setSlidesPerView] = useState(1);
  const [swiper, setSwiper] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const updateSlidesPerView = () => {
      const cardWidth = 165;
      const screenWidth = window.innerWidth;
      const newSlidesPerView = Math.floor(screenWidth / cardWidth);
      setSlidesPerView(newSlidesPerView || 1);
    };

    updateSlidesPerView();
    window.addEventListener("resize", updateSlidesPerView);
    return () => window.removeEventListener("resize", updateSlidesPerView);
  }, []);

  const goNext = () => {
    if (swiper !== null && currentIndex < cards.length - 1) {
      swiper.slideNext();
      setCurrentIndex(currentIndex + 1);
    }
  };

  const goPrev = () => {
    if (swiper !== null && currentIndex > 0) {
      swiper.slidePrev();
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className={styles.carouselContainer}>
      <Swiper
        spaceBetween={5}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        slidesPerView={slidesPerView}
        onSwiper={setSwiper}
        onSlideChange={(swiper) => setCurrentIndex(swiper.activeIndex)}
      >
        {cards.map((card, index) => (
          <SwiperSlide key={index}>
            {
            isSongSection === "Songs" && (
              <Card album={card} isSongSection={isSongSection} onClick={onClick}/>
            )}
            {isSongSection !== "Songs" && <Card album={card} numSongs={card.songs.length}/>}
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={styles.navigationButtons}>
        <LeftNavigationButton
          className={styles.leftButton}
          onClick={goPrev}
          disabled={currentIndex === 0}
        />
        <RightNavigationButton
          className={styles.rightButton}
          onClick={goNext}
          disabled={currentIndex + slidesPerView === cards.length}
        />
      </div>
    </div>
  );
};

export default Carousel;
