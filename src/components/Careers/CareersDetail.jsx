import { Link } from "react-router-dom";
import Reveal from "../Home/Reveal";

/** CareersDetail — /careers/[slug] page for a single role. */
export default function CareersDetail({ careers, role }) {
  // Each role can define its own contact details. Fall back to the
  // shared careers contact if a role doesn't specify one.
  const roleEmail = role.email || careers.email;
  const rolePhone = role.phone || careers.whatsapp;
  const rolePhoneDisplay = role.phoneDisplay || careers.whatsappDisplay;

  const mailSubject = encodeURIComponent(`Job Application — ${role.title}`);
  const mailBody = encodeURIComponent(
    `Hi Balaji Transports,\n\nI'm interested in the ${role.title} position. Please find my CV attached.\n\nThank you.`
  );
  const mailtoHref = `mailto:${roleEmail}?subject=${mailSubject}&body=${mailBody}`;

  const whatsappText = encodeURIComponent(
    `Hi Balaji Transports, I'm interested in the ${role.title} position and would like to share my CV.`
  );
  const whatsappHref = `https://wa.me/${rolePhone}?text=${whatsappText}`;

  return (
    <div className="careersParentNode">
      <section className="careersBanner">
        <Link to="/" className="careersBanner__back">
          ← Back to Home
        </Link>
        <p className="sectionEyebrow sectionEyebrow--center">Careers — Karnataka</p>
        <h1 className="sectionTitle sectionTitle--center">
          {role.title}
        </h1>
      </section>

      <div className="careersDetail">
        <Link to="/careers" className="careersDetail__back">
          ← All openings
        </Link>

        <p className="careersDetail__summary">{role.summary}</p>

        <Reveal as="div" className="detailBlock">
          <h2>Requirements</h2>
          <div className="requirementsGrid">
            {role.requirements.map((req) => (
              <div className="requirementsGrid__item" key={req.label}>
                <span className="requirementsGrid__label">{req.label}</span>
                <span className="requirementsGrid__value">{req.value}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal as="div" className="detailBlock">
          <h2>Documents Required</h2>
          <ul className="documentsList">
            {role.documents.map((doc) => (
              <li key={doc}>{doc}</li>
            ))}
          </ul>
        </Reveal>

        <Reveal as="div" className="detailBlock">
          <h2>Work Location</h2>
          <div className="workLocation">
            <span className="workLocation__label">Branch(es)</span>
            <span className="workLocation__value">{careers.branch}</span>
          </div>
        </Reveal>

        <Reveal as="div" className="detailBlock applyBlock">
          <h2>Ready To Apply?</h2>
          <p>Send us your CV by email or WhatsApp and our HR team will get in touch with you.</p>
          <div className="applyBlock__actions">
            <a href={mailtoHref} className="btn btn--primary">
              Email Your CV
            </a>
            <a href={whatsappHref} target="_blank" rel="noreferrer" className="btn btn--ghost">
              WhatsApp Us
            </a>
          </div>
          <div className="applyBlock__meta">
            <span>
              Email: <a href={`mailto:${roleEmail}`}>{roleEmail}</a>
            </span>
            <span>
              Phone / WhatsApp: <a href={whatsappHref} target="_blank" rel="noreferrer">{rolePhoneDisplay}</a>
            </span>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
