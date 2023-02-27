import "./App.css";
import Header from "./components/header/header";
import AboutSection from "./sections/about/aboutSection";
import HeroSection from "./sections/hero/hero-section";

function App() {
  return (
    <div id="app-wrapper">
      <div className="container">
        <Header />
        <HeroSection />
        <AboutSection />
      </div>
    </div>
  );
}

export default App;
