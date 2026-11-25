import React from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section style={{
      position: 'relative',
      background: '#101214',
      overflow: 'hidden'
    }}>
      {/* Background Video (100% brightness, opacity 1, object-fit cover, zero dark overlay) */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0,
          opacity: 1,
          filter: 'brightness(100%)',
          pointerEvents: 'none'
        }}
      >
        <source src="/herosectionvdo.mp4" type="video/mp4" />
        <source src="/assets/herosectionvdo.mp4" type="video/mp4" />
      </video>

      {/* Hero Content Area */}
      <div className="container" style={{
        paddingTop: '4.5rem',
        paddingBottom: '4.5rem',
        position: 'relative',
        zIndex: 2
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.18fr 0.82fr',
          gap: '3.5rem',
          alignItems: 'center'
        }} className="hero-grid">
          
          {/* Left Column: Heading, Subtitle & Action Buttons */}
          <div>
            {/* Top Standby Pill Badge */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.65rem',
              background: 'rgba(20, 24, 28, 0.82)',
              backdropFilter: 'blur(8px)',
              border: '1px solid #333a44',
              borderRadius: '9999px',
              padding: '0.45rem 1.15rem',
              fontSize: '0.84rem',
              fontWeight: 600,
              color: '#f0f3f6',
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.6)',
              marginBottom: '1.75rem'
            }}>
              <span style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: '#22c55e',
                boxShadow: '0 0 10px #22c55e',
                display: 'inline-block'
              }}></span>
              <span>Trucks on standby across Bengaluru right now</span>
            </div>

            {/* Main Headline with localized subtle text shadow for clear visibility over video */}
            <h1 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2.1rem, 3.8vw, 3.3rem)',
              fontWeight: 900,
              lineHeight: 1.08,
              letterSpacing: '-0.02em',
              textTransform: 'uppercase',
              marginBottom: '1.5rem',
              textShadow: '0 2px 10px rgba(0, 0, 0, 0.85), 0 4px 20px rgba(0, 0, 0, 0.95)'
            }}>
              <span style={{ color: '#ffffff', display: 'block' }}>
                STUCK ON THE<br />ROAD?
              </span>
              <span style={{ color: '#F5B82E', display: 'block', marginTop: '0.25rem', textShadow: '0 2px 10px rgba(0, 0, 0, 0.85), 0 4px 20px rgba(0, 0, 0, 0.95)' }}>
                WE HOOK, HAUL &<br />DELIVER IN UNDER<br />30 MINS.
              </span>
            </h1>

            {/* Subtitle Description with subtle text shadow */}
            <p style={{
              fontSize: '1.02rem',
              lineHeight: '1.65',
              color: '#e2e6ec',
              maxWidth: '560px',
              marginBottom: '2.2rem',
              textShadow: '0 2px 8px rgba(0, 0, 0, 0.85), 0 1px 4px rgba(0, 0, 0, 0.9)'
            }}>
              Flatbed and wheel-lift towing for everyday cars, luxury and sports cars, three-wheelers and accident recovery. Round-the-clock crews, damage-free loading and a price quoted before we move.
            </p>

            {/* 3 Action Buttons matching image */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.9rem',
              alignItems: 'center'
            }}>
              <a
                href="tel:+919632090752"
                className="btn btn-primary"
                style={{
                  padding: '0.85rem 1.6rem',
                  fontSize: '0.95rem',
                  fontWeight: 700,
                  borderRadius: 'var(--radius-md)'
                }}
              >
                Call for car services now
              </a>

              <a
                href="https://wa.me/919632090752?text=Hi%20Car%20Services,%20I%20am%20stranded%20and%20need%20assistance.%20Here%20is%20my%20location."
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
                style={{
                  background: '#22C55E',
                  color: '#ffffff',
                  padding: '0.85rem 1.6rem',
                  fontSize: '0.95rem',
                  fontWeight: 700,
                  borderRadius: 'var(--radius-md)',
                  boxShadow: '0 4px 15px rgba(34, 197, 94, 0.3)'
                }}
              >
                Send live location on WhatsApp
              </a>

              <Link
                to="/services"
                className="btn"
                style={{
                  background: '#1c2024',
                  border: '1px solid #363c45',
                  color: '#ffffff',
                  padding: '0.85rem 1.6rem',
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  borderRadius: 'var(--radius-md)'
                }}
              >
                View car services
              </Link>
            </div>
          </div>

          {/* Right Column: Floating Step-By-Step Card */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div
              className="hero-floating-card"
              style={{
                background: '#181c22',
                border: '1px solid #282e36',
                borderRadius: '20px',
                padding: '24px 22px',
                width: '100%',
                maxWidth: '430px',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.75), 0 0 30px rgba(245, 184, 46, 0.1)',
                position: 'relative'
              }}
            >
              {/* Top Hazard Warning Diagonal Stripe Bar */}
              <div style={{
                background: 'repeating-linear-gradient(-45deg, #F5B82E, #F5B82E 12px, #101214 12px, #101214 24px)',
                height: '14px',
                borderRadius: '6px',
                marginBottom: '1.4rem'
              }}></div>

              {/* Card Label */}
              <div style={{
                color: '#F5B82E',
                fontWeight: 800,
                fontSize: '0.88rem',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                marginBottom: '1.1rem'
              }}>
                YOUR RESCUE, STEP BY STEP
              </div>

              {/* Step 1 */}
              <div style={{
                background: '#21262d',
                borderRadius: '12px',
                padding: '13px 16px',
                marginBottom: '10px',
                display: 'flex',
                alignItems: 'center',
                gap: '14px'
              }}>
                <div style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: '#F5B82E',
                  color: '#101214',
                  fontWeight: 800,
                  fontSize: '0.95rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  1
                </div>
                <div style={{ color: '#ffffff', fontWeight: 600, fontSize: '0.95rem' }}>
                  Call or WhatsApp us
                </div>
              </div>

              {/* Step 2 */}
              <div style={{
                background: '#21262d',
                borderRadius: '12px',
                padding: '13px 16px',
                marginBottom: '10px',
                display: 'flex',
                alignItems: 'center',
                gap: '14px'
              }}>
                <div style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: '#F97316',
                  color: '#ffffff',
                  fontWeight: 800,
                  fontSize: '0.95rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  2
                </div>
                <div style={{ color: '#ffffff', fontWeight: 600, fontSize: '0.95rem' }}>
                  Truck dispatched to your location
                </div>
              </div>

              {/* Step 3 */}
              <div style={{
                background: '#21262d',
                borderRadius: '12px',
                padding: '13px 16px',
                marginBottom: '1.4rem',
                display: 'flex',
                alignItems: 'center',
                gap: '14px'
              }}>
                <div style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: '#22C55E',
                  color: '#ffffff',
                  fontWeight: 800,
                  fontSize: '0.95rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  3
                </div>
                <div style={{ color: '#ffffff', fontWeight: 600, fontSize: '0.95rem' }}>
                  Safe hook-up and delivery
                </div>
              </div>

              {/* Bottom Metric: < 25 minutes average arrival */}
              <div style={{
                display: 'flex',
                alignItems: 'baseline',
                gap: '0.65rem',
                paddingTop: '0.4rem'
              }}>
                <span style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '2.8rem',
                  fontWeight: 900,
                  color: '#F5B82E',
                  lineHeight: 1
                }}>
                  &lt; 25
                </span>
                <span style={{
                  color: '#8f96a0',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  lineHeight: 1.3
                }}>
                  minutes average arrival in Bengaluru
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* High-Visibility Full-Width Safety Gold Bottom Strip */}
      <div style={{
        position: 'relative',
        zIndex: 3,
        background: '#F5B82E',
        color: '#101214',
        padding: '1.25rem 0',
        borderTop: '2px solid #E5A71D'
      }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '1.5rem',
            alignItems: 'center'
          }}>
            {/* Stat 1 */}
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
              <span style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.75rem',
                fontWeight: 900,
                color: '#101214',
                letterSpacing: '-0.02em'
              }}>
                &lt; 30 min
              </span>
              <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#242a32', textTransform: 'capitalize' }}>
                Response time
              </span>
            </div>

            {/* Stat 2 */}
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
              <span style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.75rem',
                fontWeight: 900,
                color: '#101214'
              }}>
                4.7★
              </span>
              <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#242a32', textTransform: 'capitalize' }}>
                Customer rating
              </span>
            </div>

            {/* Stat 3 */}
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
              <span style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.75rem',
                fontWeight: 900,
                color: '#101214'
              }}>
                Zero
              </span>
              <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#242a32', textTransform: 'capitalize' }}>
                Damage records
              </span>
            </div>

            {/* Stat 4 */}
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
              <span style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.75rem',
                fontWeight: 900,
                color: '#101214'
              }}>
                24/7
              </span>
              <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#242a32', textTransform: 'capitalize' }}>
                Fleet standing by
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Responsive layout & floating animation styles */}
      <style>{`
        @keyframes floatCardAnim {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-12px);
          }
          100% {
            transform: translateY(0px);
          }
        }

        .hero-floating-card {
          animation: floatCardAnim 4.5s ease-in-out infinite;
        }

        @media (max-width: 991px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
