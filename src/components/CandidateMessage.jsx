import { useInView } from '../hooks/useAnimations';
import config from '../data/candidateConfig';
import './CandidateMessage.css';

export default function CandidateMessage() {
  const [ref, visible] = useInView({ threshold: 0.15 });

  return (
    <section className="message-section" id="message" ref={ref}>
      <div className={`message-card ${visible ? 'message-card--visible' : ''}`}>
        {/* ── Oversized Warm Saffron Quote ──────────── */}
        <span className="message-card__quote-mark" aria-hidden="true">
          &ldquo;
        </span>

        {/* ── Section Label ─────────────────────────── */}
        <span className="message-card__label">Candidate Monologue</span>

        {/* ── Message Monologue Paragraphs ─────────── */}
        <div className="message-card__body">
          {config.monologue.map((paragraph, index) => (
            <p
              key={index}
              className={`message-card__paragraph ${
                index === 0 ? 'message-card__paragraph--lead' : ''
              } ${index === config.monologue.length - 1 ? 'message-card__paragraph--highlight' : ''}`}
            >
              {paragraph}
            </p>
          ))}
        </div>

        {/* ── Author Attribution ────────────────────── */}
        <div className="message-card__footer">
          <div className="message-card__author">
            <span className="message-card__name">{config.candidateName}</span>
            <span className="message-card__role">{config.candidatePosition}</span>
          </div>
          <div className="message-card__seal" aria-hidden="true">
            <span>GU &bull; 2026</span>
          </div>
        </div>
      </div>
    </section>
  );
}
