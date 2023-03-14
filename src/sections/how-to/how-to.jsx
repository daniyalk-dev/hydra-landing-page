import styles from "./how-to.module.css";
import sharedStyles from "../shared-section.module.css";
import longArrowIcon from "../../assets/icons/long-arrow.png";

const HowTo = () => {
  return (
    <div id="how-to-section">
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
    </div>
  );
};

export default HowTo;
