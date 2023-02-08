import Header from "../../components/header/header";

const HeroSection = () => {
  return (
    <div id="hero-section">
      <Header />
      <div className="row">
        <div className="col">
          <h2>Dive into The Depths Of Virtual Reality</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore nisl tincidunt eget.
            Lectus mauris eros in vitae .
          </p>
          <button>BUILD YOUR WORLD</button>
          <a href="#">
            <img src="arrow" alt="link-arrow-icon" />
          </a>
        </div>
        <div className="col">
          <img src="" alt="hero-img" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
