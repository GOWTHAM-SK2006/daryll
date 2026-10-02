import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Activity } from 'lucide-react';
import { NavigationItem } from '../types';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenModal: (type: string, data?: any) => void;
}

const NAV_ITEMS: NavigationItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'coaching', label: 'Coaching' },
  { id: 'cpi', label: 'CPI Platform', badge: 'PRO' },
  { id: 'mighty-network', label: 'Mighty Network', badge: 'COMMUNITY' },
  { id: 'courses', label: 'Courses & eBooks' },
  { id: 'podcast', label: 'Podcast & Media' },
  { id: 'webinars', label: 'Webinars' },
  { id: 'partnerships', label: 'Partnerships' },
  { id: 'contact', label: 'Contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate, onOpenModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when navigation drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
          background: scrolled ? 'rgba(9, 10, 14, 0.96)' : 'rgba(9, 10, 14, 0.85)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: scrolled ? '1px solid rgba(212, 175, 55, 0.3)' : '1px solid rgba(255, 255, 255, 0.08)',
          boxShadow: scrolled ? '0 10px 40px rgba(0,0,0,0.7)' : 'none',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '72px',
            width: '100%',
            padding: '0 32px',
            boxSizing: 'border-box'
          }}
          className="navbar-wrapper"
        >
          {/* HAMBURGER MENU ICON (☰) - LEFT SIDE */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid var(--border-subtle)',
              color: '#FFFFFF',
              width: '44px',
              height: '44px',
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              flexShrink: 0,
              transition: 'all 0.2s ease',
              boxShadow: '0 2px 8px rgba(0,0,0,0.3)'
            }}
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {mobileMenuOpen ? <X size={22} color="var(--accent-gold-light)" /> : <Menu size={22} />}
          </button>

          {/* DARYLL CULLINAN BRANDING - RIGHT SIDE */}
          <div
            onClick={() => handleNavClick('home')}
            style={{
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              flexShrink: 0,
              userSelect: 'none'
            }}
          >
            <div
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                background: 'linear-gradient(135deg, #F5BA4E 0%, #D4AF37 50%, #9A6A15 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 900,
                fontSize: '1.2rem',
                color: '#090A0E',
                boxShadow: '0 4px 18px rgba(212, 175, 55, 0.35)',
                letterSpacing: '-0.04em',
                flexShrink: 0
              }}
            >
              DC
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.12rem',
                  fontWeight: 800,
                  letterSpacing: '0.03em',
                  color: '#FFFFFF',
                  lineHeight: 1.1,
                  whiteSpace: 'nowrap'
                }}
              >
                DARYLL CULLINAN
              </span>
              <span
                style={{
                  fontSize: '0.64rem',
                  color: 'var(--accent-gold)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  fontWeight: 700,
                  whiteSpace: 'nowrap',
                  marginTop: '2px'
                }}
              >
                International Cricketer & Coach
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Responsive Breakpoint Padding Fix */}
      <style>{`
        @media (max-width: 768px) {
          .navbar-wrapper {
            padding: 0 16px !important;
          }
        }
      `}</style>

      {/* DIMMED BACKDROP OVERLAY (Outside Click Closes Drawer) */}
      <div
        onClick={() => setMobileMenuOpen(false)}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: '100vw',
          height: '100dvh',
          background: 'rgba(5, 6, 9, 0.65)',
          backdropFilter: 'blur(4px)',
          WebkitBackdropFilter: 'blur(4px)',
          zIndex: 99998,
          opacity: mobileMenuOpen ? 1 : 0,
          pointerEvents: mobileMenuOpen ? 'auto' : 'none',
          transition: 'opacity 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
      />

      {/* LEFT SLIDING NAVIGATION DRAWER (~50% Viewport Width) */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          bottom: 0,
          width: '50vw',
          minWidth: '280px',
          maxWidth: '520px',
          height: '100dvh',
          background: '#090A0E',
          borderRight: '1px solid var(--border-gold)',
          boxShadow: '10px 0 40px rgba(0,0,0,0.7)',
          zIndex: 99999,
          display: 'flex',
          flexDirection: 'column',
          transform: mobileMenuOpen ? 'translateX(0)' : 'translateX(-100%)',
          transition: 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
          pointerEvents: mobileMenuOpen ? 'auto' : 'none',
          overflow: 'hidden'
        }}
      >
        {/* Top Header Bar inside Drawer */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '72px',
            padding: '0 20px',
            borderBottom: '1px solid var(--border-subtle)',
            background: '#0C0E15',
            flexShrink: 0
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div
              style={{
                width: '34px',
                height: '34px',
                borderRadius: '8px',
                background: 'linear-gradient(135deg, #F5BA4E 0%, #D4AF37 50%, #9A6A15 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 900,
                fontSize: '1rem',
                color: '#090A0E'
              }}
            >
              DC
            </div>
            <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1.05rem', fontWeight: 800, color: '#FFFFFF', letterSpacing: '0.03em' }}>
              MENU
            </span>
          </div>

          <button
            onClick={() => setMobileMenuOpen(false)}
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '50%',
              background: 'rgba(212, 175, 55, 0.15)',
              border: '1px solid var(--border-gold)',
              color: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
            aria-label="Close menu"
          >
            <X size={20} color="var(--accent-gold-light)" />
          </button>
        </div>

        {/* Scrollable Navigation Items */}
        <div
          style={{
            flex: 1,
            overflowY: 'auto',
            padding: '20px 16px',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            WebkitOverflowScrolling: 'touch'
          }}
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                style={{
                  background: isActive ? 'rgba(212, 175, 55, 0.15)' : 'rgba(255, 255, 255, 0.03)',
                  border: isActive ? '1px solid var(--accent-gold)' : '1px solid rgba(255, 255, 255, 0.06)',
                  color: isActive ? '#FFFFFF' : '#D1D5DB',
                  padding: '14px 18px',
                  borderRadius: '12px',
                  fontSize: '0.95rem',
                  fontWeight: 700,
                  textAlign: 'left',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: isActive ? '0 4px 20px rgba(212, 175, 55, 0.15)' : 'none'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span
                    style={{
                      width: '7px',
                      height: '7px',
                      borderRadius: '50%',
                      background: isActive ? 'var(--accent-gold)' : 'rgba(255,255,255,0.2)'
                    }}
                  />
                  <span>{item.label}</span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  {item.badge && (
                    <span
                      style={{
                        fontSize: '0.62rem',
                        padding: '2px 7px',
                        borderRadius: '5px',
                        background: item.badge === 'PRO' ? 'rgba(212, 175, 55, 0.25)' : 'rgba(59, 130, 246, 0.25)',
                        color: item.badge === 'PRO' ? 'var(--accent-gold-light)' : '#93C5FD',
                        border: item.badge === 'PRO' ? '1px solid var(--border-gold)' : '1px solid rgba(59, 130, 246, 0.4)',
                        fontWeight: 700
                      }}
                    >
                      {item.badge}
                    </span>
                  )}
                  <ChevronRight size={16} color={isActive ? 'var(--accent-gold)' : '#6B7280'} />
                </div>
              </button>
            );
          })}
        </div>

        {/* Sticky Drawer Footer Actions */}
        <div
          style={{
            padding: '16px',
            borderTop: '1px solid var(--border-subtle)',
            background: '#0D0F17',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            flexShrink: 0
          }}
        >
          <button
            onClick={() => {
              onOpenModal('cpi-demo');
              setMobileMenuOpen(false);
            }}
            className="btn btn-outline-gold btn-sm"
            style={{ width: '100%', justifyContent: 'center' }}
          >
            <Activity size={16} />
            <span>Explore CPI Platform</span>
          </button>

          <button
            onClick={() => handleNavClick('mighty-network')}
            className="btn btn-primary btn-sm"
            style={{ width: '100%', justifyContent: 'center' }}
          >
            <span>Join Mighty Cricket Network</span>
          </button>
        </div>
      </div>
    </>
  );
};

