import NavBar from "./components/NavBar";
import LogoSection from "./sections/LogoSection";
import FeatureCards from "./sections/FeatureCards";
import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
import ExperienceSection from "./sections/ExperienceSection";
import TechStack from "./sections/TechStack";
import Testimonials from "./sections/Testimonials";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
const App = () => {
  return (
    <main>
      <div>
        <NavBar />
        <Hero />
        <ShowcaseSection />
        {/* <LogoSection /> */}
        <FeatureCards />
        {/* <ExperienceSection /> */}
        <TechStack />
        {/* <Testimonials /> */}
        <Contact />
        <Footer/>
      </div>
    </main>
  );
};

export default App;
