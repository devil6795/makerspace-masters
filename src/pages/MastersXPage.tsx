import React, { useState } from 'react';
import { Users, Building2, BookOpen, Layers } from 'lucide-react';
import { InnovationModules } from '../components/InnovationModules';
import { IndustrySoftware } from '../components/IndustrySoftware';
import { MastersConnect } from '../components/MastersConnect';

interface MastersXPageProps {
  onOpenBookingModal: () => void;
}

const ADVANTAGES = [
  {
    title: 'Structured Innovation Journeys',
    desc: 'Guided programs from ideation to prototype to market validation.',
    image: 'https://makerspacemasters.com/images/makerspace/structure.png',
  },
  {
    title: 'Mentorship That Matters',
    desc: 'One-on-one guidance from real founders and industry mentors.',
    image: 'https://makerspacemasters.com/images/makerspace/mentor.png',
  },
  {
    title: 'Hands-on Learning Culture',
    desc: 'Every module focuses on doing, not just knowing.',
    image: 'https://makerspacemasters.com/images/makerspace/handOn.png',
  },
  {
    title: 'Real-World Readiness',
    desc: 'From funding exposure to pitch events, students experience the entrepreneurial lifecycle.',
    image: 'https://makerspacemasters.com/images/makerspace/realworld.png',
  },
];

const PILLARS = [
  {
    icon: BookOpen,
    title: 'Future-Focused Curriculum',
    desc: 'Practical, experiential, and aligned with today’s startup ecosystem and modern industry requirements.',
    color: '#FE9F99',
  },
  {
    icon: Users,
    title: 'Industry Collaboration',
    desc: 'Strategic tie-ups, guest lectures, and mentorships from active founders and professionals.',
    color: '#C9F2B6',
  },
  {
    icon: Building2,
    title: 'Custom Ecosystem Design',
    desc: 'Tailored labs, innovation incubators, and pathways customized to fit your institution’s academic goals.',
    color: '#ABBCFE',
  },
  {
    icon: Layers,
    title: 'Sustainable Model',
    desc: 'Engineered for long-term institutional value, active student retention, and consistent IP creation.',
    color: '#FE9F99',
  },
];

