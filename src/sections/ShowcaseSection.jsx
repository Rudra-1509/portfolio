import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { projects } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const slideRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const currentProject = projects[activeIndex];

  useGSAP(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );
  }, []);

  useEffect(() => {
    if (slideRef.current) {
      gsap.fromTo(
        slideRef.current,
        { y: 32, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: "power2.out" }
      );
    }
  }, [activeIndex]);

  const prevProject = () => {
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const nextProject = () => {
    setActiveIndex((prev) => (prev + 1) % projects.length);
  };

  return (
    <section id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full max-w-[1200px] mx-auto">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
            <div>
              <p className="text-blue-100 uppercase tracking-[0.3em] text-sm mb-3">
                Featured Projects
              </p>
              <h2 className="text-3xl md:text-4xl font-bold">Projects Carousel</h2>
              <p className="text-white-50 max-w-2xl mt-4">
                Swipe through the most impactful applications I built. Each project highlights real engineering work, clear technical decisions, and working deployments.
              </p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={prevProject}
                className="px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white transition hover:bg-white/10"
                aria-label="Previous project"
              >
                Prev
              </button>
              <button
                onClick={nextProject}
                className="px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white transition hover:bg-white/10"
                aria-label="Next project"
              >
                Next
              </button>
            </div>
          </div>

          <div
            ref={slideRef}
            className="rounded-[32px] border border-white/10 bg-black-200 overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.35)]"
          >
            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-6 p-6 lg:p-10">
              <div className="rounded-3xl overflow-hidden bg-black">
                <img
                  src={currentProject.imgPath}
                  alt={currentProject.title}
                  className="object-cover w-full h-full min-h-[320px]"
                />
              </div>
              <div className="flex flex-col justify-between gap-6">
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {currentProject.tech.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white-50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold">{currentProject.title}</h3>
                  <p className="text-white-50 leading-7">{currentProject.description}</p>
                </div>

                <div className="flex flex-col gap-4">
                  <div className="text-white-50 text-sm">
                    <span className="font-semibold text-white">Date:</span> {currentProject.date}
                  </div>
                  <div className="flex flex-wrap gap-4">
                    <a
                      href={currentProject.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-full border border-blue-400 px-5 py-3 text-sm font-semibold text-blue-300 transition hover:bg-blue-400/10"
                    >
                      Live Demo
                    </a>
                    <a
                      href={currentProject.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-full border border-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                    >
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-white/10 px-6 py-5 bg-black-100">
              <div className="flex items-center justify-center gap-3">
                {projects.map((project, index) => (
                  <button
                    key={project.title}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className={`h-3 w-3 rounded-full transition ${
                      index === activeIndex ? "bg-white" : "bg-white/20"
                    }`}
                    aria-label={`Go to project ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
  );
};

export default ShowcaseSection;
