import sharedStyles from "../shared-section.module.css";
import styles from "./services-section.module.css";
import longArrowIcon from "../../assets/icons/long-arrow.png";
import ServiceCardSlider from "../../components/service-card-slider/service-card-slider";
import vector from "../../assets/vector-images/service-section/vector1.svg";

const ServicesSection = () => {
  return (
    <div id="services-section" className={styles["services-section"]}>
      <div className={sharedStyles.row}>
        <div className={sharedStyles.col}>
          <h2 className={sharedStyles.heading}>
            <div>WHY BUILD</div>
            <div>
              <span>WITH HYDRA?</span>
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
      <ServiceCardSlider />
      <div className={styles["svg-container"]}>
        <img src={vector} alt="vector" />
      </div>
    </div>
  );
};

export default ServicesSection;
