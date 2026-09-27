import { useEffect } from 'react';
import CandidateAnchor from './components/CandidateAnchor';
import Hero from './components/Hero';
import CandidateMessage from './components/CandidateMessage';
import VisualStory from './components/VisualStory';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import SectionDivider from './components/SectionDivider';
import config from './data/candidateConfig';

export default function App() {
  useEffect(() => {
    // Dynamic palette injection from config
    if (config.palette) {
      if (config.palette.primarySaffron) {
        document.documentElement.style.setProperty('--color-saffron', config.palette.primarySaffron);
      }
      if (config.palette.primarySaffronRgb) {
        document.documentElement.style.setProperty('--color-saffron-rgb', config.palette.primarySaffronRgb);
      }
      if (config.palette.bgIvory) {
        document.documentElement.style.setProperty('--color-bg', config.palette.bgIvory);
      }
      if (config.palette.accentGold) {
        document.documentElement.style.setProperty('--color-gold', config.palette.accentGold);
      }
    }

    if (config.candidateName) {
      document.title = `${config.candidateName} — ${config.university} Elections ${config.electionYear}`;
    }
  }, []);

  return (
    <>
      {/* ── Subtle analog film grain texture ───────── */}
      <div className="grain-texture" aria-hidden="true" />

      {/* ── Persistent Candidate Visual Anchor ─────── */}
      <CandidateAnchor />

      {/* ── Layered Editorial Page Flow ────────────── */}
      <main className="main-content">
        <Hero />
        <SectionDivider accent />
        <CandidateMessage />
        <SectionDivider />
        <VisualStory />
        <SectionDivider accent />
        <FinalCTA />
      </main>

      <Footer />
    </>
  );
}
