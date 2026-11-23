import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';

export default function MobileActionBar() {
  return (
    <div className="mobile-action-bar">
      <a
        href="tel:+918867666437"
        className="btn btn-primary"
        style={{ flex: 1, padding: '0.75rem 0.5rem', fontSize: '0.9rem', justifyContent: 'center' }}
      >
        <Phone size={17} /> Call 88676 66437
      </a>
      <a
        href="https://wa.me/918867666437?text=Hi%20Car%20Services,%20I%20need%20assistance%20in%20Bengaluru."
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-whatsapp"
        style={{ flex: 1, padding: '0.75rem 0.5rem', fontSize: '0.9rem', justifyContent: 'center' }}
      >
        <MessageSquare size={17} /> WhatsApp Help
      </a>
    </div>
  );
}

