import { useEffect } from "react";

/**
 * Lightbox — a simple full-screen popup that shows one big image.
 * `image` is either null (closed) or { src, alt } (open).
 * `onClose` is called when the user clicks the backdrop, the ×
 * button, or presses Escape.
 */
export default function Lightbox({ image, onClose }) {
  useEffect(() => {
    if (!image) return undefined;

    function handleKeyPress(event) {
      if (event.key === "Escape") onClose();
    }

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [image, onClose]);

  if (!image) return null; // nothing to show, render nothing

  return (
    <div className="lightboxParentNode" onClick={onClose}>
      <button type="button" className="lightbox__close" aria-label="Close preview" onClick={onClose}>
        ×
      </button>
      {/* stopPropagation so clicking the image itself doesn't close the popup */}
      <img src={image.src} alt={image.alt} onClick={(event) => event.stopPropagation()} />
    </div>
  );
}
