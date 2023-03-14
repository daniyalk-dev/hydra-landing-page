import "./App.css";
import Header from "./components/header/header";
import AboutSection from "./sections/about/about-section";
import HeroSection from "./sections/hero/hero-section";
import ServicesSection from "./sections/services/services-section";
import TechnologiesSection from "./sections/technologies/technologies-section";

function App() {
  return (
    <div id="app-wrapper">
      <div className="container">
        <Header />
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <TechnologiesSection />
      </div>
    </div>
  );
}

export default App;
