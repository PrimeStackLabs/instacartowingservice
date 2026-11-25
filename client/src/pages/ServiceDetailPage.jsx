import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Phone, MessageSquare, ArrowLeft, Clock, ShieldCheck, CheckCircle2, MapPin, ArrowRight, Zap, AlertTriangle } from 'lucide-react';
import { servicesData } from '../data/servicesData';
import EnquirySection from '../components/EnquirySection';

export default function ServiceDetailPage() {
  const { id } = useParams();
  const service = servicesData.find(s => s.id === id || s.slug === id);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  // Related other services
  const relatedServices = servicesData.filter(s => s.id !== service.id).slice(0, 3);

  return (
    <div style={{ background: 'var(--bg-main)', minHeight: '100vh' }}>
      {/* Detail Hero Banner */}
      <section style={{
        background: `linear-gradient(rgba(16, 18, 20, 0.9), rgba(16, 18, 20, 0.96)), url("${service.image}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '2.75rem 0 2rem 0',
        borderBottom: '1px solid var(--border-color)'
      }}>
        <div className="container">
          <Link
            to="/services"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              color: 'var(--color-gold)',
              fontSize: '0.85rem',
              fontWeight: 600,
              marginBottom: '1rem'
            }}
          >
            <ArrowLeft size={16} /> Back to All Services
          </Link>

          <div style={{ maxWidth: '820px' }}>
            <span className="section-badge" style={{ marginBottom: '0.6rem' }}>
              <Zap size={14} /> 24/7 BENGALURU SERVICE SPECIFICATION
            </span>
            <h1 style={{
              color: '#fff',
              fontSize: 'clamp(1.5rem, 2.6vw, 2.1rem)',
              fontWeight: 800,
              lineHeight: 1.25,
              marginBottom: '0.65rem'
            }}>
              {service.title}
            </h1>
            <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: '1.55', marginBottom: '1.5rem' }}>
              {service.shortDescription}
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              <a href="tel:+919632090752" className="btn btn-primary btn-lg">
                <Phone size={18} /> Request This Rig: 96320 90752
              </a>
              <a
                href={`https://wa.me/919632090752?text=Hi%20Car%20Services,%20I%20need%20urgent%20assistance%20with%20${encodeURIComponent(service.title)}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp btn-lg"
              >
                <MessageSquare size={18} /> WhatsApp Live Location
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Details Body */}
      <div className="container" style={{ padding: '4.5rem 1.5rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '3.5rem',
          alignItems: 'start'
        }}>
          {/* Left: Deep Specifications & Description */}
          <div>
            {/* Quick Specs Card */}
            <div style={{
              background: 'var(--bg-secondary)',
              border: '1px solid var(--border-gold)',
              borderRadius: 'var(--radius-lg)',
              padding: '1.75rem 2rem',
              marginBottom: '2.5rem',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '1.5rem'
            }}>
              <div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.78rem', textTransform: 'uppercase' }}>
                  Response Time
                </div>
                <div style={{ color: '#fff', fontSize: '1.15rem', fontWeight: 800, marginTop: '0.2rem' }}>
                  {service.responseTime}
                </div>
              </div>

              <div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.78rem', textTransform: 'uppercase' }}>
                  Pricing Policy
                </div>
                <div style={{ color: 'var(--color-gold)', fontSize: '1.05rem', fontWeight: 800, marginTop: '0.2rem' }}>
                  100% Upfront Quote
                </div>
              </div>

              <div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.78rem', textTransform: 'uppercase' }}>
                  Damage Guarantee
                </div>
                <div style={{ color: '#fff', fontSize: '1.05rem', fontWeight: 800, marginTop: '0.2rem' }}>
                  Zero-Scratch Policy
                </div>
              </div>
            </div>

            {/* In-depth writeup */}
            <h2 style={{ fontSize: '1.7rem', color: '#fff', marginBottom: '1.25rem' }}>
              Service Overview & Technical Handling
            </h2>
            <p style={{ fontSize: '1.02rem', lineHeight: '1.75', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
              {service.fullDescription}
            </p>

            {/* Key Advantages */}
            <h3 style={{ fontSize: '1.35rem', color: '#fff', marginBottom: '1.25rem' }}>
              Included Features & Safety Protocols
            </h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: '0.85rem',
              marginBottom: '2.5rem'
            }}>
              {service.features.map((feat, idx) => (
                <div
                  key={idx}
                  style={{
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border-color)',
                    borderRadius: 'var(--radius-md)',
                    padding: '1rem 1.25rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.85rem'
                  }}
                >
                  <CheckCircle2 size={18} color="var(--color-gold)" style={{ flexShrink: 0 }} />
                  <span style={{ color: '#fff', fontSize: '0.95rem' }}>{feat}</span>
                </div>
              ))}
            </div>

            {/* Suited for banner */}
            <div style={{
              background: 'rgba(245, 184, 46, 0.08)',
              border: '1px solid var(--border-gold)',
              borderRadius: 'var(--radius-md)',
              padding: '1.5rem',
              marginBottom: '2.5rem'
            }}>
              <h4 style={{ color: 'var(--color-gold)', fontSize: '1.05rem', marginBottom: '0.4rem' }}>
                Recommended Vehicles for this Rig:
              </h4>
              <p style={{ color: '#fff', fontSize: '0.95rem', margin: 0 }}>
                {service.idealFor}
              </p>
            </div>
          </div>

          {/* Right: HD Image & Fast Dispatch Box */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div className="card-theme" style={{ overflow: 'hidden' }}>
              <img
                src={service.image}
                alt={service.title}
                style={{ width: '100%', height: '320px', objectFit: 'cover' }}
              />
              <div style={{ padding: '1.5rem' }}>
                <div style={{ fontSize: '0.85rem', color: 'var(--color-gold)', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.3rem' }}>
                  FLEET VERIFIED & DISPATCH-READY
                </div>
                <h4 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '0.5rem' }}>
                  Active Rig Standby in Bengaluru
                </h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
                  Our recovery truck equipped with soft-basket tie-downs and hydraulic loaders is stationed on standby.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <a href="tel:+919632090752" className="btn btn-primary" style={{ justifyContent: 'center' }}>
                    <Phone size={16} /> Instant Dispatch: +91 96320 90752
                  </a>
                  <a
                    href={`https://wa.me/919632090752?text=Hi%20Car%20Services,%20I%20need%20urgent%20dispatch%20for%20${encodeURIComponent(service.title)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-whatsapp"
                    style={{ justifyContent: 'center' }}
                  >
                    <MessageSquare size={16} /> WhatsApp Live Dispatch
                  </a>
                </div>
              </div>
            </div>

            {/* Operating Areas Highlights */}
            <div style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              borderRadius: 'var(--radius-lg)',
              padding: '1.75rem'
            }}>
              <h4 style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <MapPin size={18} color="var(--color-gold)" /> Rapid Coverage Corridors
              </h4>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '1rem' }}>
                This recovery service is deployed across Nayandahalli, Whitefield, KR Puram, Indiranagar, Yeshwanthpur, Jalahalli, Kengeri, Mysore Road, and Devanahalli Airport Road.
              </p>
              <Link to="/locations" style={{ color: 'var(--color-gold)', fontSize: '0.88rem', fontWeight: 600 }}>
                Check all covered areas & ETAs →
              </Link>
            </div>
          </div>
        </div>

        {/* Related Services */}
        <div style={{ marginTop: '5rem', paddingTop: '3.5rem', borderTop: '1px solid var(--border-color)' }}>
          <h3 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '2rem' }}>
            Explore Other Specialized Recovery Services
          </h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.75rem'
          }}>
            {relatedServices.map((rel) => (
              <div key={rel.id} className="card-theme" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <h4 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '0.5rem' }}>{rel.title}</h4>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>{rel.shortDescription}</p>
                </div>
                <Link to={`/services/${rel.id}`} style={{ color: 'var(--color-gold)', fontWeight: 700, fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                  View Service Details <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Booking Form Integration */}
      <EnquirySection />
    </div>
  );
}

