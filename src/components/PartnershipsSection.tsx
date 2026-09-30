import React from 'react';
import { Handshake, Building2, GraduationCap, Trophy, Cpu, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';
import { PARTNERSHIP_CATEGORIES } from '../data/mockData';

interface PartnershipsSectionProps {
  onNavigate: (sectionId: string, enquiryType?: string) => void;
  onOpenModal: (type: string, data?: any) => void;
}

export const PartnershipsSection: React.FC<PartnershipsSectionProps> = ({ onNavigate, onOpenModal }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'GraduationCap': return GraduationCap;
      case 'Trophy': return Trophy;
      case 'Building2': return Building2;
      case 'Cpu': return Cpu;
      default: return Handshake;
    }
  };

  return (
    <section id="partnerships" className="section-padding" style={{ background: '#090A0E' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="gold-badge" style={{ marginBottom: '16px' }}>
            <Handshake size={14} color="var(--accent-gold)" />
            <span>Institutional & Corporate Alliances</span>
          </div>
          <h2>Partnerships & Business Opportunities</h2>
          <p>
            Collaborating with world-class sports academies, professional franchises, global brands, and analytics organizations to drive elite standards in cricket.
          </p>
        </div>

        {/* Partnership Categories Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '28px',
            marginBottom: '60px'
          }}
        >
          {PARTNERSHIP_CATEGORIES.map((cat) => {
            const IconComp = getIcon(cat.iconName);
            return (
              <div
                key={cat.id}
                className="glass-card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  padding: '32px'
                }}
              >
                <div>
                  <div
                    style={{
                      width: '50px',
                      height: '50px',
                      borderRadius: '14px',
                      background: 'rgba(212, 175, 55, 0.12)',
                      border: '1px solid var(--border-gold)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--accent-gold)',
                      marginBottom: '20px'
                    }}
                  >
                    <IconComp size={24} />
                  </div>

                  <h3 style={{ fontSize: '1.35rem', color: '#FFFFFF', marginBottom: '10px' }}>
                    {cat.title}
                  </h3>

                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '24px' }}>
                    {cat.description}
                  </p>

                  <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '16px', marginBottom: '24px' }}>
                    <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '10px', textTransform: 'uppercase' }}>
                      Key Collaboration Benefits:
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {cat.benefits.map((ben, bidx) => (
                        <div key={bidx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                          <CheckCircle size={14} color="var(--accent-gold)" />
                          <span>{ben}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => onNavigate('contact', 'Partnership')}
                  className="btn btn-outline-gold btn-sm"
                  style={{ width: '100%' }}
                >
                  <span>Inquire Partnership</span>
                </button>
              </div>
            );
          })}
        </div>

        {/* Big Banner CTA */}
        <div
          className="glass-card-accent"
          style={{
            textAlign: 'center',
            padding: '48px 36px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '20px'
          }}
        >
          <Sparkles size={32} color="var(--accent-gold)" />
          <h3 style={{ fontSize: '2rem', color: '#FFFFFF' }}>
            Elevate Your Organization with Daryll Cullinan
          </h3>
          <p style={{ color: 'var(--text-muted)', maxWidth: '640px', fontSize: '1.05rem', lineHeight: 1.6 }}>
            Whether you are looking for keynote speaking, squad performance audits, academy curriculum licensing, or brand ambassadorship, let’s build a winning partnership.
          </p>
          <button
            onClick={() => onNavigate('contact', 'Partnership')}
            className="btn btn-primary btn-lg"
          >
            <span>Work With Daryll</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};
