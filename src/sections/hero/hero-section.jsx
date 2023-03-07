import { useState, useEffect } from "react";
import styles from "./hero-section.module.css";
import heroImg from "../../assets/images/heroImg.png";
import heroImgMob from "../../assets/images/heroImg-mobile.png";
import rightArrowIcon from "../../assets/icons/arrow-small-right.png";
import Slider from "../../components/contact-slider/contact-slider";
import locationIcon from "../../assets/icons/location-icon.png";
import phoneIcon from "../../assets/icons/phone-icon.png";
import messageIcon from "../../assets/icons/message-icon.png";
import vector1 from "../../assets/vectorImages/heroSection/vector1.svg";
import vector2 from "../../assets/vectorImages/heroSection/vector2.svg";
import vector3 from "../../assets/vectorImages/heroSection/vector3.svg";
import vector4 from "../../assets/vectorImages/heroSection/vector4.svg";

const HeroSection = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const resize = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  const slides = [
    {
      icon: locationIcon,
      title: "Pay Us a Visit",
      detail: "Union St, Seattle, WA 98101, United States",
    },
    {
      icon: phoneIcon,
      title: "Give Us a Call",
      detail: "(110) 1111-1010",
    },
    {
      icon: messageIcon,
      title: "Send Us a Message",
      detail: "Contact@HydraVTech.com",
    },
  ];
  return (
    <div id="hero-section" className={styles["hero-section"]}>
      <div className={styles.row}>
        <div className={styles.col}>
          <img className={styles.vector} src={vector4} alt="vector4" />
          <h2>
            <span>Dive</span> into The Depths Of <span>Virtual Reality</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore nisl tincidunt eget.
            Lectus mauris eros in vitae .
          </p>
          <div className={styles["call-to-action"]}>
            <button className="btn btn-primary">BUILD YOUR WORLD</button>
            <a href="#">
              <i>
                <img src={rightArrowIcon} alt="link-arrow-icon" />
              </i>
            </a>
          </div>
        </div>
        <div className={styles.col}>
          <img className={styles.vector} src={vector1} alt="vector1" />
          <img className={styles.vector} src={vector2} alt="vector2" />
          <img className={styles.vector} src={vector3} alt="vector3" />
          <div id={styles["heroImgWrapper"]}>
            <img
              src={screenWidth > 575 ? heroImg : heroImgMob}
              alt="hero-img"
            />
          </div>
        </div>
      </div>
      <div className={styles["contact-options"]}>
        <div>
          <Slider slides={slides} />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
