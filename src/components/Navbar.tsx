import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Activity, Sparkles } from 'lucide-react';
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

  // Lock body scroll when mobile menu is open
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
          {/* BRAND LOGO - Left Anchored */}
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

          {/* DESKTOP NAVIGATION LINKS */}
          <nav
            className="desktop-nav-menu"
            style={{
              alignItems: 'center',
              gap: '16px',
              flexShrink: 1,
              justifyContent: 'center'
            }}
          >
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`nav-link-btn ${isActive ? 'active' : ''}`}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: isActive ? '#FFFFFF' : '#9CA3AF',
                    fontSize: '0.85rem',
                    fontWeight: isActive ? 700 : 500,
                    cursor: 'pointer',
                    padding: '6px 4px',
                    position: 'relative',
                    transition: 'all 0.2s ease',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    whiteSpace: 'nowrap'
                  }}
                >
                  <span>{item.label}</span>
                  {item.badge && (
                    <span
                      style={{
                        fontSize: '0.58rem',
                        padding: '1px 5px',
                        borderRadius: '4px',
                        background: item.badge === 'PRO' ? 'rgba(212, 175, 55, 0.2)' : 'rgba(59, 130, 246, 0.2)',
                        color: item.badge === 'PRO' ? 'var(--accent-gold-light)' : '#93C5FD',
                        border: item.badge === 'PRO' ? '1px solid var(--border-gold)' : '1px solid rgba(59, 130, 246, 0.4)',
                        fontWeight: 700
                      }}
                    >
                      {item.badge}
                    </span>
                  )}
                  {isActive && (
                    <span
                      style={{
                        position: 'absolute',
                        bottom: '-4px',
                        left: '0',
                        right: '0',
                        height: '2px',
                        background: 'linear-gradient(90deg, #D4AF37 0%, #F59E0B 100%)',
                        borderRadius: '2px',
                        boxShadow: '0 0 8px rgba(212, 175, 55, 0.6)'
                      }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* QUICK CTA ACTIONS (DESKTOP) */}
          <div
            className="desktop-cta-actions"
            style={{
              alignItems: 'center',
              gap: '10px',
              flexShrink: 0
            }}
          >
            <button
              onClick={() => onOpenModal('cpi-demo')}
              className="btn btn-outline-gold btn-sm"
              style={{ fontSize: '0.8rem', padding: '8px 14px', gap: '6px' }}
            >
              <Activity size={14} />
              <span>CPI Platform</span>
            </button>

            <button
              onClick={() => handleNavClick('mighty-network')}
              className="btn btn-primary btn-sm"
              style={{ fontSize: '0.8rem', padding: '8px 16px', gap: '6px' }}
            >
              <span>Join Network</span>
              <ChevronRight size={14} />
            </button>
          </div>

          {/* MOBILE HAMBURGER TOGGLE BUTTON */}
          <button
            className="mobile-hamburger-btn"
            onClick={() => setMobileMenuOpen(true)}
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid var(--border-subtle)',
              color: '#FFFFFF',
              width: '42px',
              height: '42px',
              borderRadius: '10px',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              flexShrink: 0
            }}
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </header>

      {/* Breakpoint Styles */}
      <style>{`
        .navbar-wrapper {
          padding: 0 32px;
        }

        .nav-link-btn:hover {
          color: #FFFFFF !important;
          text-shadow: 0 0 10px rgba(212, 175, 55, 0.3);
        }

        .desktop-nav-menu {
          display: none !important;
        }
        .desktop-cta-actions {
          display: none !important;
        }
        .mobile-hamburger-btn {
          display: flex !important;
        }

        @media (min-width: 1260px) {
          .desktop-nav-menu {
            display: flex !important;
          }
          .desktop-cta-actions {
            display: flex !important;
          }
          .mobile-hamburger-btn {
            display: none !important;
          }
        }

        @media (max-width: 768px) {
          .navbar-wrapper {
            padding: 0 16px !important;
          }
        }
      `}</style>

      {/* 100% FULL-SCREEN MOBILE OVERLAY MENU DRAWER */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: '100vw',
            height: '100dvh',
            background: '#090A0E',
            zIndex: 99999,
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            animation: 'mobileDrawerSlide 0.25s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        >
          {/* Top Bar inside Overlay */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              height: '72px',
              padding: '0 20px',
              borderBottom: '1px solid var(--border-gold)',
              background: '#0C0E15',
              flexShrink: 0
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '8px',
                  background: 'linear-gradient(135deg, #D4AF37 0%, #A17E1A 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 900,
                  fontSize: '1.1rem',
                  color: '#090A0E'
                }}
              >
                DC
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1.05rem', fontWeight: 800, color: '#FFFFFF' }}>
                  DARYLL CULLINAN
                </span>
                <span style={{ fontSize: '0.62rem', color: 'var(--accent-gold)', textTransform: 'uppercase', fontWeight: 700 }}>
                  Cricket Legend & Coach
                </span>
              </div>
            </div>

            {/* Close Button */}
            <button
              onClick={() => setMobileMenuOpen(false)}
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                background: 'rgba(212, 175, 55, 0.15)',
                border: '1px solid var(--accent-gold)',
                color: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
              aria-label="Close menu"
            >
              <X size={22} color="var(--accent-gold-light)" />
            </button>
          </div>

          {/* Scrollable Navigation List */}
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
                    padding: '16px 20px',
                    borderRadius: '14px',
                    fontSize: '1rem',
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
                        width: '8px',
                        height: '8px',
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
                          fontSize: '0.65rem',
                          padding: '3px 8px',
                          borderRadius: '6px',
                          background: item.badge === 'PRO' ? 'rgba(212, 175, 55, 0.25)' : 'rgba(59, 130, 246, 0.25)',
                          color: item.badge === 'PRO' ? 'var(--accent-gold-light)' : '#93C5FD',
                          border: item.badge === 'PRO' ? '1px solid var(--border-gold)' : '1px solid rgba(59, 130, 246, 0.4)',
                          fontWeight: 700
                        }}
                      >
                        {item.badge}
                      </span>
                    )}
                    <ChevronRight size={18} color={isActive ? 'var(--accent-gold)' : '#6B7280'} />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Sticky Bottom Actions */}
          <div
            style={{
              padding: '18px 16px',
              borderTop: '1px solid var(--border-subtle)',
              background: '#0D0F17',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              flexShrink: 0
            }}
          >
            <button
              onClick={() => {
                onOpenModal('cpi-demo');
                setMobileMenuOpen(false);
              }}
              className="btn btn-outline-gold btn-lg"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <Activity size={18} />
              <span>Explore CPI Platform</span>
            </button>

            <button
              onClick={() => handleNavClick('mighty-network')}
              className="btn btn-primary btn-lg"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <span>Join Mighty Cricket Network</span>
            </button>
          </div>

          {/* Mobile Drawer Animation */}
          <style>{`
            @keyframes mobileDrawerSlide {
              from {
                opacity: 0;
                transform: translateY(-10px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
          `}</style>
        </div>
      )}
    </>
  );
};
