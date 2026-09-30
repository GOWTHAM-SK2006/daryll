import React, { useState } from 'react';
import { Activity, ShieldCheck, Cpu, Sliders, CheckCircle, ArrowRight, BarChart2, Zap, Layers, RefreshCw } from 'lucide-react';

interface CpiSectionProps {
  onOpenModal: (type: string, data?: any) => void;
}

export const CpiSection: React.FC<CpiSectionProps> = ({ onOpenModal }) => {
  // Interactive Simulator State
  const [balance, setBalance] = useState<number>(85);
  const [decision, setDecision] = useState<number>(80);
  const [mental, setMental] = useState<number>(78);
  const [spinPlay, setSpinPlay] = useState<number>(88);
  const [pacePlay, setPacePlay] = useState<number>(82);

  const calculateCpiScore = () => {
    const raw = (balance * 0.25) + (decision * 0.25) + (mental * 0.20) + (spinPlay * 0.15) + (pacePlay * 0.15);
    return Math.round(raw * 10) / 10;
  };

  const cpiScore = calculateCpiScore();

  const getCpiRatingText = (score: number) => {
    if (score >= 90) return { label: 'International Franchise Tier', color: '#10B981', desc: 'World-class mechanics and exceptional pressure resilience under extreme match conditions.' };
    if (score >= 80) return { label: 'First-Class / Academy Tier', color: '#D4AF37', desc: 'Solid technical foundation with high growth potential in tactical decision-making.' };
    if (score >= 70) return { label: 'Premier Club / Emerging Tier', color: '#F59E0B', desc: 'Good core skills; requires refinement in mental reset routines and spin play.' };
    return { label: 'Developmental Tier', color: '#EF4444', desc: 'Fundamental stance and weight transfer adjustments needed to neutralize pace bowling.' };
  };

  const rating = getCpiRatingText(cpiScore);

  return (
    <section id="cpi" className="section-padding" style={{ background: '#0B0D14', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="gold-badge" style={{ marginBottom: '16px' }}>
            <Activity size={14} color="var(--accent-gold)" />
            <span>Performance Intelligence Engine</span>
          </div>
          <h2>Cullinan Performance Index (CPI)</h2>
          <p>
            The world's premier cricket assessment platform delivering scientific data, biomechanical rubrics, and diagnostic intelligence for players and coaches.
          </p>
        </div>

        {/* Feature Grid Banner */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '36px',
            alignItems: 'center',
            marginBottom: '70px'
          }}
        >
          {/* Dashboard Visual Image */}
          <div style={{ position: 'relative' }}>
            <div
              style={{
                borderRadius: 'var(--radius-xl)',
                overflow: 'hidden',
                border: '1px solid var(--border-gold)',
                boxShadow: 'var(--shadow-gold)',
                aspectRatio: '16 / 10',
                background: '#12141D'
              }}
            >
              <img
                src="/images/cpi_dashboard.png"
                alt="CPI Analytics Dashboard Interface"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>

          {/* Core Modules Breakdown */}
          <div>
            <div style={{ fontSize: '0.8rem', color: 'var(--accent-gold)', fontWeight: 700, textTransform: 'uppercase', marginBottom: '8px' }}>
              Built for Modern Cricket
            </div>
            <h3 style={{ fontSize: '2rem', color: '#FFFFFF', marginBottom: '16px' }}>
              Quantifying What Was Once Unmeasurable
            </h3>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '24px', fontSize: '1rem' }}>
              Traditional statistics like batting averages only tell a fraction of the story. The <strong>CPI Platform</strong> evaluates biomechanics, decision-making under match pressure, situational game sense, and recovery resilience.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                { title: 'Coach CPI', desc: 'Squad diagnostic tools, player benchmarking, session plans, and development roadmaps.' },
                { title: 'Player CPI', desc: 'Self-assessment index, technical radar charts, and personalized skill improvement milestones.' },
                { title: 'Team Analytics', desc: 'Squad balance metrics, pressure ratings, and opposition matchup intelligence.' },
                { title: 'Biomechanical Checklists', desc: '100+ diagnostic points covering posture, stride length, grip, and head stability.' }
              ].map((mod, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '14px',
                    background: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-md)',
                    padding: '16px'
                  }}
                >
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '8px',
                      background: 'rgba(212, 175, 55, 0.15)',
                      color: 'var(--accent-gold)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                  >
                    <CheckCircle size={18} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, color: '#FFFFFF', fontSize: '0.98rem' }}>
                      {mod.title}
                    </div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '2px' }}>
                      {mod.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '32px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <button
                onClick={() => onOpenModal('cpi-demo')}
                className="btn btn-primary btn-lg"
              >
                <span>Explore CPI Platform</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Interactive CPI Simulator Widget */}
        <div
          className="glass-card-accent"
          style={{
            marginTop: '60px',
            padding: '40px'
          }}
        >
          <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 36px auto' }}>
            <div className="gold-badge" style={{ marginBottom: '12px' }}>
              <Sliders size={14} color="var(--accent-gold)" />
              <span>Interactive Simulator</span>
            </div>
            <h3 style={{ fontSize: '1.8rem', color: '#FFFFFF' }}>
              Test the CPI Diagnostic Simulator
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
              Adjust the 5 core performance parameters below to see how the Cullinan Performance Index calculates player readiness and generates real-time diagnostic ratings.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '40px',
              alignItems: 'center'
            }}
          >
            {/* Sliders Column */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {[
                { label: 'Stance & Weight Balance', val: balance, set: setBalance },
                { label: 'Decision Timing Under Pressure', val: decision, set: setDecision },
                { label: 'Mental Focus & Pre-Ball Reset', val: mental, set: setMental },
                { label: 'Spin Play & Wrist Manipulation', val: spinPlay, set: setSpinPlay },
                { label: 'Pace Bowling & Short-Ball Defense', val: pacePlay, set: setPacePlay }
              ].map((slider, idx) => (
                <div key={idx}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', color: '#E5E7EB', fontWeight: 600, marginBottom: '6px' }}>
                    <span>{slider.label}</span>
                    <span style={{ color: 'var(--accent-gold)', fontWeight: 800 }}>{slider.val} / 100</span>
                  </div>
                  <input
                    type="range"
                    min="40"
                    max="100"
                    value={slider.val}
                    onChange={(e) => slider.set(Number(e.target.value))}
                    style={{
                      width: '100%',
                      accentColor: '#D4AF37',
                      cursor: 'pointer'
                    }}
                  />
                </div>
              ))}
            </div>

            {/* Calculated Output Box */}
            <div
              style={{
                background: '#090A0E',
                border: '1px solid var(--border-gold)',
                borderRadius: 'var(--radius-xl)',
                padding: '36px',
                textAlign: 'center',
                boxShadow: '0 10px 30px rgba(0,0,0,0.6)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '16px'
              }}
            >
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700 }}>
                CALCULATED CPI INDEX SCORE
              </div>

              <div
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '4.5rem',
                  fontWeight: 900,
                  color: rating.color,
                  lineHeight: 1,
                  textShadow: '0 0 30px rgba(212, 175, 55, 0.3)'
                }}
              >
                {cpiScore}
                <span style={{ fontSize: '1.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>/100</span>
              </div>

              <div
                style={{
                  fontSize: '0.95rem',
                  fontWeight: 800,
                  color: rating.color,
                  padding: '6px 16px',
                  borderRadius: '20px',
                  background: 'rgba(255,255,255,0.05)',
                  border: `1px solid ${rating.color}`
                }}
              >
                {rating.label}
              </div>

              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.5, marginTop: '8px' }}>
                {rating.desc}
              </p>

              <button
                onClick={() => onOpenModal('cpi-demo', { initialScore: cpiScore })}
                className="btn btn-outline-gold btn-sm"
                style={{ marginTop: '12px', width: '100%' }}
              >
                <Zap size={16} />
                <span>Request Custom Squad CPI Audit</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
