import React, { useState } from 'react';
import { Camera, X, MapPin, ZoomIn, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { galleryData, galleryCategories } from '../data/galleryData';

export default function GallerySection({ limit = 6, showAllLink = true }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredItems = activeCategory === 'All'
    ? galleryData
    : galleryData.filter(item => item.category === activeCategory);

  const displayedItems = limit ? filteredItems.slice(0, limit) : filteredItems;

  return (
    <section id="gallery" style={{
      background: 'radial-gradient(ellipse at 50% 15%, #FAF6EE 0%, #F8F3E9 100%)',
      padding: '5rem 0 4.5rem 0',
      borderTop: '1px solid #EAE2D5',
      borderBottom: '1px solid #EAE2D5',
      position: 'relative'
    }}>
      <div className="container">
        {/* Section Header with Warm Ivory Styling */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3rem auto' }}>
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
            <Camera size={14} color="#9E6D00" />
            <span>FIELD RECOVERIES & FLEET ACTION</span>
          </div>

          <h2 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2rem, 3.8vw, 2.7rem)',
            fontWeight: 900,
            lineHeight: 1.2,
            letterSpacing: '-0.02em',
            color: '#111C2B',
            marginBottom: '0.85rem'
          }}>
            Our Towing Fleet Gallery
          </h2>

          <p style={{
            fontSize: '1.05rem',
            lineHeight: '1.6',
            color: '#555E6D',
            margin: 0
          }}>
            A visual look at the hydraulic rollback decks, heavy-duty winches, zero-degree tilt ramps, and field recoveries performed across Bengaluru.
          </p>
        </div>

        {/* Filter Categories Pills */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '0.65rem',
          marginBottom: '2.5rem'
        }}>
          {galleryCategories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '0.6rem 1.25rem',
                  borderRadius: '9999px',
                  fontSize: '0.86rem',
                  fontWeight: 700,
                  transition: 'all 0.2s ease',
                  cursor: 'pointer',
                  background: isActive ? '#F5B82E' : '#FFFFFF',
                  color: isActive ? '#111C2B' : '#4B5565',
                  border: isActive ? '1px solid #F5B82E' : '1px solid #E2D9CC',
                  boxShadow: isActive ? '0 4px 14px rgba(245, 184, 46, 0.35)' : '0 2px 6px rgba(0,0,0,0.03)'
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.borderColor = '#D4A017';
                    e.currentTarget.style.color = '#111C2B';
                    e.currentTarget.style.background = '#FFF9EF';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.borderColor = '#E2D9CC';
                    e.currentTarget.style.color = '#4B5565';
                    e.currentTarget.style.background = '#FFFFFF';
                  }
                }}
              >
                {cat} <span style={{ opacity: 0.75, fontSize: '0.8rem', marginLeft: '0.2rem' }}>
                  ({cat === 'All' ? galleryData.length : galleryData.filter(item => item.category === cat).length})
                </span>
              </button>
            );
          })}
        </div>

        {/* Images Grid with White/Champagne Framed Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '1.75rem',
          marginBottom: '3rem'
        }}>
          {displayedItems.map((item) => (
            <div
              key={item.id}
              className="gallery-card-ivory"
              style={{
                cursor: 'pointer',
                overflow: 'hidden',
                position: 'relative',
                height: '290px',
                borderRadius: '16px',
                background: '#FFFFFF',
                border: '1px solid rgba(212, 160, 23, 0.32)',
                borderTop: '3.5px solid #D4A017',
                boxShadow: '0 6px 22px rgba(17, 28, 43, 0.06), 0 1px 3px rgba(0, 0, 0, 0.02)',
                transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
              onClick={() => setSelectedImage(item)}
            >
              <img
                src={item.image}
                alt={item.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.4s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.08)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                loading="lazy"
              />

              {/* Gradient Overlay with Text */}
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                background: 'linear-gradient(to top, rgba(17, 28, 43, 0.95) 0%, rgba(17, 28, 43, 0.55) 60%, transparent 100%)',
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                pointerEvents: 'none'
              }}>
                <span style={{
                  color: '#F5B82E',
                  fontSize: '0.74rem',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  marginBottom: '0.25rem'
                }}>
                  {item.category}
                </span>
                <h4 style={{
                  color: '#ffffff',
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.18rem',
                  fontWeight: 800,
                  marginBottom: '0.25rem',
                  lineHeight: 1.25
                }}>
                  {item.title}
                </h4>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.82rem', color: '#CAD1DC' }}>
                  <MapPin size={13} color="#F5B82E" /> {item.location}
                </div>
              </div>

              {/* Zoom In Icon Badge */}
              <div style={{
                position: 'absolute',
                top: '12px',
                right: '12px',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                background: 'rgba(17, 28, 43, 0.85)',
                backdropFilter: 'blur(4px)',
                border: '1px solid rgba(245, 184, 46, 0.5)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#F5B82E'
              }}>
                <ZoomIn size={18} strokeWidth={2.2} />
              </div>
            </div>
          ))}
        </div>

        {/* Explore Full Portfolio Button */}
        {showAllLink && (
          <div style={{ textAlign: 'center' }}>
            <Link
              to="/gallery"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.65rem',
                background: '#111C2B',
                color: '#FFFFFF',
                border: '1.5px solid rgba(245, 184, 46, 0.4)',
                borderRadius: '9999px',
                padding: '0.85rem 2rem',
                fontSize: '0.96rem',
                fontWeight: 800,
                textDecoration: 'none',
                boxShadow: '0 8px 24px rgba(17, 28, 43, 0.15)',
                transition: 'all 0.25s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#F5B82E';
                e.currentTarget.style.color = '#111C2B';
                e.currentTarget.style.borderColor = '#F5B82E';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 12px 28px rgba(245, 184, 46, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#111C2B';
                e.currentTarget.style.color = '#FFFFFF';
                e.currentTarget.style.borderColor = 'rgba(245, 184, 46, 0.4)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(17, 28, 43, 0.15)';
              }}
            >
              <span>Explore Full Gallery & High-Res Portfolio</span>
              <ArrowRight size={17} strokeWidth={2.4} />
            </Link>
          </div>
        )}

        {/* Lightbox Modal Preview */}
        {selectedImage && (
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(10, 12, 14, 0.92)',
              backdropFilter: 'blur(10px)',
              zIndex: 2000,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1.5rem'
            }}
            onClick={() => setSelectedImage(null)}
          >
            <div
              style={{
                background: '#16191f',
                border: '1px solid #D4A017',
                borderRadius: '16px',
                maxWidth: '850px',
                width: '100%',
                overflow: 'hidden',
                position: 'relative',
                boxShadow: '0 20px 50px rgba(0, 0, 0, 0.8)'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                style={{
                  position: 'absolute',
                  top: '15px',
                  right: '15px',
                  background: 'rgba(16, 18, 20, 0.85)',
                  border: '1px solid #41464D',
                  color: '#fff',
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  zIndex: 10
                }}
              >
                <X size={20} />
              </button>

              <div style={{ maxHeight: '500px', overflow: 'hidden' }}>
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  style={{ width: '100%', height: 'auto', maxHeight: '500px', objectFit: 'cover' }}
                />
              </div>

              <div style={{ padding: '1.75rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <span style={{
                    color: '#F5B82E',
                    fontSize: '0.8rem',
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em'
                  }}>
                    {selectedImage.category}
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.85rem', color: '#B9BEC5' }}>
                    <MapPin size={14} color="#F5B82E" /> {selectedImage.location}
                  </span>
                </div>

                <h3 style={{ color: '#fff', fontSize: '1.4rem', fontWeight: 800, marginBottom: '0.5rem' }}>
                  {selectedImage.title}
                </h3>
                <p style={{ color: '#B9BEC5', fontSize: '0.95rem', marginBottom: '1.25rem', lineHeight: 1.55 }}>
                  {selectedImage.description}
                </p>

                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  <a href="tel:+919632090752" className="btn btn-primary btn-sm">
                    Call This Rig
                  </a>
                  <a
                    href={`https://wa.me/919632090752?text=Hi%20Car%20Services,%20I%20am%20inquiring%20about%20towing%20like%20${encodeURIComponent(selectedImage.title)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-whatsapp btn-sm"
                  >
                    WhatsApp Live Dispatch
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Hover Lift Keyframe Styles */}
      <style>{`
        .gallery-card-ivory:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 36px rgba(17, 28, 43, 0.12), 0 0 0 1px rgba(212, 160, 23, 0.5) !important;
        }
      `}</style>
    </section>
  );
}
