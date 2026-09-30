import React from 'react';
import { ArrowRight, ShieldCheck, Trophy, Sparkles, Award, PlayCircle } from 'lucide-react';
import { HERO_STATS } from '../data/mockData';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
  onOpenModal: (type: string, data?: any) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate, onOpenModal }) => {
  return (
    <section
      id="home"
      style={{
        position: 'relative',
        minHeight: '100vh',
        paddingTop: '130px',
        paddingBottom: '80px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        background: 'radial-gradient(ellipse at 70% 30%, rgba(212, 175, 55, 0.08) 0%, rgba(9, 10, 14, 1) 70%)',
        overflow: 'hidden'
      }}
    >
      {/* Background Ambient Glow Effects */}
      <div
        className="bg-glow-gold"
        style={{ top: '10%', right: '5%', opacity: 0.7 }}
      />
      <div
        className="bg-glow-gold"
        style={{ bottom: '10%', left: '-10%', opacity: 0.4 }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '48px',
            alignItems: 'center'
          }}
        >
          {/* Left Column: Headline & Value Proposition */}
          <div>
            <div className="gold-badge" style={{ marginBottom: '24px' }}>
              <Trophy size={14} color="var(--accent-gold)" />
              <span>International Cricket Legend & Global Coach</span>
            </div>

            <h1
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 4.2rem)',
                fontWeight: 900,
                lineHeight: 1.08,
                letterSpacing: '-0.03em',
                marginBottom: '20px'
              }}
            >
              Cricket. Coaching. <br />
              <span className="gold-text">Performance. Insight.</span>
            </h1>

            <p
              style={{
                fontSize: '1.2rem',
                lineHeight: 1.6,
                color: 'var(--text-muted)',
                marginBottom: '36px',
                maxWidth: '620px'
              }}
            >
              Building better players, coaches and cricket communities through experience, education and performance intelligence.
            </p>

            {/* CTAs */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '16px',
                alignItems: 'center',
                marginBottom: '40px'
              }}
            >
              <button
                onClick={() => onNavigate('cpi')}
                className="btn btn-primary btn-lg"
              >
                <span>Explore My Work</span>
                <ArrowRight size={18} />
              </button>

              <button
                onClick={() => onNavigate('mighty-network')}
                className="btn btn-secondary btn-lg"
              >
                <Sparkles size={18} color="var(--accent-gold)" />
                <span>Join the Mighty Cricket Network</span>
              </button>
            </div>

            {/* Credibility Pills */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '16px',
                paddingTop: '20px',
                borderTop: '1px solid var(--border-subtle)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                <ShieldCheck size={16} color="var(--accent-gold)" />
                <span>70 Test Matches for South Africa</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                <Award size={16} color="var(--accent-gold)" />
                <span>Creator of CPI & Mighty Network</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Portrait & Interactive Card */}
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
            {/* Glowing Border Behind Image */}
            <div
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '480px',
                borderRadius: 'var(--radius-xl)',
                padding: '4px',
                background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.4) 0%, rgba(255, 255, 255, 0.05) 50%, rgba(212, 175, 55, 0.2) 100%)',
                boxShadow: '0 20px 60px rgba(0,0,0,0.7)'
              }}
            >
              <div
                style={{
                  borderRadius: 'calc(var(--radius-xl) - 4px)',
                  overflow: 'hidden',
                  position: 'relative',
                  background: '#12141D',
                  aspectRatio: '4 / 5'
                }}
              >
                <img
                  src="/images/daryll_hero.png"
                  alt="Daryll Cullinan"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'top center',
                    filter: 'contrast(1.05) brightness(0.98)'
                  }}
                />

                {/* Overlaid Gradient */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '50%',
                    background: 'linear-gradient(to top, rgba(9, 10, 14, 0.95) 0%, rgba(9, 10, 14, 0) 100%)'
                  }}
                />

                {/* Overlaid Floating Badge */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '24px',
                    left: '24px',
                    right: '24px',
                    background: 'rgba(18, 20, 29, 0.9)',
                    backdropFilter: 'blur(16px)',
                    border: '1px solid var(--border-gold)',
                    borderRadius: 'var(--radius-md)',
                    padding: '14px 18px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '12px'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div
                      style={{
                        width: '44px',
                        height: '44px',
                        borderRadius: '50%',
                        overflow: 'hidden',
                        border: '2px solid var(--accent-gold)',
                        flexShrink: 0
                      }}
                    >
                      <img
                        src="/images/daryll_sa_kit.png"
                        alt="Daryll Cullinan SA Kit"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    </div>
                    <div>
                      <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.05rem', color: '#FFFFFF' }}>
                        Daryll Cullinan
                      </div>
                      <div style={{ fontSize: '0.78rem', color: 'var(--accent-gold-light)' }}>
                        International High Score: 275*
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => onOpenModal('cpi-demo')}
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      background: 'var(--accent-gold)',
                      border: 'none',
                      color: '#090A0E',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      boxShadow: '0 4px 12px rgba(212, 175, 55, 0.4)'
                    }}
                    title="Watch Introduction"
                  >
                    <PlayCircle size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div
          style={{
            marginTop: '80px',
            background: 'var(--bg-card)',
            border: '1px solid var(--border-gold)',
            borderRadius: 'var(--radius-xl)',
            padding: '28px 36px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: '24px',
            boxShadow: '0 10px 40px rgba(0, 0, 0, 0.4)'
          }}
        >
          {HERO_STATS.map((stat, idx) => (
            <div
              key={idx}
              style={{
                borderRight: idx < HERO_STATS.length - 1 ? '1px solid var(--border-subtle)' : 'none',
                paddingRight: '16px',
                textAlign: 'center'
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '2.2rem',
                  fontWeight: 800,
                  color: 'var(--accent-gold-light)',
                  lineHeight: 1
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  color: 'var(--text-muted)',
                  marginTop: '6px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em'
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
