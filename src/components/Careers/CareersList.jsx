import { Link } from "react-router-dom";
import Reveal from "../Home/Reveal";

/** CareersList — the /careers landing page: banner + a card per open role. */
export default function CareersList({ careers }) {
  return (
    <div className="careersParentNode">
      <section className="careersBanner">
        <Link to="/" className="careersBanner__back">
          ← Back to Home
        </Link>
        <p className="sectionEyebrow sectionEyebrow--center">Join our team</p>
        <h1 className="sectionTitle sectionTitle--center">
          {careers.heading} — <span>{careers.highlight}</span>
        </h1>
        <p className="careersBanner__intro">{careers.intro}</p>
      </section>

      <div className="careersList">
        {careers.roles.map((role) => (
          <Reveal key={role.slug} className="careerCard">
            <h3>{role.title}</h3>
            <p>{role.summary}</p>
            <Link to={`/careers/${role.slug}`} className="btn btn--primary">
              View Requirements
            </Link>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
