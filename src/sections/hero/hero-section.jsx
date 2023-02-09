import styles from "./hero-section.module.css";
import heroSection from "../../assets/images/hero-section.png";

const HeroSection = () => {
  return (
    <div id={styles["hero-section"]}>
      <div className="row">
        <div className="col">
          <h2>
            <span>Dive</span> into The Depths Of <span>Virtual Reality</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore nisl tincidunt eget.
            Lectus mauris eros in vitae .
          </p>
          <button>BUILD YOUR WORLD</button>
          <a href="#">
            <img src="arrow" alt="link-arrow-icon" />
          </a>
        </div>
        <div className="col">
          <img src={heroSection} alt="hero-img" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
