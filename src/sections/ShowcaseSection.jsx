import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { projects } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const demoProjects = new Set([
  "Multi-Agent Orchestration System",
  "AI Study Assistant",
  "AI Mock Interviewer",
  "Apple iPhone 15 Clone",
]);

const ProjectCard = ({ project }) => {
  const hasDemo = demoProjects.has(project.title) && project.liveLink;

  return (
    <article className="project-card group">
      <div className="project-image-wrap">
        <img src={project.imgPath} alt={`${project.title} preview`} className="project-image" />
        <div className="project-overlay">
          <div className="overlay-actions">
            {hasDemo && (
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-action primary">
                Live Demo
              </a>
            )}
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-action">
              GitHub Repository
            </a>
          </div>
        </div>
      </div>
      <div className="project-content">
        <p className="project-date">{project.date}</p>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-tech">
          {project.tech.map((tag) => <span key={tag}>{tag}</span>)}
        </div>
      </div>
    </article>
  );
};

const ShowcaseSection = () => {
  const sectionRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      ".project-card",
      { y: 48, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 70%" },
      }
    );
  }, []);

  return (
    <section id="work" ref={sectionRef} className="projects-section">
      <div className="section-shell">
        <div className="section-heading-row">
          <div>
            <p className="section-kicker">Featured Projects</p>
            <h2>Featured Projects</h2>
          </div>
          <p>
            A collection of AI-powered applications and backend-focused full-stack systems focused on solving practical problems through clean architecture and modern technologies.
          </p>
        </div>

        <div className="project-carousel" aria-label="Projects carousel">
          {projects.map((project) => <ProjectCard key={project.title} project={project} />)}
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
