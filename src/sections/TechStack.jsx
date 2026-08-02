import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { techCategories } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const TechStack = () => {
  const languages = techCategories.find((category) => category.title === "Languages");
  const frontend = techCategories.find((category) => category.title === "Frontend Development");
  const backend = techCategories.find((category) => category.title === "Backend Development");
  const ai = techCategories.find((category) => category.title === "AI / Machine Learning");
  const tools = techCategories.find((category) => category.title === "Database / Cloud / Tools");

  useGSAP(() => {
    gsap.fromTo(
      ".stack-card",
      { y: 36, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.75,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: { trigger: "#skills", start: "top 70%" },
      }
    );
  }, []);

  const renderCard = (category, className = "") => (
    <article className={`stack-card ${className}`} key={category.title}>
      <div className="stack-card-top">
        <span>{category.icon}</span>
        <div>
          <p>{category.label}</p>
          <h3>{category.title}</h3>
        </div>
      </div>
      <div className="stack-pills">
        {category.items.map((item) => <span key={item}>{item}</span>)}
      </div>
    </article>
  );

  return (
    <section id="skills" className="stack-section">
      <div className="section-shell">
        <div className="section-heading-row">
          <div>
            <p className="section-kicker">Technologies I Work With</p>
            <h2>A practical stack for building AI-powered full-stack applications, scalable APIs, and modern web experiences.</h2>
          </div>
        </div>

        <div className="stack-layout">
          {renderCard(languages, "stack-card-foundation")}
          <div className="stack-row">
            {renderCard(frontend)}
            {renderCard(backend)}
          </div>
          <div className="stack-row">
            {renderCard(ai, "stack-card-ai")}
            {renderCard(tools)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
