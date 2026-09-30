import React from 'react';
import { Award, UserCheck, Tv, Compass, Layers, Activity, Users, BookOpen, Handshake } from 'lucide-react';
import { CREDIBILITY_ITEMS } from '../data/mockData';

interface CredibilityProps {
  onNavigate: (sectionId: string) => void;
}

export const CredibilitySection: React.FC<CredibilityProps> = ({ onNavigate }) => {
  const ECOSYSTEM_CARDS = [
    {
      id: 'personal',
      title: 'Daryll Cullinan Personal Brand',
      desc: 'Former international Test batsman, high-performance mentor, broadcaster and keynote speaker.',
      icon: UserCheck,
      actionText: 'Explore Biography',
      sectionId: 'about',
      badge: 'Personal Hub'
    },
    {
      id: 'cpi',
      title: 'Cullinan Performance Index (CPI)',
      desc: 'The world-class diagnostic evaluation tool and cricket performance intelligence platform for coaches & players.',
      icon: Activity,
      actionText: 'Explore CPI Platform',
      sectionId: 'cpi',
      badge: 'Product & Tech'
    },
    {
      id: 'network',
      title: 'Mighty Cricket Network',
      desc: 'Global digital community connecting players, coaches and parents for masterclasses, mentoring and discussions.',
      icon: Users,
      actionText: 'Join Community',
      sectionId: 'mighty-network',
      badge: 'Community Platform'
    },
    {
      id: 'academy',
      title: 'Digital Courses & eBooks',
      desc: 'Self-paced masterclasses, eBooks and training materials covering batting mechanics, mental craft and coaching tactics.',
      icon: BookOpen,
      actionText: 'Browse Academy',
      sectionId: 'courses',
      badge: 'Digital Products'
    },
    {
      id: 'business',
      title: 'Partnerships & Opportunities',
      desc: 'Academy licensing, team consulting, brand ambassadorship, media commentary and executive speaking.',
      icon: Handshake,
      actionText: 'Work With Daryll',
      sectionId: 'partnerships',
      badge: 'Coaching & Business'
    }
  ];

  return (
    <section
      id="credibility"
      className="section-padding"
      style={{
        background: '#0B0D13',
        borderTop: '1px solid var(--border-subtle)',
        borderBottom: '1px solid var(--border-subtle)'
      }}
    >
      <div className="container">
        {/* Credibility Grid */}
        <div className="section-header">
          <div className="gold-badge" style={{ marginBottom: '16px' }}>
            <Award size={14} color="var(--accent-gold)" />
            <span>Proven Excellence</span>
          </div>
          <h2>A Premier Hub for Global Cricket Excellence</h2>
          <p>
            Bridging international playing experience with modern performance analytics and global community education.
          </p>
        </div>

        {/* 5 Core Pillars Bar */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '20px',
            marginBottom: '60px'
          }}
        >
          {CREDIBILITY_ITEMS.map((item, index) => (
            <div
              key={index}
              style={{
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-md)',
                padding: '24px',
                transition: 'all 0.3s ease'
              }}
              className="cred-item-card"
            >
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '10px',
                  background: 'rgba(212, 175, 55, 0.12)',
                  border: '1px solid var(--border-gold)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-gold)',
                  marginBottom: '16px'
                }}
              >
                <Compass size={20} />
              </div>
              <h4 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '8px', color: '#FFFFFF' }}>
                {item.title}
              </h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Brand Ecosystem Hub (Clear Separation of Purpose) */}
        <div style={{ marginTop: '40px' }}>
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <h3 style={{ fontSize: '1.6rem', color: '#FFFFFF' }}>
              The Cullinan Ecosystem
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
              Choose your path to explore Daryll's personal brand, performance platform, community, digital products or business opportunities.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '24px'
            }}
          >
            {ECOSYSTEM_CARDS.map((card) => {
              const IconComp = card.icon;
              return (
                <div
                  key={card.id}
                  className="glass-card"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    cursor: 'pointer'
                  }}
                  onClick={() => onNavigate(card.sectionId)}
                >
                  <div>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginBottom: '20px'
                      }}
                    >
                      <div
                        style={{
                          width: '48px',
                          height: '48px',
                          borderRadius: '14px',
                          background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.2) 0%, rgba(212, 175, 55, 0.05) 100%)',
                          border: '1px solid var(--border-gold)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'var(--accent-gold-light)'
                        }}
                      >
                        <IconComp size={24} />
                      </div>
                      <span
                        style={{
                          fontSize: '0.7rem',
                          padding: '4px 10px',
                          borderRadius: '20px',
                          background: 'rgba(255,255,255,0.05)',
                          border: '1px solid var(--border-subtle)',
                          color: 'var(--accent-gold-light)',
                          fontWeight: 700
                        }}
                      >
                        {card.badge}
                      </span>
                    </div>

                    <h3 style={{ fontSize: '1.25rem', marginBottom: '10px', color: '#FFFFFF' }}>
                      {card.title}
                    </h3>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.5, marginBottom: '24px' }}>
                      {card.desc}
                    </p>
                  </div>

                  <button
                    className="btn btn-outline-gold btn-sm"
                    style={{ width: '100%' }}
                  >
                    <span>{card.actionText}</span>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
