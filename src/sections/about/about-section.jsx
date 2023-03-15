import sharedStyles from "../shared-section.module.css";
import styles from "./about-section.module.css";
import aboutHero from "../../assets/images/aboutHero.png";
import longArrowIcon from "../../assets/icons/long-arrow.png";
import vector1 from "../../assets/vector-images/about-section/vector1.svg";
import vector2 from "../../assets/vector-images/about-section/vector2.svg";

const AboutSection = () => {
  return (
    <div id="about-section" className={styles["about-section"]}>
      <div className={sharedStyles.row}>
        <div className={sharedStyles.col}>
          <h2 className={sharedStyles.heading}>
            <div>INTRODUCTION</div>
            <div>
              <span>TO HYDRA VR</span>
              <a href="#">
                <img src={longArrowIcon} alt="arrow-icon" />
              </a>
            </div>
          </h2>
        </div>
        <div className={`${sharedStyles.col} ${sharedStyles["not-important"]}`}>
          <p>
            Vitae sapien pellentesque habitant morbi tristique senectus et netus
            et. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit
            amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra
            aliquet eget sit amet tellus. Ornare lectus sit amet est placerat
            in. Lectus magna fringilla urna porttitor rhoncus vitae.
          </p>
        </div>
      </div>
      <div className={`${sharedStyles.row} ${styles.row}`}>
        <div className={`${sharedStyles.col} ${styles.col}`}>
          <img src={vector1} alt="vector" className={styles.vector} />
          <img src={vector2} alt="vector" className={styles.vector} />
          <img
            src={aboutHero}
            alt="about-hero"
            className={styles["about-hero"]}
          />
        </div>
        <div className={`${sharedStyles.col} ${styles.col}`}>
          <h2>
            <div>ABOUT</div>
            <div>
              <span>HYDRA VR</span>
            </div>
          </h2>
          <p>
            Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus
            mattis rhoncus urna neque viverra justo. Vivamus at augue eget arcu
            dictum. Ultrices gravida dictum fusce ut placerat orci. Aenean et
            tortor at risus viverra adipiscing at in. Mattis aliquam faucibus
            purus in massa. Est placerat in egestas erat imperdiet sed.
            Consequat semper viverra nam libero justo laoreet sit amet. Aliquam
            etiam erat velit scelerisque in dictum non consectetur a. Laoreet
            sit amet cursus sit amet. Vel eros donec ac odio tempor orci
            dapibus. Sem nulla pha retra diam sit amet nisl suscipit adipiscing
            bibendum. Leo a diam sollicitudi n tempor.
          </p>
          <div className={styles["call-to-action"]}>
            <button className="btn btn-primary">LET'S GET IN TOUCH</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
