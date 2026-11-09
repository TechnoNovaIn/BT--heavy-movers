import { useEffect, useRef, useState } from "react";

/**
 * useScrollReveal — a very small helper for "fade in when scrolled into view".
 *
 * HOW IT WORKS (plain English):
 * 1. We watch one element on the page (the "ref").
 * 2. The browser tells us when that element becomes visible on screen.
 * 3. The first time it becomes visible, we flip a switch (isVisible = true)
 *    and never look at it again.
 * 4. The component then adds a CSS class based on that switch, and the
 *    CSS file handles the actual fade/slide animation.
 *
 * That's it — no animation library, no timers, just "is it on screen yet?".
 *
 * USAGE:
 *   const { ref, isVisible } = useScrollReveal();
 *   <div ref={ref} className={isVisible ? "reveal reveal--visible" : "reveal"}>
 */
export function useScrollReveal() {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return undefined;

    // A "watcher" that checks if our element is on screen.
    const watcher = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          watcher.disconnect(); // we only need to animate once
        }
      },
      { threshold: 0.15 } // trigger once 15% of the element is visible
    );

    watcher.observe(element);

    // Cleanup: stop watching if the component is removed from the page.
    return () => watcher.disconnect();
  }, []);

  return { ref, isVisible };
}

export default useScrollReveal;
