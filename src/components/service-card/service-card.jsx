import styles from "./service-card.module.css";

const ServiceCard = ({ image, title, desc }) => {
  return (
    <div className={styles["service-card"]}>
      <div className={styles["image-wrapper"]}>
        <img src={image} alt="service-image" />
      </div>
      <h3>{title}</h3>
      <p>{desc}</p>
      <button>TRY IT NOW</button>
    </div>
  );
};

export default ServiceCard;
