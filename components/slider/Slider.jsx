import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { sliderData } from "./slider-data";
import { useEffect, useState } from "react";
import styles from "./Slider.module.css";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = sliderData.length;

  const autoScroll = true;
  let slideInterval;
  let intervalTime = 5000;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
  };

  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  useEffect(() => {
    if (autoScroll) {
      function auto() {
        slideInterval = setInterval(nextSlide, intervalTime);
      }
      auto();
    }
    return () => clearInterval(slideInterval);
  }, [autoScroll, slideInterval, currentSlide]);

  return (
    <div className={styles.slider}>
      <AiOutlineArrowLeft
        className={`${styles.arrow} ${styles.prev}`}
        onClick={prevSlide}
      />
      <AiOutlineArrowRight
        className={`${styles.arrow} ${styles.next}`}
        onClick={nextSlide}
      />

      {sliderData.map((slide, index) => {
        const { image, heading, desc } = slide;
        return (
          <div
            key={index}
            className={`${styles.slide} ${
              index === currentSlide ? styles.current : ""
            }`}
          >
            {index === currentSlide && (
              <>
                <img className={styles.slideimg} src={image} alt="Slide" />
                <div className={styles.content}>
                  <h2 className={styles.contentheading}>{heading}</h2>
                  <p>{desc}</p>
                  <hr className={styles.hr} />
                  <a
                    href="/sign-in"
                    className={`${styles.btn} ${styles.btnPrimary} text-[#e1e5eb] hover:text-orange-700 transition duration-300`}
                  >
                    Shop Now
                  </a>
                </div>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Slider;
