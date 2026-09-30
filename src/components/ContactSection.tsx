import React, { useState, useEffect } from 'react';
import { Mail, Globe, MapPin, Send, CheckCircle, Clock, Sparkles, MessageSquare, PhoneCall, ShieldCheck } from 'lucide-react';

interface ContactSectionProps {
  initialEnquiryType?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialEnquiryType = 'Coaching' }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [organisation, setOrganisation] = useState('');
  const [country, setCountry] = useState('');
  const [enquiryType, setEnquiryType] = useState(initialEnquiryType);
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (initialEnquiryType) {
      setEnquiryType(initialEnquiryType);
    }
  }, [initialEnquiryType]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  const OPPORTUNITY_TILES = [
    { type: 'Coaching', title: 'Coaching Enquiries', desc: 'Private 1-on-1 batting mentorship & squad coaching.' },
    { type: 'CPI', title: 'CPI Platform', desc: 'Enterprise squad diagnostic licensing and CPI index.' },
    { type: 'Mighty Cricket Network', title: 'Mighty Network', desc: 'Academy group memberships & private channels.' },
    { type: 'Speaking', title: 'Keynote Speaking', desc: 'Corporate high performance & sports talks.' },
    { type: 'Media', title: 'Media & Commentary', desc: 'Test match broadcasting & press interviews.' },
    { type: 'Consulting', title: 'Strategic Consulting', desc: 'Franchise team audits & curriculum design.' },
    { type: 'Partnership', title: 'Brand Partnerships', desc: 'Sponsorships & sports tech integrations.' },
    { type: 'Other', title: 'Other Projects', desc: 'Custom cricket initiatives & requests.' }
  ];

  return (
    <section id="contact" className="section-padding" style={{ background: '#090A0E' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="gold-badge" style={{ marginBottom: '16px' }}>
            <Mail size={14} color="var(--accent-gold)" />
            <span>Direct Communication</span>
          </div>
          <h2>Professional Opportunities & Contact</h2>
          <p>
            Whether you represent an international franchise, academy, broadcast network, or are an athlete seeking high-performance mentorship, get in touch.
          </p>
        </div>

        {/* Opportunities Selection Grid */}
        <div style={{ marginBottom: '50px' }}>
          <div style={{ textAlign: 'center', marginBottom: '20px' }}>
            <h3 style={{ fontSize: 'clamp(1.2rem, 3vw, 1.4rem)', color: '#FFFFFF' }}>Select Your Enquiry Pathway</h3>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
              gap: '12px'
            }}
          >
            {OPPORTUNITY_TILES.map((opp, idx) => {
              const isSelected = enquiryType === opp.type;
              return (
                <div
                  key={idx}
                  onClick={() => setEnquiryType(opp.type)}
                  style={{
                    background: isSelected ? 'rgba(212, 175, 55, 0.12)' : 'var(--bg-card)',
                    border: isSelected ? '1px solid var(--accent-gold)' : '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-md)',
                    padding: '14px 16px',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
                    <div style={{ fontSize: '0.95rem', color: '#FFFFFF', fontWeight: 700 }}>
                      {opp.title}
                    </div>
                    {isSelected && <CheckCircle size={15} color="var(--accent-gold)" />}
                  </div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', lineHeight: 1.35 }}>
                    {opp.desc}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Form & Info Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '36px',
            alignItems: 'start'
          }}
        >
          {/* Left Column: Direct Details */}
          <div className="glass-card-accent" style={{ padding: '28px' }}>
            <h3 style={{ fontSize: '1.4rem', color: '#FFFFFF', marginBottom: '14px' }}>
              Daryll Cullinan Management
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '24px' }}>
              All professional coaching, speaking, media broadcast, and business inquiries are managed directly by Daryll Cullinan's executive team.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: 'rgba(212, 175, 55, 0.12)', border: '1px solid var(--border-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-gold)', flexShrink: 0 }}>
                  <Mail size={18} />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 700 }}>Direct Email</div>
                  <div style={{ fontSize: '0.95rem', color: '#FFFFFF', fontWeight: 600 }}>office@daryllcullinan.com</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: 'rgba(212, 175, 55, 0.12)', border: '1px solid var(--border-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-gold)', flexShrink: 0 }}>
                  <Globe size={18} />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 700 }}>Location & Travel</div>
                  <div style={{ fontSize: '0.95rem', color: '#FFFFFF', fontWeight: 600 }}>South Africa & Worldwide Travel</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: 'rgba(212, 175, 55, 0.12)', border: '1px solid var(--border-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-gold)', flexShrink: 0 }}>
                  <Clock size={18} />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 700 }}>Response Time</div>
                  <div style={{ fontSize: '0.95rem', color: '#FFFFFF', fontWeight: 600 }}>Within 24-48 Business Hours</div>
                </div>
              </div>
            </div>

            <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '18px' }}>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <ShieldCheck size={16} color="var(--accent-gold)" style={{ flexShrink: 0 }} />
                <span>Strict confidentiality guaranteed for professional players & teams.</span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="glass-card" style={{ padding: '28px' }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '30px 10px' }}>
                <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'rgba(16, 185, 129, 0.15)', border: '2px solid #10B981', color: '#10B981', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px auto' }}>
                  <CheckCircle size={32} />
                </div>
                <h3 style={{ fontSize: '1.5rem', color: '#FFFFFF', marginBottom: '10px' }}>
                  Message Received
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.5, marginBottom: '20px' }}>
                  Thank you, <strong>{name}</strong>. Your enquiry regarding <strong>{enquiryType}</strong> has been transmitted directly to Daryll Cullinan's team. We will respond shortly.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setMessage(''); }}
                  className="btn btn-outline-gold btn-sm"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3 style={{ fontSize: '1.35rem', color: '#FFFFFF', marginBottom: '20px' }}>
                  Send a Message
                </h3>

                <div className="contact-form-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                  <div className="form-group">
                    <label className="form-label">Full Name *</label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="e.g. David Smith"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Email Address *</label>
                    <input
                      type="email"
                      className="form-input"
                      placeholder="e.g. david@academy.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="contact-form-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                  <div className="form-group">
                    <label className="form-label">Organisation / Club</label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="e.g. Apex Cricket Academy"
                      value={organisation}
                      onChange={(e) => setOrganisation(e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Country</label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="e.g. South Africa, UK, India"
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Enquiry Type *</label>
                  <select
                    className="form-select"
                    value={enquiryType}
                    onChange={(e) => setEnquiryType(e.target.value)}
                  >
                    <option value="Coaching">Coaching (1-on-1 & Team Mentorship)</option>
                    <option value="CPI">CPI (Cullinan Performance Index Platform)</option>
                    <option value="Mighty Cricket Network">Mighty Cricket Network (Community Access)</option>
                    <option value="Course">Digital Course or eBook Licensing</option>
                    <option value="Partnership">Partnership & Sponsorship</option>
                    <option value="Media">Media & Broadcast Commentary</option>
                    <option value="Speaking">Keynote Speaking</option>
                    <option value="Consulting">Squad & Academy Consulting</option>
                    <option value="Other">Other Inquiry</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Message Details *</label>
                  <textarea
                    className="form-textarea"
                    rows={4}
                    placeholder="Describe your goals, current level, squad size, or partnership objectives..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary btn-lg"
                  style={{ width: '100%', justifyContent: 'center' }}
                  disabled={loading}
                >
                  {loading ? (
                    <span>Sending Enquiry...</span>
                  ) : (
                    <>
                      <span>Transmit Message</span>
                      <Send size={18} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .contact-form-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
