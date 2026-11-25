import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Sparkles, Phone, MessageSquare, RotateCcw, AlertTriangle, ShieldCheck, Clock } from 'lucide-react';

// Premium Car-Shaped Chatbot Icon: Sleek black car silhouette with a chat bubble & Insta Car Services champagne-gold accents
function CarChatbotIcon({ size = 32, carColor = '#101214', accentColor = '#F5B82E' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: 'block' }}
    >
      {/* Sleek Chat Bubble above Car */}
      <path
        d="M17.5 4.5C17.5 3.12 18.62 2 20 2H28C29.38 2 30.5 3.12 30.5 4.5V9C30.5 10.38 29.38 11.5 28 11.5H25.5L23 14.2L23.4 11.5H20C18.62 11.5 17.5 10.38 17.5 9V4.5Z"
        fill={carColor}
      />
      {/* Chat Speech Dots inside Bubble */}
      <circle cx="21.5" cy="6.75" r="1.1" fill={accentColor} />
      <circle cx="24" cy="6.75" r="1.1" fill={accentColor} />
      <circle cx="26.5" cy="6.75" r="1.1" fill={accentColor} />

      {/* Sleek Aerodynamic Sports Car Silhouette */}
      <path
        d="M2.5 23C2.5 22.1 3.1 21.3 4 21.1L7.5 20.3C8.2 18.2 10.1 15.8 13.5 15C16.8 14.2 23 14.5 26.2 16.8L29.5 19.5C30.4 20.2 31 21.3 31 22.5V25C31 25.6 30.6 26 30 26H28C28 24.3 26.7 23 25 23C23.3 23 22 24.3 22 26H12C12 24.3 10.7 23 9 23C7.3 23 6 24.3 6 26H3.5C2.9 26 2.5 25.6 2.5 25V23Z"
        fill={carColor}
      />

      {/* Sleek Golden Tinted Windshield / Glass */}
      <path
        d="M13.8 16.5C11.6 17.1 10.3 18.6 9.8 20.2H23.8L22.2 17.6C20.8 16.8 16.5 16 13.8 16.5Z"
        fill={accentColor}
      />
      {/* Window Pillar divider */}
      <line x1="16.5" y1="16.3" x2="16" y2="20.2" stroke={carColor} strokeWidth="1.2" />

      {/* Wheels with Two-Tone Detailing */}
      <circle cx="9" cy="25.5" r="2.8" fill={carColor} />
      <circle cx="9" cy="25.5" r="1.5" fill={accentColor} />
      <circle cx="9" cy="25.5" r="0.6" fill={carColor} />

      <circle cx="25" cy="25.5" r="2.8" fill={carColor} />
      <circle cx="25" cy="25.5" r="1.5" fill={accentColor} />
      <circle cx="25" cy="25.5" r="0.6" fill={carColor} />

      {/* Front Headlight Accent */}
      <path
        d="M29.5 21.8L31.8 22.5V23.8L29.5 23.2V21.8Z"
        fill="#FFF2B2"
      />
    </svg>
  );
}

