import styles from "./hero-section.module.css";
import heroSection from "../../assets/images/hero-section.png";
import rightArrowIcon from "../../assets/icons/arrow-small-right.png";
import Slider from "../../components/slider/slider";
import locationIcon from "../../assets/icons/location-icon.png";
import phoneIcon from "../../assets/icons/phone-icon.png";
import messageIcon from "../../assets/icons/message-icon.png";

const HeroSection = () => {
  const items = [
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
    <div id={styles["hero-section"]}>
      <div className={styles.row}>
        <div className={styles.col}>
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
          <img src={heroSection} alt="hero-img" />
        </div>
      </div>
      <div className={styles["contact-options"]}>
        <Slider items={items} />
      </div>
    </div>
  );
};

export default HeroSection;
