import useScrollReveal from "./useScrollReveal";

/**
 * Reveal — wraps any content and fades/slides it in once it's scrolled
 * into view. This is just a thin wrapper around useScrollReveal so we
 * don't have to repeat the same three lines in every section.
 *
 * USAGE:
 *   <Reveal as="p" className="about__paragraph">Some text</Reveal>
 *   <Reveal>Anything, defaults to a <div></Reveal>
 */
export default function Reveal({ as: Tag = "div", className = "", children, ...rest }) {
  const { ref, isVisible } = useScrollReveal();
  const classes = `reveal ${isVisible ? "reveal--visible" : ""} ${className}`.trim();

  return (
    <Tag ref={ref} className={classes} {...rest}>
      {children}
    </Tag>
  );
}
