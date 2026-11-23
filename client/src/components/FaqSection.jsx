import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { faqData } from '../data/faqData';

export default function FaqSection() {
  const [openId, setOpenId] = useState('faq-1');

  const toggleFaq = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="section-padding" style={{ background: 'var(--bg-main)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-badge">
            <HelpCircle size={14} /> CLARITY & TRANSPARENCY
          </span>
          <h2>Frequently Asked Questions</h2>
          <p>
            Everything you need to know about our towing equipment, arrival guarantees, rates, insurance coverage, and passenger safety.
          </p>
        </div>

        <div style={{ maxWidth: '840px', margin: '0 auto' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {faqData.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="card-theme"
                  style={{
                    border: isOpen ? '1px solid var(--color-gold)' : '1px solid var(--border-color)',
                    transition: 'border 0.2s ease',
                    overflow: 'hidden'
                  }}
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    style={{
                      width: '100%',
                      padding: '1.4rem 1.75rem',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      gap: '1rem',
                      textAlign: 'left',
                      color: isOpen ? 'var(--color-gold)' : '#fff',
                      fontSize: '1.05rem',
                      fontWeight: 700,
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer'
                    }}
                    aria-expanded={isOpen}
                  >
                    <span>{faq.question}</span>
                    <span style={{
                      color: isOpen ? 'var(--color-gold)' : 'var(--text-muted)',
                      flexShrink: 0
                    }}>
                      {isOpen ? <ChevronUp size={22} /> : <ChevronDown size={22} />}
                    </span>
                  </button>

                  {isOpen && (
                    <div style={{
                      padding: '0 1.75rem 1.5rem 1.75rem',
                      fontSize: '0.95rem',
                      lineHeight: '1.65',
                      color: 'var(--text-secondary)',
                      borderTop: '1px solid var(--border-color)',
                      paddingTop: '1rem',
                      animation: 'fadeIn 0.25s ease'
                    }}>
                      <div style={{
                        display: 'inline-block',
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        color: 'var(--color-gold-light)',
                        background: 'rgba(245, 184, 46, 0.12)',
                        padding: '0.2rem 0.55rem',
                        borderRadius: '4px',
                        marginBottom: '0.65rem'
                      }}>
                        {faq.category}
                      </div>
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

