import React, { useState } from 'react';
import { X, CheckCircle, Star, ShoppingBag, ArrowRight, Activity, Calendar, ShieldCheck, Mail } from 'lucide-react';
import { Course, Webinar } from '../types';

interface DetailModalProps {
  isOpen: boolean;
  type: string; // 'course-detail' | 'purchase' | 'webinar-register' | 'cpi-demo' | 'join-network' | 'privacy' | 'terms' | null
  data?: any;
  onClose: () => void;
  onNavigate: (sectionId: string, enquiryType?: string) => void;
}

export const DetailModal: React.FC<DetailModalProps> = ({ isOpen, type, data, onClose, onNavigate }) => {
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', note: '' });

  if (!isOpen || !type) return null;

  const handleActionSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(true);
    setTimeout(() => {
      // auto close or stay
    }, 3000);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        {/* 1. COURSE / EBOOK DETAIL MODAL */}
        {type === 'course-detail' && data && (
          <div>
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '12px' }}>
              <span className="gold-badge">{data.type}</span>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{data.duration || `${data.pages} Pages`}</span>
            </div>

            <h2 style={{ fontSize: '1.8rem', color: '#FFFFFF', marginBottom: '12px' }}>
              {data.title}
            </h2>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
              <Star size={16} color="var(--accent-gold)" fill="var(--accent-gold)" />
              <span style={{ fontWeight: 700, color: '#FFFFFF' }}>{data.rating}</span>
              <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>({data.reviewsCount} student reviews)</span>
            </div>

            <p style={{ color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '24px', fontSize: '0.95rem' }}>
              {data.fullDescription}
            </p>

            {data.highlights && (
              <div style={{ background: '#090A0E', border: '1px solid var(--border-gold)', borderRadius: 'var(--radius-md)', padding: '20px', marginBottom: '24px' }}>
                <div style={{ fontWeight: 700, color: 'var(--accent-gold-light)', fontSize: '0.9rem', textTransform: 'uppercase', marginBottom: '12px' }}>
                  What You Will Master:
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {data.highlights.map((h: string, i: number) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.88rem', color: '#E5E7EB' }}>
                      <CheckCircle size={15} color="var(--accent-gold)" style={{ marginTop: '2px', flexShrink: 0 }} />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {data.syllabus && (
              <div style={{ marginBottom: '28px' }}>
                <div style={{ fontWeight: 700, color: '#FFFFFF', fontSize: '1rem', marginBottom: '12px' }}>
                  Curriculum Breakdown:
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {data.syllabus.map((s: string, i: number) => (
                    <div key={i} style={{ padding: '10px 14px', background: 'rgba(255,255,255,0.03)', borderRadius: '8px', border: '1px solid var(--border-subtle)', fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                      {s}
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid var(--border-subtle)', paddingTop: '20px' }}>
              <div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Price</div>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 800, color: 'var(--accent-gold-light)' }}>
                  ${data.price}
                </div>
              </div>

              <button
                onClick={() => {
                  onClose();
                  onNavigate('contact', 'Course');
                }}
                className="btn btn-primary btn-lg"
              >
                <ShoppingBag size={18} />
                <span>Enroll / Purchase Now</span>
              </button>
            </div>
          </div>
        )}

        {/* 2. WEBINAR REGISTER MODAL */}
        {type === 'webinar-register' && data && (
          <div>
            {success ? (
              <div style={{ textAlign: 'center', padding: '20px 0' }}>
                <CheckCircle size={48} color="#10B981" style={{ margin: '0 auto 16px auto' }} />
                <h3 style={{ fontSize: '1.6rem', color: '#FFFFFF', marginBottom: '12px' }}>Seat Confirmed!</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                  You are registered for <strong>{data.title}</strong> on <strong>{data.date}</strong> at <strong>{data.time}</strong>. Access link sent to your email.
                </p>
              </div>
            ) : (
              <form onSubmit={handleActionSubmit}>
                <div className="gold-badge" style={{ marginBottom: '12px' }}>
                  <Calendar size={13} />
                  <span>Webinar Registration</span>
                </div>
                <h2 style={{ fontSize: '1.6rem', color: '#FFFFFF', marginBottom: '8px' }}>
                  {data.title}
                </h2>
                <div style={{ color: 'var(--accent-gold-light)', fontSize: '0.9rem', marginBottom: '20px' }}>
                  {data.date} • {data.time}
                </div>

                <div className="form-group">
                  <label className="form-label">Your Name *</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Email Address *</label>
                  <input
                    type="email"
                    className="form-input"
                    placeholder="Enter your email to receive live stream link"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>

                <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%', marginTop: '12px' }}>
                  <span>Confirm Free Registration</span>
                  <ArrowRight size={18} />
                </button>
              </form>
            )}
          </div>
        )}

        {/* 3. CPI DEMO REQUEST MODAL */}
        {type === 'cpi-demo' && (
          <div>
            {success ? (
              <div style={{ textAlign: 'center', padding: '20px 0' }}>
                <Activity size={48} color="var(--accent-gold)" style={{ margin: '0 auto 16px auto' }} />
                <h3 style={{ fontSize: '1.6rem', color: '#FFFFFF', marginBottom: '12px' }}>CPI Demo Request Submitted</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                  Our technical performance team will schedule a live walkthrough of the Cullinan Performance Index engine for your academy or team.
                </p>
              </div>
            ) : (
              <form onSubmit={handleActionSubmit}>
                <div className="gold-badge" style={{ marginBottom: '12px' }}>
                  <Activity size={13} />
                  <span>CPI Platform Enterprise Demo</span>
                </div>
                <h2 style={{ fontSize: '1.6rem', color: '#FFFFFF', marginBottom: '12px' }}>
                  Request Squad CPI Assessment Setup
                </h2>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '20px' }}>
                  See how the Coach CPI & Player CPI dashboards digitize player diagnostics and performance tracking.
                </p>

                <div className="form-group">
                  <label className="form-label">Full Name *</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Head Coach or Administrator Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Work Email *</label>
                  <input
                    type="email"
                    className="form-input"
                    placeholder="coach@academy.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>

                <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%', marginTop: '12px' }}>
                  <span>Request Live CPI Walkthrough</span>
                  <ArrowRight size={18} />
                </button>
              </form>
            )}
          </div>
        )}

        {/* 4. JOIN NETWORK MODAL */}
        {type === 'join-network' && (
          <div>
            {success ? (
              <div style={{ textAlign: 'center', padding: '20px 0' }}>
                <CheckCircle size={48} color="#10B981" style={{ margin: '0 auto 16px auto' }} />
                <h3 style={{ fontSize: '1.6rem', color: '#FFFFFF', marginBottom: '12px' }}>Welcome to Mighty Cricket Network!</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                  Check your inbox for your community invite link and profile activation instructions.
                </p>
              </div>
            ) : (
              <form onSubmit={handleActionSubmit}>
                <div className="gold-badge" style={{ marginBottom: '12px' }}>
                  <span>Mighty Cricket Network</span>
                </div>
                <h2 style={{ fontSize: '1.6rem', color: '#FFFFFF', marginBottom: '8px' }}>
                  Join the Global Community
                </h2>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '20px' }}>
                  Selected Tier: <strong style={{ color: 'var(--accent-gold)' }}>{data?.tier || 'Supporter Pass'}</strong>
                </p>

                <div className="form-group">
                  <label className="form-label">Your Name *</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Email Address *</label>
                  <input
                    type="email"
                    className="form-input"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>

                <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%', marginTop: '12px' }}>
                  <span>Access Community Hub</span>
                  <ArrowRight size={18} />
                </button>
              </form>
            )}
          </div>
        )}

        {/* 5. PRIVACY POLICY MODAL */}
        {type === 'privacy' && (
          <div>
            <h2 style={{ fontSize: '1.6rem', color: '#FFFFFF', marginBottom: '16px' }}>Privacy Policy</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '12px' }}>
              Daryll Cullinan Official Website & Cullinan Performance Index (CPI) respects your privacy. We strictly safeguard all personal details, coaching video submissions, and performance metrics collected through this hub.
            </p>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6 }}>
              Data is never sold or shared with third parties. Player video analysis files remain confidential to the athlete and coaching team.
            </p>
          </div>
        )}

        {/* 6. TERMS OF SERVICE MODAL */}
        {type === 'terms' && (
          <div>
            <h2 style={{ fontSize: '1.6rem', color: '#FFFFFF', marginBottom: '16px' }}>Terms of Service</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '12px' }}>
              By accessing digital courses, CPI performance diagnostics, and Mighty Cricket Network materials, members agree to respect copyrighted coaching blueprints and proprietary technical videos.
            </p>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6 }}>
              Unauthorized redistribution of digital courses or proprietary CPI rubrics is prohibited.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
