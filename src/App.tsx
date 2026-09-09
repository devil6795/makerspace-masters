import { useState } from 'react';
import { TopStrip } from './components/TopStrip';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { StatsSection } from './components/StatsSection';
import { OneMissionSection } from './components/OneMissionSection';
import { InnovationModules } from './components/InnovationModules';
import { MastersConnect } from './components/MastersConnect';
import { IndustrySoftware } from './components/IndustrySoftware';
import { NewsInsights } from './components/NewsInsights';
import { Testimonials } from './components/Testimonials';
import { ClientMarquee } from './components/ClientMarquee';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';

export function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#FBFBFB] text-[#131313]">
      {/* Top Banner Announcement */}
      <TopStrip />

      {/* Main Glassmorphic Navigation */}
      <Navbar onOpenBookingModal={() => setIsBookingOpen(true)} />

      {/* Hero Video Carousel with Stacked Cards */}
      <main className="flex-1">
        <HeroSection />

        {/* Live Counters & Dynamic Grid Statements */}
        <StatsSection />

        {/* 3-Way Mission Showcase */}
        <OneMissionSection onLearnMoreClick={() => setIsBookingOpen(true)} />

        {/* 18 Innovation Modules Showcase with Detail Popups */}
        <InnovationModules />

        {/* Platform Overview */}
        <MastersConnect />

        {/* Industry Software Badges */}
        <IndustrySoftware />

        {/* Blog & News Insights */}
        <NewsInsights />

        {/* Video Testimonials */}
        <Testimonials />

        {/* Partner School Logos Infinite Marquee */}
        <ClientMarquee />

        {/* Categorized FAQs Accordion */}
        <FaqSection />
      </main>

      {/* Footer & CTA */}
      <Footer onOpenBookingModal={() => setIsBookingOpen(true)} />

      {/* 3-Step Interactive Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </div>
  );
}

export default App;
