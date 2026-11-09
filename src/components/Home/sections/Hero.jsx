import { useEffect, useState } from "react";

const SLIDE_DURATION_MS = 6000; // how long each slide stays on screen

/**
 * Hero — a full-screen carousel at the top of the page.
 *
 * HOW IT WORKS (plain English):
 * 1. We keep one number in state: `activeIndex` — which slide is showing.
 * 2. Every slide is rendered all the time, stacked on top of each other.
 *    Only the one matching `activeIndex` gets the "slide--active" class,
 *    which is what actually makes it visible (see Hero.css).
 * 3. A timer moves to the next slide automatically every 6 seconds.
 *    Clicking a dot or an arrow just changes `activeIndex` directly —
 *    the timer effect re-runs and restarts the 6-second countdown.
 */
export default function Hero({ hero }) {
  const { slides, ctaPrimary, ctaSecondary } = hero;
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-advance to the next slide every SLIDE_DURATION_MS.
  useEffect(() => {
    const timer = setTimeout(() => {
      goToNext();
    }, SLIDE_DURATION_MS);

    // Whenever activeIndex changes (auto OR manual), clear the old
    // timer and this effect runs again, starting a fresh 6s countdown.
    return () => clearTimeout(timer);
  }, [activeIndex]);

  function goToSlide(index) {
    setActiveIndex(index);
  }

  function goToPrevious() {
    const lastIndex = slides.length - 1;
    setActiveIndex(activeIndex === 0 ? lastIndex : activeIndex - 1);
  }

  function goToNext() {
    const isLastSlide = activeIndex === slides.length - 1;
    setActiveIndex(isLastSlide ? 0 : activeIndex + 1);
  }

  return (
    <section className="heroParentNode" id="hero">
      {slides.map((slide, index) => {
        const isActive = index === activeIndex;

        return (
          <div
            key={slide.title}
            className={`slide ${isActive ? "slide--active" : ""}`}
            aria-hidden={!isActive}
          >
            <div className="slide__media">
              <img src={slide.image} alt="" />
              <div className="slide__overlay" />
            </div>

            <div className="slide__content">
              <span className="slide__eyebrow">{slide.eyebrow}</span>
              <h1 className="heroTitle">{slide.title}</h1>
              <p className="slide__subtitle">{slide.subtitle}</p>

              <div className="slide__actions">
                <a href={ctaPrimary.href} className="btn btn--primary">
                  {ctaPrimary.label}
                </a>
                <a href={ctaSecondary.href} className="btn btn--ghost">
                  {ctaSecondary.label}
                </a>
              </div>

              {/* Only slides that have a `founder` in siteData.js show this badge */}
              {slide.founder && (
                <div className="slide__founder">
                  <img src={slide.founder.photo} alt={slide.founder.name} />
                  <div>
                    <strong>{slide.founder.name}</strong>
                    <span>{slide.founder.role}</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        );
      })}

      {/* Prev / Next arrows */}
      <button type="button" className="heroArrow heroArrow--prev" onClick={goToPrevious} aria-label="Previous slide">
        ‹
      </button>
      <button type="button" className="heroArrow heroArrow--next" onClick={goToNext} aria-label="Next slide">
        ›
      </button>

      {/* Dot indicators — click one to jump straight to that slide */}
      <div className="heroDots">
        {slides.map((slide, index) => (
          <button
            key={slide.title}
            type="button"
            className={`heroDots__dot ${index === activeIndex ? "heroDots__dot--active" : ""}`}
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>

      <a href="#about" className="hero__scrollCue" aria-label="Scroll to about section">
        <span />
      </a>
    </section>
  );
}
