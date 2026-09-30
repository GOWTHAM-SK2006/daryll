import React from 'react';
import { Video, ExternalLink, Play, Radio, Globe, Share2, Tv } from 'lucide-react';

export const SocialFeedSection: React.FC = () => {
  const SOCIAL_CHANNELS = [
    {
      id: 'yt',
      name: 'YouTube',
      handle: '@DaryllCullinanCricket',
      followers: '45K+ Subscribers',
      desc: 'Weekly tactical match breakdowns, classic innings retrospectives, and coaching masterclasses.',
      icon: Video,
      color: '#FF4D4D',
      link: 'https://youtube.com',
      recentItem: { title: 'Dissecting Modern Spin Mechanics', duration: '14:20' }
    },
    {
      id: 'li',
      name: 'LinkedIn',
      handle: 'Daryll Cullinan',
      followers: '28K+ Connections',
      desc: 'Sports leadership insights, sports tech performance articles, and corporate executive reflections.',
      icon: Globe,
      color: '#3B82F6',
      link: 'https://linkedin.com',
      recentItem: { title: 'High Performance Lessons from Test Match Pressure', duration: 'Article' }
    },
    {
      id: 'ig',
      name: 'Instagram',
      handle: '@daryllcullinancricket',
      followers: '62K+ Followers',
      desc: 'Behind-the-scenes coaching footage, short biomechanical tips, broadcast studio clips, and travel.',
      icon: Tv,
      color: '#EC4899',
      link: 'https://instagram.com',
      recentItem: { title: 'Quick Footwork Stance Check Drill', duration: 'Reel' }
    },
    {
      id: 'tt',
      name: 'TikTok',
      handle: '@daryllcullinan',
      followers: '35K+ Followers',
      desc: 'Snappy batting technique shorts, common stance fixes, and cricket myth busting.',
      icon: Share2,
      color: '#06B6D4',
      link: 'https://tiktok.com',
      recentItem: { title: 'Stop Opening Your Front Shoulder Early!', duration: 'Short' }
    }
  ];

  return (
    <section id="social" className="section-padding" style={{ background: '#0B0D14' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="gold-badge" style={{ marginBottom: '16px' }}>
            <Radio size={14} color="var(--accent-gold)" />
            <span>Digital Content Ecosystem</span>
          </div>
          <h2>Follow Daryll Cullinan</h2>
          <p>
            Stay connected across all digital channels for daily batting drills, tactical breakdown shorts, and broadcast commentary highlights.
          </p>
        </div>

        {/* Social Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '24px'
          }}
        >
          {SOCIAL_CHANNELS.map((chan) => {
            const IconComp = chan.icon;
            return (
              <div
                key={chan.id}
                className="glass-card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  padding: '28px'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                    <div
                      style={{
                        width: '44px',
                        height: '44px',
                        borderRadius: '12px',
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid var(--border-subtle)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: chan.color
                      }}
                    >
                      <IconComp size={24} />
                    </div>
                    <span style={{ fontSize: '0.78rem', color: 'var(--accent-gold)', fontWeight: 700 }}>
                      {chan.followers}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.25rem', color: '#FFFFFF', marginBottom: '4px' }}>
                    {chan.name}
                  </h3>
                  <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '12px' }}>
                    {chan.handle}
                  </div>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.5, marginBottom: '20px' }}>
                    {chan.desc}
                  </p>

                  {/* Recent Clip Preview Card */}
                  <div
                    style={{
                      background: 'rgba(9, 10, 14, 0.7)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: 'var(--radius-sm)',
                      padding: '12px 14px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      marginBottom: '20px'
                    }}
                  >
                    <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'rgba(212, 175, 55, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-gold)', flexShrink: 0 }}>
                      <Play size={12} fill="var(--accent-gold)" />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.8rem', color: '#FFFFFF', fontWeight: 600, lineHeight: 1.2 }}>
                        {chan.recentItem.title}
                      </div>
                      <div style={{ fontSize: '0.72rem', color: 'var(--text-dim)' }}>
                        Latest {chan.recentItem.duration}
                      </div>
                    </div>
                  </div>
                </div>

                <a
                  href={chan.link}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-secondary btn-sm"
                  style={{ width: '100%', gap: '6px' }}
                >
                  <span>Visit {chan.name} Channel</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
