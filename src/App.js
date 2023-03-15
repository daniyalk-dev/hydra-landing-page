import "./App.css";
import Header from "./components/header/header";
import AboutSection from "./sections/about/about-section";
import HeroSection from "./sections/hero/hero-section";
import ServicesSection from "./sections/services/services-section";
import TechnologiesSection from "./sections/technologies/technologies-section";
import HowToSection from "./sections/how-to/how-to-section";
import ContactForm from "./components/contact-form/contact-form";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div id="app-wrapper">
      <div className="container">
        <Header />
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <TechnologiesSection />
        <HowToSection />
        <ContactForm />
        <Footer />
      </div>
    </div>
  );
}

export default App;
