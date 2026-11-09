import Reveal from "../Reveal";

/** Specifications — numbered list of facts + supporting photos. */
export default function Specifications({ specifications }) {
  return (
    <section className="specificationsParentNode" id="specifications">
      <p className="sectionEyebrow sectionEyebrow--center">Infrastructure</p>
      <h2 className="sectionTitle sectionTitle--center">
        {specifications.heading} <span>{specifications.highlight}</span>
      </h2>

      <div className="specifications__grid">
        <Reveal as="ul" className="specifications__list">
          {specifications.items.map((item, index) => (
            <li key={index}>
              <span className="specifications__marker">{String(index + 1).padStart(2, "0")}</span>
              <span>{item}</span>
            </li>
          ))}
        </Reveal>

        <div className="specifications__images">
          {specifications.images.map((image, index) => (
            <Reveal
              as="img"
              key={index}
              src={image.src}
              alt={image.alt}
              className={`specifications__image specifications__image--${index}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
