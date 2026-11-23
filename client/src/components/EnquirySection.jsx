import React, { useState } from 'react';
import { Phone, MessageSquare, MapPin, Mail, Clock, Send, CheckCircle2, AlertCircle, ChevronDown } from 'lucide-react';

export default function EnquirySection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    vehicleType: 'Car (Hatchback / Sedan / Compact SUV)',
    location: '',
    serviceType: 'Emergency Car Services & Breakdown Towing',
    notes: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const vehicleOptions = [
    'Car (Hatchback / Sedan / Compact SUV)',
    'Sports Car / Low-Clearance Supercar',
    'Luxury Executive Car / AWD',
    'Heavy SUV / MUV / 4x4 (Fortuner, Thar, Scorpio)',
    'Three Wheeler (Auto / EV Trike)',
    'Commercial Tempo / Mini-Truck',
    'Accident Damaged / Non-Rolling Vehicle',
    'Two-Wheeler (Motorcycle / Scooter)'
  ];

  const serviceOptions = [
    'Emergency Car Services & Breakdown Towing',
    'Flatbed Car Towing',
    'Accident Recovery & Winching',
    'Wheel Lift / Basement Towing',
    'Scheduled Showroom / Workshop Transit',
    'Dead Battery Jumpstart / Roadside Help'
  ];

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please provide your full name';
    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required';
    } else if (!/^[0-9+ -]{10,14}$/.test(formData.phone.trim())) {
      errs.phone = 'Please provide a valid 10-digit phone number';
    }
    if (!formData.location.trim()) errs.location = 'Please state your breakdown location';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    // Build structured WhatsApp message
    const message = `🚨 *NEW CAR SERVICES REQUEST*%0A%0A` +
      `👤 *Name:* ${encodeURIComponent(formData.name)}%0A` +
      `📞 *Phone:* ${encodeURIComponent(formData.phone)}%0A` +
      `🚗 *Vehicle Type:* ${encodeURIComponent(formData.vehicleType)}%0A` +
      `🛠️ *Service Needed:* ${encodeURIComponent(formData.serviceType)}%0A` +
      `📍 *Location:* ${encodeURIComponent(formData.location)}%0A` +
      (formData.notes ? `📝 *Notes:* ${encodeURIComponent(formData.notes)}%0A` : '') +
      `%0A_Sent via Car Services Instant Dispatch Portal_`;

    setSubmitted(true);

    // Open WhatsApp in new tab
    const waUrl = `https://wa.me/918867666437?text=${message}`;
    window.open(waUrl, '_blank');
  };

  return (
    <section id="contact" style={{
      background: 'radial-gradient(ellipse at 50% 15%, #FAF6EE 0%, #F8F3E9 100%)',
      padding: '5rem 0',
      borderTop: '1px solid #EAE2D5',
      borderBottom: '1px solid #EAE2D5',
      position: 'relative'
    }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3.5rem auto' }}>
          <div style={{
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
          }}>
            <Clock size={14} color="#9E6D00" />
            <span>24/7 RAPID DISPATCH DESK</span>
          </div>

          <h2 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2rem, 3.8vw, 2.7rem)',
            fontWeight: 900,
            lineHeight: 1.18,
            letterSpacing: '-0.02em',
            color: '#111C2B',
            marginBottom: '0.85rem'
          }}>
            Emergency Contact & Quick Callback
          </h2>

          <p style={{
            fontSize: '1.05rem',
            lineHeight: '1.6',
            color: '#555E6D',
            margin: 0
          }}>
            Wherever you are stranded in Bengaluru, call us directly or fill in your details below to generate a priority WhatsApp dispatch ticket in seconds.
          </p>
        </div>

        {/* Neatly Aligned 2-Column Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.15fr',
          gap: '2.5rem',
          alignItems: 'stretch'
        }} className="enquiry-two-col">

          {/* Left Column: Direct Phone & Hotlines */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
            justifyContent: 'space-between'
          }}>
            {/* Top Card: Live Human Dispatch */}
            <div style={{
              background: '#FFFFFF',
              border: '1px solid rgba(212, 160, 23, 0.28)',
              borderTop: '3.5px solid #D4A017',
              borderRadius: '16px',
              padding: '2.2rem',
              boxShadow: '0 6px 24px rgba(17, 28, 43, 0.05)',
              display: 'flex',
              flexDirection: 'column',
              flex: 1
            }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                color: '#9E6D00',
                marginBottom: '0.6rem',
                fontWeight: 800,
                fontSize: '0.8rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase'
              }}>
                <span className="pulse-dot"></span>
                <span>LIVE 24/7 HUMAN DISPATCH</span>
              </div>

              <h3 style={{
                fontFamily: 'var(--font-heading)',
                color: '#111C2B',
                fontSize: '1.45rem',
                fontWeight: 800,
                marginBottom: '0.65rem'
              }}>
                Immediate Telephone Assistance
              </h3>

              <p style={{
                fontSize: '0.92rem',
                color: '#525A68',
                marginBottom: '1.6rem',
                lineHeight: 1.6
              }}>
                For critical highway emergencies, accidents, or urgent breakdowns, skip forms and speak directly with our senior dispatch controller.
              </p>

              {/* 3 Action Buttons */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', marginTop: 'auto' }}>
                {/* 1. Primary Gold Hotline */}
                <a
                  href="tel:+918867666437"
                  style={{
                    background: '#F5B82E',
                    color: '#101214',
                    padding: '0.62rem 1.15rem',
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.85rem',
                    textDecoration: 'none',
                    transition: 'all 0.2s ease',
                    boxShadow: '0 4px 14px rgba(245, 184, 46, 0.25)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 8px 20px rgba(245, 184, 46, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 14px rgba(245, 184, 46, 0.25)';
                  }}
                >
                  <div style={{
                    width: '34px',
                    height: '34px',
                    borderRadius: '50%',
                    background: 'rgba(16, 18, 20, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <Phone size={17} color="#101214" strokeWidth={2.4} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.06em', textTransform: 'uppercase', opacity: 0.85, lineHeight: 1.1 }}>
                      PRIMARY HOTLINE (24/7)
                    </div>
                    <div style={{ fontSize: '1.05rem', fontWeight: 900, letterSpacing: '0.02em', lineHeight: 1.2 }}>
                      +91 88676 66437
                    </div>
                  </div>
                </a>

                {/* 2. Secondary Backup Line */}
                <a
                  href="tel:+919019277930"
                  style={{
                    background: '#FAF7F2',
                    border: '1px solid #D9D2C5',
                    color: '#111C2B',
                    padding: '0.62rem 1.15rem',
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.85rem',
                    textDecoration: 'none',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#D4A017';
                    e.currentTarget.style.background = '#FFFFFF';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#D9D2C5';
                    e.currentTarget.style.background = '#FAF7F2';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <div style={{
                    width: '34px',
                    height: '34px',
                    borderRadius: '50%',
                    background: 'rgba(212, 160, 23, 0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <Phone size={17} color="#B37E00" strokeWidth={2.2} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#667085', lineHeight: 1.1 }}>
                      SECONDARY BACKUP LINE
                    </div>
                    <div style={{ fontSize: '1.05rem', fontWeight: 900, letterSpacing: '0.02em', lineHeight: 1.2, color: '#111C2B' }}>
                      +91 90192 77930
                    </div>
                  </div>
                </a>

                {/* 3. WhatsApp Direct Button */}
                <a
                  href="https://wa.me/918867666437?text=Hi%20Car%20Services,%20I%20need%20roadside%20assistance%20in%20Bengaluru."
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: '#25D366',
                    color: '#ffffff',
                    padding: '0.62rem 1.15rem',
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.85rem',
                    textDecoration: 'none',
                    transition: 'all 0.2s ease',
                    boxShadow: '0 4px 16px rgba(37, 211, 102, 0.28)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 8px 22px rgba(37, 211, 102, 0.45)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 16px rgba(37, 211, 102, 0.28)';
                  }}
                >
                  <div style={{
                    width: '34px',
                    height: '34px',
                    borderRadius: '50%',
                    background: 'rgba(0, 0, 0, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <MessageSquare size={17} color="#ffffff" strokeWidth={2.4} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.06em', textTransform: 'uppercase', opacity: 0.9, lineHeight: 1.1 }}>
                      WHATSAPP LIVE LOCATION PIN
                    </div>
                    <div style={{ fontSize: '1.05rem', fontWeight: 900, lineHeight: 1.2 }}>
                      Chat Directly on WhatsApp
                    </div>
                  </div>
                </a>
              </div>
            </div>

            {/* Bottom Card: HQ Details & Quick Facts */}
            <div style={{
              background: '#FFFFFF',
              border: '1px solid rgba(212, 160, 23, 0.28)',
              borderTop: '3.5px solid #D4A017',
              borderRadius: '16px',
              padding: '1.6rem 2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              boxShadow: '0 6px 20px rgba(17, 28, 43, 0.04)'
            }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
                <div style={{
                  width: '34px',
                  height: '34px',
                  borderRadius: '8px',
                  background: 'rgba(212, 160, 23, 0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#B37E00',
                  flexShrink: 0
                }}>
                  <MapPin size={18} />
                </div>
                <div>
                  <div style={{ color: '#111C2B', fontWeight: 800, fontSize: '0.92rem' }}>Central Fleet HQ:</div>
                  <div style={{ color: '#525A68', fontSize: '0.88rem', marginTop: '0.1rem' }}>Hoskote, Bengaluru, Karnataka 562114</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
                <div style={{
                  width: '34px',
                  height: '34px',
                  borderRadius: '8px',
                  background: 'rgba(212, 160, 23, 0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#B37E00',
                  flexShrink: 0
                }}>
                  <Clock size={18} />
                </div>
                <div>
                  <div style={{ color: '#111C2B', fontWeight: 800, fontSize: '0.92rem' }}>Operating Hours:</div>
                  <div style={{ color: '#525A68', fontSize: '0.88rem', marginTop: '0.1rem' }}>24 Hours a Day / 7 Days a Week / 365 Days a Year</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
                <div style={{
                  width: '34px',
                  height: '34px',
                  borderRadius: '8px',
                  background: 'rgba(212, 160, 23, 0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#B37E00',
                  flexShrink: 0
                }}>
                  <Mail size={18} />
                </div>
                <div>
                  <div style={{ color: '#111C2B', fontWeight: 800, fontSize: '0.92rem' }}>Email:</div>
                  <div style={{ marginTop: '0.1rem' }}>
                    <a href="mailto:instacarservices@gmail.com" style={{ color: '#B37E00', fontSize: '0.88rem', textDecoration: 'none', fontWeight: 700 }}>
                      instacarservices@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Structured Form in Warm/Ivory Theme */}
          <div style={{
            background: '#FFFFFF',
            border: '1px solid rgba(212, 160, 23, 0.28)',
            borderTop: '3.5px solid #D4A017',
            borderRadius: '16px',
            padding: '2.4rem',
            boxShadow: '0 6px 24px rgba(17, 28, 43, 0.05)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}>
            <div>
              {/* Top Form Tag */}
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                color: '#9E6D00',
                fontSize: '0.8rem',
                fontWeight: 800,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginBottom: '0.65rem'
              }}>
                <Send size={14} color="#9E6D00" />
                <span>REQUEST A TOWING CALLBACK</span>
              </div>

              <h3 style={{
                fontFamily: 'var(--font-heading)',
                color: '#111C2B',
                fontSize: '1.5rem',
                fontWeight: 800,
                marginBottom: '0.5rem'
              }}>
                Send Breakdown Details
              </h3>

              <p style={{
                fontSize: '0.9rem',
                color: '#555E6D',
                marginBottom: '1.6rem',
                lineHeight: 1.55
              }}>
                Fill this in and it opens WhatsApp with your details pre-filled. Our dispatch manager replies within minutes with driver ETA and price.
              </p>

              {submitted && (
                <div style={{
                  background: 'rgba(37, 211, 102, 0.12)',
                  border: '1px solid #25D366',
                  borderRadius: '10px',
                  padding: '0.85rem 1rem',
                  color: '#111C2B',
                  marginBottom: '1.25rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  fontSize: '0.88rem',
                  fontWeight: 600
                }}>
                  <CheckCircle2 size={18} color="#25D366" />
                  <span>Ticket pre-filled! WhatsApp opened. Tap send to dispatch our closest vehicle.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
                {/* Row 1: Full Name & Phone Number */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="enquiry-row-2col">
                  <div>
                    <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 700, color: '#111C2B', marginBottom: '0.4rem' }}>
                      Your Full Name <span style={{ color: '#D4A017' }}>*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="e.g. Arun Kumar"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{
                        background: '#FAF7F2',
                        border: errors.name ? '1px solid #ff4d4f' : '1px solid #D9D2C5',
                        borderRadius: '10px',
                        padding: '0.75rem 0.95rem',
                        fontSize: '0.92rem',
                        color: '#111C2B'
                      }}
                    />
                    {errors.name && (
                      <span style={{ color: '#d9363e', fontSize: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.25rem', marginTop: '0.3rem', fontWeight: 600 }}>
                        <AlertCircle size={12} /> {errors.name}
                      </span>
                    )}
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 700, color: '#111C2B', marginBottom: '0.4rem' }}>
                      Mobile Phone Number <span style={{ color: '#D4A017' }}>*</span>
                    </label>
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="e.g. 9876543210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      style={{
                        background: '#FAF7F2',
                        border: errors.phone ? '1px solid #ff4d4f' : '1px solid #D9D2C5',
                        borderRadius: '10px',
                        padding: '0.75rem 0.95rem',
                        fontSize: '0.92rem',
                        color: '#111C2B'
                      }}
                    />
                    {errors.phone && (
                      <span style={{ color: '#d9363e', fontSize: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.25rem', marginTop: '0.3rem', fontWeight: 600 }}>
                        <AlertCircle size={12} /> {errors.phone}
                      </span>
                    )}
                  </div>
                </div>

                {/* Row 2: Vehicle Type & Required Service */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="enquiry-row-2col">
                  <div>
                    <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 700, color: '#111C2B', marginBottom: '0.4rem' }}>
                      Vehicle Type
                    </label>
                    <div style={{ position: 'relative' }}>
                      <select
                        className="form-control"
                        value={formData.vehicleType}
                        onChange={(e) => setFormData({ ...formData, vehicleType: e.target.value })}
                        style={{
                          background: '#FAF7F2',
                          border: '1px solid #D9D2C5',
                          borderRadius: '10px',
                          padding: '0.75rem 2.2rem 0.75rem 0.95rem',
                          fontSize: '0.88rem',
                          color: '#111C2B',
                          cursor: 'pointer',
                          appearance: 'none',
                          WebkitAppearance: 'none'
                        }}
                      >
                        {vehicleOptions.map((opt, i) => (
                          <option key={i} value={opt} style={{ background: '#FFFFFF', color: '#111C2B' }}>
                            {opt}
                          </option>
                        ))}
                      </select>
                      <ChevronDown size={16} color="#B37E00" style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }} />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 700, color: '#111C2B', marginBottom: '0.4rem' }}>
                      Required Service
                    </label>
                    <div style={{ position: 'relative' }}>
                      <select
                        className="form-control"
                        value={formData.serviceType}
                        onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                        style={{
                          background: '#FAF7F2',
                          border: '1px solid #D9D2C5',
                          borderRadius: '10px',
                          padding: '0.75rem 2.2rem 0.75rem 0.95rem',
                          fontSize: '0.88rem',
                          color: '#111C2B',
                          cursor: 'pointer',
                          appearance: 'none',
                          WebkitAppearance: 'none'
                        }}
                      >
                        {serviceOptions.map((opt, i) => (
                          <option key={i} value={opt} style={{ background: '#FFFFFF', color: '#111C2B' }}>
                            {opt}
                          </option>
                        ))}
                      </select>
                      <ChevronDown size={16} color="#B37E00" style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }} />
                    </div>
                  </div>
                </div>

                {/* Row 3: Breakdown Location / Landmark */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 700, color: '#111C2B', marginBottom: '0.4rem' }}>
                    Your Current Breakdown Location / Landmark <span style={{ color: '#D4A017' }}>*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="e.g. Near Hoskote Toll Plaza / Whitefield ITPL / Tin Factory"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    style={{
                      background: '#FAF7F2',
                      border: errors.location ? '1px solid #ff4d4f' : '1px solid #D9D2C5',
                      borderRadius: '10px',
                      padding: '0.75rem 0.95rem',
                      fontSize: '0.92rem',
                      color: '#111C2B'
                    }}
                  />
                  {errors.location && (
                    <span style={{ color: '#d9363e', fontSize: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.25rem', marginTop: '0.3rem', fontWeight: 600 }}>
                      <AlertCircle size={12} /> {errors.location}
                    </span>
                  )}
                </div>

                {/* Row 4: Additional Issue Details (Optional) */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 700, color: '#111C2B', marginBottom: '0.4rem' }}>
                    Additional Issue Details (Optional)
                  </label>
                  <textarea
                    className="form-control"
                    rows={2}
                    placeholder="e.g. Engine won't start, front axle issue, steering locked..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    style={{
                      background: '#FAF7F2',
                      border: '1px solid #D9D2C5',
                      borderRadius: '10px',
                      padding: '0.75rem 0.95rem',
                      fontSize: '0.92rem',
                      color: '#111C2B',
                      resize: 'none'
                    }}
                  ></textarea>
                </div>

                {/* Row 5: Submit Button - Scaled Down */}
                <button
                  type="submit"
                  style={{
                    width: '100%',
                    padding: '0.72rem 1.2rem',
                    fontSize: '0.95rem',
                    fontWeight: 800,
                    borderRadius: '10px',
                    background: '#25D366',
                    color: '#ffffff',
                    border: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.6rem',
                    cursor: 'pointer',
                    boxShadow: '0 4px 16px rgba(37, 211, 102, 0.28)',
                    transition: 'all 0.2s ease',
                    marginTop: '0.2rem'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 8px 22px rgba(37, 211, 102, 0.45)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 16px rgba(37, 211, 102, 0.28)';
                  }}
                >
                  <MessageSquare size={17} />
                  <span>Send via WhatsApp Dispatch</span>
                </button>

                {/* Row 6: Subtext */}
                <div style={{
                  textAlign: 'center',
                  fontSize: '0.78rem',
                  color: '#667085',
                  lineHeight: 1.4
                }}>
                  Opens WhatsApp with pre-filled details. Nothing is sent until you review and press send there.
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Responsive Grid Styles */}
      <style>{`
        @media (max-width: 991px) {
          .enquiry-two-col {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
        @media (max-width: 640px) {
          .enquiry-row-2col {
            grid-template-columns: 1fr !important;
            gap: 0.9rem !important;
          }
        }
      `}</style>
    </section>
  );
}
