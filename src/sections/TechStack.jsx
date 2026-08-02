import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { techCategories } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const TechStack = () => {
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

  return (
    <section id="skills" className="stack-section">
      <div className="section-shell">
        <div className="section-heading-row">
          <div>
            <p className="section-kicker">Technical toolkit</p>
            <h2>Focused stack for full-stack AI product engineering.</h2>
          </div>
          <p>
            Clean, practical technologies I use to ship responsive interfaces, APIs, retrieval systems, agent workflows, and deployable cloud apps.
          </p>
        </div>

        <div className="stack-grid">
          {techCategories.map((category) => (
            <article className="stack-card" key={category.title}>
              <div className="stack-card-top">
                <span>{category.icon}</span>
                <h3>{category.title}</h3>
              </div>
              <div className="stack-pills">
                {category.items.map((item) => <span key={item}>{item}</span>)}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
