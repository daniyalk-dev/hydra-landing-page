import styles from "./footer.module.css";
import logo from "../../assets/images/logo-footer.png";
import vectorCol from "../../assets/vector-images/footer/vector1.svg";
import vector2 from "../../assets/vector-images/footer/vector2.svg";
import vector2Mob from "../../assets/vector-images/footer/vector2-mob.svg";
import vector3 from "../../assets/vector-images/footer/vector3.svg";
import vector3Mob from "../../assets/vector-images/footer/vector3-mob.svg";
import { Link } from "react-scroll";

const Footer = () => {
  const socialIcons = [
    require("../../assets/icons/facebook.png"),
    require("../../assets/icons/twitter.png"),
    require("../../assets/icons/linkedin.png"),
    require("../../assets/icons/youtube.png"),
    require("../../assets/icons/instagram.png"),
    require("../../assets/icons/pinterest.png"),
  ];
  return (
    <div id="footer" className={styles.footer}>
      <div className={styles["flex-container"]}>
        <div className={styles.logo}>
          <img src={logo} alt="logo" />
        </div>
        <div className={styles["vector-col"]}>
          <img src={vectorCol} alt="vector" />
        </div>
        <div className={styles.links}>
          <Link to="about-section" smooth={true}>
            ABOUT
          </Link>
          <Link to="services-section" smooth={true}>
            SERVICES
          </Link>
          <Link to="technologies-section" smooth={true}>
            TECHNOLOGIES
          </Link>
          <Link to="how-to-section" smooth={true}>
            HOW TO
          </Link>
          <Link to="top" smooth={true}>
            JOIN HYDRA
          </Link>
        </div>
        <div className={styles["vector-col"]}>
          <img src={vectorCol} alt="vector" />
        </div>
        <div className={styles.links}>
          <Link to="top" smooth={true}>
            F.A.Q
          </Link>
          <Link to="top" smooth={true}>
            SITEMAP
          </Link>
          <Link to="top" smooth={true}>
            CONDITIONS
          </Link>
          <Link to="top" smooth={true}>
            LICENSES
          </Link>
        </div>
        <div className={styles["vector-col"]}>
          <img src={vectorCol} alt="vector" />
        </div>
        <div className={styles["social-col"]}>
          <div>SOCIALIZE WITH HYDRA</div>
          <div className={styles["icons-container"]}>
            {socialIcons.map((icon, index) => (
              <a href="#">
                <img key={index} src={icon} alt="social-icon" />
              </a>
            ))}
          </div>
          <div className={styles["btn-wrapper"]}>
            <button className="btn btn-primary">BUILD YOUR WORLD</button>
          </div>
        </div>
        <img className={styles.vector2} src={vector2} alt="vector" />
        <img className={styles.vector3} src={vector3} alt="vector" />
        <img className={styles["vector2-mob"]} src={vector2Mob} alt="vector" />
        <img className={styles["vector3-mob"]} src={vector3Mob} alt="vector" />
      </div>
      <div className={styles["border-line"]}></div>
      <div className={styles.copyright}>
        <span className={styles.text}>2023 © HYDRA LANDING PAGE</span>
        <span> - </span>
        <span className={styles.text}>BY ZINE. E. FALOUTI</span>
        <span> - </span>
        <span className={styles.text}>ALL RIGHTS RESERVED</span>
      </div>
    </div>
  );
};

export default Footer;
