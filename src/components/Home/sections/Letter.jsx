import Reveal from "../Reveal";

/** Letter — the "Dear Valued Customer" CTA banner with a photo background. */
export default function Letter({ letter }) {
  return (
    <section className="letterParentNode">
      <div className="letter__media">
        <img src={letter.banner} alt="Fleet of Balaji Movers and Siding trucks lined up" />
        <div className="letter__overlay" />
      </div>

      <Reveal className="letter__content">
        <p className="sectionEyebrow">{letter.subheading}</p>
        <h2 className="sectionTitle sectionTitle--onDark">{letter.heading}</h2>

        {letter.paragraphs.map((paragraph, index) => (
          <p key={index} className="letter__paragraph">
            {paragraph}
          </p>
        ))}

        <a href="#contact" className="btn btn--primary">
          Partner With Us
        </a>
      </Reveal>
    </section>
  );
}
