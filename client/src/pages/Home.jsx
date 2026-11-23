import React from 'react';
import Hero from '../components/Hero';
import EmergencyHighlights from '../components/EmergencyHighlights';
import ServicesSection from '../components/ServicesSection';
import HowItWorks from '../components/HowItWorks';
import LocationsSection from '../components/LocationsSection';
import GallerySection from '../components/GallerySection';
import TestimonialsSection from '../components/TestimonialsSection';
import FaqSection from '../components/FaqSection';
import EnquirySection from '../components/EnquirySection';

export default function Home() {
  return (
    <main>
      {/* 2. Hero section with large towing truck background */}
      <Hero />

      {/* 3. Emergency assistance highlights */}
      <EmergencyHighlights />

      {/* 4. Our Towing Services with attractive image cards */}
      <ServicesSection limit={11} showAllButton={true} />

      {/* 5. Process & Standards: How Our Service Works & Why Bengaluru Trusts Us */}
      <HowItWorks />

      {/* 7. Service Locations */}
      <LocationsSection />

      {/* 8. Our Towing Gallery */}
      <GallerySection limit={6} showAllLink={true} />

      {/* 9. Customer Testimonials */}
      <TestimonialsSection />

      {/* 10. FAQ accordion */}
      <FaqSection />

      {/* 11. Emergency Contact and Enquiry section */}
      <EnquirySection />
    </main>
  );
}

