import styles from "./how-to-section.module.css";
import sharedStyles from "../shared-section.module.css";
import longArrowIcon from "../../assets/icons/long-arrow.png";
import ReasonsSlider from "../../components/reasons-slider/reasons-slider";
import vector from "../../assets/vector-images/how-to-section/vector1.svg";

const HowToSection = () => {
  return (
    <div id="how-to-section" className={styles["how-to-section"]}>
      <div className={sharedStyles.row}>
        <div className={sharedStyles.col}>
          <h2 className={sharedStyles.heading}>
            <div>HOW WE BUILD</div>
            <div>
              <span>WITH HYDRA VR?</span>
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
      <div className={styles["svg-container"]}>
        <img src={vector} alt="vector" />
      </div>
      <ReasonsSlider />
    </div>
  );
};

export default HowToSection;
