import Reveal from "../Reveal";

/** Team — founder + directors, photo + name + role cards. */
export default function Team({ team }) {
  return (
    <section className="teamParentNode" id="team">
      <p className="sectionEyebrow sectionEyebrow--center">The people behind BMSPL</p>
      <h2 className="sectionTitle sectionTitle--center">
        {team.heading} <span>{team.highlight}</span>
      </h2>

      <div className="team__grid">
        {team.members.map((member) => (
          <Reveal key={member.name} className="teamCard">
            <img src={member.photo} alt={member.name} />
            <h3>{member.name}</h3>
            <span>{member.role}</span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
