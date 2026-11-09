import Reveal from "../Reveal";

/**
 * Gallery — grid of photos. Clicking a photo tells the parent
 * (Home.js) which image to show in the full-screen lightbox, via
 * the onImageClick callback. Gallery itself doesn't know anything
 * about the lightbox — it just reports "this one was clicked".
 */
export default function Gallery({ gallery, onImageClick }) {
  return (
    <section className="galleryParentNode" id="gallery">
      <p className="sectionEyebrow sectionEyebrow--center">On the ground</p>
      <h2 className="sectionTitle sectionTitle--center">
        {gallery.heading} <span>{gallery.highlight}</span>
      </h2>

      <div className="gallery__grid">
        {gallery.images.map((image, index) => (
          <Reveal
            as="button"
            type="button"
            key={index}
            className="gallery__item"
            onClick={() => onImageClick(image)}
            aria-label={`Open image: ${image.alt}`}
          >
            <img src={image.src} alt={image.alt} loading="lazy" />
            <span className="gallery__zoom">View</span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
