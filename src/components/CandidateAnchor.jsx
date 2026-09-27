import { useEffect, useState } from 'react';
import config from '../data/candidateConfig';
import './CandidateAnchor.css';

export default function CandidateAnchor() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Light throttle for smooth mobile performance
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Subtle parallax translation and opacity fade as user scrolls deep into content
  const parallaxOffset = Math.min(scrollY * 0.15, 120);
  const opacityDim = Math.max(1 - scrollY / 1800, 0.22);

  return (
    <div className="candidate-anchor" aria-hidden="true">
      {/* ── Warm ambient backdrop glow ───────────────── */}
      <div className="candidate-anchor__ambient-glow" />

      {/* ── Anchored Candidate Portrait ─────────────── */}
      <div
        className="candidate-anchor__image-container"
        style={{
          transform: `translate3d(0, ${parallaxOffset}px, 0)`,
          opacity: opacityDim,
        }}
      >
        <img
          className="candidate-anchor__image"
          src={config.heroImage}
          alt=""
          fetchPriority="high"
          decoding="async"
        />
        {/* Warm saffron & ivory gradient overlays */}
        <div className="candidate-anchor__warm-tint" />
        <div className="candidate-anchor__bottom-fade" />
        <div className="candidate-anchor__top-vignette" />
      </div>

      {/* ── Subtle ornamental frame ─────────────────── */}
      <div className="candidate-anchor__arch-line" />
    </div>
  );
}
