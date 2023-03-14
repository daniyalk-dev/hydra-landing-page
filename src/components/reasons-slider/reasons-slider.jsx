import { useState, useEffect } from "react";
import styles from "./reasons-slider.module.css";
import arrowIcon from "../../assets/icons/arrow-small-right.png";

const ReasonsSlider = () => {
  const slides = [
    `3D Conception
  & Design`,
    `Interaction
  Design`,
    `VR World
  User Testing`,
    `Hydra VR
  Deploy`,
  ];
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
    <div className={styles["reasons-slider"]}>
      {screenWidth <= 991 ? (
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
            className={`${styles.reason} ${
              sliding === "forward" ? styles["sliding-forward"] : ""
            } ${sliding === "backward" ? styles["sliding-backward"] : ""}`}
            onAnimationEnd={() => setSliding(null)}
          >
            <div className={styles["bubble-outer"]}>
              <div className={styles["bubble-inner"]}>
                {"0" + (activeIndex + 1)}
              </div>
            </div>
            <div className={styles["title-wrapper"]}>
              <i className={styles["arrow-icon"]}>
                <img src={arrowIcon} alt="arrow-icon" />
              </i>
              <span className={styles["title"]}>{slides[activeIndex]}</span>
            </div>
          </div>
        </>
      ) : (
        slides.map((slide, index) => (
          <div key={index} className={styles["reason"]}>
            <div className={styles["bubble-outer"]}>
              <div className={styles["bubble-inner"]}>{"0" + (index + 1)}</div>
            </div>
            <div className={styles["title-wrapper"]}>
              <i className={styles["arrow-icon"]}>
                <img src={arrowIcon} alt="arrow-icon" />
              </i>
              <span className={styles["title"]}>{slide}</span>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default ReasonsSlider;
