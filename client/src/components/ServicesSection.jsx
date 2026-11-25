import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageSquare, ArrowRight, Shield, Clock } from 'lucide-react';
import { servicesData } from '../data/servicesData';

export default function ServicesSection({ limit = 10, showAllButton = false }) {
  const displayedServices = limit ? servicesData.slice(0, limit) : servicesData;

  return (
    <section className="section-padding" style={{
      background: 'radial-gradient(ellipse at 50% 20%, #1a1e24 0%, #101214 100%)',
      position: 'relative'
    }}>
      <div className="container">
        <div className="section-header">
          <span className="section-badge">
            <Shield size={14} /> COMPLETE VEHICLE RECOVERY SOLUTIONS
          </span>
          <h2>Our 24-Hour Towing Services</h2>
          <p>
            One call, every kind of recovery. Every service listed below operates 24 hours a day with certified operators and damage-free equipment across Bengaluru.
          </p>
        </div>

        {/* 10 Service Cards Grid with Cream Ivory & Champagne Gold Theme */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '2rem'
        }}>
          {displayedServices.map((service) => (
            <div
              key={service.id}
              className="service-card-ivory"
            >
              {/* Card Image with Badge & ETA */}
              <div style={{
                position: 'relative',
                height: '210px',
                overflow: 'hidden',
                background: '#1C2024'
              }}>
                <img
                  src={service.image}
                  alt={service.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.06)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  loading="lazy"
                />
                <div style={{
                  position: 'absolute',
                  top: '12px',
                  right: '12px',
                  background: 'rgba(23, 23, 23, 0.88)',
                  backdropFilter: 'blur(6px)',
                  border: '1px solid #D5A642',
                  color: '#F5B82E',
                  padding: '0.3rem 0.75rem',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em'
                }}>
                  {service.badge}
                </div>

                <div style={{
                  position: 'absolute',
                  bottom: '12px',
                  left: '12px',
                  background: 'rgba(23, 23, 23, 0.85)',
                  backdropFilter: 'blur(4px)',
                  border: '1px solid rgba(213, 166, 66, 0.4)',
                  color: '#ffffff',
                  padding: '0.25rem 0.65rem',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: '0.72rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem'
                }}>
                  <Clock size={12} color="#D5A642" /> ETA: {service.responseTime}
                </div>
              </div>

              {/* Card Content (Ivory Background, Charcoal Heading, Dark Grey Text) */}
              <div style={{
                padding: '1.75rem',
                display: 'flex',
                flexDirection: 'column',
                flex: 1,
                background: '#FFF8EA'
              }}>
                <h3 style={{
                  fontSize: '1.28rem',
                  color: '#171717',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 800,
                  marginBottom: '0.75rem',
                  lineHeight: 1.3
                }}>
                  {service.title}
                </h3>

                <p style={{
                  fontSize: '0.92rem',
                  lineHeight: '1.6',
                  color: '#4A5568',
                  marginBottom: '1.25rem',
                  flex: 1
                }}>
                  {service.shortDescription}
                </p>

                {/* "Suited For" Light Cream Panel (#FFF0D2) */}
                <div style={{
                  background: '#FFF0D2',
                  border: '1px solid rgba(213, 166, 66, 0.45)',
                  borderRadius: 'var(--radius-md)',
                  padding: '0.7rem 0.9rem',
                  marginBottom: '1.35rem',
                  fontSize: '0.82rem',
                  boxShadow: '0 1px 3px rgba(213, 166, 66, 0.1)'
                }}>
                  <span style={{ color: '#9E6D00', fontWeight: 800 }}>Suited for: </span>
                  <span style={{ color: '#1F2937', fontWeight: 500 }}>{service.idealFor}</span>
                </div>

                {/* View Details Link */}
                <div style={{ marginBottom: '1.25rem' }}>
                  <Link
                    to={`/services/${service.id}`}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      color: '#9E6D00',
                      fontWeight: 700,
                      fontSize: '0.9rem',
                      textDecoration: 'none'
                    }}
                  >
                    View Service Details <ArrowRight size={15} />
                  </Link>
                </div>

                {/* Card Action Buttons (Call Now Gold & WhatsApp Green) */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '0.6rem',
                  paddingTop: '1rem',
                  borderTop: '1px solid rgba(213, 166, 66, 0.3)'
                }}>
                  <a
                    href="tel:+919632090752"
                    className="btn btn-primary btn-sm"
                    style={{ justifyContent: 'center' }}
                  >
                    <Phone size={14} /> Call Now
                  </a>

                  <a
                    href={`https://wa.me/919632090752?text=Hi%20Car%20Services,%20I%20am%20inquiring%20about%20${encodeURIComponent(service.title)}%20in%20Bengaluru.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-whatsapp btn-sm"
                    style={{ justifyContent: 'center' }}
                  >
                    <MessageSquare size={14} /> WhatsApp
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {showAllButton && (
          <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
            <Link to="/services" className="btn btn-secondary btn-lg">
              Explore All 11 Towing Services <ArrowRight size={18} />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

