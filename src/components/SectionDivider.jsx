import './SectionDivider.css';

export default function SectionDivider({ accent = false }) {
  return (
    <div className={`section-divider ${accent ? 'section-divider--accent' : ''}`} aria-hidden="true">
      <div className="section-divider__line" />
    </div>
  );
}
