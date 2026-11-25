import React from 'react';
import {
  PhoneCall,
  Navigation,
  ShieldCheck,
  MapPin,
  CheckCircle,
  Award,
  ShieldAlert,
  CheckCircle2,
  Truck,
  Users,
  FileText,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HowItWorks() {
  // Part 1: 4-Step Recovery Process
  const steps = [
    {
      step: "01",
      icon: PhoneCall,
      title: "Call or WhatsApp",
      description: "Dial our 24/7 hotline (+91 96320 90752) or share your live WhatsApp location pin along with vehicle model."
    },
    {
      step: "02",
      icon: Navigation,
      title: "We Locate You Fast",
      description: "Our nearest patrol truck is instantly dispatched to your GPS coordinate with an ETA under 30 minutes."
    },
    {
      step: "03",
      icon: ShieldCheck,
      title: "Safe Damage-Free Hook-Up",
      description: "Our certified operator secures your car using hydraulic tilt flatbeds and protective wheel basket straps."
    },
    {
      step: "04",
      icon: MapPin,
      title: "Delivered On Time",
      description: "Direct transport to your authorized dealership, local garage, or doorstep with zero transit stress."
    }
  ];

  // Part 2: The Gold Standard / Why Bengaluru Trusts Us
  const standards = [
    {
      icon: Truck,
      title: "Fleet Built for Every Vehicle Type",
      description: "From low ground-clearance supercars and all-wheel-drive luxury SUVs to commercial delivery tempos and heavy commercial trucks—our rigs handle all tonnages."
    },
    {
      icon: Users,
      title: "Certified & Background-Verified Crews",
      description: "Every tow operator undergoes rigorous training on transmission safety, neutral bypasses, air-suspension lockouts, and courteous roadside etiquette."
    },
    {
      icon: Award,
      title: "Damage-Free Guarantee",
      description: "We use over-the-wheel nylon basket straps that touch only rubber tires. Zero chains against chassis members, avoiding structural stress or cosmetic damage."
    },
    {
      icon: FileText,
      title: "Instant GST Invoices & Insurance Support",
      description: "Receive digital GST invoices and on-scene incident photos on WhatsApp to facilitate smooth, rapid reimbursement with your motor insurance company."
    },
    {
      icon: ShieldAlert,
      title: "Underground Basement Extraction",
      description: "Standard flatbeds can't enter 2.1-meter low-ceiling basement parking structures. Our specialized wheel-lift rigs handle basement stalls effortlessly."
    },
    {
      icon: CheckCircle2,
      title: "Passenger Cabin Accommodation",
      description: "Never worry about finding an auto or cab late at night in a desolate area. Up to 2 passengers can travel securely in our air-conditioned truck cabin."
    }
  ];

  return (
    <section id="how-it-works" style={{
      background: 'radial-gradient(ellipse at 50% 15%, #FAF6EE 0%, #F8F3E9 100%)',
      padding: '5rem 0 4.5rem 0',
      borderTop: '1px solid #EAE2D5',
      borderBottom: '1px solid #EAE2D5',
      position: 'relative'
    }}>
      <div className="container">

        {/* ========================================================
            PART 1: HOW OUR TOWING SERVICE WORKS
           ======================================================== */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3.25rem auto' }}>
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
            <CheckCircle size={14} color="#9E6D00" />
            <span>STREAMLINED 4-STEP RECOVERY</span>
          </div>

          <h2 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2rem, 3.8vw, 2.7rem)',
            fontWeight: 900,
            lineHeight: 1.18,
            letterSpacing: '-0.02em',
            textTransform: 'uppercase',
            color: '#111C2B',
            marginBottom: '0.85rem'
          }}>
            How Our Towing Service Works
          </h2>

          <p style={{
            fontSize: '1.05rem',
            lineHeight: '1.65',
            color: '#555E6D',
            margin: 0
          }}>
            A breakdown is stressful enough. Here is exactly what happens from the moment you dial our 24/7 dispatch line until your vehicle is safely delivered.
          </p>
        </div>

        {/* 4 Steps Grid: Pure White Cards with Amber Top Accents */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1.5rem',
          marginBottom: '3rem'
        }}>
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="step-card-cream"
                style={{
                  background: '#FFFFFF',
                  border: '1px solid rgba(212, 160, 23, 0.28)',
                  borderTop: '3.5px solid #D4A017',
                  borderRadius: '16px',
                  padding: '2.2rem 1.7rem',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.25rem',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  boxShadow: '0 4px 20px rgba(17, 28, 43, 0.05), 0 1px 3px rgba(0, 0, 0, 0.02)',
                  cursor: 'pointer'
                }}
              >
                {/* Step Number */}
                <div style={{
                  position: 'absolute',
                  top: '16px',
                  right: '20px',
                  fontFamily: 'var(--font-heading)',
                  fontSize: '2.5rem',
                  fontWeight: 900,
                  color: 'rgba(212, 160, 23, 0.2)',
                  userSelect: 'none'
                }}>
                  {item.step}
                </div>

                {/* Step Icon Container */}
                <div style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '12px',
                  background: 'rgba(212, 160, 23, 0.12)',
                  border: '1px solid rgba(212, 160, 23, 0.35)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#B37E00',
                  flexShrink: 0
                }}>
                  <Icon size={26} strokeWidth={2.4} />
                </div>

                <div>
                  <h3 style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.2rem',
                    fontWeight: 800,
                    color: '#111C2B',
                    marginBottom: '0.55rem'
                  }}>
                    {item.title}
                  </h3>
                  <p style={{
                    fontSize: '0.92rem',
                    lineHeight: '1.6',
                    color: '#525A68',
                    margin: 0
                  }}>
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Immediate Recovery Callout Strip */}
        <div style={{
          background: '#FFFFFF',
          border: '1px solid rgba(212, 160, 23, 0.28)',
          borderTop: '3.5px solid #D4A017',
          borderRadius: '16px',
          padding: '1.5rem 2.2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '1.5rem',
          boxShadow: '0 6px 24px rgba(17, 28, 43, 0.05)'
        }}>
          <span style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '1.08rem',
            color: '#111C2B',
            fontWeight: 800
          }}>
            Need immediate recovery right now?
          </span>
          <a
            href="tel:+919632090752"
            className="btn btn-primary"
            style={{
              padding: '0.72rem 1.6rem',
              borderRadius: '9999px',
              fontSize: '0.95rem',
              fontWeight: 800,
              gap: '0.65rem'
            }}
          >
            <PhoneCall size={17} /> Dial Emergency Hotline: +91 96320 90752
          </a>
        </div>

        {/* Seamless Transition to Part 2 */}
        <div style={{ marginTop: '2.5rem' }}>

          {/* ========================================================
              PART 2: THE GOLD STANDARD IN ROADSIDE ASSISTANCE
             ======================================================== */}
          <div style={{ textAlign: 'center', maxWidth: '740px', margin: '0 auto 2.75rem auto' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
              background: 'rgba(212, 160, 23, 0.12)',
              border: '1.5px solid #D4A017',
              borderRadius: '9999px',
              padding: '0.35rem 1.15rem',
              fontSize: '0.75rem',
              fontWeight: 800,
              letterSpacing: '0.08em',
              color: '#9E6D00',
              textTransform: 'uppercase',
              marginBottom: '0.85rem'
            }}>
              <Award size={14} color="#9E6D00" />
              <span>WHY BENGALURU TRUSTS US</span>
            </div>

            <h2 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.9rem, 3.5vw, 2.5rem)',
              fontWeight: 900,
              lineHeight: 1.18,
              letterSpacing: '-0.02em',
              color: '#111C2B',
              marginBottom: '0.75rem'
            }}>
              The Gold Standard in Roadside Assistance
            </h2>

            <p style={{
              fontSize: '0.98rem',
              lineHeight: '1.6',
              color: '#555E6D',
              margin: 0
            }}>
              When other towing operators don't pick up or show up without proper equipment, our team provides disciplined, professional automotive recovery.
            </p>
          </div>

          {/* 6 Feature Standards Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
            gap: '1.25rem',
            marginBottom: '2.5rem'
          }}>
            {standards.map((pt, idx) => {
              const Icon = pt.icon;

              return (
                <div
                  key={idx}
                  className="step-card-cream"
                  style={{
                    background: '#FFFFFF',
                    border: '1px solid rgba(212, 160, 23, 0.28)',
                    borderTop: '3.5px solid #D4A017',
                    borderRadius: '16px',
                    padding: '1.45rem 1.45rem',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '1.05rem',
                    position: 'relative',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    cursor: 'pointer',
                    boxShadow: '0 4px 20px rgba(17, 28, 43, 0.05), 0 1px 3px rgba(0, 0, 0, 0.02)'
                  }}
                >
                  {/* Elegant Gold Icon Container */}
                  <div style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '11px',
                    background: 'rgba(212, 160, 23, 0.12)',
                    border: '1px solid rgba(212, 160, 23, 0.35)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#B37E00',
                    flexShrink: 0
                  }}>
                    <Icon size={22} strokeWidth={2.3} />
                  </div>

                  <div>
                    <h3 style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.08rem',
                      fontWeight: 800,
                      color: '#111C2B',
                      marginBottom: '0.35rem',
                      lineHeight: 1.25
                    }}>
                      {pt.title}
                    </h3>
                    <p style={{
                      fontSize: '0.86rem',
                      lineHeight: '1.55',
                      color: '#525A68',
                      margin: 0
                    }}>
                      {pt.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Dark Navy CTA Banner */}
          <div style={{
            background: 'linear-gradient(135deg, #111C2B 0%, #162438 100%)',
            border: '1px solid rgba(245, 184, 46, 0.35)',
            borderRadius: '16px',
            padding: '1.6rem 2.2rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1.25rem',
            boxShadow: '0 12px 32px rgba(17, 28, 43, 0.18)'
          }}>
            <div>
              <h3 style={{
                fontFamily: 'var(--font-heading)',
                color: '#FFFFFF',
                fontSize: '1.2rem',
                fontWeight: 800,
                marginBottom: '0.25rem'
              }}>
                Want to learn more about our equipment and fleet standards?
              </h3>
              <p style={{
                fontSize: '0.88rem',
                color: '#A7B2C2',
                margin: 0
              }}>
                Discover our story, fleet configurations, and transparent operating principles.
              </p>
            </div>

            <Link
              to="/about"
              style={{
                background: '#F5B82E',
                color: '#111C2B',
                fontWeight: 800,
                fontSize: '0.88rem',
                padding: '0.7rem 1.45rem',
                borderRadius: '9999px',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.55rem',
                boxShadow: '0 4px 16px rgba(245, 184, 46, 0.35)',
                transition: 'all 0.25s ease',
                flexShrink: 0
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#FFD166';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 22px rgba(245, 184, 46, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#F5B82E';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(245, 184, 46, 0.35)';
              }}
            >
              <span>Learn About Car Services</span>
              <ArrowRight size={15} strokeWidth={2.4} />
            </Link>
          </div>
        </div>
      </div>

      {/* Hover Lift Keyframe Styles */}
      <style>{`
        .step-card-cream:hover {
          transform: translateY(-5px);
          box-shadow: 0 14px 30px rgba(17, 28, 43, 0.09), 0 0 0 1px rgba(212, 160, 23, 0.45) !important;
        }
      `}</style>
    </section>
  );
}
