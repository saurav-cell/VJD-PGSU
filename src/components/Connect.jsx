import { useInView } from '../hooks/useAnimations';
import { InstagramIcon, FacebookIcon, WhatsAppIcon, ArrowRightIcon } from './Icons';
import config from '../data/candidateConfig';
import './Connect.css';

const socials = [
  {
    key: 'whatsapp',
    label: 'WhatsApp',
    subtitle: 'Message directly',
    url: config.whatsappUrl,
    Icon: WhatsAppIcon,
    primary: true,
  },
  {
    key: 'instagram',
    label: 'Instagram',
    subtitle: 'Follow the journey',
    url: config.instagramUrl,
    Icon: InstagramIcon,
    primary: false,
  },
  {
    key: 'facebook',
    label: 'Facebook',
    subtitle: 'Join the community',
    url: config.facebookUrl,
    Icon: FacebookIcon,
    primary: false,
  },
];

export default function Connect() {
  const [headerRef, headerVisible] = useInView({ threshold: 0.2 });
  const [listRef, listVisible] = useInView({ threshold: 0.1 });

  return (
    <section className="connect" id="connect">
      <div className="connect__header" ref={headerRef}>
        <span className={`connect__label ${headerVisible ? 'connect__label--visible' : ''}`}>
          Get Involved
        </span>
        <h2 className={`connect__title ${headerVisible ? 'connect__title--visible' : ''}`}>
          Connect with {config.candidateName}
        </h2>
      </div>

      <div className="connect__list" ref={listRef}>
        {socials.map((s, i) => (
          <a
            key={s.key}
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`connect__link connect__link--${s.key} ${s.primary ? 'connect__link--primary' : ''} ${listVisible ? 'connect__link--visible' : ''}`}
            style={{ transitionDelay: `${i * 100}ms` }}
            id={`connect-${s.key}`}
          >
            <div className="connect__link-icon">
              <s.Icon size={22} />
            </div>
            <div className="connect__link-info">
              <span className="connect__link-label">{s.label}</span>
              <span className="connect__link-subtitle">{s.subtitle}</span>
            </div>
            <div className="connect__link-arrow">
              <ArrowRightIcon size={18} />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
