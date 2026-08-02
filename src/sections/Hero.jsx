import { useGSAP } from "@gsap/react";
import Button from "../components/Button";
import HeroExperience from "../components/Models/HeroModels/HeroExperience";
import gsap from "gsap";

const highlights = ["Software Engineer", "AI Engineer", "Full-Stack Developer", "Problem Solver"];

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-reveal",
      { y: 36, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.12, duration: 0.9, ease: "power3.out" }
    );

    gsap.fromTo(
      ".hero-model-card",
      { scale: 0.96, opacity: 0, y: 28 },
      { scale: 1, opacity: 1, y: 0, duration: 1.1, delay: 0.25, ease: "power3.out" }
    );
  }, []);

  return (
    <section id="hero" className="hero-section">
      <div className="hero-glow hero-glow-one" />
      <div className="hero-glow hero-glow-two" />

      <div className="hero-container">
        <div className="hero-content-grid">
          <div className="hero-copy-block">
            <p className="hero-reveal hero-eyebrow">Rudranil Mondal · Software Engineering Portfolio</p>
            <h1 className="hero-reveal hero-heading">
              Building AI-powered products and scalable full-stack systems.
            </h1>
            <p className="hero-reveal hero-copy">
              Software engineer focused on full-stack development, artificial intelligence, and strong computer science fundamentals. I build intelligent applications using React, FastAPI, LLMs, and modern engineering practices — from idea to deployment.
            </p>

            <div className="hero-reveal hero-tags">
              {highlights.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>

            <div className="hero-reveal hero-actions">
              <Button className="md:w-72 w-60 h-14" targetId="work" text="View Projects" />
              <a className="secondary-cta" href="#contact">Let's Connect</a>
            </div>

            <div className="hero-reveal hero-metrics">
              <div><strong>3+</strong><span>AI Applications Built</span></div>
              <div><strong>350+</strong><span>LeetCode Problems Solved</span></div>
              <div><strong>9.2</strong><span>CGPA in CSE</span></div>
            </div>
          </div>

          <figure className="hero-model-card" aria-label="Interactive developer workspace model">
            <div className="hero-model-accent" />
            <div className="hero-3d-layout-modern">
              <HeroExperience />
            </div>
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Hero;
