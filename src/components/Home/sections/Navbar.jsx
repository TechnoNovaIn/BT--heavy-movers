import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

/**
 * Navbar — the top menu bar.
 * Two small pieces of state:
 *  - menuOpen: is the mobile menu open?
 *  - scrolled: has the user scrolled down?
 */
export default function Navbar({ brand, links, basePath = "" }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Resolve anchor links
  function resolveHref(href) {
    return href.startsWith("#") ? `${basePath}${href}` : href;
  }

  // Link only changes the URL — it doesn't scroll to anything. This
  // handles the actual scrolling ourselves:
  //  - if we're already on the page that has the section, just scroll
  //  - if not (e.g. clicking "Home" from /careers), navigate there
  //    first and let the effect below scroll once it's mounted
  function handleAnchorClick(event, href) {
    if (!href.startsWith("#")) return; // not an in-page anchor, let Link behave normally

    event.preventDefault();
    closeMenu();

    const targetPath = basePath || "/";
    const id = href.slice(1);

    if (location.pathname === targetPath) {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        window.history.replaceState(null, "", resolveHref(href));
      }
    } else {
      navigate(resolveHref(href));
    }
  }

  useEffect(() => {
    function checkScrollPosition() {
      setScrolled(window.scrollY > 24);
    }

    checkScrollPosition();

    window.addEventListener("scroll", checkScrollPosition);

    return () => {
      window.removeEventListener("scroll", checkScrollPosition);
    };
  }, []);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header
      className={`navbarParentNode ${
        scrolled ? "navbarParentNode--scrolled" : ""
      }`}
    >
      <div className="navbarParentNode__inner">
        {/* Brand */}
        <Link
          to={resolveHref("#hero")}
          className="navbarParentNode__brand"
          onClick={(e) => handleAnchorClick(e, "#hero")}
        >
          <img src={brand.emblem} alt="" className="navbarParentNode__emblem" />

          <span className="navbarParentNode__brandText">
            {brand.shortName}
            <small>{brand.name}</small>
          </span>
        </Link>

        {/* Navigation */}
        <nav
          className={`navbarParentNode__links ${
            menuOpen ? "navbarParentNode__links--open" : ""
          }`}
        >
          {links.map((item) => (
            <Link
              key={item.href}
              to={resolveHref(item.href)}
              className="navbarParentNode__link"
              onClick={(e) => handleAnchorClick(e, item.href)}
            >
              {item.label}
            </Link>
          ))}

          {/* Get a Quote */}
          <Link
            to={resolveHref("#contact")}
            className="navbarParentNode__cta"
            onClick={(e) => handleAnchorClick(e, "#contact")}
          >
            Get a Quote
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          className={`navbarParentNode__toggle ${
            menuOpen ? "navbarParentNode__toggle--open" : ""
          }`}
          aria-label="Toggle navigation menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
