import React, { useState } from 'react';
import { Award, CheckCircle, Calendar, Sparkles, UserCheck, Shield } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'playing' | 'coaching' | 'media' | 'ventures'>('playing');

  const TIMELINE_DATA = {
    playing: [
      { year: '1993', title: 'South African International Debut', desc: 'Debuted in Test and ODI cricket against India, quickly establishing himself as a top-order batting powerhouse.' },
      { year: '1993-2001', title: 'Test Career Peak & 275* Landmark', desc: 'Scored 4,684 Test runs across 70 matches at an impressive average of 44.21, including a memorable unbeaten 275* against New Zealand.' },
      { year: '138 ODIs', title: 'Limited-Overs Dominance', desc: 'Represented South Africa in 138 One Day Internationals, accumulating over 3,800 runs with 3 centuries.' }
    ],
    coaching: [
      { year: '2005 - Present', title: 'High-Performance Coaching & Academies', desc: 'Coached premier international academy programs, state sides, and private elite batting clinics across South Africa, India, and the UK.' },
      { year: 'Biomechanical Master', title: 'Technical & Stance Diagnostics', desc: 'Developed proprietary biomechanical breakdown protocols for footwork, balance, and neutralizing elite bowling variations.' },
      { year: '1-on-1 Mentorship', title: 'International & Franchise Player Guidance', desc: 'Mentored dozens of professional players in domestic First-Class and international franchise leagues.' }
    ],
    media: [
      { year: '2008 - Present', title: 'SuperSport Senior Analyst', desc: 'Lead tactical studio and pitch commentary analyst for international Test matches and global ICC tournaments.' },
      { year: 'Cricinfo & Print', title: 'Thought Leadership & Articles', desc: 'Regular columnist breaking down batting craft, team leadership, and tactical match shifts.' },
      { year: 'Broadcasting', title: 'Global Commentary Panelist', desc: 'Trusted global voice recognized for sharp tactical insights and zero-fluff analysis.' }
    ],
    ventures: [
      { year: '2024', title: 'Launch of Cullinan Performance Index (CPI)', desc: 'Architected the CPI diagnostic engine to give coaches and players scientific metrics for technical and mental evaluation.' },
      { year: '2025', title: 'Mighty Cricket Network', desc: 'Founded the global digital community platform connecting aspiring players, coaches, and parents directly with high-performance masterclasses.' },
      { year: 'Ongoing', title: 'Digital Courses & Global Seminars', desc: 'Expanding online masterclasses, eBooks, webinars, and institutional academy partnerships.' }
    ]
  };

  return (
    <section id="about" className="section-padding" style={{ position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="gold-badge" style={{ marginBottom: '16px' }}>
            <UserCheck size={14} color="var(--accent-gold)" />
            <span>Biography & Heritage</span>
          </div>
          <h2>Mastering the Craft of International Cricket</h2>
          <p>
            A legacy built on top-level performance, technical precision, and a relentless dedication to developing the next generation of cricket leaders.
          </p>
        </div>

        {/* Biography Content Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '36px',
            alignItems: 'center',
            marginBottom: '60px'
          }}
        >
          {/* Left Visual Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', position: 'relative' }}>
            <div
              style={{
                borderRadius: 'var(--radius-xl)',
                overflow: 'hidden',
                border: '1px solid var(--border-gold)',
                boxShadow: 'var(--shadow-md)',
                position: 'relative',
                aspectRatio: '4 / 3'
              }}
            >
              <img
                src="/images/daryll_sa_kit.png"
                alt="Daryll Cullinan South Africa International Legend"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center center' }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(9, 10, 14, 0.9) 0%, rgba(9, 10, 14, 0.1) 60%)'
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: '16px',
                  left: '16px',
                  right: '16px',
                  color: '#FFFFFF'
                }}
              >
                <div style={{ fontSize: '0.78rem', color: 'var(--accent-gold)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Authentic International Profile
                </div>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: 800 }}>
                  Daryll Cullinan • Former SA Legend
                </div>
              </div>
            </div>

            <div
              style={{
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                border: '1px solid var(--border-subtle)',
                position: 'relative',
                aspectRatio: '16 / 9'
              }}
            >
              <img
                src="/images/action_batting.png"
                alt="Daryll Cullinan Batting Classic Cover Drive"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>

          {/* Right Text Column */}
          <div>
            <h3 style={{ fontSize: 'clamp(1.5rem, 3.5vw, 1.8rem)', color: '#FFFFFF', marginBottom: '16px' }}>
              About Daryll Cullinan
            </h3>

            <p style={{ color: 'var(--text-muted)', lineHeight: 1.65, marginBottom: '14px', fontSize: '0.98rem' }}>
              Daryll Cullinan is widely regarded as one of South Africa’s finest Test batsmen. Renowned for his immaculate footwork, classical strokeplay, and deep understanding of the game, Daryll represented South Africa in 70 Test matches and 138 ODIs over a decorated international career.
            </p>

            <p style={{ color: 'var(--text-muted)', lineHeight: 1.65, marginBottom: '20px', fontSize: '0.98rem' }}>
              Following his playing career, Daryll transitioned into one of the most respected high-performance coaches and media analysts in global cricket. Today, he combines decades of top-tier experience with data-driven technology through the <strong>Cullinan Performance Index (CPI)</strong> and the <strong>Mighty Cricket Network</strong>.
            </p>

            {/* Checklist Pillars */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                gap: '12px',
                marginTop: '20px'
              }}
            >
              {[
                'International Playing Career',
                'Elite Player Development',
                'Global Media & Analysis',
                'Executive Mentoring',
                'CPI Performance System',
                'Mighty Cricket Network'
              ].map((item, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.86rem', color: '#E5E7EB' }}>
                  <CheckCircle size={15} color="var(--accent-gold)" style={{ flexShrink: 0 }} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Milestone Timeline Tabs */}
        <div style={{ marginTop: '40px' }}>
          <div style={{ textAlign: 'center', marginBottom: '24px' }}>
            <h3 style={{ fontSize: 'clamp(1.3rem, 3vw, 1.6rem)', color: '#FFFFFF' }}>Career Journey & Achievements</h3>
          </div>

          {/* Touch Scrollable Tabs */}
          <div className="tabs-container" style={{ justifyContent: 'flex-start', paddingBottom: '10px' }}>
            <button
              className={`tab-btn ${activeTab === 'playing' ? 'active' : ''}`}
              onClick={() => setActiveTab('playing')}
            >
              Playing Career
            </button>
            <button
              className={`tab-btn ${activeTab === 'coaching' ? 'active' : ''}`}
              onClick={() => setActiveTab('coaching')}
            >
              Coaching & Mentorship
            </button>
            <button
              className={`tab-btn ${activeTab === 'media' ? 'active' : ''}`}
              onClick={() => setActiveTab('media')}
            >
              Media & Broadcast
            </button>
            <button
              className={`tab-btn ${activeTab === 'ventures' ? 'active' : ''}`}
              onClick={() => setActiveTab('ventures')}
            >
              Current Projects & Ventures
            </button>
          </div>

          {/* Timeline Cards */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '20px',
              animation: 'fadeIn 0.3s ease'
            }}
          >
            {TIMELINE_DATA[activeTab].map((item, index) => (
              <div
                key={index}
                className="glass-card"
                style={{
                  borderLeft: '4px solid var(--accent-gold)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.82rem', color: 'var(--accent-gold)', fontWeight: 700, marginBottom: '6px' }}>
                  <Calendar size={14} />
                  <span>{item.year}</span>
                </div>
                <h4 style={{ fontSize: '1.1rem', color: '#FFFFFF', marginBottom: '8px' }}>
                  {item.title}
                </h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.55 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
