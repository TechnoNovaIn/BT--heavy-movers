import Reveal from "../Reveal";

/** Advantages — grid of short benefit cards. */
export default function Advantages({ advantages }) {
  return (
    <section className="advantagesParentNode" id="advantages">
      <p className="sectionEyebrow sectionEyebrow--center">Why BMSPL</p>
      <h2 className="sectionTitle sectionTitle--center">
        {advantages.heading} <span>{advantages.highlight}</span>
      </h2>

      <div className="advantages__grid">
        {advantages.items.map((item, index) => (
          <Reveal key={index} className="advantageCard">
            <span className="advantageCard__index">{String(index + 1).padStart(2, "0")}</span>
            <p>{item}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
