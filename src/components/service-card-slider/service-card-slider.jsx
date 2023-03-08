import { useState, useEffect } from "react";
import ServiceCard from "../service-card/service-card";
import styles from "./service-card-slider.module.css";
import simulationImage from "../../assets/images/simulation-service.png";
import educationImage from "../../assets/images/education-service.png";
import selfCareImage from "../../assets/images/self-care-service.png";
import outdoorImage from "../../assets/images/outdoor-service.png";

const ServiceCardSlider = () => {
  const slides = [
    {
      image: simulationImage,
      title: "SIMULATION",
      desc: `Vitae sapien pellentesque habitant morbi
        nunc. Viverra aliquet  porttitor rhoncus 
        libero justo laoreet sit amet vitae.`,
    },
    {
      image: educationImage,
      title: "EDUCATION",
      desc: `Vitae sapien pellentesque habitant morbi
        nunc. Viverra aliquet  porttitor rhoncus 
        libero justo laoreet sit amet vitae.`,
    },
    {
      image: selfCareImage,
      title: "SELF-CARE",
      desc: `Vitae sapien pellentesque habitant morbi
        nunc. Viverra aliquet  porttitor rhoncus 
        libero justo laoreet sit amet vitae.`,
    },
    {
      image: outdoorImage,
      title: "OUTDOOR",
      desc: `Vitae sapien pellentesque habitant morbi
        nunc. Viverra aliquet  porttitor rhoncus 
        libero justo laoreet sit amet vitae.`,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [sliding, setSliding] = useState(null);

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
    setSliding("forward");
  };

  const handlePrev = () => {
    const newIndex = activeIndex === 0 ? slides.length - 1 : activeIndex - 1;
    setActiveIndex(newIndex);
    setSliding("backward");
  };
  return (
    <div className={styles["service-card-slider"]}>
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
            className={`${styles.slide} ${
              sliding === "forward" ? styles["sliding-forward"] : ""
            } ${sliding === "backward" ? styles["sliding-backward"] : ""}`}
            onAnimationEnd={() => setSliding(null)}
          >
            <ServiceCard
              image={slides[activeIndex].image}
              title={slides[activeIndex].title}
              desc={slides[activeIndex].desc}
            />
          </div>
        </>
      ) : (
        slides.map((slide, index) => (
          <ServiceCard
            key={index}
            image={slide.image}
            title={slide.title}
            desc={slide.desc}
          />
        ))
      )}
    </div>
  );
};

export default ServiceCardSlider;
