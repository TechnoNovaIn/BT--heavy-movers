import Reveal from "../Reveal";

/** Contact — phone/email/address cards. */
export default function Contact({ brand, contact }) {
  return (
    <section className="contactParentNode" id="contact">
      <div className="contact__grid">
        <Reveal className="contact__intro">
          <p className="sectionEyebrow">Let&apos;s talk logistics</p>
          <h2 className="sectionTitle">
            {contact.heading} <span>{contact.highlight}</span>
          </h2>
          <p className="contact__note">
            Reach out for cargo handling, warehousing, or railway siding partnership enquiries — our team responds
            promptly.
          </p>
          <div className="contact__meta">
            <span>GSTN: {brand.gstn}</span>
            <span>PAN: {brand.pan}</span>
          </div>
        </Reveal>

        <div className="contact__cards">
          <Reveal className="contactCard">
            <h3>Phone</h3>
            {brand.phones.map((phone) => (
              <a key={phone} href={`tel:${phone.replace(/\s/g, "")}`}>
                {phone}
              </a>
            ))}
          </Reveal>

          <Reveal className="contactCard">
            <h3>Email</h3>
            {brand.emails.map((email) => (
              <a key={email} href={`mailto:${email}`}>
                {email}
              </a>
            ))}
            <a href={`https://${brand.website}`} target="_blank" rel="noreferrer">
              {brand.website}
            </a>
          </Reveal>

          <Reveal className="contactCard">
            <h3>{contact.site.label}</h3>
            <p>{contact.site.value}</p>
          </Reveal>

          <Reveal className="contactCard">
            <h3>{contact.headOffice.label}</h3>
            <p>{contact.headOffice.value}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
