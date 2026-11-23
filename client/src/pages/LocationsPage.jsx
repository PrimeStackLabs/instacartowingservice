import React, { useState } from 'react';
import { MapPin, Navigation, Clock, ShieldCheck, Search, Phone, MessageSquare, ChevronDown, ChevronUp } from 'lucide-react';
import { locationsData } from '../data/locationsData';
import EnquirySection from '../components/EnquirySection';

export default function LocationsPage() {
  const [search, setSearch] = useState('');
  const [expandedArea, setExpandedArea] = useState(null);

  // Group all areas for searching
  const allCategories = [
    { key: 'primary', data: locationsData.primary },
    { key: 'nearby', data: locationsData.nearby },
    { key: 'midRange', data: locationsData.midRange },
    { key: 'extended', data: locationsData.extended }
  ];

  const toggleExpand = (name) => {
    setExpandedArea(expandedArea === name ? null : name);
  };

  return (
    <div style={{ background: 'var(--bg-main)', minHeight: '100vh' }}>
      {/* Page Hero */}
      <section style={{
        background: 'linear-gradient(rgba(16, 18, 20, 0.9), rgba(16, 18, 20, 0.96)), url("https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=1800&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '2.75rem 0 2rem 0',
        borderBottom: '1px solid var(--border-color)',
        textAlign: 'center'
      }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          <span className="section-badge" style={{ marginBottom: '0.6rem' }}>
            <MapPin size={14} /> GREATER BENGALURU COVERAGE NETWORK
          </span>
          <h1 style={{
            color: '#fff',
            fontSize: 'clamp(1.5rem, 2.6vw, 2.1rem)',
            fontWeight: 800,
            lineHeight: 1.25,
            marginBottom: '0.65rem'
          }}>
            Bengaluru Towing Locations & Response Corridors
          </h1>
          <p style={{ maxWidth: '720px', margin: '0 auto 1.75rem auto', fontSize: '0.98rem', color: 'var(--text-secondary)', lineHeight: '1.55' }}>
            We operate fully equipped recovery depots across Hoskote, Whitefield, KR Puram, Indiranagar, Electronic City, and key highway junctions for rapid under-30-minute dispatch.
          </p>

          {/* Interactive Search Box */}
          <div style={{ maxWidth: '520px', margin: '0 auto', position: 'relative' }}>
            <Search size={18} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-gold)' }} />
            <input
              type="text"
              className="form-control"
              placeholder="Search your area, landmark or pincode (e.g. Hoskote, Whitefield, 560066)..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
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

      {/* Main Content Body */}
      <div className="container" style={{ padding: '4.5rem 1.5rem' }}>
        {/* Render each category */}
        {allCategories.map(({ key, data }) => {
          // Filter areas if search query present
          const matchingAreas = search.trim() === ''
            ? data.areas
            : data.areas.filter(a => 
                a.name.toLowerCase().includes(search.toLowerCase()) ||
                a.landmark.toLowerCase().includes(search.toLowerCase()) ||
                a.pincode.includes(search) ||
                a.coverage.toLowerCase().includes(search.toLowerCase())
              );

          if (matchingAreas.length === 0) return null;

          return (
            <div key={key} style={{ marginBottom: '4rem' }}>
              {/* Category Header */}
              <div style={{
                background: 'var(--bg-secondary)',
                borderLeft: '5px solid var(--color-gold)',
                borderTop: '1px solid var(--border-color)',
                borderRight: '1px solid var(--border-color)',
                borderBottom: '1px solid var(--border-color)',
                borderRadius: 'var(--radius-md)',
                padding: '1.5rem 2rem',
                marginBottom: '1.75rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '1rem'
              }}>
                <div>
                  <h2 style={{ fontSize: '1.45rem', color: '#fff', marginBottom: '0.2rem' }}>
                    {data.category}
                  </h2>
                  <div style={{ color: 'var(--color-gold)', fontSize: '0.9rem', fontWeight: 600 }}>
                    {data.tagline}
                  </div>
                </div>
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', maxWidth: '450px' }}>
                  {data.description}
                </div>
              </div>

              {/* Area Cards Grid */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                gap: '1.5rem'
              }}>
                {matchingAreas.map((area, idx) => {
                  const isExpanded = expandedArea === area.name;
                  return (
                    <div
                      key={idx}
                      className={`card-theme location-card-glow ${isExpanded ? 'is-active-card' : ''}`}
                      style={{
                        padding: '1.6rem',
                        cursor: 'pointer',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.9rem'
                      }}
                      onClick={() => toggleExpand(area.name)}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <div>
                          <span style={{
                            fontSize: '0.72rem',
                            fontWeight: 700,
                            color: 'var(--color-gold-light)',
                            background: 'rgba(245, 184, 46, 0.12)',
                            padding: '0.2rem 0.55rem',
                            borderRadius: '4px',
                            textTransform: 'uppercase'
                          }}>
                            {area.highlight}
                          </span>
                          <h3 style={{ color: '#fff', fontSize: '1.2rem', marginTop: '0.45rem' }}>
                            {area.name}
                          </h3>
                        </div>
                        <div style={{
                          color: 'var(--color-gold)',
                          background: 'var(--bg-secondary)',
                          borderRadius: '50%',
                          padding: '0.3rem'
                        }}>
                          {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                        </div>
                      </div>

                      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '0.85rem' }}>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: 'var(--color-gold)' }}>
                          <Clock size={14} /> ETA: {area.eta}
                        </span>
                        <span style={{ color: 'var(--border-color)' }}>|</span>
                        <span style={{ color: 'var(--text-muted)' }}>Pincode: {area.pincode}</span>
                      </div>

                      <div style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                        <strong style={{ color: '#fff' }}>Key Landmarks: </strong>
                        {area.landmark}
                      </div>

                      {isExpanded && (
                        <div style={{
                          marginTop: '0.5rem',
                          paddingTop: '0.75rem',
                          borderTop: '1px solid var(--border-color)',
                          fontSize: '0.85rem',
                          animation: 'fadeIn 0.2s ease'
                        }}>
                          <div style={{ marginBottom: '0.75rem' }}>
                            <strong style={{ color: 'var(--color-gold)' }}>Coverage Scope: </strong>
                            <span style={{ color: 'var(--text-primary)' }}>{area.coverage}</span>
                          </div>

                          <div style={{ display: 'flex', gap: '0.6rem' }}>
                            <a
                              href="tel:+918867666437"
                              className="btn btn-primary btn-sm"
                              style={{ flex: 1, justifyContent: 'center' }}
                              onClick={(e) => e.stopPropagation()}
                            >
                              <Phone size={14} /> Call Dispatch
                            </a>
                            <a
                              href={`https://wa.me/918867666437?text=Hi%20Car%20Services,%20I%20need%20recovery%20assistance%20in%20${encodeURIComponent(area.name)}.`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn btn-whatsapp btn-sm"
                              style={{ flex: 1, justifyContent: 'center' }}
                              onClick={(e) => e.stopPropagation()}
                            >
                              <MessageSquare size={14} /> WhatsApp
                            </a>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      <EnquirySection />

      {/* Radiant Golden Glow Keyframes and Styles */}
      <style>{`
        .location-card-glow {
          background: #1c2128 !important;
          border: 1.5px solid rgba(245, 184, 46, 0.65) !important;
          border-radius: var(--radius-lg) !important;
          box-shadow: 
            0 0 18px 2px rgba(245, 184, 46, 0.25),
            0 0 35px 4px rgba(245, 184, 46, 0.12),
            0 10px 26px rgba(0, 0, 0, 0.6) !important;
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.3s !important;
          position: relative;
          overflow: hidden;
        }

        .location-card-glow:hover {
          border-color: #F5B82E !important;
          transform: translateY(-5px);
          box-shadow: 
            0 0 28px 4px rgba(245, 184, 46, 0.48),
            0 0 52px 8px rgba(245, 184, 46, 0.25),
            0 14px 34px rgba(0, 0, 0, 0.75) !important;
        }

        .location-card-glow.is-active-card {
          border-color: #F5B82E !important;
          box-shadow: 
            0 0 32px 5px rgba(245, 184, 46, 0.52),
            0 0 60px 10px rgba(245, 184, 46, 0.28),
            0 16px 36px rgba(0, 0, 0, 0.85) !important;
        }
      `}</style>
    </div>
  );
}

