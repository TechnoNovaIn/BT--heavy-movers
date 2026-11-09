import Reveal from "../Reveal";

/** Certifications — Startup India + KSPCB cards. Same click-to-zoom idea as Gallery. */
export default function Certifications({ certifications, onImageClick }) {
  return (
    <section className="certificationsParentNode" id="certifications">
      <p className="sectionEyebrow sectionEyebrow--center">Trust & compliance</p>
      <h2 className="sectionTitle sectionTitle--center">
        {certifications.heading} <span>{certifications.highlight}</span>
      </h2>

      <div className="certifications__grid">
        {certifications.items.map((cert, index) => (
          <Reveal
            as="button"
            type="button"
            key={index}
            className="certCard"
            onClick={() => onImageClick({ src: cert.image, alt: cert.title })}
          >
            <img src={cert.image} alt={cert.title} loading="lazy" />
            <div className="certCard__body">
              <h3>{cert.title}</h3>
              <p>{cert.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
