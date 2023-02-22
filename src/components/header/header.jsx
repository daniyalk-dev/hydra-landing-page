import { useEffect, useState } from "react";
import logoImg from "../../assets/images/logoImg.png";
import logoImgMob from "../../assets/images/logoImg-mobile.png";
import logoText from "../../assets/images/logoText.png";
import logoTextMob from "../../assets/images/logoText-mobile.png";
import styles from "./header.module.css";
import hamburgerIcon from "../../assets/icons/hamburger.png";

const Header = () => {
  const [show, setShow] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const resize = () => {
    if (window.innerWidth > 767) setShow(false);
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <header id={styles.header}>
      <a href="#" className={styles["logo-container"]}>
        {screenWidth > 767 ? (
          <>
            <img src={logoImg} alt="logo-img" />
            <img src={logoText} alt="logo-text" />
          </>
        ) : (
          <>
            <img src={logoImgMob} alt="logo-img-mob" />
            <img src={logoTextMob} alt="logo-text-mob" />
          </>
        )}
      </a>
      <div className={styles.toggler}>
        <button onClick={() => setShow(!show)}>
          <i>
            <img src={hamburgerIcon} alt="collapse-icon" />
          </i>
        </button>
      </div>
      {!show && screenWidth <= 767 ? null : (
        <>
          <nav>
            <a href="#">ABOUT</a>
            <a href="#">SERVICES</a>
            <a href="#">TECHNOLOGIES</a>
            <a href="#">HOW TO</a>
          </nav>
          <div className={styles["call-to-action"]}>
            <button className="btn btn-secondary">CONTACT US</button>
            <button className="btn btn-primary">JOIN HYDRA</button>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
