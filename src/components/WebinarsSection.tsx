import React from 'react';
import { Calendar, Clock, User, CheckCircle, Video, ArrowRight, PlayCircle } from 'lucide-react';
import { WEBINARS_DATA } from '../data/mockData';
import { Webinar } from '../types';

interface WebinarsSectionProps {
  onOpenModal: (type: string, data?: any) => void;
}

export const WebinarsSection: React.FC<WebinarsSectionProps> = ({ onOpenModal }) => {
  const upcomingWebinars = WEBINARS_DATA.filter(w => w.isUpcoming);
  const previousWebinars = WEBINARS_DATA.filter(w => !w.isUpcoming);

  return (
    <section id="webinars" className="section-padding" style={{ background: '#0B0D14' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="gold-badge" style={{ marginBottom: '16px' }}>
            <Calendar size={14} color="var(--accent-gold)" />
            <span>Interactive Live Masterclasses</span>
          </div>
          <h2>Live Webinars & Workshops</h2>
          <p>
            Join Daryll Cullinan live for exclusive strategy masterclasses, coaching Q&As, and tactical performance breakdowns.
          </p>
        </div>

        {/* Upcoming Webinars Grid */}
        <div style={{ marginBottom: '60px' }}>
          <h3 style={{ fontSize: '1.4rem', color: '#FFFFFF', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10B981', display: 'inline-block' }} />
            Upcoming Live Sessions
          </h3>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '28px'
            }}
          >
            {upcomingWebinars.map((webinar) => (
              <div
                key={webinar.id}
                className="glass-card-accent"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  padding: '32px'
                }}
              >
                <div>
                  <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '16px' }}>
                    <span className="gold-badge">
                      <Calendar size={13} />
                      <span>{webinar.date}</span>
                    </span>
                    <span
                      style={{
                        fontSize: '0.78rem',
                        padding: '4px 12px',
                        borderRadius: '20px',
                        background: 'rgba(255,255,255,0.06)',
                        border: '1px solid var(--border-subtle)',
                        color: 'var(--text-muted)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px'
                      }}
                    >
                      <Clock size={13} />
                      <span>{webinar.time}</span>
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.4rem', color: '#FFFFFF', marginBottom: '10px', lineHeight: 1.3 }}>
                    {webinar.title}
                  </h3>

                  <div style={{ fontSize: '0.85rem', color: 'var(--accent-gold-light)', fontWeight: 700, marginBottom: '12px' }}>
                    Topic: {webinar.topic}
                  </div>

                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '20px' }}>
                    {webinar.description}
                  </p>

                  <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '16px', marginBottom: '24px' }}>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-dim)', fontWeight: 600 }}>
                      RECOMMENDED FOR: <span style={{ color: '#FFFFFF' }}>{webinar.targetAudience}</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => onOpenModal('webinar-register', webinar)}
                  className="btn btn-primary btn-lg"
                  style={{ width: '100%' }}
                >
                  <span>Register Free Seat</span>
                  <ArrowRight size={18} />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Previous Webinars Vault */}
        <div>
          <h3 style={{ fontSize: '1.4rem', color: '#FFFFFF', marginBottom: '24px' }}>
            Previous Webinars Archive
          </h3>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '24px'
            }}
          >
            {previousWebinars.map((webinar) => (
              <div key={webinar.id} className="glass-card" style={{ padding: '24px' }}>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '8px' }}>
                  Recorded on {webinar.date}
                </div>
                <h4 style={{ fontSize: '1.2rem', color: '#FFFFFF', marginBottom: '10px' }}>
                  {webinar.title}
                </h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.5, marginBottom: '20px' }}>
                  {webinar.description}
                </p>
                <button
                  onClick={() => onOpenModal('webinar-replay', webinar)}
                  className="btn btn-secondary btn-sm"
                  style={{ width: '100%' }}
                >
                  <PlayCircle size={16} color="var(--accent-gold)" />
                  <span>Watch Replay</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
