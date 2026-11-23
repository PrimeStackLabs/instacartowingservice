import React from 'react';
import { Star, Award, Zap, Truck, Clock, CheckCircle2 } from 'lucide-react';
import { testimonialsData, trustMetrics } from '../data/testimonialsData';

export default function TestimonialsSection() {

  // Helper to render metric icon
  const getMetricIcon = (type) => {
    switch (type) {
      case 'star':
        return <Star size={24} color="#D4A017" fill="#D4A017" />;
      case 'zap':
        return <Zap size={24} color="#D4A017" fill="#D4A017" />;
      case 'truck':
        return <Truck size={24} color="#D4A017" />;
      case 'clock':
        return <Clock size={24} color="#D4A017" />;
      default:
        return <Award size={24} color="#D4A017" />;
    }
  };

  // Duplicate for seamless infinite parallax loop
  const marqueeCards = [...testimonialsData, ...testimonialsData];

  return (
    <section
      id="reviews"
      style={{
        background: 'radial-gradient(ellipse at 50% 15%, #FAF6EE 0%, #F8F3E9 100%)',
        padding: '5rem 0 4.5rem 0',
        borderTop: '1px solid #EAE2D5',
        borderBottom: '1px solid #EAE2D5',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Decorative Golden Arches / Skyline Vectors (Top Left & Top Right) */}
      <svg
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: 'clamp(200px, 24vw, 380px)',
          height: 'auto',
          pointerEvents: 'none',
          opacity: 0.22,
          zIndex: 1
        }}
        viewBox="0 0 380 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M-50 0 C 80 50, 150 160, 380 180"
          stroke="#D4A017"
          strokeWidth="3.5"
          fill="none"
        />
        <path
          d="M-40 40 C 90 90, 160 180, 340 195"
          stroke="#D4A017"
          strokeWidth="1.5"
          strokeDasharray="6 6"
          fill="none"
        />
        <circle cx="280" cy="170" r="4" fill="#D4A017" />
        <circle cx="160" cy="140" r="3" fill="#D4A017" />
      </svg>

      {/* Top Right Subtle City Skyline Accent */}
      <svg
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: 'clamp(220px, 26vw, 420px)',
          height: 'auto',
          pointerEvents: 'none',
          opacity: 0.18,
          zIndex: 1
        }}
        viewBox="0 0 400 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* City silhouette styling */}
        <path
          d="M60 160 L60 80 L90 80 L90 50 L110 50 L110 30 L130 30 L130 70 L150 70 L150 160"
          stroke="#D4A017"
          strokeWidth="1.5"
          fill="rgba(212, 160, 23, 0.04)"
        />
        <path
          d="M170 160 L170 95 L200 95 L200 65 L220 65 L220 40 L230 20 L240 40 L240 85 L260 85 L260 160"
          stroke="#D4A017"
          strokeWidth="1.5"
          fill="rgba(212, 160, 23, 0.05)"
        />
        <path
          d="M280 160 L280 110 L300 110 L300 75 L320 75 L320 55 L350 55 L350 90 L380 90 L380 160"
          stroke="#D4A017"
          strokeWidth="1.5"
          fill="rgba(212, 160, 23, 0.04)"
        />
        {/* Arched highway connector */}
        <path
          d="M0 150 Q 200 110 400 145"
          stroke="#D4A017"
          strokeWidth="2.5"
          fill="none"
        />
      </svg>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        
        {/* ========================================================
            HEADER: BADGE + TITLE + SUBTITLE
           ======================================================== */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 3.25rem auto' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
              background: 'rgba(212, 160, 23, 0.12)',
              border: '1.5px solid #D4A017',
              borderRadius: '9999px',
              padding: '0.35rem 1.15rem',
              fontSize: '0.78rem',
              fontWeight: 800,
              letterSpacing: '0.08em',
              color: '#9E6D00',
              textTransform: 'uppercase',
              marginBottom: '0.9rem'
            }}
          >
            <Award size={14} color="#9E6D00" />
            <span>REAL BENGALURU EXPERIENCES</span>
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2rem, 3.8vw, 2.7rem)',
              fontWeight: 900,
              lineHeight: 1.18,
              letterSpacing: '-0.02em',
              textTransform: 'uppercase',
              color: '#111C2B',
              marginBottom: '0.85rem'
            }}
          >
            What Bengaluru Drivers Say
          </h2>

          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: '1.65',
              color: '#555E6D',
              margin: 0
            }}
          >
            Rated 4.7★ across Justdial and Google Reviews. Genuine accounts from motorists, luxury car owners, and fleet operators we have safely assisted.
          </p>
        </div>

        {/* ========================================================
            ROW OF 4 STAT CARDS (Matches Image Exactly)
           ======================================================== */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
            gap: '1.25rem',
            marginBottom: '3.25rem'
          }}
        >
          {trustMetrics.map((metric, idx) => (
            <div key={idx} className="review-stat-card-cream">
              {/* Circular Gold Icon */}
              <div
                style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '50%',
                  background: 'rgba(212, 160, 23, 0.14)',
                  border: '1.5px solid rgba(212, 160, 23, 0.45)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}
              >
                {getMetricIcon(metric.icon)}
              </div>

              {/* Stat Details */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <div
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.75rem',
                    fontWeight: 900,
                    color: '#111C2B',
                    lineHeight: 1.1,
                    marginBottom: '0.2rem'
                  }}
                >
                  {metric.value}
                </div>
                <div
                  style={{
                    fontWeight: 800,
                    fontSize: '0.88rem',
                    color: '#1F242E',
                    lineHeight: 1.25,
                    marginBottom: '0.15rem'
                  }}
                >
                  {metric.label}
                </div>
                <div
                  style={{
                    fontSize: '0.75rem',
                    color: '#718096',
                    fontWeight: 500
                  }}
                >
                  {metric.detail}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ========================================================
          PARALLAX MOVING REVIEW CARDS MARQUEE (Infinite Loop)
         ======================================================== */}
      <div className="reviews-marquee-wrapper">
        {/* Soft edge gradient masks for high-end parallax depth */}
        <div className="reviews-edge-fade-left" />
        <div className="reviews-edge-fade-right" />

        <div className="reviews-marquee-track">
          {marqueeCards.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="review-card-cream"
            >
              {/* Card Top: Stars + Verified Source Badge */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '0.9rem'
                }}
              >
                {/* 5 Gold Stars */}
                <div style={{ display: 'flex', gap: '0.2rem' }}>
                  {[...Array(item.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={17}
                      color="#F5B82E"
                      fill="#F5B82E"
                    />
                  ))}
                </div>

                {/* Source Verification Badge */}
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    fontSize: '0.72rem',
                    fontWeight: 800,
                    color: '#9E6D00',
                    background: 'rgba(212, 160, 23, 0.12)',
                    border: '1px solid rgba(212, 160, 23, 0.45)',
                    padding: '0.22rem 0.65rem',
                    borderRadius: '9999px',
                    letterSpacing: '0.03em'
                  }}
                >
                  <CheckCircle2 size={12} color="#9E6D00" />
                  {item.source}
                </span>
              </div>

              {/* Review Headline / Incident Type */}
              <h4
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.05rem',
                  fontWeight: 800,
                  color: '#111C2B',
                  lineHeight: 1.3,
                  margin: '0 0 0.65rem 0'
                }}
              >
                {item.headline}
              </h4>

              {/* Review Text */}
              <p
                style={{
                  fontSize: '0.92rem',
                  lineHeight: '1.65',
                  color: '#4A5568',
                  margin: 0,
                  fontStyle: 'normal'
                }}
              >
                "{item.comment}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
