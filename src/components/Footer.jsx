import config from '../data/candidateConfig';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footer__inner">
        <div className="footer__crest" aria-hidden="true">
          <span className="footer__crest-dot" />
        </div>
        <p className="footer__university">{config.university}</p>
        <p className="footer__election">{config.footerBadge || 'EXPLORE \u2022 CONNECT \u2022 ENGAGE'}</p>
        <div className="footer__divider" />
        <p className="footer__note">
          Student community outreach &bull; {config.candidateName}
        </p>
      </div>
    </footer>
  );
}
