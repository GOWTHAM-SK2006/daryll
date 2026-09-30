import React from 'react';
import { Users, Sparkles, MessageSquare, Video, BookOpen, Mic, Calendar, CheckCircle, ArrowRight, ShieldCheck, Heart } from 'lucide-react';

interface MightyNetworkSectionProps {
  onOpenModal: (type: string, data?: any) => void;
}

export const MightyNetworkSection: React.FC<MightyNetworkSectionProps> = ({ onOpenModal }) => {
  const COMMUNITY_BENEFITS = [
    {
      title: 'Exclusive Video Content & Masterclasses',
      desc: 'Access unreleased technical breakdowns, stance audits, and behind-the-scenes broadcast footage.',
      icon: Video
    },
    {
      title: 'Direct Mentorship & Personal Insights',
      desc: 'Ask Daryll questions in private Q&A forums, receive video feedback, and participate in monthly live masterminds.',
      icon: MessageSquare
    },
    {
      title: 'Cricket Discussions & Tactical Debates',
      desc: 'Connect with serious players, head coaches, and cricket enthusiasts across 30+ countries.',
      icon: Users
    },
    {
      title: 'Integrated Courses & eBooks',
      desc: 'Member discounts and instant access to digital courses, eBooks, and practice session blueprints.',
      icon: BookOpen
    },
    {
      title: 'Priority Webinar & Podcast Access',
      desc: 'Reserve front-row seats for live webinars and submit live Q&A questions before showtime.',
      icon: Calendar
    },
    {
      title: 'Peer Networking & Global Community',
      desc: 'Share drills, schedule friendly matches, discuss coaching philosophies, and find international mentoring partners.',
      icon: Sparkles
    }
  ];

  const MEMBERSHIP_TIERS = [
    {
      id: 'free',
      name: 'Supporter Pass',
      price: '$0',
      period: 'Forever Free',
      desc: 'For casual fans and players looking to follow Daryll Cullinan’s insights and public discussions.',
      features: [
        'Access to public community forums',
        'Weekly newsletter & articles',
        'Public podcast episode notifications',
        'Community event updates'
      ],
      ctaText: 'Join Free Community',
      popular: false
    },
    {
      id: 'pro',
      name: 'Elite Player & Coach Access',
      price: '$29',
      period: 'per month',
      desc: 'For active players, coaches, and parents dedicated to accelerating technical and mental growth.',
      features: [
        'Everything in Supporter Pass',
        'Exclusive monthly live Q&A with Daryll',
        'Access to video breakdown vault',
        '20% discount on all courses & eBooks',
        'Private coaching feedback threads',
        'Downloadable practice session blueprints'
      ],
      ctaText: 'Join Elite Network',
      popular: true
    },
    {
      id: 'mastermind',
      name: 'Pro Mastermind & Mentorship',
      price: '$99',
      period: 'per month',
      desc: 'For head coaches, academy directors, and First-Class players requiring direct personal mentorship.',
      features: [
        'Everything in Elite Access',
        'Quarterly 1-on-1 virtual call with Daryll',
        'CPI diagnostic platform access',
        'VIP seats in all live webinars',
        'Direct priority WhatsApp/Forum response line',
        'Custom squad coaching curriculum review'
      ],
      ctaText: 'Join Pro Mastermind',
      popular: false
    }
  ];

  return (
    <section id="mighty-network" className="section-padding" style={{ background: '#090A0E' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="gold-badge" style={{ marginBottom: '16px' }}>
            <Users size={14} color="var(--accent-gold)" />
            <span>Global Community Platform</span>
          </div>
          <h2>The Mighty Cricket Network</h2>
          <p>
            Connect, learn, and grow alongside players, coaches, and cricket minds from around the world in Daryll Cullinan’s official digital community.
          </p>
        </div>

        {/* Community Hero Visual Banner */}
        <div
          className="glass-card-accent"
          style={{
            marginBottom: '60px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '36px',
            alignItems: 'center'
          }}
        >
          <div>
            <div style={{ fontSize: '0.8rem', color: 'var(--accent-gold)', fontWeight: 700, textTransform: 'uppercase', marginBottom: '8px' }}>
              Hosted on Mighty Networks
            </div>
            <h3 style={{ fontSize: '2rem', color: '#FFFFFF', marginBottom: '16px' }}>
              Your Central Hub for Global Cricket Education
            </h3>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, fontSize: '1rem', marginBottom: '24px' }}>
              The <strong>Mighty Cricket Network</strong> is more than just a social group. It’s an interactive, high-value learning ecosystem where aspiring players get direct feedback from Daryll Cullinan, coaches swap elite training drills, and cricket lovers engage in deep tactical analysis.
            </p>

            <button
              onClick={() => onOpenModal('join-network')}
              className="btn btn-primary btn-lg"
            >
              <span>Join the Mighty Cricket Network</span>
              <ArrowRight size={18} />
            </button>
          </div>

          {/* Feature Grid inside Banner */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '16px'
            }}
          >
            {[
              { num: '30+', label: 'Countries Represented' },
              { num: '500+', label: 'Exclusive Video Lessons' },
              { num: '24/7', label: 'Coaching Discussions' },
              { num: 'Monthly', label: 'Live Masterminds' }
            ].map((st, i) => (
              <div
                key={i}
                style={{
                  background: 'rgba(9, 10, 14, 0.7)',
                  border: '1px solid var(--border-gold)',
                  borderRadius: 'var(--radius-md)',
                  padding: '20px',
                  textAlign: 'center'
                }}
              >
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 800, color: 'var(--accent-gold-light)' }}>
                  {st.num}
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600, marginTop: '4px' }}>
                  {st.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Grid */}
        <div style={{ marginBottom: '70px' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h3 style={{ fontSize: '1.8rem', color: '#FFFFFF' }}>What Members Get Inside</h3>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '24px'
            }}
          >
            {COMMUNITY_BENEFITS.map((ben, idx) => {
              const IconComp = ben.icon;
              return (
                <div
                  key={idx}
                  className="glass-card"
                  style={{
                    padding: '28px'
                  }}
                >
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '12px',
                      background: 'rgba(212, 175, 55, 0.12)',
                      border: '1px solid var(--border-gold)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--accent-gold)',
                      marginBottom: '16px'
                    }}
                  >
                    <IconComp size={22} />
                  </div>
                  <h4 style={{ fontSize: '1.15rem', color: '#FFFFFF', marginBottom: '8px' }}>
                    {ben.title}
                  </h4>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                    {ben.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Membership Tier Cards */}
        <div>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h3 style={{ fontSize: '1.8rem', color: '#FFFFFF' }}>Choose Your Membership Tier</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginTop: '8px' }}>
              Cancel or change your tier at any time. Instant access upon sign up.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '28px',
              alignItems: 'stretch'
            }}
          >
            {MEMBERSHIP_TIERS.map((tier) => (
              <div
                key={tier.id}
                style={{
                  background: tier.popular ? 'linear-gradient(180deg, #1A1E2B 0%, #11131B 100%)' : 'var(--bg-card)',
                  border: tier.popular ? '2px solid var(--accent-gold)' : '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-xl)',
                  padding: '36px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative',
                  boxShadow: tier.popular ? 'var(--shadow-gold)' : 'none'
                }}
              >
                {tier.popular && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '-14px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      background: 'var(--accent-gold)',
                      color: '#090A0E',
                      fontWeight: 800,
                      fontSize: '0.75rem',
                      padding: '4px 16px',
                      borderRadius: '20px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em'
                    }}
                  >
                    MOST POPULAR
                  </div>
                )}

                <div>
                  <h3 style={{ fontSize: '1.4rem', color: '#FFFFFF', marginBottom: '8px' }}>
                    {tier.name}
                  </h3>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px', marginBottom: '12px' }}>
                    <span style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', fontWeight: 800, color: 'var(--accent-gold-light)' }}>
                      {tier.price}
                    </span>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                      {tier.period}
                    </span>
                  </div>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.5, marginBottom: '24px' }}>
                    {tier.desc}
                  </p>

                  <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '20px', marginBottom: '28px' }}>
                    <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '12px', textTransform: 'uppercase' }}>
                      Included Features:
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      {tier.features.map((feat, fidx) => (
                        <div key={fidx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.88rem', color: 'var(--text-main)' }}>
                          <CheckCircle size={16} color="var(--accent-gold)" style={{ marginTop: '2px', flexShrink: 0 }} />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => onOpenModal('join-network', { tier: tier.name })}
                  className={tier.popular ? 'btn btn-primary btn-lg' : 'btn btn-outline-gold btn-lg'}
                  style={{ width: '100%' }}
                >
                  <span>{tier.ctaText}</span>
                  <ArrowRight size={18} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
