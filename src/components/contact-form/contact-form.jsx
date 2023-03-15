import styles from "./contact-form.module.css";
import { useState, useEffect } from "react";
import vector from "../../assets/vector-images/contact-form/vector1.svg";
import vectorMob from "../../assets/vector-images/contact-form/vector1-mob.svg";

const ContactForm = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const resize = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <div id="contact-form" className={styles["contact-form"]}>
      <h2>
        <div>JOIN HYDRA</div>
        <div className={styles["svg-container"]}>
          <img src={screenWidth <= 767 ? vectorMob : vector} alt="vector" />
        </div>
        <div>Let's Build Your VR Experience</div>
      </h2>
      <form>
        <div className={styles["form-group"]}>
          <input type="text" placeholder="First Name" name="first-name" />
        </div>
        <div className={styles["form-group"]}>
          <input type="text" placeholder="Last Name" name="last-name" />
        </div>
        <div className={styles["form-group"]}>
          <input type="email" placeholder="Email" name="email" />
        </div>
        <div className={styles["form-group"]}>
          <input
            type="tel"
            placeholder="Phone Number"
            name="phone-number"
            pattern="[0-9]{11}"
          />
        </div>
        <div className={`${styles["form-group"]} ${styles.expand}`}>
          <input type="text" placeholder="Subject" name="subject" />
        </div>
        <div className={`${styles["form-group"]} ${styles.expand}`}>
          <textarea
            type="text"
            placeholder="Tell Us Something..."
            name="tell-us"
          ></textarea>
        </div>
        <div className={styles["btn-wrapper"]}>
          <button className="btn btn-primary">SEND TO HYDRA</button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
