import styles from "./hero-section.module.css";
import heroSection from "../../assets/images/hero-section.png";
import rightArrowIcon from "../../assets/icons/arrow-small-right.png";

const HeroSection = () => {
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
    </div>
  );
};

export default HeroSection;
