import React from 'react';
import { Camera } from 'lucide-react';
import GallerySection from '../components/GallerySection';
import EnquirySection from '../components/EnquirySection';

export default function GalleryPage() {
  return (
    <div style={{ background: 'var(--bg-main)', minHeight: '100vh' }}>
      {/* Header */}
      <section style={{
        background: 'linear-gradient(rgba(16, 18, 20, 0.9), rgba(16, 18, 20, 0.96)), url("https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=1800&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '2.75rem 0 2rem 0',
        borderBottom: '1px solid var(--border-color)',
        textAlign: 'center'
      }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          <span className="section-badge" style={{ marginBottom: '0.6rem' }}>
            <Camera size={14} /> FIELD PORTFOLIO & RECOVERIES
          </span>
          <h1 style={{
            color: '#fff',
            fontSize: 'clamp(1.5rem, 2.6vw, 2.1rem)',
            fontWeight: 800,
            lineHeight: 1.25,
            marginBottom: '0.65rem'
          }}>
            Our Towing Equipment & Recovery Gallery
          </h1>
          <p style={{ maxWidth: '720px', margin: '0 auto', fontSize: '0.98rem', color: 'var(--text-secondary)', lineHeight: '1.55' }}>
            Real-world operations across Bengaluru. Inspect our flatbed tilt decks, hydraulic wheel-lift rigs, night-shift highway dispatches, and zero-scratch luxury transports.
          </p>
        </div>
      </section>

      {/* Gallery Section without limit */}
      <GallerySection limit={0} showAllLink={false} />

      {/* Booking Form Integration */}
      <EnquirySection />
    </div>
  );
}

