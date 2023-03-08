import ServiceCard from "../service-card/service-card";
import styles from "./service-card-slider.module.css";
import simulationImage from "../../assets/images/simulation-service.png";
import educationImage from "../../assets/images/education-service.png";
import selfCareImage from "../../assets/images/self-care-service.png";
import outdoorImage from "../../assets/images/outdoor-service.png";

const ServiceCardSlider = () => {
  const slides = [
    {
      image: simulationImage,
      title: "SIMULATION",
      desc: `Vitae sapien pellentesque habitant morbi
        nunc. Viverra aliquet  porttitor rhoncus 
        libero justo laoreet sit amet vitae.`,
    },
    {
      image: educationImage,
      title: "EDUCATION",
      desc: `Vitae sapien pellentesque habitant morbi
        nunc. Viverra aliquet  porttitor rhoncus 
        libero justo laoreet sit amet vitae.`,
    },
    {
      image: selfCareImage,
      title: "SELF-CARE",
      desc: `Vitae sapien pellentesque habitant morbi
        nunc. Viverra aliquet  porttitor rhoncus 
        libero justo laoreet sit amet vitae.`,
    },
    {
      image: outdoorImage,
      title: "OUTDOOR",
      desc: `Vitae sapien pellentesque habitant morbi
        nunc. Viverra aliquet  porttitor rhoncus 
        libero justo laoreet sit amet vitae.`,
    },
  ];
  return (
    <div className={styles["service-card-slider"]}>
      {slides.map((slide, index) => (
        <ServiceCard
          key={index}
          image={slide.image}
          title={slide.title}
          desc={slide.desc}
        />
      ))}
    </div>
  );
};

export default ServiceCardSlider;
