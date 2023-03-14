import "./App.css";
import Header from "./components/header/header";
import AboutSection from "./sections/about/about-section";
import HeroSection from "./sections/hero/hero-section";
import ServicesSection from "./sections/services/services-section";
import TechnologiesSection from "./sections/technologies/technologies-section";
import HowTo from "./sections/how-to/how-to";

function App() {
  return (
    <div id="app-wrapper">
      <div className="container">
        <Header />
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <TechnologiesSection />
        <HowTo />
      </div>
    </div>
  );
}

export default App;
