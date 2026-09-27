import { useInView } from '../hooks/useAnimations';
import config from '../data/candidateConfig';
import './Gallery.css';

function GalleryItem({ image, index }) {
  const [ref, visible] = useInView({ threshold: 0.08 });

  return (
    <figure
      ref={ref}
      className={`gallery__item gallery__item--${image.aspect} ${visible ? 'gallery__item--visible' : ''}`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <div className="gallery__img-wrap">
        <img
          className="gallery__img"
          src={image.src}
          alt={image.alt}
          loading="lazy"
          decoding="async"
        />
        <div className="gallery__img-overlay" />
      </div>
      <figcaption className="gallery__caption">{image.alt}</figcaption>
    </figure>
  );
}

export default function Gallery() {
  const [headerRef, headerVisible] = useInView({ threshold: 0.2 });

  return (
    <section className="gallery" id="gallery">
      <div className="gallery__header" ref={headerRef}>
        <span className={`gallery__label ${headerVisible ? 'gallery__label--visible' : ''}`}>
          The Campaign
        </span>
        <h2 className={`gallery__title ${headerVisible ? 'gallery__title--visible' : ''}`}>
          On the Ground
        </h2>
      </div>

      <div className="gallery__grid">
        {config.galleryImages.map((img, i) => (
          <GalleryItem key={i} image={img} index={i} />
        ))}
      </div>
    </section>
  );
}
