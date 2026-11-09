import Reveal from "../Reveal";
import CountUpNumber from "../CountUpNumber";

/** Stats — the strip of big numbers (300 trucks, 50 cranes, etc). */
export default function Stats({ stats }) {
  return (
    <section className="statsParentNode">
      <div className="statsGrid">
        {stats.map((stat) => (
          <Reveal key={stat.label} className="statCard">
            <span className="statCard__number">
              <CountUpNumber target={stat.value} suffix={stat.suffix} />
            </span>
            <span className="statCard__label">{stat.label}</span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
