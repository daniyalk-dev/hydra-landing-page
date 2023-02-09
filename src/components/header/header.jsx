import logoImg from "../../assets/images/logoImg.png";
import logoText from "../../assets/images/logoText.png";
import styles from "./header.module.css";

const Header = () => {
  return (
    <header id={styles.header}>
      <div>
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
        <button>CONTACT US</button>
        <button>JOIN HYDRA</button>
      </div>
    </header>
  );
};

export default Header;
