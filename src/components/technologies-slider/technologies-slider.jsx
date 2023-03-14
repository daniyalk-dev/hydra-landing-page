import { useState, useEffect } from "react";
import styles from "./technologies-slider.module.css";
import img1 from "../../assets/icons/hydra-tech1.png";
import img2 from "../../assets/icons/hydra-tech2.png";
import img3 from "../../assets/icons/hydra-tech3.png";
import img4 from "../../assets/icons/hydra-tech4.png";

const TechnologiesSlider = () => {
  const slides = [img1, img2, img3, img4];
  const [activeIndex, setActiveIndex] = useState(0);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [sliding, setSliding] = useState(null);

  const resize = () => {
    setScreenWidth(window.innerWidth);
  };

  const handleNext = () => {
    setActiveIndex((index) => (index + 1) % slides.length);
    setSliding("forward");
  };

  const handlePrev = () => {
    const newIndex = activeIndex === 0 ? slides.length - 1 : activeIndex - 1;
    setActiveIndex(newIndex);
    setSliding("backward");
  };

  useEffect(() => {
    window.addEventListener("resize", resize);
    const intervalId = setInterval(handleNext, 5000);
    return () => {
      window.removeEventListener("resize", resize);
      clearInterval(intervalId);
    };
  }, [activeIndex]);

  return (
    <div className={styles["tech-slider"]}>
      {screenWidth <= 767 ? (
        <>
          <div className={styles["btn-wrapper"]}>
            <button className={styles["prev-btn"]} onClick={handlePrev}>
              {"<"}
            </button>
          </div>
          <div className={styles["btn-wrapper"]}>
            <button className={styles["next-btn"]} onClick={handleNext}>
              {">"}
            </button>
          </div>
          <div
            className={`${styles["tech-icon-wrapper"]} ${
              sliding === "forward" ? styles["sliding-forward"] : ""
            } ${sliding === "backward" ? styles["sliding-backward"] : ""}`}
            onAnimationEnd={() => setSliding(null)}
          >
            <img src={slides[activeIndex]} alt="tech-icon" />
          </div>
        </>
      ) : (
        slides.map((slide, index) => (
          <div key={index} className={styles["tech-icon-wrapper"]}>
            <img src={slide} alt="tech-icon" />
          </div>
        ))
      )}
    </div>
  );
};

export default TechnologiesSlider;
