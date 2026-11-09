import { useEffect, useRef } from "react";
import Reveal from "../Reveal";

/** About — company description + vision/mission cards + route map video. */
export default function About({ about }) {
  const videoRef = useRef(null);

  // Play the video only while the About section's video panel is on
  // screen; pause it again once it scrolls out. Autoplaying only when
  // visible (rather than on page load) keeps things lightweight and
  // matches how the rest of the page reveals content on scroll.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return undefined;

    const watcher = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {
            // Autoplay can be blocked by the browser in rare cases;
            // that's fine, the video simply stays paused until the
            // user interacts with it.
          });
        } else {
          video.pause();
        }
      },
      { threshold: 0.35 }
    );

    watcher.observe(video);
    return () => watcher.disconnect();
  }, []);

  return (
    <section className="aboutParentNode" id="about">
      <div className="about__grid">
        <Reveal className="about__text">
          <p className="sectionEyebrow">Who we are</p>
          <h2 className="sectionTitle">
            {about.heading} <span>{about.highlight}</span>
          </h2>

          {about.paragraphs.map((paragraph, index) => (
            <p key={index} className="about__paragraph">
              {paragraph}
            </p>
          ))}
        </Reveal>

        <Reveal className="about__mapWrap">
          <video
            ref={videoRef}
            className="about__map"
            src={about.video}
            muted
            loop
            playsInline
            preload="metadata"
          />
        </Reveal>
      </div>

      <div className="about__cards">
        <Reveal className="visionCard">
          <h3>{about.vision.title}</h3>
          <p>{about.vision.text}</p>
        </Reveal>

        <Reveal className="visionCard visionCard--alt">
          <h3>{about.mission.title}</h3>
          <p>{about.mission.text}</p>
        </Reveal>
      </div>
    </section>
  );
}
