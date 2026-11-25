import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Mail, Clock, CheckCircle2, Award } from 'lucide-react';
import { servicesData } from '../data/servicesData';

export default function Footer() {
  return (
    <footer style={{
      background: 'var(--bg-secondary)',
      borderTop: '1px solid var(--border-color)',
      padding: '4rem 0 2rem 0',
      color: 'var(--text-secondary)'
    }}>
      <div className="container">
        {/* 4-Column Footer Content */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '3rem',
          marginBottom: '3.5rem'
        }}>
          {/* Col 1: Brand & About with Social Media Icons */}
          <div>
            <Link to="/" style={{ display: 'inline-block', marginBottom: '1.25rem' }}>
              <img
                src="/assets/insta-car-logo.png"
                alt="Insta Car Towing Services - Towing & Roadside Assistance"
                style={{
                  height: '64px',
                  width: 'auto',
                  maxWidth: '240px',
                  objectFit: 'contain',
                  display: 'block'
                }}
              />
            </Link>

            <p style={{ fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '1.25rem' }}>
              Bengaluru's dedicated 24-hour vehicle recovery and flatbed towing service. Handling hatchbacks, sports cars, luxury marques, commercial tempos, and heavy vehicles with zero-damage guarantee.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.85rem' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#fff' }}>
                <CheckCircle2 size={16} color="var(--color-gold)" /> Certified & Police-Verified Drivers
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#fff' }}>
                <Award size={16} color="var(--color-gold)" /> 4.7★ Rated on Justdial & Google
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#fff' }}>
                <Clock size={16} color="var(--color-gold)" /> &lt;30 Minute Average Dispatch ETA
              </span>
            </div>
          </div>

          {/* Col 2: Services Links */}
          <div>
            <h4 style={{ color: '#fff', fontSize: '1.05rem', marginBottom: '1.25rem', position: 'relative' }}>
              Our Towing Services
              <span style={{ display: 'block', width: '35px', height: '2px', background: 'var(--color-gold)', marginTop: '0.5rem' }}></span>
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.9rem' }}>
              {servicesData.slice(0, 7).map((srv) => (
                <li key={srv.id}>
                  <Link
                    to={`/services/${srv.id}`}
                    style={{ transition: 'color 0.2s', display: 'inline-block' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-gold)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
                  >
                    → {srv.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/services" style={{ color: 'var(--color-gold)', fontWeight: 600 }}>
                  View All 10 Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Quick Links & Hubs */}
          <div>
            <h4 style={{ color: '#fff', fontSize: '1.05rem', marginBottom: '1.25rem', position: 'relative' }}>
              Quick Navigation
              <span style={{ display: 'block', width: '35px', height: '2px', background: 'var(--color-gold)', marginTop: '0.5rem' }}></span>
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services">All Services</Link></li>
              <li><Link to="/locations">Coverage & Locations</Link></li>
              <li><Link to="/about">About Car Services</Link></li>
              <li><Link to="/gallery">Fleet Gallery & Action</Link></li>
              <li><Link to="/contact">Emergency Contact & Enquiry</Link></li>
            </ul>

            <h5 style={{ color: '#fff', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
              Key Bengaluru Corridors:
            </h5>
            <p style={{ fontSize: '0.82rem', lineHeight: '1.5' }}>
              Nayandahalli ORR, Whitefield ITPL, KR Puram Tin Factory, Indiranagar, Yeshwanthpur, Jalahalli, Kengeri, Mysore Road, Devanahalli Airport Road.
            </p>
          </div>

          {/* Col 4: Contact & Dispatch */}
          <div>
            <h4 style={{ color: '#fff', fontSize: '1.05rem', marginBottom: '1.25rem', position: 'relative' }}>
              24/7 Dispatch Control
              <span style={{ display: 'block', width: '35px', height: '2px', background: 'var(--color-gold)', marginTop: '0.5rem' }}></span>
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.9rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <Phone size={18} color="var(--color-gold)" style={{ marginTop: '0.2rem', flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: '0.78rem', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Emergency Hotline (Primary)</div>
                  <a href="tel:+919632090752" style={{ color: '#fff', fontWeight: 700, fontSize: '1.05rem' }}>
                    +91 96320 90752
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <Phone size={18} color="var(--color-gold)" style={{ marginTop: '0.2rem', flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: '0.78rem', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Secondary Backup Line</div>
                  <a href="tel:+919019277930" style={{ color: '#fff', fontWeight: 700 }}>
                    +91 90192 77930
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <Mail size={18} color="var(--color-gold)" style={{ marginTop: '0.2rem', flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: '0.78rem', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Email Inquiries</div>
                  <a href="mailto:instacarservices@gmail.com" style={{ color: 'var(--text-secondary)' }}>
                    instacarservices@gmail.com
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <MapPin size={18} color="var(--color-gold)" style={{ marginTop: '0.2rem', flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: '0.78rem', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Fleet Base & HQ</div>
                  <div style={{ color: '#fff' }}>8th mile circle, T.Dasarahalli Nelamangala Main Road Bangalore 560062</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid #282d34',
          paddingTop: '1.75rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          fontSize: '0.85rem'
        }}>
          <div>
            © {new Date().getFullYear()} <strong>Car Services</strong>. All Rights Reserved. 8th mile circle, T.Dasarahalli, Bangalore.
          </div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <span>24/7 Bengaluru Car Services & Towing Network</span>
            <span>•</span>
            <span style={{ color: 'var(--color-gold)' }}>Damage-Free Guarantee</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
