import { useEffect, useRef, useState } from "react";

/**
 * CountUpNumber — shows a number that counts up from 0 to `target`
 * once it scrolls into view. Written the simple way on purpose:
 *
 * 1. Wait until the number is visible on screen.
 * 2. Every 20 milliseconds, add a small step to the current count.
 * 3. Stop when we reach the target.
 *
 * No easing curves, no requestAnimationFrame — just a basic timer,
 * so the logic is easy to follow and modify.
 */
export default function CountUpNumber({ target, suffix = "" }) {
  const ref = useRef(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const element = ref.current;
    if (!element) return undefined;

    let hasStarted = false;

    const watcher = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          hasStarted = true;
          startCounting();
          watcher.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    watcher.observe(element);

    function startCounting() {
      const totalSteps = 40; // how many "ticks" the animation takes
      const stepAmount = Math.max(1, Math.ceil(target / totalSteps));
      let current = 0;

      const timer = setInterval(() => {
        current += stepAmount;

        if (current >= target) {
          setCount(target); // never overshoot the real number
          clearInterval(timer);
        } else {
          setCount(current);
        }
      }, 20); // 20ms between ticks ≈ smooth but simple
    }

    return () => watcher.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}
