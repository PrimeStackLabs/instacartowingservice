import React, { useState } from 'react';
import { X, Send, MapPin, Phone } from 'lucide-react';

// Official WhatsApp Icon Vector SVG
function WhatsAppIcon({ size = 32, color = '#ffffff' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: 'block' }}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.63C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.44 19.65L5.27 16.61L5.07 16.3C4.24 14.98 3.81 13.47 3.81 11.91C3.81 7.37 7.5 3.68 12.04 3.68C14.24 3.68 16.31 4.54 17.86 6.1C19.42 7.65 20.27 9.72 20.27 11.92C20.28 16.46 16.58 20.15 12.04 20.15ZM16.6 14.28C16.35 14.16 15.12 13.55 14.89 13.47C14.66 13.38 14.5 13.34 14.33 13.59C14.16 13.84 13.69 14.39 13.54 14.56C13.39 14.73 13.25 14.75 13 14.62C12.75 14.5 11.95 14.23 11 13.39C10.26 12.73 9.76 11.91 9.61 11.66C9.46 11.41 9.6 11.27 9.72 11.15C9.83 11.04 9.97 10.86 10.1 10.71C10.22 10.56 10.27 10.46 10.35 10.29C10.43 10.12 10.39 9.98 10.33 9.85C10.27 9.72 9.77 8.5 9.56 8C9.36 7.51 9.15 7.58 9 7.57C8.85 7.56 8.69 7.56 8.52 7.56C8.35 7.56 8.08 7.62 7.85 7.87C7.62 8.12 6.98 8.72 6.98 9.95C6.98 11.18 7.87 12.37 8 12.54C8.12 12.71 9.76 15.23 12.26 16.31C12.85 16.57 13.32 16.72 13.68 16.84C14.27 17.03 14.82 17 15.25 16.94C15.73 16.87 16.73 16.33 16.94 15.75C17.15 15.16 17.15 14.66 17.08 14.56C17.02 14.45 16.85 14.4 16.6 14.28Z"
      />
    </svg>
  );
}

export default function FloatingWhatsApp() {
  const [showPopup, setShowPopup] = useState(false);

  const quickOptions = [
    { label: "📍 Share Live Breakdown Location", text: "Hi Car Services, I am stranded and sharing my live location for quick rescue." },
    { label: "🚨 Emergency Car Towing Dispatch", text: "Hi Car Services, I need immediate emergency car towing assistance in Bengaluru." },
    { label: "💰 Inquire Price & ETA", text: "Hi Car Services, what is the price and arrival time for towing in Bengaluru?" },
    { label: "🏎️ Luxury / Sports Car Flatbed", text: "Hi Car Services, I need zero-degree flatbed towing for my luxury/sports car." }
  ];

  const handleOpenWhatsApp = (text) => {
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/918867666437?text=${encoded}`, '_blank');
    setShowPopup(false);
  };

  return (
    <div style={{
      position: 'fixed',
      bottom: '24px',
      right: '24px',
      zIndex: 9998,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end'
    }}>
      {/* Quick WhatsApp Action Popup Menu */}
      {showPopup && (
        <div style={{
          background: '#181c22',
          border: '1px solid #282e36',
          borderRadius: '16px',
          padding: '1.25rem',
          width: '310px',
          marginBottom: '14px',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.65), 0 0 20px rgba(37, 211, 102, 0.2)',
          animation: 'fadeIn 0.2s ease',
          position: 'relative'
        }}>
          {/* Header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.85rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <WhatsAppIcon size={18} color="#25D366" />
              <span style={{ color: '#fff', fontWeight: 700, fontSize: '0.9rem' }}>24/7 WhatsApp Dispatch</span>
            </div>
            <button
              onClick={() => setShowPopup(false)}
              style={{ background: 'none', border: 'none', color: '#888', cursor: 'pointer', padding: '2px' }}
              aria-label="Close WhatsApp Menu"
            >
              <X size={18} />
            </button>
          </div>

          <p style={{ color: 'var(--text-secondary)', fontSize: '0.82rem', marginBottom: '1rem', lineHeight: '1.4' }}>
            Tap an option below to immediately open WhatsApp with prefilled message to our Bengaluru dispatch:
          </p>

          {/* Quick Action Buttons */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
            {quickOptions.map((opt, i) => (
              <button
                key={i}
                onClick={() => handleOpenWhatsApp(opt.text)}
                style={{
                  background: '#21262d',
                  border: '1px solid #2f3640',
                  borderRadius: '10px',
                  padding: '0.65rem 0.85rem',
                  color: '#fff',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  textAlign: 'left',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#25D366';
                  e.currentTarget.style.color = '#101214';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#21262d';
                  e.currentTarget.style.color = '#ffffff';
                }}
              >
                <span>{opt.label}</span>
                <Send size={13} />
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Round Floating WhatsApp Button (Right Side) */}
      <div style={{ position: 'relative' }}>
        <button
          onClick={() => setShowPopup(!showPopup)}
          aria-label="Chat on WhatsApp"
          title="24/7 WhatsApp Rescue Dispatch"
          style={{
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            background: '#25D366',
            color: '#ffffff',
            border: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 8px 24px rgba(37, 211, 102, 0.45), 0 4px 12px rgba(0, 0, 0, 0.4)',
            transition: 'transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)',
            position: 'relative'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.08)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          {/* Subtle pulsating ring */}
          <span className="wa-pulse-ring"></span>
          <WhatsAppIcon size={33} color="#ffffff" />
        </button>

        {/* Small badge */}
        <span style={{
          position: 'absolute',
          top: '-4px',
          right: '-4px',
          background: '#F5B82E',
          color: '#101214',
          fontSize: '0.65rem',
          fontWeight: 800,
          padding: '0.15rem 0.4rem',
          borderRadius: '9999px',
          border: '2px solid #101214'
        }}>
          24/7
        </span>
      </div>

      <style>{`
        .wa-pulse-ring {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: rgba(37, 211, 102, 0.6);
          animation: waPulseRing 2s infinite;
          z-index: -1;
        }

        @keyframes waPulseRing {
          0% {
            transform: scale(0.95);
            opacity: 0.8;
          }
          70% {
            transform: scale(1.35);
            opacity: 0;
          }
          100% {
            transform: scale(1.35);
            opacity: 0;
          }
        }

        @media (max-width: 768px) {
          div[style*="bottom: 24px"][style*="right: 24px"] {
            bottom: 80px !important;
            right: 16px !important;
          }
        }
      `}</style>
    </div>
  );
}
