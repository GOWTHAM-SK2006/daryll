import React, { useState } from 'react';
import { Target, Award, Video, Users, CheckCircle, ArrowRight, Sparkles, BookOpen } from 'lucide-react';

interface CoachingProps {
  onOpenModal: (type: string, data?: any) => void;
  onNavigate: (sectionId: string) => void;
}

export const CoachingSection: React.FC<CoachingProps> = ({ onOpenModal, onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'player' | 'coach' | 'academy'>('all');

  const COACHING_PROGRAMS = [
    {
      id: 'prog1',
      category: 'player',
      title: '1-on-1 Elite Batting Mentorship',
      subtitle: 'For First-Class & Emerging Professional Batters',
      desc: 'Intensive 1-on-1 biomechanical breakdown, posture alignment, mental pre-ball anchoring, and high-velocity bowler neutralization.',
      icon: Target,
      features: ['Personalized video analysis', 'Custom technical drills plan', 'Direct WhatsApp feedback line', 'Mental conditioning framework'],
      recommendedFor: 'Professional & Academy Players'
    },
    {
      id: 'prog2',
      category: 'coach',
      title: 'Coach Development & Mastermind',
      subtitle: 'For High Performance & Private Coaches',
      desc: 'Upgrade your diagnostic skills, session design, and player feedback loops with Daryll Cullinan’s proven coaching methodologies.',
      icon: Award,
      features: ['CPI diagnostic toolkit access', 'Biomechanical analysis rubrics', 'Monthly live coach mastermind sessions', 'Certificate of Completion'],
      recommendedFor: 'Head Coaches & Assistant Coaches'
    },
    {
      id: 'prog3',
      category: 'player',
      title: 'Global Remote Video Analysis',
      subtitle: 'Virtual Coaching Anywhere in the World',
      desc: 'Upload your match footage or net session videos. Daryll provides voice-over video breakdowns highlighting exact technical adjustments.',
      icon: Video,
      features: ['Frame-by-frame mechanical assessment', 'Stance & balance check', 'Split-screen comparison with Test standards', '72-hour report turnaround'],
      recommendedFor: 'Global Players & Overseas Athletes'
    },
    {
      id: 'prog4',
      category: 'academy',
      title: 'Academy & Team Technical Audit',
      subtitle: 'For Sports Institutes, Franchises & Schools',
      desc: 'On-site or hybrid audit of your squad’s batting lineup, technical drills, and tactical game plans before major tournaments.',
      icon: Users,
      features: ['Squad-wide CPI evaluation', 'Batting lineup tactical strategy', 'Coach staff alignment workshops', 'Executive performance summary'],
      recommendedFor: 'Academies, Franchises & Schools'
    }
  ];

  const filteredPrograms = selectedCategory === 'all'
    ? COACHING_PROGRAMS
    : COACHING_PROGRAMS.filter(p => p.category === selectedCategory);

  return (
    <section id="coaching" className="section-padding" style={{ background: '#090A0E' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="gold-badge" style={{ marginBottom: '16px' }}>
            <Target size={14} color="var(--accent-gold)" />
            <span>High-Performance Coaching</span>
          </div>
          <h2>Elite Coaching & Mentorship</h2>
          <p>
            Transforming talent into consistent, pressure-tested performers through biomechanical clarity, tactical awareness, and mental resilience.
          </p>
        </div>

        {/* Philosophy Card */}
        <div
          className="glass-card-accent"
          style={{
            marginBottom: '60px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '32px',
            alignItems: 'center'
          }}
        >
          <div>
            <div style={{ fontSize: '0.8rem', color: 'var(--accent-gold)', fontWeight: 700, textTransform: 'uppercase', marginBottom: '8px' }}>
              Coaching Philosophy
            </div>
            <h3 style={{ fontSize: '1.8rem', color: '#FFFFFF', marginBottom: '16px' }}>
              "Simplicity Under Pressure, Precision in Execution"
            </h3>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, fontSize: '1rem' }}>
              Daryll’s coaching philosophy strips away unnecessary clutter. By focusing on balance, head alignment, decision-making timing, and emotional control, players learn to master their craft under the highest levels of competitive pressure.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {[
              { title: 'Biomechanical Balance', desc: 'Optimal weight distribution and head control at ball release.' },
              { title: 'Tactical Decision Engine', desc: 'Knowing when to attack, defend, or absorb bowling pressure.' },
              { title: 'Mental Resilience', desc: 'Controlling fear, media noise, and building innings longevity.' }
            ].map((pillar, i) => (
              <div
                key={i}
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-md)',
                  padding: '16px 20px'
                }}
              >
                <div style={{ fontWeight: 700, color: 'var(--accent-gold-light)', fontSize: '0.95rem' }}>
                  {pillar.title}
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                  {pillar.desc}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Program Category Filter */}
        <div style={{ marginBottom: '32px', display: 'flex', justifyContent: 'center' }}>
          <div className="tabs-container">
            <button
              className={`tab-btn ${selectedCategory === 'all' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('all')}
            >
              All Programs
            </button>
            <button
              className={`tab-btn ${selectedCategory === 'player' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('player')}
            >
              Player Programs
            </button>
            <button
              className={`tab-btn ${selectedCategory === 'coach' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('coach')}
            >
              Coach Mentorship
            </button>
            <button
              className={`tab-btn ${selectedCategory === 'academy' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('academy')}
            >
              Academy & Teams
            </button>
          </div>
        </div>

        {/* Coaching Programs Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '28px',
            marginBottom: '50px'
          }}
        >
          {filteredPrograms.map((prog) => {
            const IconComp = prog.icon;
            return (
              <div
                key={prog.id}
                className="glass-card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
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
                        width: '46px',
                        height: '46px',
                        borderRadius: '12px',
                        background: 'rgba(212, 175, 55, 0.12)',
                        border: '1px solid var(--border-gold)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--accent-gold)'
                      }}
                    >
                      <IconComp size={22} />
                    </div>
                    <span
                      style={{
                        fontSize: '0.72rem',
                        padding: '4px 10px',
                        borderRadius: '12px',
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid var(--border-subtle)',
                        color: 'var(--text-muted)'
                      }}
                    >
                      {prog.recommendedFor}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.3rem', color: '#FFFFFF', marginBottom: '6px' }}>
                    {prog.title}
                  </h3>
                  <div style={{ fontSize: '0.85rem', color: 'var(--accent-gold-light)', fontWeight: 600, marginBottom: '14px' }}>
                    {prog.subtitle}
                  </div>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '20px' }}>
                    {prog.desc}
                  </p>

                  <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '16px', marginBottom: '24px' }}>
                    <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '10px', textTransform: 'uppercase' }}>
                      Program Highlights:
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {prog.features.map((feat, fidx) => (
                        <div key={fidx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                          <CheckCircle size={14} color="var(--accent-gold)" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => onOpenModal('coaching-inquiry', { program: prog.title })}
                  className="btn btn-primary"
                  style={{ width: '100%' }}
                >
                  <span>Explore Coaching</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            );
          })}
        </div>

        {/* Banner CTA */}
        <div
          style={{
            background: 'linear-gradient(135deg, #171A26 0%, #0E1017 100%)',
            border: '1px solid var(--border-gold)',
            borderRadius: 'var(--radius-xl)',
            padding: '36px',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '16px'
          }}
        >
          <Sparkles size={28} color="var(--accent-gold)" />
          <h3 style={{ fontSize: '1.6rem', color: '#FFFFFF' }}>Ready to Elevate Your Cricket Performance?</h3>
          <p style={{ color: 'var(--text-muted)', maxWidth: '600px', fontSize: '1rem' }}>
            Book an initial consultation or video review with Daryll Cullinan to map out your customized high-performance development plan.
          </p>
          <button
            onClick={() => onOpenModal('coaching-inquiry')}
            className="btn btn-primary btn-lg"
          >
            <span>Book Coaching Session</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};
