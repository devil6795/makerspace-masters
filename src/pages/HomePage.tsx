import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { StatsSection } from '../components/StatsSection';
import { OneMissionSection } from '../components/OneMissionSection';
import { InnovationModules } from '../components/InnovationModules';
import { MastersConnect } from '../components/MastersConnect';
import { IndustrySoftware } from '../components/IndustrySoftware';
import { NewsInsights } from '../components/NewsInsights';
import { Testimonials } from '../components/Testimonials';
import { ClientMarquee } from '../components/ClientMarquee';
import { FaqSection } from '../components/FaqSection';

interface HomePageProps {
  onOpenBookingModal: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenBookingModal }) => {
  return (
    <>
      {/* Hero Video Carousel with Stacked Cards */}
      <HeroSection />

      {/* Live Counters & Dynamic Grid Statements */}
      <StatsSection />

      {/* 3-Way Mission Showcase */}
      <OneMissionSection onLearnMoreClick={onOpenBookingModal} />

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
    </>
  );
};