import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Phone, Menu, X, ChevronDown, Wrench, Shield, Car, AlertTriangle, ArrowRight, Truck, Clock } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const dropdownTimeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on page change
  useEffect(() => {
    setIsOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);

  const handleDropdownEnter = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setServicesOpen(true);
  };

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setServicesOpen(false);
    }, 180);
  };

  // Nav fields exactly matching the user's uploaded reference:
  // Home | Services ˅ | Locations | About Us | Gallery | Contact
  const navItems = [
    { name: 'Home', path: '/' },
    {
      name: 'Services',
      path: '/services',
      hasDropdown: true
    },
    { name: 'Locations', path: '/locations' },
    { name: 'About Us', path: '/about' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' }
  ];

  // Services matching Image 1: Selected Categories
  const featuredServices = [
    { title: 'Sports Car Towing Services', path: '/services/sports-car-towing', icon: Car },
    { title: 'Three Wheeler Towing Services', path: '/services/three-wheeler-towing', icon: Truck },
    { title: '24 Hours Car Towing Services', path: '/services/24-hours-car-towing', icon: Clock },
    { title: 'Automobile Towing Services', path: '/services/automobile-towing', icon: Wrench },
    { title: 'Wheel Lift Towing Services', path: '/services/wheel-lift-towing', icon: Shield },
    { title: 'Car Towing Services For Luxury Car', path: '/services/luxury-car-towing', icon: Shield },
    { title: 'Accident Vehicle Towing Services', path: '/services/accident-vehicle-towing', icon: AlertTriangle },
    { title: 'Four Wheeler Towing Services', path: '/services/four-wheeler-towing', icon: Car },
    { title: 'Car Towing Services', path: '/services/car-towing', icon: Car },
    { title: 'Towing Services', path: '/services/towing-services', icon: Truck },
    { title: '24 Hours Towing Services', path: '/services/24-hours-towing', icon: Clock }
  ];

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      background: scrolled ? 'rgba(16, 18, 20, 0.98)' : '#101214',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid #23272d',
      transition: 'all 0.25s ease'
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '74px'
      }}>
        {/* Brand Logo - Official Insta Car Services Logo */}
        <Link
          to="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none',
            flexShrink: 0
          }}
        >
          <img
            src="/assets/logo1.png"
            alt="Insta Car Services - Towing & Roadside Assistance"
            className="navbar-brand-logo"
            style={{
              height: '64px',
              width: 'auto',
              maxWidth: '300px',
              objectFit: 'contain',
              display: 'block'
            }}
          />
        </Link>

        {/* Desktop Nav Fields - Matches Reference Image Exactly */}
        <nav style={{
          display: 'flex',
          alignItems: 'center',
          gap: 'clamp(1.2rem, 1.8vw, 2.2rem)'
        }} className="desktop-nav">
          {navItems.map((item) => {
            const isHome = item.path === '/';
            const isActive = isHome
              ? location.pathname === '/'
              : location.pathname.startsWith(item.path);

            if (item.hasDropdown) {
              return (
                <div
                  key={item.name}
                  style={{ position: 'relative' }}
                  onMouseEnter={handleDropdownEnter}
                  onMouseLeave={handleDropdownLeave}
                >
                  <Link
                    to={item.path}
                    onClick={() => setServicesOpen(false)}
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '0.96rem',
                      fontWeight: 700,
                      color: isActive ? '#F5B82E' : '#ffffff',
                      textDecoration: 'none',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      padding: '0.5rem 0',
                      position: 'relative',
                      transition: 'color 0.2s ease',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) e.currentTarget.style.color = '#F5B82E';
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) e.currentTarget.style.color = '#ffffff';
                    }}
                  >
                    <span>{item.name}</span>
                    <ChevronDown
                      size={14}
                      strokeWidth={2.6}
                      style={{
                        transform: servicesOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.2s ease',
                        color: isActive || servicesOpen ? '#F5B82E' : '#ffffff'
                      }}
                    />
                    {isActive && (
                      <span style={{
                        position: 'absolute',
                        bottom: '0',
                        left: 0,
                        right: 0,
                        height: '2.5px',
                        background: '#F5B82E',
                        borderRadius: '2px'
                      }}></span>
                    )}
                  </Link>

                  {/* Services Dropdown Menu */}
                  {servicesOpen && (
                    <div
                      style={{
                        position: 'absolute',
                        top: '100%',
                        left: '-20px',
                        minWidth: '315px',
                        maxHeight: '460px',
                        overflowY: 'auto',
                        background: '#16191f',
                        border: '1px solid #2d333d',
                        borderRadius: '12px',
                        padding: '0.65rem',
                        boxShadow: '0 14px 40px rgba(0, 0, 0, 0.75), 0 0 15px rgba(245, 184, 46, 0.1)',
                        zIndex: 1100,
                        animation: 'fadeIn 0.2s ease'
                      }}
                    >
                      <div style={{
                        fontSize: '0.72rem',
                        fontWeight: 800,
                        letterSpacing: '0.08em',
                        color: '#F5B82E',
                        textTransform: 'uppercase',
                        padding: '0.35rem 0.65rem 0.45rem 0.65rem',
                        borderBottom: '1px solid #242932',
                        marginBottom: '0.35rem'
                      }}>
                        Towing & Recovery Services
                      </div>

                      {featuredServices.map((service, idx) => {
                        const Icon = service.icon;
                        return (
                          <Link
                            key={idx}
                            to={service.path}
                            onClick={() => setServicesOpen(false)}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '0.65rem',
                              padding: '0.48rem 0.65rem',
                              borderRadius: '8px',
                              color: '#dbe0e6',
                              textDecoration: 'none',
                              fontSize: '0.86rem',
                              fontWeight: 600,
                              transition: 'all 0.15s ease'
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.background = 'rgba(245, 184, 46, 0.12)';
                              e.currentTarget.style.color = '#F5B82E';
                              e.currentTarget.style.transform = 'translateX(4px)';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.background = 'transparent';
                              e.currentTarget.style.color = '#dbe0e6';
                              e.currentTarget.style.transform = 'translateX(0px)';
                            }}
                          >
                            <Icon size={15} color="#F5B82E" style={{ flexShrink: 0 }} />
                            <span>{service.title}</span>
                          </Link>
                        );
                      })}

                      <div style={{ borderTop: '1px solid #242932', marginTop: '0.4rem', paddingTop: '0.4rem' }}>
                        <Link
                          to="/services"
                          onClick={() => setServicesOpen(false)}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            padding: '0.55rem 0.65rem',
                            borderRadius: '8px',
                            background: 'rgba(245, 184, 46, 0.08)',
                            color: '#F5B82E',
                            textDecoration: 'none',
                            fontSize: '0.85rem',
                            fontWeight: 700
                          }}
                        >
                          <span>Explore All 11 Services</span>
                          <ArrowRight size={14} />
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={item.name}
                to={item.path}
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '0.96rem',
                  fontWeight: 700,
                  color: isActive ? '#F5B82E' : '#ffffff',
                  textDecoration: 'none',
                  padding: '0.5rem 0',
                  position: 'relative',
                  transition: 'color 0.2s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  if (!isActive) e.currentTarget.style.color = '#F5B82E';
                }}
                onMouseLeave={(e) => {
                  if (!isActive) e.currentTarget.style.color = '#ffffff';
                }}
              >
                {item.name}
                {isActive && (
                  <span style={{
                    position: 'absolute',
                    bottom: '0',
                    left: 0,
                    right: 0,
                    height: '2.5px',
                    background: '#F5B82E',
                    borderRadius: '2px'
                  }}></span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA Button */}
        <div style={{ display: 'flex', alignItems: 'center' }} className="desktop-nav">
          <a
            href="tel:+918867666437"
            className="btn btn-primary"
            style={{
              borderRadius: 'var(--radius-full)',
              padding: '0.65rem 1.4rem',
              fontSize: '0.92rem',
              fontWeight: 700,
              boxShadow: 'none'
            }}
          >
            <Phone size={15} strokeWidth={2.4} /> Call 88676 66437
          </a>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="mobile-toggle"
          aria-label="Toggle Navigation Menu"
          style={{
            padding: '0.5rem',
            color: 'var(--color-gold)',
            display: 'none',
            background: 'none',
            border: 'none',
            cursor: 'pointer'
          }}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div style={{
          background: 'var(--bg-secondary)',
          borderTop: '1px solid var(--border-color)',
          borderBottom: '1px solid var(--border-color)',
          padding: '1.25rem 1.5rem',
          animation: 'fadeIn 0.2s ease'
        }}>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem' }}>
            {navItems.map((item) => {
              const isHome = item.path === '/';
              const isActive = isHome
                ? location.pathname === '/'
                : location.pathname.startsWith(item.path);

              return (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  style={{
                    fontSize: '1.05rem',
                    fontWeight: 700,
                    fontFamily: 'var(--font-heading)',
                    color: isActive ? 'var(--color-gold)' : '#ffffff',
                    padding: '0.75rem 0',
                    borderBottom: '1px solid #282e36',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}
                >
                  <span>{item.name}</span>
                  {isActive && (
                    <span style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      background: 'var(--color-gold)'
                    }}></span>
                  )}
                </Link>
              );
            })}
          </nav>

          <a
            href="tel:+918867666437"
            className="btn btn-primary"
            style={{ width: '100%', borderRadius: 'var(--radius-full)', justifyContent: 'center' }}
          >
            <Phone size={17} /> Call 88676 66437
          </a>
        </div>
      )}

      {/* Responsive Navbar Styles */}
      <style>{`
        @media (max-width: 1100px) {
          .desktop-nav {
            gap: 1.25rem !important;
          }
        }
        @media (max-width: 991px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-toggle {
            display: block !important;
          }
          .navbar-brand-logo {
            height: 52px !important;
            max-width: 230px !important;
          }
        }
        @media (max-width: 480px) {
          .navbar-brand-logo {
            height: 44px !important;
            max-width: 190px !important;
          }
        }
      `}</style>
    </header>
  );
}
