import React, { useState } from 'react';
import { Mic, Play, Pause, Volume2, Radio, ExternalLink, BookOpen, Tv, ArrowRight, Video } from 'lucide-react';
import { PODCAST_EPISODES, ARTICLES_DATA } from '../data/mockData';
import { PodcastEpisode } from '../types';

interface PodcastMediaSectionProps {
  onOpenModal: (type: string, data?: any) => void;
}

export const PodcastMediaSection: React.FC<PodcastMediaSectionProps> = ({ onOpenModal }) => {
  const [currentEpisode, setCurrentEpisode] = useState<PodcastEpisode>(PODCAST_EPISODES[0]);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(35);

  const togglePlay = (ep?: PodcastEpisode) => {
    if (ep && ep.id !== currentEpisode.id) {
      setCurrentEpisode(ep);
      setIsPlaying(true);
    } else {
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section id="podcast" className="section-padding" style={{ background: '#090A0E' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="gold-badge" style={{ marginBottom: '16px' }}>
            <Radio size={14} color="var(--accent-gold)" />
            <span>Broadcasting & Commentary</span>
          </div>
          <h2>Podcast & Media Hub</h2>
          <p>
            Listen to "The Cullinan Cricket Podcast" and explore in-depth tactical articles, commentary highlights, and broadcast interviews.
          </p>
        </div>

        {/* Featured Podcast Banner */}
        <div
          className="glass-card-accent"
          style={{
            marginBottom: '50px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '32px',
            alignItems: 'center'
          }}
        >
          {/* Cover Art Visual */}
          <div style={{ position: 'relative' }}>
            <div
              style={{
                borderRadius: 'var(--radius-xl)',
                overflow: 'hidden',
                border: '1px solid var(--border-gold)',
                boxShadow: 'var(--shadow-gold)',
                aspectRatio: '1 / 1',
                maxHeight: '300px',
                margin: '0 auto'
              }}
            >
              <img
                src="/images/podcast_cover.png"
                alt="The Cullinan Cricket Podcast Cover"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>

          {/* Audio Player Controls */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.78rem', color: 'var(--accent-gold)', fontWeight: 700, textTransform: 'uppercase', marginBottom: '8px' }}>
              <Mic size={14} />
              <span>NOW PLAYING • EPISODE #{currentEpisode.episodeNumber}</span>
            </div>

            <h3 style={{ fontSize: 'clamp(1.4rem, 3vw, 1.8rem)', color: '#FFFFFF', marginBottom: '10px', lineHeight: 1.25 }}>
              {currentEpisode.title}
            </h3>

            <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.55, marginBottom: '20px' }}>
              {currentEpisode.description}
            </p>

            {/* Custom Interactive Player */}
            <div
              style={{
                background: '#090A0E',
                border: '1px solid var(--border-gold)',
                borderRadius: 'var(--radius-lg)',
                padding: '16px 18px',
                marginBottom: '20px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '12px' }}>
                <button
                  onClick={() => togglePlay()}
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '50%',
                    background: 'var(--accent-gold)',
                    border: 'none',
                    color: '#090A0E',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    boxShadow: '0 4px 15px rgba(212, 175, 55, 0.4)',
                    flexShrink: 0
                  }}
                >
                  {isPlaying ? <Pause size={20} /> : <Play size={20} style={{ marginLeft: '2px' }} />}
                </button>

                <div style={{ flexGrow: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '4px' }}>
                    <span>{isPlaying ? '04:12' : '00:00'}</span>
                    <span>{currentEpisode.duration}</span>
                  </div>

                  {/* Progress Slider */}
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={isPlaying ? progress : 0}
                    onChange={(e) => setProgress(Number(e.target.value))}
                    style={{
                      width: '100%',
                      accentColor: '#D4AF37',
                      cursor: 'pointer',
                      height: '20px'
                    }}
                  />
                </div>
              </div>

              {/* Streaming Platform Badges */}
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', borderTop: '1px solid var(--border-subtle)', paddingTop: '10px' }}>
                <a
                  href={currentEpisode.spotifyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-secondary btn-sm"
                  style={{ fontSize: '0.76rem', gap: '6px', padding: '6px 12px' }}
                >
                  <span>Spotify</span>
                  <ExternalLink size={11} />
                </a>

                <a
                  href={currentEpisode.appleUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-secondary btn-sm"
                  style={{ fontSize: '0.76rem', gap: '6px', padding: '6px 12px' }}
                >
                  <span>Apple</span>
                  <ExternalLink size={11} />
                </a>

                <a
                  href={currentEpisode.youtubeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-secondary btn-sm"
                  style={{ fontSize: '0.76rem', gap: '6px', padding: '6px 12px' }}
                >
                  <span>YouTube</span>
                  <ExternalLink size={11} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Podcast Episode Queue */}
        <div style={{ marginBottom: '50px' }}>
          <h3 style={{ fontSize: '1.3rem', color: '#FFFFFF', marginBottom: '16px' }}>
            Recent Episodes
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {PODCAST_EPISODES.map((ep) => {
              const isSelected = currentEpisode.id === ep.id;
              return (
                <div
                  key={ep.id}
                  style={{
                    background: isSelected ? 'rgba(212, 175, 55, 0.1)' : 'var(--bg-card)',
                    border: isSelected ? '1px solid var(--border-gold)' : '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-md)',
                    padding: '14px 18px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '14px',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    flexWrap: 'wrap'
                  }}
                  onClick={() => togglePlay(ep)}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexGrow: 1 }}>
                    <div
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '50%',
                        background: isSelected ? 'var(--accent-gold)' : 'rgba(255,255,255,0.06)',
                        color: isSelected ? '#090A0E' : 'var(--text-muted)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}
                    >
                      {isSelected && isPlaying ? <Pause size={16} /> : <Play size={16} style={{ marginLeft: '2px' }} />}
                    </div>

                    <div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--accent-gold)', fontWeight: 700 }}>
                        EPISODE #{ep.episodeNumber} • {ep.duration}
                      </div>
                      <div style={{ fontSize: '0.98rem', color: '#FFFFFF', fontWeight: 700, lineHeight: 1.3 }}>
                        {ep.title}
                      </div>
                    </div>
                  </div>

                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                    {ep.publishDate}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Written Tactical Analysis & Articles */}
        <div>
          <div style={{ textAlign: 'center', marginBottom: '24px' }}>
            <h3 style={{ fontSize: '1.4rem', color: '#FFFFFF' }}>Tactical Articles & Commentary</h3>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '20px'
            }}
          >
            {ARTICLES_DATA.map((art) => (
              <div key={art.id} className="glass-card" style={{ padding: '20px' }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--accent-gold)', fontWeight: 700, marginBottom: '6px' }}>
                  {art.category} • {art.readTime}
                </div>
                <h4 style={{ fontSize: '1.05rem', color: '#FFFFFF', marginBottom: '8px', lineHeight: 1.35 }}>
                  {art.title}
                </h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.5, marginBottom: '14px' }}>
                  {art.summary}
                </p>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-dim)' }}>
                  Published {art.publishDate}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
