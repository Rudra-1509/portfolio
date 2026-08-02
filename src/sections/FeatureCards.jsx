import { abilities } from "../constants";

const FeatureCards = () => {
  return (
    <section id="about" className="about-section">
      <div className="section-shell">
        <div className="about-card">
          <div>
            <p className="section-kicker">About</p>
            <h2>Engineer with a product mindset and strong CS fundamentals.</h2>
            <p>
              I’m Rudranil Mondal, a B.Tech CSE student at NIT Durgapur building AI-powered web applications and scalable full-stack systems. I care about readable code, strong UX, measurable performance, and solving the right problem before writing the first component.
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
