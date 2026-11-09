import { useEffect, useState } from "react";
import siteData from "../../data/siteData";
// Loader.css is imported globally from pages/_app.js — see note in
// components/Home/Home.js for why (Next.js pages-router requirement
// for plain, non-Module global CSS).

// Full-screen loading screen shown while the page's critical assets
// (fonts, hero image) settle in. Purely presentational — it removes
// itself from the DOM once done, so it never blocks interaction.
export default function Loader() {
  const [visible, setVisible] = useState(true);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const minTimer = setTimeout(() => setLeaving(true), 900);
    const removeTimer = setTimeout(() => setVisible(false), 1400);
    return () => {
      clearTimeout(minTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className={`loaderParentNode ${leaving ? "loaderParentNode--leaving" : ""}`}>
      <div className="loaderParentNode__mark">
        <span className="loaderParentNode__ring" />
        <span className="loaderParentNode__ring loaderParentNode__ring--delay" />
        <span className="loaderParentNode__logoText">BMSPL</span>
      </div>
      <p className="loaderParentNode__tagline">{siteData.brand.tagline}</p>
      <div className="loaderParentNode__track">
        <span className="loaderParentNode__bar" />
      </div>
    </div>
  );
}
