import { useRef, useState } from 'react';
import { useInView } from '../hooks/useAnimations';
import config from '../data/candidateConfig';
import './VisualStory.css';

export default function VisualStory() {
  const [headerRef, headerVisible] = useInView({ threshold: 0.15 });
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const stories = config.visualStories || [];

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, offsetWidth } = scrollRef.current;
    const index = Math.round(scrollLeft / (offsetWidth * 0.78));
    setActiveIndex(Math.min(Math.max(index, 0), stories.length - 1));
  };

  const scrollToCard = (index) => {
    if (!scrollRef.current) return;
    const cards = scrollRef.current.querySelectorAll('.story-card');
    if (cards[index]) {
      cards[index].scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' });
    }
  };

  return (
    <section className="visual-story" id="visual-story">
      {/* ── Section Header ───────────────────────── */}
      <div className="visual-story__header" ref={headerRef}>
        <span className={`visual-story__label ${headerVisible ? 'visual-story__label--visible' : ''}`}>
          Visual Story
        </span>
        <h2 className={`visual-story__title ${headerVisible ? 'visual-story__title--visible' : ''}`}>
          Moments &amp; Values
        </h2>
        <p className={`visual-story__subtitle ${headerVisible ? 'visual-story__subtitle--visible' : ''}`}>
          {config.visualStorySubtitle ||
            'Swipe through moments that reflect the journey, the people, and the values that shape his story.'}
        </p>
      </div>

      {/* ── Horizontal Snap Track ─────────────────── */}
      <div
        className="visual-story__track"
        ref={scrollRef}
        onScroll={handleScroll}
        tabIndex="0"
        role="region"
        aria-label="Visual Story Moments"
      >
        {stories.map((story, i) => (
          <article
            key={story.id || i}
            className={`story-card ${i === activeIndex ? 'story-card--active' : ''}`}
            id={`story-card-${i + 1}`}
          >
            {/* ── Card Media (Equal Dimensions) ────────── */}
            <div className="story-card__media">
              <img
                src={story.image}
                alt={`Visual story moment ${i + 1}`}
                loading="lazy"
                decoding="async"
                className="story-card__img"
              />
              <div className="story-card__overlay" />
              <span className="story-card__num" aria-hidden="true">
                0{i + 1}
              </span>
            </div>

            {/* ── Card Editorial Content ─────────────── */}
            <div className="story-card__body">
              <p className="story-card__caption">
                &ldquo;{story.message}&rdquo;
              </p>
            </div>
          </article>
        ))}
      </div>

      {/* ── Story Progress Indicators ────────────── */}
      <div className="visual-story__indicators" aria-hidden="true">
        {stories.map((_, i) => (
          <button
            key={i}
            className={`visual-story__dot ${i === activeIndex ? 'visual-story__dot--active' : ''}`}
            onClick={() => scrollToCard(i)}
            aria-label={`Go to visual story card ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
