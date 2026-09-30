import React from 'react';
import { Video, Globe, Tv, ShieldCheck, Mail, ArrowUp } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenModal: (type: string, data?: any) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        background: '#06070A',
        borderTop: '1px solid var(--border-gold)',
        paddingTop: '70px',
        paddingBottom: '40px',
        color: 'var(--text-muted)'
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '40px',
            marginBottom: '60px'
          }}
        >
          {/* Brand Column */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '10px',
                  background: 'linear-gradient(135deg, #D4AF37 0%, #A17E1A 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: '900',
                  fontSize: '1.3rem',
                  color: '#090A0E'
                }}
              >
                DC
              </div>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', fontWeight: 800, color: '#FFFFFF' }}>
                DARYLL CULLINAN
              </div>
            </div>

            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '20px' }}>
              Former International Cricketer | Coach | Analyst | Mentor | Entrepreneur
            </p>

            <p style={{ fontSize: '0.82rem', color: 'var(--text-dim)', lineHeight: 1.5 }}>
              Central digital headquarters for high-performance player development, CPI analytics engine, and Mighty Cricket Network.
            </p>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 style={{ fontSize: '1rem', color: '#FFFFFF', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Ecosystem & Navigation
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.9rem' }}>
              {['About', 'Coaching', 'CPI', 'Mighty Cricket Network', 'Courses & eBooks', 'Podcast & Media', 'Webinars', 'Partnerships', 'Contact'].map((item) => {
                const navId = item === 'Courses & eBooks' ? 'courses' : item === 'Podcast & Media' ? 'podcast' : item.toLowerCase().replace(/ /g, '-');
                return (
                  <li key={item}>
                    <button
                      onClick={() => onNavigate(navId)}
                      style={{
                        background: 'none',
                        border: 'none',
                        color: 'var(--text-muted)',
                        cursor: 'pointer',
                        padding: 0,
                        fontSize: '0.88rem',
                        transition: 'color 0.2s ease'
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-gold)')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
                    >
                      {item}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Products & Platforms Column */}
          <div>
            <h4 style={{ fontSize: '1rem', color: '#FFFFFF', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Key Offerings
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.88rem' }}>
              <li><a onClick={() => onOpenModal('cpi-demo')} style={{ color: 'var(--text-muted)', cursor: 'pointer' }}>Cullinan Performance Index (CPI)</a></li>
              <li><a onClick={() => onNavigate('mighty-network')} style={{ color: 'var(--text-muted)', cursor: 'pointer' }}>Mighty Cricket Network Community</a></li>
              <li><a onClick={() => onNavigate('coaching')} style={{ color: 'var(--text-muted)', cursor: 'pointer' }}>1-on-1 Elite Batting Mentorship</a></li>
              <li><a onClick={() => onNavigate('courses')} style={{ color: 'var(--text-muted)', cursor: 'pointer' }}>Mastering the Mental Game & Test Craft</a></li>
              <li><a onClick={() => onNavigate('partnerships')} style={{ color: 'var(--text-muted)', cursor: 'pointer' }}>Academy & Squad Technical Audits</a></li>
            </ul>
          </div>

          {/* Social & Contact Direct Column */}
          <div>
            <h4 style={{ fontSize: '1rem', color: '#FFFFFF', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Connect & Support
            </h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '16px' }}>
              Direct Business Enquiries: <br />
              <strong style={{ color: 'var(--accent-gold-light)' }}>office@daryllcullinan.com</strong>
            </p>

            <div style={{ display: 'flex', gap: '12px', marginBottom: '24px' }}>
              {[
                { icon: Video, link: 'https://youtube.com' },
                { icon: Globe, link: 'https://linkedin.com' },
                { icon: Tv, link: 'https://instagram.com' }
              ].map((soc, i) => {
                const IconComp = soc.icon;
                return (
                  <a
                    key={i}
                    href={soc.link}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '8px',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid var(--border-subtle)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#FFFFFF',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <IconComp size={18} />
                  </a>
                );
              })}
            </div>

            <button
              onClick={scrollToTop}
              className="btn btn-secondary btn-sm"
              style={{ fontSize: '0.8rem', gap: '6px' }}
            >
              <ArrowUp size={14} />
              <span>Back to Top</span>
            </button>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div
          style={{
            borderTop: '1px solid var(--border-subtle)',
            paddingTop: '24px',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px',
            fontSize: '0.82rem',
            color: 'var(--text-dim)'
          }}
        >
          <div>
            © {new Date().getFullYear()} Daryll Cullinan. All Rights Reserved. Designed for Global High Performance.
          </div>

          <div style={{ display: 'flex', gap: '20px' }}>
            <button
              onClick={() => onOpenModal('privacy')}
              style={{ background: 'none', border: 'none', color: 'var(--text-dim)', cursor: 'pointer', fontSize: '0.82rem' }}
            >
              Privacy Policy
            </button>
            <button
              onClick={() => onOpenModal('terms')}
              style={{ background: 'none', border: 'none', color: 'var(--text-dim)', cursor: 'pointer', fontSize: '0.82rem' }}
            >
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
