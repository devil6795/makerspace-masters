import React, { useState } from 'react';
import { CheckCircle2, ChevronRight } from 'lucide-react';

interface ConnectFeature {
  id: string;
  title: string;
  tagline: string;
  bullets: string[];
  image: string;
}

const CONNECT_FEATURES: ConnectFeature[] = [
  {
    id: 'masters',
    title: 'Makerspace Masters',
    tagline: 'Learn & Track - Student Progress Made Simple',
    bullets: [
      'Track assigned tasks and completion rates daily',
      'Generate detailed progress reports for all students',
      'Follow structured learning paths with clear milestones',
    ],
    image: 'https://makerspacemasters.com/images/makerspace/makerspace-master_.png',
  },
  {
    id: 'x',
    title: 'Masters X',
    tagline: 'Build & Fund - Startup Journey Management.',
    bullets: [
      'Track project building progress and resource allocation',
      'Connect with mentors and access funding opportunities',
      'Monitor startup milestones and investment readiness',
    ],
    image: 'https://makerspacemasters.com/images/makerspace/makerspace-masters-x_.png',
  },
  {
    id: 'plus',
    title: 'Masters +',
    tagline: 'Earn & Grow - Your Franchise Success Portal.',
    bullets: [
      'Calculate franchise earnings and profit potential daily',
      'Access complete business setup and revenue tracking',
      'Get mentorship support and funding guidance online',
    ],
    image: 'https://makerspacemasters.com/images/index/makerspace-masters.png',
  },
];

export const MastersConnect: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeFeature = CONNECT_FEATURES[activeIdx];

  return (
    <section id="features" className="py-20 md:py-28 px-4 bg-white border-y border-black/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-['Montserrat'] text-[#131313] mb-3 tracking-tight">
            Masters Connect
          </h2>
          <p className="text-base md:text-lg text-gray-600 font-medium">
            Bring all your needs into one workspace. Check out the key features below
          </p>
        </div>

        {/* Feature Selector Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {CONNECT_FEATURES.map((feat, idx) => {
            const isActive = idx === activeIdx;
            return (
              <button
                key={feat.id}
                onClick={() => setActiveIdx(idx)}
                className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? 'bg-[#022640] text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {feat.title}
              </button>
            );
          })}
        </div>

        {/* Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-[#FAFAFA] rounded-3xl p-6 sm:p-10 md:p-14 border border-black/5">
          {/* Left Text */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-bold text-[#5786AB] uppercase tracking-wider">
              Integrated Software Ecosystem
            </span>
            <h3 className="text-3xl sm:text-4xl font-bold font-['Montserrat'] text-[#131313]">
              {activeFeature.title}
            </h3>
            <p className="text-lg font-semibold text-[#022640]">
              {activeFeature.tagline}
            </p>

            <ul className="space-y-4 pt-2">
              {activeFeature.bullets.map((point, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#5786AB] flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-gray-700 font-medium">
                    {point}
                  </span>
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <a
                href="https://mastersconnect.ai"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#022640] hover:text-[#5786AB] group"
              >
                <span>Visit Platform</span>
                <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Image Showcase */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-black/5 bg-white p-2">
              <img
                src={activeFeature.image}
                alt={activeFeature.title}
                className="w-full h-auto rounded-xl object-contain transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
