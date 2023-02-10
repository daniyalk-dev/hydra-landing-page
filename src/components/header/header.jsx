import logoImg from "../../assets/images/logoImg.png";
import logoText from "../../assets/images/logoText.png";
import styles from "./header.module.css";

const Header = () => {
  return (
    <header id={styles.header}>
      <div className={styles["logo-container"]}>
        <img src={logoImg} alt="logo-img" />
        <img src={logoText} alt="logo-text" />
      </div>
      <nav>
        <a href="#">ABOUT</a>
        <a href="#">SERVICES</a>
        <a href="#">TECHNOLOGIES</a>
        <a href="#">HOW TO</a>
      </nav>
      <div>
        <button className="btn btn-secondary">CONTACT US</button>
        <button className="btn btn-primary">JOIN HYDRA</button>
      </div>
    </header>
  );
};

export default Header;
