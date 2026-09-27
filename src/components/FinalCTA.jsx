import { useInView } from '../hooks/useAnimations';
import { InstagramIcon, FacebookIcon, WhatsAppIcon } from './Icons';
import config from '../data/candidateConfig';
import './FinalCTA.css';

export default function FinalCTA() {
  const [ref, visible] = useInView({ threshold: 0.15 });

  return (
    <section className="closing-section" id="closing" ref={ref}>
      <div className={`closing-card ${visible ? 'closing-card--visible' : ''}`}>
        {/* ── Closing Tagline ───────────────────────── */}
        <span className="closing-card__badge">Elections {config.electionYear}</span>

        <h2 className="closing-card__title">
          <span className="closing-card__title-sub">Vote for</span>
          <span className="closing-card__name">{config.candidateName}</span>
        </h2>

        <p className="closing-card__position">{config.candidatePosition}</p>

        <p className="closing-card__message">{config.closingLine}</p>

        {/* ── Direct Connect Socials (Bottom) ───────── */}
        <div className="closing-card__socials">
          <a
            href={config.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="closing-social-btn closing-social-btn--whatsapp"
            aria-label="Direct WhatsApp message"
            id="closing-whatsapp"
          >
            <WhatsAppIcon size={20} />
            <div className="closing-social-btn__text">
              <span className="closing-social-btn__label">WhatsApp</span>
              <span className="closing-social-btn__sub">Chat Directly</span>
            </div>
          </a>

          <a
            href={config.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="closing-social-btn closing-social-btn--instagram"
            aria-label="Follow on Instagram"
            id="closing-instagram"
          >
            <InstagramIcon size={20} />
            <div className="closing-social-btn__text">
              <span className="closing-social-btn__label">Instagram</span>
              <span className="closing-social-btn__sub">Follow Updates</span>
            </div>
          </a>

          <a
            href={config.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="closing-social-btn closing-social-btn--facebook"
            aria-label="Join on Facebook"
            id="closing-facebook"
          >
            <FacebookIcon size={20} />
            <div className="closing-social-btn__text">
              <span className="closing-social-btn__label">Facebook</span>
              <span className="closing-social-btn__sub">Join Community</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
