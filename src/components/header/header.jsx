import { useEffect, useState } from "react";
import { Link } from "react-scroll";
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
    <header id="top" className={styles.header}>
      <Link to="top" smooth={true} className={styles["logo-container"]}>
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
      </Link>
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
            <Link to="about-section" smooth={true}>
              ABOUT
            </Link>
            <Link to="top" smooth={true}>
              SERVICES
            </Link>
            <Link to="top" smooth={true}>
              TECHNOLOGIES
            </Link>
            <Link to="top" smooth={true}>
              HOW TO
            </Link>
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
