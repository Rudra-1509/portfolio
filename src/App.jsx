import NavBar from "./components/NavBar";
import FeatureCards from "./sections/FeatureCards";
import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
import TechStack from "./sections/TechStack";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
const App = () => {
  return (
    <main>
      <div>
        <NavBar />
        <Hero />
        <ShowcaseSection />
        <FeatureCards />
        <TechStack />
        <Contact />
        <Footer />
      </div>
    </main>
  );
};

export default App;
