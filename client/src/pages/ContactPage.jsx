import React from 'react';
import { Phone, MessageSquare, MapPin, Mail, Clock, ShieldCheck, Zap } from 'lucide-react';
import EnquirySection from '../components/EnquirySection';
import FaqSection from '../components/FaqSection';

export default function ContactPage() {
  return (
    <div style={{ background: 'var(--bg-main)', minHeight: '100vh' }}>
      {/* Hero */}
      <section style={{
        background: 'linear-gradient(rgba(16, 18, 20, 0.9), rgba(16, 18, 20, 0.96)), url("https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&w=1800&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '2.75rem 0 2rem 0',
        borderBottom: '1px solid var(--border-color)',
        textAlign: 'center'
      }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          <span className="section-badge" style={{ marginBottom: '0.6rem' }}>
            <Zap size={14} /> 24/7 BENGALURU EMERGENCY DISPATCH
          </span>
          <h1 style={{
            color: '#fff',
            fontSize: 'clamp(1.5rem, 2.6vw, 2.1rem)',
            fontWeight: 800,
            lineHeight: 1.25,
            marginBottom: '0.65rem'
          }}>
            Emergency Contact & Fleet Dispatch
          </h1>
          <p style={{ maxWidth: '720px', margin: '0 auto', fontSize: '0.98rem', color: 'var(--text-secondary)', lineHeight: '1.55' }}>
            We're awake and ready right now. Call our 24/7 hotline or message your live location on WhatsApp for immediate vehicle rescue across Bengaluru.
          </p>
        </div>
      </section>

      {/* Main Hotline Cards Strip */}
      <div className="container" style={{ paddingTop: '3.5rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.75rem',
          marginBottom: '4rem'
        }}>
          {/* Card 1 */}
          <div className="card-theme" style={{ padding: '2rem', borderTop: '4px solid var(--color-gold)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: 'rgba(245, 184, 46, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-gold)' }}>
                <Phone size={22} />
              </div>
              <div>
                <span className="pulse-dot"></span>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', marginLeft: '0.4rem' }}>
                  Primary 24/7 Dispatch
                </span>
                <h3 style={{ color: '#fff', fontSize: '1.3rem' }}>Emergency Call</h3>
              </div>
            </div>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
              Immediate response for accidents, highway breakdowns, and stranded motorists.
            </p>
            <a href="tel:+918867666437" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
              <Phone size={16} /> +91 88676 66437
            </a>
          </div>

          {/* Card 2 */}
          <div className="card-theme" style={{ padding: '2rem', borderTop: '4px solid #25D366' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: 'rgba(37, 211, 102, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#25D366' }}>
                <MessageSquare size={22} />
              </div>
              <div>
                <span className="pulse-dot-green"></span>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#25D366', textTransform: 'uppercase', marginLeft: '0.4rem' }}>
                  Fastest Location Pin
                </span>
                <h3 style={{ color: '#fff', fontSize: '1.3rem' }}>WhatsApp Live</h3>
              </div>
            </div>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
              Share your GPS location directly so our driver can navigate straight to your bumper.
            </p>
            <a
              href="https://wa.me/918867666437?text=Hi%20Car%20Services,%20I%20need%20assistance%20in%20Bengaluru."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <MessageSquare size={16} /> Chat on WhatsApp
            </a>
          </div>

          {/* Card 3 */}
          <div className="card-theme" style={{ padding: '2rem', borderTop: '4px solid var(--color-gold)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: 'rgba(245, 184, 46, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-gold)' }}>
                <Phone size={22} />
              </div>
              <div>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                  Backup Hotline
                </span>
                <h3 style={{ color: '#fff', fontSize: '1.3rem' }}>Secondary Line</h3>
              </div>
            </div>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
              Alternative direct line if the primary line is occupied during peak storm surges.
            </p>
            <a href="tel:+919019277930" className="btn btn-secondary" style={{ width: '100%', justifyContent: 'center' }}>
              <Phone size={16} /> +91 90192 77930
            </a>
          </div>
        </div>
      </div>

      {/* Interactive Form Section */}
      <EnquirySection />

      {/* FAQs */}
      <FaqSection />
    </div>
  );
}

