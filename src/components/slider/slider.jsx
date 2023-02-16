import { useEffect, useState } from "react";
import styles from "./slider.module.css";

const Slider = ({ slides }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const resize = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", resize);
    const intervalId = setInterval(handleNext, 5000);
    return () => {
      window.removeEventListener("resize", resize);
      clearInterval(intervalId);
    };
  }, [activeIndex]);

  const handleNext = () => {
    setActiveIndex((index) => (index + 1) % slides.length);
  };

  const handlePrev = () => {
    const newIndex = activeIndex === 0 ? slides.length - 1 : activeIndex - 1;
    setActiveIndex(newIndex);
  };

  return (
    <div className={styles.slider}>
      {screenWidth <= 991 ? (
        <>
          <button className={styles["prev-btn"]} onClick={handlePrev}>
            {"<"}
          </button>
          <button className={styles["next-btn"]} onClick={handleNext}>
            {">"}
          </button>
          <div className={styles.slide}>
            <i className={styles["icon-wrapper"]}>
              <img src={slides[activeIndex].icon} alt="" />
            </i>
            <div className={styles.info}>
              {screenWidth > 575 ? (
                <div className={styles.title}>{slides[activeIndex].title}</div>
              ) : null}
              <div className={styles.detail}>{slides[activeIndex].detail}</div>
            </div>
          </div>
        </>
      ) : (
        slides.map((item, index) => (
          <div key={index} className={styles["contact-option"]}>
            <i className={styles["icon-wrapper"]}>
              <img src={item.icon} alt="" />
            </i>
            <div className={styles.info}>
              <div className={styles.title}>{item.title}</div>
              <div className={styles.detail}>{item.detail}</div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Slider;
