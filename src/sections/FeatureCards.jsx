import { abilities } from "../constants";

const FeatureCards = () => {
  return (
    <section id="about" className="about-section">
      <div className="section-shell">
        <div className="about-card">
          <div>
            <p className="section-kicker">About</p>
            <h2>Software engineer passionate about building intelligent products and solving complex engineering problems.</h2>
            <p className="whitespace-pre-line">
              I’m Rudranil Mondal, a B.Tech Computer Science student at NIT Durgapur passionate about building AI-powered applications, scalable web systems, and developer tools. I work with technologies like React, FastAPI, LLMs, and cloud platforms, combining strong CS fundamentals with practical problem-solving to create impactful solutions.

            </p>
          </div>
          <div className="ability-grid">
            {abilities.map(({ title, desc }) => (
              <div key={title} className="ability-card">
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;
