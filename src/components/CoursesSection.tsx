import React, { useState } from 'react';
import { BookOpen, Star, Clock, FileText, ShoppingBag, Eye, CheckCircle, ArrowRight } from 'lucide-react';
import { COURSES_DATA } from '../data/mockData';
import { Course } from '../types';

interface CoursesSectionProps {
  onOpenModal: (type: string, data?: any) => void;
}

export const CoursesSection: React.FC<CoursesSectionProps> = ({ onOpenModal }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredCourses = activeCategory === 'all'
    ? COURSES_DATA
    : COURSES_DATA.filter(c => c.category === activeCategory || (activeCategory === 'ebook' && c.type === 'eBook'));

  return (
    <section id="courses" className="section-padding" style={{ background: '#0B0D14' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="gold-badge" style={{ marginBottom: '16px' }}>
            <BookOpen size={14} color="var(--accent-gold)" />
            <span>Digital Academy & Store</span>
          </div>
          <h2>Courses & eBooks</h2>
          <p>
            Self-paced video masterclasses, technical eBooks, and operational session plans crafted from 30+ years of international cricket experience.
          </p>
        </div>

        {/* Category Filters */}
        <div className="tabs-container" style={{ justifyContent: 'center', marginBottom: '40px' }}>
          {[
            { id: 'all', label: 'All Products' },
            { id: 'batting', label: 'Batting Development' },
            { id: 'coaching', label: 'Coaching Resources' },
            { id: 'player', label: 'Player Craft & Mindset' },
            { id: 'cricket', label: 'Tactical Intelligence' },
            { id: 'ebook', label: 'eBooks & Guides' }
          ].map((cat) => (
            <button
              key={cat.id}
              className={`tab-btn ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '32px'
          }}
        >
          {filteredCourses.map((product) => (
            <div
              key={product.id}
              className="glass-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '0',
                overflow: 'hidden'
              }}
            >
              {/* Cover Image Header */}
              <div style={{ position: 'relative', height: '200px', width: '100%', background: '#171A26' }}>
                <img
                  src={product.coverImage}
                  alt={product.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div
                  style={{
                    position: 'absolute',
                    top: '16px',
                    left: '16px',
                    padding: '4px 12px',
                    borderRadius: '20px',
                    background: product.type === 'eBook' ? 'rgba(59, 130, 246, 0.85)' : 'rgba(212, 175, 55, 0.85)',
                    color: '#090A0E',
                    fontWeight: 800,
                    fontSize: '0.75rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}
                >
                  {product.type}
                </div>

                {/* Rating Badge */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '12px',
                    right: '16px',
                    background: 'rgba(9, 10, 14, 0.85)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid var(--border-subtle)',
                    padding: '4px 10px',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    fontSize: '0.8rem',
                    color: '#FFFFFF',
                    fontWeight: 700
                  }}
                >
                  <Star size={14} color="var(--accent-gold)" fill="var(--accent-gold)" />
                  <span>{product.rating}</span>
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}>({product.reviewsCount})</span>
                </div>
              </div>

              {/* Product Info Body */}
              <div style={{ padding: '28px', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '8px' }}>
                    {product.duration && (
                      <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <Clock size={14} />
                        <span>{product.duration}</span>
                      </div>
                    )}
                    {product.pages && (
                      <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <FileText size={14} />
                        <span>{product.pages} Pages</span>
                      </div>
                    )}
                  </div>

                  <h3 style={{ fontSize: '1.25rem', color: '#FFFFFF', marginBottom: '10px', lineHeight: 1.3 }}>
                    {product.title}
                  </h3>

                  <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '20px' }}>
                    {product.description}
                  </p>
                </div>

                {/* Price & Action Buttons */}
                <div>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '20px' }}>
                    <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', fontWeight: 800, color: 'var(--accent-gold-light)' }}>
                      ${product.price}
                    </span>
                    {product.originalPrice && (
                      <span style={{ fontSize: '0.9rem', color: 'var(--text-dim)', textDecoration: 'line-through' }}>
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                    <button
                      onClick={() => onOpenModal('course-detail', product)}
                      className="btn btn-secondary btn-sm"
                      style={{ width: '100%' }}
                    >
                      <Eye size={15} />
                      <span>Details</span>
                    </button>

                    <button
                      onClick={() => onOpenModal('purchase', product)}
                      className="btn btn-primary btn-sm"
                      style={{ width: '100%' }}
                    >
                      <ShoppingBag size={15} />
                      <span>Enroll Now</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
