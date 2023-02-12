import { useEffect, useState } from "react";
import styles from "./slider.module.css";

const Slider = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(handleNext, 5000);
    return () => clearInterval(intervalId);
  }, [activeIndex]);

  const handleNext = () => {
    setActiveIndex((index) => (index + 1) % items.length);
  };
  const handlePrev = () => {
    const newIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(newIndex);
  };
  return (
    <div className={styles.carousel}>
      <button className={styles["prev-btn"]} onClick={handlePrev}>
        {"<"}
      </button>
      <button className={styles["next-btn"]} onClick={handleNext}>
        {">"}
      </button>
      {/* {items.map((item, index) => (
        <div key={index} className="carousel-item">
          <div className={styles["icon-wrapper"]}>
            <i>
              <img src={item.icon} alt="" />
            </i>
          </div>
          <div className={styles.info}>
            <div className="title">{item.title}</div>
            <div className="detail">{item.detail}</div>
          </div>
        </div>
      ))} */}
      <div className={styles["carousel-item"]}>
        <i className={styles["icon-wrapper"]}>
          <img src={items[activeIndex].icon} alt="" />
        </i>
        <div>
          <div className={styles.title}>{items[activeIndex].title}</div>
          <div className={styles.detail}>{items[activeIndex].detail}</div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
