import React, { useState } from 'react';
import { MapPin, Crosshair, Layers, Map, ChevronDown, Phone, MessageSquare } from 'lucide-react';
import { locationsData } from '../data/locationsData';

export default function LocationsSection() {
  // Default first category expanded to display the balanced map & 2-col cards immediately
  const [expandedCategory, setExpandedCategory] = useState('primary');

  const categories = [
    {
      key: 'primary',
      title: 'Primary Service Areas',
      count: `(${locationsData.primary.areas.length} Locations)`,
      icon: MapPin,
      data: locationsData.primary
    },
    {
      key: 'nearby',
      title: 'Nearby Areas (0 – 3 km)',
      count: `(${locationsData.nearby.areas.length} Locations)`,
      icon: Crosshair,
      data: locationsData.nearby
    },
    {
      key: 'midRange',
      title: 'Mid-Range Areas',
      count: `(${locationsData.midRange.areas.length} Locations)`,
      icon: Layers,
      data: locationsData.midRange
    },
    {
      key: 'extended',
      title: 'Extended Service Areas',
      count: `(${locationsData.extended.areas.length} Locations)`,
      icon: Map,
      data: locationsData.extended
    }
  ];

  const toggleAccordion = (key) => {
    setExpandedCategory(expandedCategory === key ? null : key);
  };

  // Pins on the Bengaluru Map
  const mapPins = [
    { top: '18%', left: '46%', label: 'Airport Rd (NH 44)' },
    { top: '26%', left: '34%', label: 'Yeshwanthpur' },
    { top: '42%', left: '70%', label: 'Whitefield ITPL' },
    { top: '36%', left: '56%', label: 'KR Puram' },
    { top: '48%', left: '44%', label: 'Indiranagar' },
    { top: '35%', left: '22%', label: 'Peenya / Nelamangala' },
    { top: '68%', left: '28%', label: 'Kengeri / Mysore Rd' }
  ];

  return (
    <section id="areas" style={{
      background: 'radial-gradient(ellipse at 50% 15%, #2a303b 0%, #1f242d 100%)',
      padding: '5rem 0',
      borderTop: '1px solid #323946',
      borderBottom: '1px solid #323946',
      position: 'relative'
    }}>
      <div className="container">
        {/* Top Header Matching Image 1 */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3.25rem auto' }}>
          {/* Service Areas Pill Badge */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.45rem',
            background: 'rgba(245, 184, 46, 0.1)',
            border: '1.5px solid #F5B82E',
            borderRadius: '9999px',
            padding: '0.35rem 1.15rem',
            fontSize: '0.78rem',
            fontWeight: 800,
            letterSpacing: '0.08em',
            color: '#F5B82E',
            textTransform: 'uppercase',
            marginBottom: '1rem'
          }}>
            <MapPin size={14} color="#F5B82E" />
            <span>SERVICE AREAS</span>
          </div>

          {/* Heading */}
          <h2 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2rem, 3.8vw, 2.7rem)',
            fontWeight: 800,
            lineHeight: 1.2,
            letterSpacing: '-0.01em',
            color: '#ffffff',
            marginBottom: '0.85rem'
          }}>
            Service Locations & Response Conditions
          </h2>

          {/* Subtitle */}
          <p style={{
            fontSize: '1.05rem',
            lineHeight: '1.6',
            color: '#9aa1ab',
            margin: 0
          }}>
            We provide fast and reliable towing services across key areas in and around Bengaluru.
          </p>
        </div>

        {/* 2-Column Balanced 42:58 Map & Accordion Layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '42fr 58fr',
          gap: '2rem',
          alignItems: 'start'
        }} className="locations-two-col">

          {/* Left Column: Visual Map Card with Fixed Height & Sticky Pinning */}
          <div className="locations-map-card" style={{
            border: '2px solid #F5B82E',
            borderRadius: '16px',
            height: '520px',
            minHeight: '520px',
            maxHeight: '520px',
            position: 'sticky',
            top: '95px',
            overflow: 'hidden',
            boxShadow: '0 0 35px rgba(245, 184, 46, 0.22), 0 20px 45px rgba(0, 0, 0, 0.8)',
            background: '#0a0d12',
            isolation: 'isolate',
            zIndex: 5
          }}>
            {/* Real Night City Aerial Satellite Road Grid Texture */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundImage: 'url("https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1200&q=80")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: 0.28,
              filter: 'contrast(1.4) brightness(0.7)',
              pointerEvents: 'none'
            }} />

            {/* SVG Dark Night Bengaluru Roadmap Canvas */}
            <svg
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                opacity: 0.95,
                pointerEvents: 'none'
              }}
              viewBox="0 0 600 520"
              preserveAspectRatio="none"
            >
              <defs>
                {/* Radial Glow from City Center */}
                <radialGradient id="centerCityGlow" cx="50%" cy="50%" r="55%">
                  <stop offset="0%" stopColor="rgba(245, 184, 46, 0.28)" />
                  <stop offset="45%" stopColor="rgba(245, 184, 46, 0.08)" />
                  <stop offset="100%" stopColor="rgba(10, 13, 18, 0.85)" />
                </radialGradient>

                {/* Road Line Neon Filters */}
                <filter id="glowGold" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* City Ambient Center Glow */}
              <rect width="100%" height="100%" fill="url(#centerCityGlow)" />

              {/* Subtle Blue/Cyan Minor Road Network */}
              <g stroke="rgba(45, 85, 125, 0.45)" strokeWidth="1" fill="none">
                <path d="M10,80 Q140,115 300,75 T590,95" />
                <path d="M30,260 Q170,230 310,250 T570,230" />
                <path d="M10,405 Q180,385 330,420 T590,385" />
                <path d="M90,20 Q110,210 70,495" />
                <path d="M490,20 Q470,240 520,495" />
                <path d="M190,55 Q260,195 210,455" />
                <path d="M380,60 Q350,280 420,475" />
                <path d="M80,435 L520,95" strokeWidth="0.8" opacity="0.3" />
                <path d="M70,125 L530,435" strokeWidth="0.8" opacity="0.3" />
              </g>

              {/* Primary Bengaluru Arterial Expressways (Golden Glowing Roads) */}
              <g stroke="rgba(245, 184, 46, 0.75)" strokeWidth="2.8" fill="none" strokeLinecap="round" filter="url(#glowGold)">
                {/* Outer Ring Road (ORR Circular Circuit) */}
                <ellipse cx="300" cy="260" rx="195" ry="145" stroke="rgba(245, 184, 46, 0.85)" strokeWidth="3" strokeDasharray="6 3" />
                
                {/* NH 75 Hoskote Highway to East */}
                <path d="M300,240 L450,155 L590,110" stroke="#FFD166" strokeWidth="3.2" />
                
                {/* NH 44 Devanahalli Airport Road to North */}
                <path d="M295,215 L280,95 L270,10" stroke="#FFD166" strokeWidth="3.2" />
                
                {/* Hosur Road & Electronic City Elevated Tollway to South */}
                <path d="M315,295 L335,395 L350,510" stroke="#FFD166" strokeWidth="3.2" />
                
                {/* Old Madras Road & KR Puram Tin Factory Connector */}
                <path d="M300,250 L370,215 L480,200" stroke="#F5B82E" strokeWidth="2.8" />
                
                {/* Tumkur Road & Peenya to West */}
                <path d="M265,240 L165,195 L25,175" stroke="#F5B82E" strokeWidth="2.8" />

                {/* NICE Road Peripheral Ring Arc */}
                <path d="M110,405 Q210,475 360,460 T510,370" stroke="rgba(245, 184, 46, 0.55)" strokeWidth="2.4" strokeDasharray="8 4" />
              </g>

              {/* Glowing Highway Intersection Nodes */}
              <g fill="#F5B82E">
                <circle cx="300" cy="260" r="4.5" />
                <circle cx="450" cy="155" r="5" />
                <circle cx="280" cy="95" r="5" />
                <circle cx="335" cy="395" r="5" />
                <circle cx="370" cy="215" r="4.5" />
                <circle cx="165" cy="195" r="4.5" />
              </g>
            </svg>

            {/* Pulsating Glowing Location Pins with Area Names on the Map */}
            {mapPins.map((pin, i) => (
              <div
                key={i}
                style={{
                  position: 'absolute',
                  top: pin.top,
                  left: pin.left,
                  transform: 'translate(-50%, -50%)',
                  zIndex: 6,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  cursor: 'pointer',
                  pointerEvents: 'none'
                }}
              >
                {/* Glowing Pulse Ring */}
                <span className="map-pin-pulse"></span>
                
                {/* Pin Head */}
                <div style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '50%',
                  background: '#F5B82E',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 0 20px rgba(245, 184, 46, 0.95), 0 4px 10px rgba(0,0,0,0.6)',
                  color: '#101214',
                  fontWeight: 900,
                  position: 'relative',
                  zIndex: 2,
                  pointerEvents: 'auto'
                }}>
                  <MapPin size={16} fill="#101214" color="#F5B82E" />
                </div>

                {/* Floating Pin Label */}
                <span className="map-pin-label" style={{
                  marginTop: '4px',
                  background: 'rgba(10, 13, 18, 0.92)',
                  border: '1px solid rgba(245, 184, 46, 0.45)',
                  borderRadius: '5px',
                  padding: '2px 7px',
                  fontSize: '0.66rem',
                  fontWeight: 700,
                  color: '#ffffff',
                  whiteSpace: 'nowrap',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.7)',
                  pointerEvents: 'none',
                  position: 'relative',
                  zIndex: 3
                }}>
                  {pin.label}
                </span>
              </div>
            ))}

            {/* Bottom-Left Yellow Badge */}
            <div className="locations-map-badge" style={{
              position: 'absolute',
              bottom: '18px',
              left: '18px',
              background: '#F5B82E',
              color: '#101214',
              padding: '0.65rem 1.15rem',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.5), 0 2px 8px rgba(245, 184, 46, 0.3)',
              zIndex: 8,
              pointerEvents: 'none'
            }}>
              <div className="locations-map-badge-icon" style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                background: '#101214',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#F5B82E',
                flexShrink: 0
              }}>
                <MapPin size={17} />
              </div>
              <div className="locations-map-badge-title" style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 900,
                fontSize: '0.92rem',
                lineHeight: 1.15,
                color: '#101214'
              }}>
                Bengaluru<br />Service Coverage
              </div>
            </div>
          </div>

          {/* Right Column: Accordion List (Smoothly Expandable One at a Time) */}
          <div className="locations-accordions-col" style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.9rem',
            position: 'relative',
            zIndex: 10,
            width: '100%'
          }}>
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isExpanded = expandedCategory === cat.key;

              return (
                <div
                  key={cat.key}
                  className="locations-accordion-item"
                  style={{
                    background: '#15191f',
                    border: isExpanded ? '1.5px solid #F5B82E' : '1px solid #333a47',
                    borderRadius: '14px',
                    overflow: 'hidden',
                    transition: 'border-color 0.25s ease, box-shadow 0.25s ease',
                    boxShadow: isExpanded ? '0 10px 30px rgba(0, 0, 0, 0.5), 0 0 22px rgba(245, 184, 46, 0.14)' : '0 4px 16px rgba(0,0,0,0.25)',
                    position: 'relative',
                    zIndex: 1
                  }}
                >
                  {/* Row Header (Clickable Accordion Toggle) */}
                  <div
                    onClick={() => toggleAccordion(cat.key)}
                    className="locations-accordion-header"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '1.15rem 1.4rem',
                      cursor: 'pointer',
                      userSelect: 'none',
                      background: isExpanded ? 'rgba(245, 184, 46, 0.08)' : '#15191f',
                      transition: 'background 0.2s ease'
                    }}
                  >
                    {/* Left: Icon + Title */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.9rem' }}>
                      <div style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '9px',
                        background: 'rgba(245, 184, 46, 0.12)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#F5B82E',
                        flexShrink: 0
                      }}>
                        <Icon size={19} strokeWidth={2.4} />
                      </div>
                      <span style={{
                        fontFamily: 'var(--font-heading)',
                        fontWeight: 700,
                        fontSize: '1.05rem',
                        color: '#ffffff',
                        letterSpacing: '-0.01em'
                      }}>
                        {cat.title}
                      </span>
                    </div>

                    {/* Right: (Count Locations) + Rotating Chevron */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                      <span style={{
                        color: '#8e96a3',
                        fontSize: '0.9rem',
                        fontWeight: 600
                      }}>
                        {cat.count}
                      </span>
                      <ChevronDown
                        size={20}
                        color="#F5B82E"
                        style={{
                          transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                          transition: 'transform 0.25s ease'
                        }}
                      />
                    </div>
                  </div>

                  {/* Expanded Content with Clean 2-Column Grid */}
                  {isExpanded && (
                    <div
                      className="accordion-body-anim locations-accordion-body"
                      style={{
                        padding: '1.15rem 1.4rem 1.4rem 1.4rem',
                        borderTop: '1px solid #232832',
                        background: '#191e25',
                        position: 'relative',
                        zIndex: 1
                      }}
                    >
                      {/* Readable 2-Column Grid of Location Cards */}
                      <div className="location-areas-grid" style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(2, 1fr)',
                        gap: '0.75rem',
                        marginBottom: '1.1rem'
                      }}>
                        {cat.data.areas.map((area, idx) => (
                          <div
                            key={idx}
                            className="locations-area-card"
                            style={{
                              background: '#212732',
                              border: '1px solid #2e3746',
                              borderRadius: '10px',
                              padding: '0.75rem 0.95rem',
                              display: 'flex',
                              justifyContent: 'space-between',
                              alignItems: 'center',
                              gap: '0.5rem',
                              transition: 'all 0.2s ease'
                            }}
                          >
                            <div style={{
                              color: '#ffffff',
                              fontWeight: 700,
                              fontSize: '0.88rem',
                              lineHeight: 1.3
                            }}>
                              {area.name}
                            </div>
                            <span style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              background: 'rgba(245, 184, 46, 0.12)',
                              border: '1px solid rgba(245, 184, 46, 0.35)',
                              color: '#F5B82E',
                              fontSize: '0.74rem',
                              fontWeight: 700,
                              padding: '0.22rem 0.55rem',
                              borderRadius: '6px',
                              whiteSpace: 'nowrap',
                              flexShrink: 0
                            }}>
                              ETA: {area.eta}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Fast Action Buttons */}
                      <div style={{ display: 'flex', gap: '0.75rem' }}>
                        <a
                          href="tel:+919632090752"
                          className="btn btn-primary btn-sm"
                          style={{ flex: 1, justifyContent: 'center', padding: '0.6rem' }}
                        >
                          <Phone size={14} /> Call Dispatch
                        </a>
                        <a
                          href={`https://wa.me/919632090752?text=Hi%20Car%20Services,%20I%20need%20recovery%20assistance%20in%20${encodeURIComponent(cat.title)}.`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-whatsapp btn-sm"
                          style={{ flex: 1, justifyContent: 'center', padding: '0.6rem' }}
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
      </div>

      {/* Pulsing Pin Keyframe Styles & Responsive Layout */}
      <style>{`
        .map-pin-pulse {
          position: absolute;
          top: 0;
          left: 0;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: rgba(245, 184, 46, 0.45);
          animation: mapPinPulseAnim 2s infinite;
          z-index: 1;
          pointer-events: none;
        }

        @keyframes mapPinPulseAnim {
          0% {
            transform: scale(0.8);
            opacity: 0.9;
          }
          70% {
            transform: scale(1.6);
            opacity: 0;
          }
          100% {
            transform: scale(1.6);
            opacity: 0;
          }
        }

        @keyframes accordionExpand {
          from {
            opacity: 0;
            transform: translateY(-5px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .accordion-body-anim {
          animation: accordionExpand 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }

        @media (max-width: 991px) {
          .locations-two-col {
            display: flex !important;
            flex-direction: column !important;
            gap: 2.25rem !important;
          }

          .locations-map-card {
            position: relative !important;
            top: auto !important;
            width: 100% !important;
            height: 380px !important;
            min-height: 380px !important;
            max-height: 380px !important;
            overflow: hidden !important;
            isolation: isolate !important;
            z-index: 5 !important;
            margin-bottom: 0 !important;
          }

          .locations-accordions-col {
            width: 100% !important;
            position: relative !important;
            z-index: 10 !important;
          }
        }

        @media (max-width: 576px) {
          .locations-map-card {
            height: 330px !important;
            min-height: 330px !important;
            max-height: 330px !important;
            border-radius: 14px !important;
          }

          .location-areas-grid {
            grid-template-columns: 1fr !important;
            gap: 0.65rem !important;
          }

          .locations-accordion-header {
            padding: 1rem 1.15rem !important;
          }

          .locations-accordion-body {
            padding: 1rem 1.15rem 1.25rem 1.15rem !important;
          }

          .locations-map-badge {
            padding: 0.5rem 0.85rem !important;
            bottom: 12px !important;
            left: 12px !important;
            border-radius: 10px !important;
          }

          .locations-map-badge-icon {
            width: 28px !important;
            height: 28px !important;
          }

          .locations-map-badge-title {
            font-size: 0.8rem !important;
          }

          .map-pin-label {
            font-size: 0.6rem !important;
            padding: 1px 5px !important;
          }
        }
      `}</style>
    </section>
  );
}
