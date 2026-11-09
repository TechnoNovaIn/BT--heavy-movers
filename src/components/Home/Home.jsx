import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import siteData from "../../data/siteData";

import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Stats from "./sections/Stats";
import Specifications from "./sections/Specifications";
import Advantages from "./sections/Advantages";
import Gallery from "./sections/Gallery";
import Certifications from "./sections/Certifications";
import Letter from "./sections/Letter";
import Team from "./sections/Team";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Lightbox from "./sections/Lightbox";

/**
 * Home — the whole page in one place, but each section is its own
 * small file inside ./sections. This file's only job is:
 *   1. Pull the content out of data/siteData.js
 *   2. Keep track of which image (if any) is open in the lightbox
 *   3. Render every section, in order, inside one wrapper div
 *
 * If you want to reorder sections, change copy, or edit one section's
 * markup, you almost never need to touch this file — go straight to
 * the matching file in ./sections or to data/siteData.js.
 */
export default function Home() {
  const {
    brand,
    nav,
    hero,
    about,
    stats,
    specifications,
    advantages,
    gallery,
    certifications,
    letter,
    team,
    contact,
  } = siteData;

  // Which image is currently open in the full-screen preview popup.
  // null = closed. { src, alt } = open, showing that image.
  const [lightboxImage, setLightboxImage] = useState(null);

  // If we arrive here with a hash (e.g. navigated from /careers via
  // "#hero", or someone opened a link like "/#team" directly), scroll
  // to that section once it's rendered.
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;

    const id = location.hash.slice(1);
    // Give the DOM a tick to paint before measuring/scrolling to it.
    const timer = setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 0);

    return () => clearTimeout(timer);
  }, [location.hash]);

  return (
    <div className="homeParentNode">
      <Navbar brand={brand} links={nav} />
      <Hero hero={hero} />
      <About about={about} />
      <Stats stats={stats} />
      <Specifications specifications={specifications} />
      <Advantages advantages={advantages} />
      <Gallery gallery={gallery} onImageClick={setLightboxImage} />
      <Certifications
        certifications={certifications}
        onImageClick={setLightboxImage}
      />
      <Letter letter={letter} />
      <Team team={team} />
      <Contact brand={brand} contact={contact} />
      <Footer brand={brand} links={nav} />

      <Lightbox image={lightboxImage} onClose={() => setLightboxImage(null)} />
    </div>
  );
}
