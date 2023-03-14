import styles from "./technologies-section.module.css";

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
      </div>
    </div>
  );
};

export default TechnologiesSection;
