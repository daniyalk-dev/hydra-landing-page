import styles from "./technologies-section.module.css";
import chevronIcon from "../../assets/icons/chevron-icon.png";
import TechnologiesSlider from "../../components/technologies-slider/technologies-slider";

const TechnologiesSection = () => {
  return (
    <div id="technologies-section">
      <div className={styles["hero-background"]}>
        <h2>
          <div>TECHNOLOGIES & HARDWARE</div>
          <div>
            <span>USED BY HYDRA VR.</span>
          </div>
        </h2>
        <div className={styles["collapse-btn-wrapper"]}>
          <button>
            <img src={chevronIcon} alt="chevron-icon" />
          </button>
        </div>
      </div>
      <TechnologiesSlider />
    </div>
  );
};

export default TechnologiesSection;
