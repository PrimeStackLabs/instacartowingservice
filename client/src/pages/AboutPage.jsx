import React from 'react';
import { ShieldAlert, Award, Clock, Users, Truck, CheckCircle2, Phone, MessageSquare, Wrench } from 'lucide-react';
import EnquirySection from '../components/EnquirySection';

export default function AboutPage() {
  return (
    <div style={{ background: 'var(--bg-main)', minHeight: '100vh' }}>
      {/* Hero Banner */}
      <section style={{
        background: 'linear-gradient(rgba(16, 18, 20, 0.9), rgba(16, 18, 20, 0.96)), url("https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1800&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '2.75rem 0 2rem 0',
        borderBottom: '1px solid var(--border-color)',
        textAlign: 'center'
      }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          <span className="section-badge" style={{ marginBottom: '0.6rem' }}>
            <Award size={14} /> ABOUT OUR CAR SERVICES
          </span>
          <h1 style={{
            color: '#fff',
            fontSize: 'clamp(1.5rem, 2.6vw, 2.1rem)',
            fontWeight: 800,
            lineHeight: 1.25,
            marginBottom: '0.65rem'
          }}>
            Bengaluru's Most Trusted 24/7 Roadside Rescue
          </h1>
          <p style={{ maxWidth: '720px', margin: '0 auto', fontSize: '0.98rem', color: 'var(--text-secondary)', lineHeight: '1.55' }}>
            Founded with a singular mission: to provide rapid, honest, and damage-free vehicle recovery for motorists across Bengaluru, whatever the hour, vehicle, or condition.
          </p>
        </div>
      </section>

      {/* Story & Philosophy */}
      <section className="section-padding">
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3.5rem',
            alignItems: 'center',
            marginBottom: '5rem'
          }}>
            <div>
              <span className="section-badge" style={{ marginBottom: '0.75rem' }}>
                <Clock size={14} /> OUR CORE PURPOSE
              </span>
              <h2 style={{ color: '#fff', marginBottom: '1.25rem', lineHeight: '1.25' }}>
                When You're Stranded, Every Minute Counts.
              </h2>
              <p style={{ fontSize: '1.02rem', lineHeight: '1.7', color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
                A sudden car breakdown or highway accident is one of the most vulnerable situations a motorist can encounter. Unresponsive tow numbers, rude operators, surprise cash demands, and scraped bumpers are far too common in this industry.
              </p>
              <p style={{ fontSize: '1.02rem', lineHeight: '1.7', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                <strong>Car Services</strong> was built to rewrite that experience. Headquartered strategically in Hoskote with rapid response satellite units covering Whitefield, KR Puram, Indiranagar, and Electronic City, we combine certified hydraulic recovery equipment with upfront, transparent pricing and polite, trained drivers.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <CheckCircle2 size={18} color="var(--color-gold)" />
                  <span style={{ color: '#fff', fontSize: '0.95rem' }}>100% Upfront Pricing with No Surprise Surcharges</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <CheckCircle2 size={18} color="var(--color-gold)" />
                  <span style={{ color: '#fff', fontSize: '0.95rem' }}>Police-Verified, Background-Checked Tow Operators</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <CheckCircle2 size={18} color="var(--color-gold)" />
                  <span style={{ color: '#fff', fontSize: '0.95rem' }}>Air-Conditioned Passenger Cabins (Ride with us)</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <CheckCircle2 size={18} color="var(--color-gold)" />
                  <span style={{ color: '#fff', fontSize: '0.95rem' }}>Comprehensive In-Transit Marine Insurance</span>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="card-theme about-card-glow" style={{ overflow: 'hidden', borderRadius: 'var(--radius-lg)' }}>
              <img
                src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=1200&q=80"
                alt="Car Services Recovery Rig in action"
                style={{ width: '100%', height: '420px', objectFit: 'cover' }}
              />
              <div style={{ padding: '1.5rem', background: '#1c2128' }}>
                <div style={{ color: 'var(--color-gold)', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase' }}>
                  Central Depot Operations
                </div>
                <div style={{ color: '#fff', fontWeight: 600, fontSize: '1.05rem', marginTop: '0.2rem' }}>
                  Hoskote NH 75 Base Station & Quick Highway Patrol
                </div>
              </div>
            </div>
          </div>

          {/* Key Pillars */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.75rem',
            marginBottom: '4rem'
          }}>
            <div className="card-theme about-card-glow" style={{ padding: '2rem 1.75rem' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '10px', background: 'rgba(245, 184, 46, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-gold)', marginBottom: '1.25rem' }}>
                <Truck size={24} />
              </div>
              <h3 style={{ color: '#fff', fontSize: '1.25rem', marginBottom: '0.5rem' }}>
                Modern Recovery Fleet
              </h3>
              <p style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
                We maintain zero-degree hydraulic rollback flatbeds, wheel-lift undercarriage tow rigs, heavy winches, and auxiliary dolly systems suited for both supercars and heavy commercial tempos.
              </p>
            </div>

            <div className="card-theme about-card-glow" style={{ padding: '2rem 1.75rem' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '10px', background: 'rgba(245, 184, 46, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-gold)', marginBottom: '1.25rem' }}>
                <Wrench size={24} />
              </div>
              <h3 style={{ color: '#fff', fontSize: '1.25rem', marginBottom: '0.5rem' }}>
                Damage-Free Engineering
              </h3>
              <p style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
                We exclusively employ heavy-duty nylon over-the-wheel harness straps that secure only the tyre tread. Zero chains against body panels, bumpers, or oil pans.
              </p>
            </div>

            <div className="card-theme about-card-glow" style={{ padding: '2rem 1.75rem' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '10px', background: 'rgba(245, 184, 46, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-gold)', marginBottom: '1.25rem' }}>
                <Users size={24} />
              </div>
              <h3 style={{ color: '#fff', fontSize: '1.25rem', marginBottom: '0.5rem' }}>
                Professional Customer Care
              </h3>
              <p style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
                Our dispatchers guide you through emergency roadside precautions, coordinate insurance surveyor requirements, and keep you informed until your vehicle is at the workshop.
              </p>
            </div>
          </div>
        </div>
      </section>

      <EnquirySection />

      {/* Radiant Golden Glow Keyframes and Styles */}
      <style>{`
        .about-card-glow {
          background: #1c2128 !important;
          border: 1.5px solid rgba(245, 184, 46, 0.65) !important;
          border-radius: var(--radius-lg) !important;
          box-shadow: 
            0 0 18px 2px rgba(245, 184, 46, 0.25),
            0 0 35px 4px rgba(245, 184, 46, 0.12),
            0 10px 26px rgba(0, 0, 0, 0.6) !important;
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.3s !important;
          position: relative;
          overflow: hidden;
        }

        .about-card-glow:hover {
          border-color: #F5B82E !important;
          transform: translateY(-5px);
          box-shadow: 
            0 0 28px 4px rgba(245, 184, 46, 0.48),
            0 0 52px 8px rgba(245, 184, 46, 0.25),
            0 14px 34px rgba(0, 0, 0, 0.75) !important;
        }
      `}</style>
    </div>
  );
}

