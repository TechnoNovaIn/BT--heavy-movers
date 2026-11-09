/** Footer — logo, quick links, copyright line. */
export default function Footer({ brand, links, basePath = "" }) {
  function resolveHref(href) {
    return href.startsWith("#") ? `${basePath}${href}` : href;
  }

  return (
    <footer className="footerParentNode">
      <div className="footer__inner">
        <div className="footer__brand">
          {/* <img src={brand.logo} alt={brand.name} /> */}
          <p>{brand.tagline}</p>
        </div>

        <nav className="footer__links">
          {links.map((item) => (
            <a key={item.href} href={resolveHref(item.href)}>
              {item.label}
            </a>
          ))}
        </nav>

        <p className="footer__copy">
          © {new Date().getFullYear()} {brand.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