export const MastersXPage: React.FC<MastersXPageProps> = ({ onOpenBookingModal }) => {
  const [activeAdvantage, setActiveAdvantage] = useState(0);

  return (
    <div className="pt-28 pb-20 px-4 bg-[#FBFBFB]">
      <div className="max-w-7xl mx-auto space-y-24">
        {/* Hero Section */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#022640] via-[#043354] to-[#131313] p-8 sm:p-14 md:p-20 text-white shadow-2xl">
          <div className="max-w-3xl space-y-6 z-10 relative">
            <span className="text-xs font-bold text-[#ABBCFE] uppercase tracking-wider bg-white/10 px-4 py-1.5 rounded-full inline-block">
              For Colleges &amp; Institutions
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-['Montserrat'] leading-tight tracking-tight">
              Masters X
            </h1>
            <p className="text-xl sm:text-2xl font-semibold text-gray-200">
              Turn academic learning into entrepreneurial action.
            </p>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-normal">
              Bridge the gap between campus degrees and creator economy success. We build university-grade innovation spaces where students engineer patents, launch startups, and solve real-world problems.
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <button
                onClick={onOpenBookingModal}
                className="bg-[#ABBCFE] hover:bg-[#9cb0fc] text-[#022640] font-bold px-8 py-4 rounded-full text-sm transition-all shadow-lg hover:shadow-xl cursor-pointer"
              >
                Join the Makerspace X Network
              </button>
              <a
                href="#why-masters-x"
                className="border border-white/40 hover:bg-white/10 text-white font-semibold px-8 py-4 rounded-full text-sm transition-colors"
              >
                Explore Program Pillars
              </a>
            </div>
          </div>

          <div className="absolute right-0 bottom-0 top-0 w-1/2 opacity-25 pointer-events-none hidden lg:block">
            <img
              src="https://makerspacemasters.com/images/makerspace/heroImage-master-x.webp"
              alt="Masters X Hero"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Why Masters X Interactive Section */}
        <div id="why-masters-x" className="space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-3xl md:text-5xl font-bold font-['Montserrat'] text-[#131313]">
              Why Masters X?
            </h2>
            <p className="text-base md:text-lg text-gray-600 font-medium">
              Turn academic learning into entrepreneurial action through guided programs
            </p>
          </div>

          <div className="relative rounded-3xl overflow-hidden bg-[#022640] text-white shadow-xl min-h-[460px] flex flex-col md:flex-row">
            {/* Left Nav Tabs */}
            <div className="w-full md:w-1/2 p-8 sm:p-12 flex flex-col justify-center space-y-6 z-10 bg-[#022640]/90 md:bg-transparent">
              {ADVANTAGES.map((adv, idx) => {
                const isActive = activeAdvantage === idx;
                return (
                  <div
                    key={idx}
                    onClick={() => setActiveAdvantage(idx)}
                    className={
                      isActive
                        ? 'cursor-pointer transition-all duration-300 p-4 rounded-2xl bg-white/10 border-l-4 border-[#ABBCFE] pl-6'
                        : 'cursor-pointer transition-all duration-300 p-4 rounded-2xl opacity-60 hover:opacity-100 hover:bg-white/5'
                    }
                  >
                    <h3 className="text-xl font-bold font-['Montserrat'] mb-1 text-white">
                      {adv.title}
                    </h3>
                    <p className="text-sm text-gray-300 leading-relaxed font-['Work_Sans']">
                      {adv.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Right Background Image Showcase */}
            <div className="w-full md:w-1/2 relative min-h-[300px] md:min-h-[460px] overflow-hidden">
              <img
                src={ADVANTAGES[activeAdvantage].image}
                alt={ADVANTAGES[activeAdvantage].title}
                className="w-full h-full object-cover transition-all duration-700 transform scale-105"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://makerspacemasters.com/images/makerspace/structure.png';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#022640] via-transparent to-transparent md:hidden" />
            </div>
          </div>
        </div>

        {/* The Masters X Advantage (4 Feature Cards) */}
        <div className="space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold font-['Montserrat'] text-[#131313]">
              The Masters X Advantage
            </h2>
            <p className="text-base text-gray-600 font-medium">
              Where campus meets the creator economy
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PILLARS.map((pillar, idx) => {
              const IconComp = pillar.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-3xl p-8 border border-black/5 shadow-sm hover:shadow-md transition-shadow space-y-4"
                >
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center"
                    style={{ backgroundColor: `${pillar.color}30` }}
                  >
                    <IconComp className="w-6 h-6 text-[#131313]" />
                  </div>
                  <h3 className="text-lg font-bold font-['Montserrat'] text-[#131313]">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed font-['Work_Sans']">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* 20+ Interdisciplinary Modules */}
        <InnovationModules />

        {/* Industry Software Suite */}
        <IndustrySoftware />

        {/* Platform Integration */}
        <MastersConnect />

        {/* Bottom CTA Banner */}
        <div className="rounded-3xl bg-gradient-to-r from-[#022640] to-[#5786AB] p-8 sm:p-14 text-center text-white space-y-6 shadow-xl">
          <h2 className="text-3xl sm:text-4xl font-extrabold font-['Montserrat']">
            Ready to Launch Masters X in Your College?
          </h2>
          <p className="max-w-2xl mx-auto text-gray-200 text-base sm:text-lg">
            Empower your faculty, set up modern prototyping labs, and nurture student entrepreneurs from day one.
          </p>
          <div className="pt-2">
            <button
              onClick={onOpenBookingModal}
              className="bg-white text-[#022640] hover:bg-gray-100 font-bold px-8 py-4 rounded-full text-sm transition-all shadow-lg hover:shadow-xl cursor-pointer"
            >
              Request Institutional Proposal
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};