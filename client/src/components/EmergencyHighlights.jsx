import React from 'react';

export default function EmergencyHighlights() {
  const topThree = [
    {
      title: "Truly round-the-clock",
      text: "Day, night, weekends and holidays. A real crew picks up every call."
    },
    {
      title: "Damage-free recovery rigs",
      text: "Hydraulic flatbeds and wheel-lifts matched to your vehicle."
    },
    {
      title: "100% upfront quote",
      text: "You hear the price before we dispatch, and it does not change."
    }
  ];

  const fullWidth = {
    title: "Rapid response",
    text: "Under 30 minutes across our main Bengaluru service corridors."
  };

  return (
    <section style={{
      background: '#F6F2E7',
      padding: '5rem 0',
      borderBottom: '1px solid #E5DFD1'
    }}>
      <div className="container">
        {/* Header Section matching Image */}
        <div style={{ maxWidth: '820px', marginBottom: '3.2rem' }}>
          <h2 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2.1rem, 4vw, 3.2rem)',
            fontWeight: 900,
            lineHeight: 1.12,
            letterSpacing: '-0.02em',
            textTransform: 'uppercase',
            color: '#12151A',
            marginBottom: '1.25rem'
          }}>
            BUILT FOR THE MOMENT YOUR<br />VEHICLE CAN'T MOVE
          </h2>
          <p style={{
            fontSize: '1.05rem',
            lineHeight: '1.65',
            color: '#525866',
            maxWidth: '720px'
          }}>
            When an unexpected breakdown, flat tyre or collision stops your journey, you need swift, competent and honest roadside recovery without complications.
          </p>
        </div>

        {/* Row 1: 3 Column Cards with Hover Effects */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1.75rem',
          marginBottom: '1.75rem'
        }} className="highlights-row-1">
          {topThree.map((card, idx) => (
            <div
              key={idx}
              className="cream-highlight-card"
              style={{
                background: '#FFFFFF',
                border: '1px solid rgba(0, 0, 0, 0.05)',
                borderTop: '4px solid #F5B82E',
                borderRadius: '18px',
                padding: '2.2rem 2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                cursor: 'pointer',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04), 0 1px 3px rgba(0, 0, 0, 0.02)'
              }}
            >
              <h3 className="cream-card-title" style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.38rem',
                fontWeight: 800,
                color: '#12151A',
                marginBottom: '0.75rem',
                transition: 'color 0.25s ease'
              }}>
                {card.title}
              </h3>
              <p style={{
                fontSize: '0.96rem',
                lineHeight: '1.6',
                color: '#5A6270',
                margin: 0
              }}>
                {card.text}
              </p>
            </div>
          ))}
        </div>

        {/* Row 2: Full Width Card with Hover Effects */}
        <div
          className="cream-highlight-card"
          style={{
            background: '#FFFFFF',
            border: '1px solid rgba(0, 0, 0, 0.05)',
            borderTop: '4px solid #F5B82E',
            borderRadius: '18px',
            padding: '2.2rem 2.2rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            cursor: 'pointer',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04), 0 1px 3px rgba(0, 0, 0, 0.02)'
          }}
        >
          <h3 className="cream-card-title" style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '1.38rem',
            fontWeight: 800,
            color: '#12151A',
            marginBottom: '0.75rem',
            transition: 'color 0.25s ease'
          }}>
            {fullWidth.title}
          </h3>
          <p style={{
            fontSize: '0.96rem',
            lineHeight: '1.6',
            color: '#5A6270',
            margin: 0
          }}>
            {fullWidth.text}
          </p>
        </div>
      </div>

      {/* Hover Effects & Responsive Styles */}
      <style>{`
        .cream-highlight-card:hover {
          transform: translateY(-8px);
          border-top: 4px solid #D97706 !important;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.09), 0 0 25px rgba(245, 184, 46, 0.2) !important;
        }

        .cream-highlight-card:hover .cream-card-title {
          color: #D97706 !important;
        }

        @media (max-width: 991px) {
          .highlights-row-1 {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