export default function AiChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'ai',
      text: "Hello! 👋 I'm your 24/7 Car Services AI Assistant.\n\nAre you stranded with a breakdown, or do you need help with towing, pricing, or arrival times across Bengaluru?",
      time: 'Just now',
      showActions: true
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const quickPrompts = [
    "🚨 Emergency breakdown right now!",
    "⏱️ How fast can a truck reach me?",
    "💰 How much does towing cost?",
    "📍 Do you cover Yeshwanthpur & Whitefield?",
    "🔋 Dead battery or tyre puncture",
    "🏎️ Luxury / Sports car towing"
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const generateAiReply = (userQuery) => {
    const q = userQuery.toLowerCase();

    if (q.includes('emergency') || q.includes('breakdown') || q.includes('stuck') || q.includes('accident') || q.includes('help')) {
      return {
        text: "🚨 **Immediate Safety Steps & Fast Dispatch:**\n1. Turn on your vehicle's hazard/warning flashers immediately.\n2. Move safely behind the highway guard rail or footpath.\n3. Our closest rescue truck in Bengaluru can be dispatched in under 30 minutes.\n\nTap below to speak directly with our dispatch officer or send your live GPS pin on WhatsApp:",
        showActions: true
      };
    }

    if (q.includes('fast') || q.includes('reach') || q.includes('eta') || q.includes('time') || q.includes('minutes') || q.includes('arrival')) {
      return {
        text: "⏱️ **Average Arrival Time:**\n• **Primary Corridors** (Nayandahalli, Whitefield, KR Puram, Indiranagar, Jalahalli, Yeshwanthpur): **15 – 25 Minutes**\n• **Mid-Range / ORR** (Koramangala, Hebbal, Bellandur, HSR Layout): **20 – 30 Minutes**\n• **Extended Highway & Airport Road** (Nelamangala, Kengeri, Mysore Road, Yelahanka, Devanahalli): **25 – 40 Minutes**\n\nWe have trucks on live standby across Bengaluru 24/7/365.",
        showActions: true
      };
    }

    if (q.includes('cost') || q.includes('price') || q.includes('rate') || q.includes('charge') || q.includes('pricing') || q.includes('fare')) {
      return {
        text: "💰 **100% Transparent Upfront Pricing:**\n• Standard base hook-up fee + clear per-kilometer rate.\n• We confirm the exact estimate on your call or WhatsApp before our driver begins moving.\n• **Zero hidden fees**, no surprise surge charges, and official GST invoices provided for insurance reimbursement.",
        showActions: true
      };
    }

    if (q.includes('location') || q.includes('area') || q.includes('whitefield') || q.includes('bengaluru') || q.includes('bangalore') || q.includes('nelamangala') || q.includes('yelahanka') || q.includes('kengeri') || q.includes('yeshwanthpur')) {
      return {
        text: "📍 **Complete Bengaluru Coverage:**\n• **West & North-West:** Nayandahalli, Jalahalli, Yeshwanthpur, Nelamangala, Kengeri, Mysore Road\n• **East Hub:** Whitefield, Kadugodi, Hoodi, ITPL\n• **Central/ORR:** KR Puram, Tin Factory, Indiranagar, Koramangala\n• **North:** Devanahalli Airport Road (NH 44), Yelahanka, Hebbal\n• **South/Expressways:** Bellandur, Sarjapur, NICE Road",
        showActions: true
      };
    }

    if (q.includes('battery') || q.includes('jump') || q.includes('tyre') || q.includes('puncture') || q.includes('fuel')) {
      return {
        text: "🔋 **On-Spot Roadside Car Services (No Tow Needed):**\n• **Jump-Start:** Heavy-duty booster packs for all 12V/24V cars.\n• **Flat Tyre Support:** Spare wheel installation & emergency inflation.\n• **Emergency Fuel Delivery:** 5 liters of petrol/diesel brought to your vehicle.\n\nOur service vans arrive quickly to get you back on the road without full tow charges.",
        showActions: true
      };
    }

    if (q.includes('luxury') || q.includes('sports') || q.includes('supercar') || q.includes('bmw') || q.includes('audi') || q.includes('mercedes') || q.includes('porsche')) {
      return {
        text: "🏎️ **Zero-Scratch Luxury & Sports Car Flatbeds:**\n• Extreme low-approach angle hydraulic rollback decks (under 5 degrees).\n• High-strength synthetic over-the-wheel basket straps (zero chains on chassis/bumpers).\n• AWD and air-suspension safe transport.\n• Comprehensive marine in-transit insurance.",
        showActions: true
      };
    }

    // Default response
    return {
      text: "Thanks for asking! We provide 24/7 Car Services, flatbed towing, accident recovery, and roadside assistance across Bengaluru with an average arrival under 30 minutes.\n\nWould you like an instant upfront quote or do you need emergency dispatch right away?",
      showActions: true
    };
  };

  const handleSend = (textToSend) => {
    const query = textToSend || input;
    if (!query.trim()) return;

    const userMsg = {
      id: Date.now(),
      sender: 'user',
      text: query,
      time: 'Just now'
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const replyData = generateAiReply(query);
      const aiMsg = {
        id: Date.now() + 1,
        sender: 'ai',
        text: replyData.text,
        time: 'Just now',
        showActions: replyData.showActions
      };
      setMessages(prev => [...prev, aiMsg]);
      setIsTyping(false);
    }, 600);
  };

  const handleClear = () => {
    setMessages([
      {
        id: 1,
        sender: 'ai',
        text: "Hello! 👋 I'm your 24/7 Car Services AI Assistant.\n\nAre you stranded with a breakdown, or do you need help with towing, pricing, or arrival times across Bengaluru?",
        time: 'Just now',
        showActions: true
      }
    ]);
  };

  return (
    <div style={{
      position: 'fixed',
      bottom: '24px',
      left: '24px',
      zIndex: 9998,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start'
    }}>
      {/* AI Chat Window Modal */}
      {isOpen && (
        <div style={{
          background: '#14181c',
          border: '1px solid #2d333b',
          borderRadius: '20px',
          width: '360px',
          maxWidth: 'calc(100vw - 32px)',
          height: '520px',
          marginBottom: '14px',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.8), 0 0 35px rgba(245, 184, 46, 0.15)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          animation: 'fadeIn 0.25s ease'
        }}>
          {/* Header */}
          <div style={{
            background: '#1c2026',
            borderBottom: '1px solid #2d333b',
            padding: '14px 18px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{
                width: '38px',
                height: '38px',
                borderRadius: '10px',
                background: 'linear-gradient(135deg, #FAD961, #F5B82E)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#101214',
                boxShadow: '0 2px 10px rgba(245, 184, 46, 0.35)'
              }}>
                <CarChatbotIcon size={25} carColor="#101214" accentColor="#F5B82E" />
              </div>
              <div>
                <div style={{ color: '#ffffff', fontWeight: 800, fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  Car Services AI
                  <Sparkles size={13} color="var(--color-gold)" />
                </div>
                <div style={{ color: '#22c55e', fontSize: '0.72rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#22c55e', display: 'inline-block' }}></span>
                  24/7 AI Online Dispatch
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <button
                onClick={handleClear}
                title="Reset Conversation"
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#8f96a0',
                  cursor: 'pointer',
                  padding: '6px',
                  borderRadius: '6px'
                }}
              >
                <RotateCcw size={16} />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                title="Close AI Assistant"
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#8f96a0',
                  cursor: 'pointer',
                  padding: '6px',
                  borderRadius: '6px'
                }}
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Messages Body */}
          <div style={{
            flex: 1,
            overflowY: 'auto',
            padding: '14px',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px'
          }}>
            {messages.map((m) => {
              const isAi = m.sender === 'ai';
              return (
                <div
                  key={m.id}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: isAi ? 'flex-start' : 'flex-end'
                  }}
                >
                  <div style={{
                    maxWidth: '85%',
                    padding: '11px 14px',
                    borderRadius: isAi ? '16px 16px 16px 4px' : '16px 16px 4px 16px',
                    background: isAi ? '#21262e' : 'var(--color-gold)',
                    color: isAi ? '#e1e5eb' : '#101214',
                    fontSize: '0.88rem',
                    lineHeight: '1.5',
                    border: isAi ? '1px solid #2f3640' : 'none',
                    fontWeight: isAi ? 400 : 600,
                    whiteSpace: 'pre-line'
                  }}>
                    {m.text}

                    {/* Action buttons inside AI reply */}
                    {isAi && m.showActions && (
                      <div style={{ display: 'flex', gap: '6px', marginTop: '10px', flexWrap: 'wrap' }}>
                        <a
                          href="tel:+919632090752"
                          className="btn btn-primary"
                          style={{
                            padding: '0.4rem 0.75rem',
                            fontSize: '0.75rem',
                            fontWeight: 700,
                            borderRadius: '6px'
                          }}
                        >
                          <Phone size={12} /> Call: 96320 90752
                        </a>
                        <a
                          href="https://wa.me/919632090752?text=Hi%20Car%20Services,%20I%20need%20assistance%20in%20Bengaluru."
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn"
                          style={{
                            background: '#22C55E',
                            color: '#ffffff',
                            padding: '0.4rem 0.75rem',
                            fontSize: '0.75rem',
                            fontWeight: 700,
                            borderRadius: '6px'
                          }}
                        >
                          <MessageSquare size={12} /> WhatsApp
                        </a>
                      </div>
                    )}
                  </div>
                  <span style={{ fontSize: '0.68rem', color: '#68707c', marginTop: '3px', padding: '0 4px' }}>
                    {m.time}
                  </span>
                </div>
              );
            })}

            {isTyping && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--color-gold)', fontSize: '0.8rem', padding: '6px 12px' }}>
                <span className="pulse-dot"></span>
                <span>AI Assistant is typing...</span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompts Chips */}
          <div style={{
            padding: '8px 12px',
            background: '#181c22',
            borderTop: '1px solid #282e36',
            display: 'flex',
            gap: '6px',
            overflowX: 'auto',
            whiteSpace: 'nowrap'
          }}>
            {quickPrompts.map((p, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(p)}
                style={{
                  background: '#21262d',
                  border: '1px solid #2f3640',
                  borderRadius: '9999px',
                  padding: '4px 10px',
                  fontSize: '0.72rem',
                  fontWeight: 600,
                  color: '#c2c8d2',
                  cursor: 'pointer',
                  flexShrink: 0
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-gold)';
                  e.currentTarget.style.color = '#fff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#2f3640';
                  e.currentTarget.style.color = '#c2c8d2';
                }}
              >
                {p}
              </button>
            ))}
          </div>

          {/* Input Box */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            style={{
              padding: '10px 14px',
              background: '#1c2026',
              borderTop: '1px solid #282e36',
              display: 'flex',
              gap: '8px',
              alignItems: 'center'
            }}
          >
            <input
              type="text"
              placeholder="Ask about car services, pricing, ETA..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              style={{
                flex: 1,
                background: '#14181c',
                border: '1px solid #303742',
                borderRadius: '8px',
                padding: '9px 12px',
                color: '#ffffff',
                fontSize: '0.88rem',
                outline: 'none'
              }}
              onFocus={(e) => e.target.style.borderColor = 'var(--color-gold)'}
              onBlur={(e) => e.target.style.borderColor = '#303742'}
            />
            <button
              type="submit"
              disabled={!input.trim()}
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '8px',
                background: input.trim() ? 'var(--color-gold)' : '#2a3038',
                color: input.trim() ? '#101214' : '#68707c',
                border: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: input.trim() ? 'pointer' : 'default',
                transition: 'all 0.2s ease',
                flexShrink: 0
              }}
            >
              <Send size={16} />
            </button>
          </form>
        </div>
      )}

      {/* Round Floating AI Chatbot Button (Left Side) */}
      <div style={{ position: 'relative' }}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Open 24/7 AI Car Assistant"
          title="24/7 Insta Car Services AI Assistant"
          style={{
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #FAD961 0%, #F5B82E 50%, #D49B1E 100%)',
            color: '#101214',
            border: '2px solid #FFE68C',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 8px 24px rgba(245, 184, 46, 0.48), 0 4px 12px rgba(0, 0, 0, 0.4)',
            transition: 'transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.25s ease',
            position: 'relative'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.08)';
            e.currentTarget.style.boxShadow = '0 10px 28px rgba(245, 184, 46, 0.6), 0 6px 16px rgba(0, 0, 0, 0.5)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = '0 8px 24px rgba(245, 184, 46, 0.48), 0 4px 12px rgba(0, 0, 0, 0.4)';
          }}
        >
          {/* Subtle pulsating gold ring */}
          <span className="ai-pulse-ring"></span>
          <CarChatbotIcon size={33} carColor="#101214" accentColor="#F5B82E" />
        </button>

        {/* Small "AI" badge */}
        <span style={{
          position: 'absolute',
          top: '-4px',
          right: '-4px',
          background: '#101214',
          color: '#F5B82E',
          fontSize: '0.65rem',
          fontWeight: 800,
          padding: '0.15rem 0.45rem',
          borderRadius: '9999px',
          border: '1.5px solid #F5B82E',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.6)',
          letterSpacing: '0.04em',
          pointerEvents: 'none'
        }}>
          AI
        </span>
      </div>

      <style>{`
        .ai-pulse-ring {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: rgba(245, 184, 46, 0.6);
          animation: aiPulseRing 2s infinite;
          z-index: -1;
        }

        @keyframes aiPulseRing {
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
          div[style*="bottom: 24px"][style*="left: 24px"] {
            bottom: 80px !important;
            left: 16px !important;
          }
        }
      `}</style>
    </div>
  );
}
