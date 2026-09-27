import { useMounted } from '../hooks/useAnimations';
import { InstagramIcon, FacebookIcon, WhatsAppIcon, ChevronDownIcon } from './Icons';
import config from '../data/candidateConfig';
import './Hero.css';

export default function Hero() {
  const m1 = useMounted(80);
  const m2 = useMounted(250);
  const m3 = useMounted(450);
  const m4 = useMounted(650);

  return (
    <section className="hero" id="hero">
      <div className="hero__content">
        {/* ── University & Election Tag ─────────────── */}
        <div className={`hero__badge-wrap ${m1 ? 'hero__badge-wrap--visible' : ''}`}>
          <span className="hero__badge">
            <span className="hero__badge-dot" />
            {config.electionBadge || 'GUPGSU \u2022 ELECTION 2026\u20132027'}
          </span>
        </div>

        {/* ── Candidate Full Name with Saffron Accent ── */}
        <h1 className={`hero__name ${m2 ? 'hero__name--visible' : ''}`}>
          <span className="hero__name-first">{config.candidateFirstName}</span>
          <span className="hero__name-rest">{config.candidateLastName}</span>
        </h1>

        {/* ── Editorial Saffron Divider ─────────────── */}
        <div className={`hero__divider ${m3 ? 'hero__divider--visible' : ''}`} />

        {/* ── Position ─────────────────────────────── */}
        <p className={`hero__position ${m3 ? 'hero__position--visible' : ''}`}>
          {config.candidatePosition}
        </p>

        {/* ── Supplied Tagline ──────────────────────── */}
        <div className={`hero__tagline-group ${m3 ? 'hero__tagline-group--visible' : ''}`}>
          <p className="hero__tagline-lead">{config.taglineLead}</p>
          <p className="hero__tagline-body">{config.taglineBody}</p>
        </div>

        {/* ── First-Screen Social Actions ──────────── */}
        <div className={`hero__socials ${m4 ? 'hero__socials--visible' : ''}`}>
          <a
            href={config.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hero__social-btn hero__social-btn--whatsapp"
            aria-label="Connect on WhatsApp"
            id="hero-whatsapp"
          >
            <WhatsAppIcon size={18} />
            <span>WhatsApp</span>
          </a>

          <a
            href={config.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hero__social-btn hero__social-btn--instagram"
            aria-label="Follow on Instagram"
            id="hero-instagram"
          >
            <InstagramIcon size={18} />
            <span>Instagram</span>
          </a>

          <a
            href={config.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hero__social-btn hero__social-btn--facebook"
            aria-label="Join on Facebook"
            id="hero-facebook"
          >
            <FacebookIcon size={18} />
            <span>Facebook</span>
          </a>
        </div>
      </div>

      {/* ── Scroll Cue ─────────────────────────────── */}
      <div className={`hero__scroll ${m4 ? 'hero__scroll--visible' : ''}`} aria-hidden="true">
        <span className="hero__scroll-text">Explore Campaign</span>
        <div className="hero__scroll-icon">
          <ChevronDownIcon size={18} />
        </div>
      </div>
    </section>
  );
}
