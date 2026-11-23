import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageSquare, ArrowRight, Shield, CheckCircle2, Clock, Search, Filter } from 'lucide-react';
import { servicesData } from '../data/servicesData';

export default function ServicesPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredServices = servicesData.filter(srv =>
    srv.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    srv.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
    srv.idealFor.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={{ background: 'var(--bg-main)', minHeight: '100vh', paddingBottom: '5rem' }}>
      {/* Page Header */}
      <section style={{
        background: 'linear-gradient(rgba(16, 18, 20, 0.9), rgba(16, 18, 20, 0.96)), url("https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=1800&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '2.75rem 0 2rem 0',
        borderBottom: '1px solid var(--border-color)',
        textAlign: 'center'
      }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          <span className="section-badge" style={{ marginBottom: '0.6rem' }}>
            <Shield size={14} /> COMPREHENSIVE RECOVERY CATALOG
          </span>
          <h1 style={{
            color: '#fff',
            fontSize: 'clamp(1.5rem, 2.6vw, 2.1rem)',
            fontWeight: 800,
            lineHeight: 1.25,
            marginBottom: '0.65rem'
          }}>
            24/7 Car Towing & Recovery Services
          </h1>
          <p style={{ maxWidth: '720px', margin: '0 auto 1.75rem auto', fontSize: '0.98rem', color: 'var(--text-secondary)', lineHeight: '1.55' }}>
            Specialized recovery rigs for every category of vehicle. Flatbed towing, sports cars, luxury marques, three-wheelers, accident extractions, and heavy vehicles across all Bengaluru corridors.
          </p>

          {/* Search Bar */}
          <div style={{ maxWidth: '520px', margin: '0 auto', position: 'relative' }}>
            <Search size={18} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-gold)' }} />
            <input
              type="text"
              className="form-control"
              placeholder="Search by vehicle type, e.g. sports car, luxury, accident, 3 wheeler..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                paddingLeft: '45px',
                borderRadius: 'var(--radius-full)',
                background: 'rgba(28, 32, 36, 0.85)',
                backdropFilter: 'blur(8px)',
                borderColor: 'var(--border-gold)'
              }}
            />
          </div>
        </div>
      </section>

      {/* Services List */}
      <div className="container" style={{ paddingTop: '3.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.4rem', color: '#fff' }}>
            Available Services ({filteredServices.length})
          </h2>
          <span style={{ fontSize: '0.85rem', color: 'var(--color-gold)' }}>
            All Services Run 24 Hours / 7 Days
          </span>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
          gap: '2rem'
        }}>
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="service-card-ivory"
            >
              {/* Image & Badge */}
              <div style={{ position: 'relative', height: '220px', overflow: 'hidden', background: '#1C2024' }}>
                <img
                  src={service.image}
                  alt={service.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
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
                  textTransform: 'uppercase'
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
                  color: '#fff',
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

              {/* Content (Cream Ivory Background, Dark Charcoal Heading) */}
              <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', flex: 1, background: '#FFF8EA' }}>
                <h3 style={{ fontSize: '1.32rem', color: '#171717', fontFamily: 'var(--font-heading)', fontWeight: 800, marginBottom: '0.75rem' }}>
                  {service.title}
                </h3>
                <p style={{ fontSize: '0.92rem', color: '#4A5568', marginBottom: '1.25rem', flex: 1, lineHeight: '1.6' }}>
                  {service.shortDescription}
                </p>

                {/* Features List */}
                <div style={{ marginBottom: '1.25rem' }}>
                  <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#9E6D00', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                    Key Features:
                  </div>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.35rem', fontSize: '0.85rem' }}>
                    {service.features.slice(0, 3).map((feat, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.45rem', color: '#2D3748' }}>
                        <CheckCircle2 size={14} color="#D5A642" style={{ marginTop: '0.2rem', flexShrink: 0 }} />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* "Suited For" Light Cream Panel (#FFF0D2) */}
                <div style={{
                  background: '#FFF0D2',
                  border: '1px solid rgba(213, 166, 66, 0.45)',
                  borderRadius: 'var(--radius-md)',
                  padding: '0.7rem 0.9rem',
                  marginBottom: '1.25rem',
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
                      fontSize: '0.9rem'
                    }}
                  >
                    View Full Specifications & Pricing <ArrowRight size={15} />
                  </Link>
                </div>

                {/* Action Buttons */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '0.6rem',
                  paddingTop: '1rem',
                  borderTop: '1px solid rgba(213, 166, 66, 0.3)'
                }}>
                  <a
                    href="tel:+918867666437"
                    className="btn btn-primary btn-sm"
                    style={{ justifyContent: 'center' }}
                  >
                    <Phone size={14} /> Call Now
                  </a>

                  <a
                    href={`https://wa.me/918867666437?text=Hi%20Car%20Services,%20I%20need%20assistance%20with%20${encodeURIComponent(service.title)}%20in%20Bengaluru.`}
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
      </div>
    </div>
  );
}

