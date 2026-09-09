import React, { useState } from 'react';
import { ArrowUpRight, Check, Star } from 'lucide-react';

interface TabData {
  id: string;
  tabTitle: string;
  tabSub: string;
  accentColor: string;
  tabBg: string;
  image: string;
  heading: string;
  desc: string;
  features: string[];
  supportItems: string[];
  badgeText: string;
}

const TABS: TabData[] = [
  {
    id: 'schools',
    tabTitle: 'Makerspace Masters',
    tabSub: 'For Schools',
    accentColor: '#FE9F99',
    tabBg: 'hover:bg-[#FE9F99]/15',
    image: 'https://makerspacemasters.com/images/index/schools-tab.png',
    heading: 'Premium Innovation Labs For Future-Ready Schools and Colleges',
    desc: 'State-of-the-art makerspaces that transform passive learners into confident creators and problem-solvers.',
    features: [
      'State-of-the-Art Learning Environments',
      'Interdisciplinary Collaboration Spaces',
      'Industry-Standard Technology Access',
      'Curriculum-Integrated Design Thinking',
    ],
    supportItems: [
      'Complete Setup Support',
      'Curriculum Integration Help',
      'Safety First Priority',
    ],
    badgeText: 'K-12 School Innovation',
  },
  {
    id: 'colleges',
    tabTitle: 'Masters X',
    tabSub: 'For Colleges & Institutions',
    accentColor: '#88D49E',
    tabBg: 'hover:bg-[#C9F2B6]/25',
    image: 'https://makerspacemasters.com/images/index/mastersx.png',
    heading: "Transform Young Minds Into Tomorrow's Entrepreneurial Leaders",
    desc: 'Incubation ecosystems where student ideas evolve into market-ready ventures with expert guidance.',
    features: [
      'Idea-to-Market Journey Support',
      'Industry Mentor Network Access',
      'Funding Pipeline Development',
      'Structured Innovation Methodology',
    ],
    supportItems: [
      'Industry Expert Mentors',
      'Funding Connection Network',
      'Innovation Lab Design',
    ],
    badgeText: 'For College Startup Spaces',
  },
  {
    id: 'franchise',
    tabTitle: 'Masters +',
    tabSub: 'For Partners & Franchisees',
    accentColor: '#ABBCFE',
    tabBg: 'hover:bg-[#ABBCFE]/20',
    image: 'https://makerspacemasters.com/images/index/masters-plus.png',
    heading: 'Scale Innovation Impact Through Proven Franchise Model',
    desc: 'Partner with Masters to launch locally-rooted innovation hubs backed by global expertise and support.',
    features: [
      'Turnkey Launch System',
      'Comprehensive Franchise Support',
      'Established Brand Authority',
      'Revenue-Impact Balance',
    ],
    supportItems: [
      'Proven Business Model',
      'Marketing Support Included',
      'Revenue Growth Tracking',
    ],
    badgeText: 'For Franchise Innovation',
  },
];

interface OneMissionSectionProps {
  onLearnMoreClick?: () => void;
}

export const OneMissionSection: React.FC<OneMissionSectionProps> = ({ onLearnMoreClick }) => {
  const [activeTabIdx, setActiveTabIdx] = useState(0);
  const activeTab = TABS[activeTabIdx];

  return (
    <section id="one-mission" className="py-20 md:py-28 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl md:text-5xl font-bold font-['Montserrat'] text-[#131313] mb-3 tracking-tight">
            One Mission. Three Ways to Build It.
          </h2>
          <p className="text-base md:text-lg text-gray-600 font-medium">
            Each division serves a different purpose, but they all lead to real-world innovation.
          </p>
        </div>

        {/* 3 Nav Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-16 max-w-4xl mx-auto">
          {TABS.map((tab, idx) => {
            const isActive = idx === activeTabIdx;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTabIdx(idx)}
                className={`flex items-center justify-between p-5 rounded-2xl border transition-all duration-300 text-left ${
                  isActive
                    ? 'bg-white shadow-xl scale-102'
                    : 'bg-[#F9F9F9] border-black/5 hover:bg-gray-100 text-gray-700'
                }`}
                style={{ borderColor: isActive ? tab.accentColor : 'transparent' }}
              >
                <div>
                  <div className="font-bold text-lg font-['Montserrat'] text-[#131313]">
                    {tab.tabTitle}
                  </div>
                  <div className="text-xs text-gray-500 font-medium">{tab.tabSub}</div>
                </div>
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center transition-all"
                  style={{ backgroundColor: isActive ? tab.accentColor : '#E5E5E5' }}
                >
                  <ArrowUpRight className="w-4 h-4 text-[#131313]" />
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Tab Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-[#FAFAFA] rounded-3xl p-6 sm:p-10 md:p-14 border border-black/5">
          {/* Left Visual with Floating Frosted Badges */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="relative w-full max-w-md rounded-2xl overflow-hidden shadow-2xl border border-white">
              <img
                src={activeTab.image}
                alt={activeTab.tabTitle}
                className="w-full h-80 sm:h-96 object-cover"
              />
            </div>

            {/* Top-Left Floating Frosted Support Card */}
            <div className="absolute -top-4 -left-3 sm:-left-6 glass-card p-4 rounded-2xl max-w-[210px] hidden sm:block">
              <h5 className="font-bold text-xs text-[#131313] mb-2 font-['Montserrat']">
                How We Support You
              </h5>
              <div className="space-y-1.5">
                {activeTab.supportItems.map((item, i) => (
                  <div
                    key={i}
                    className="text-[11px] font-semibold text-gray-800 bg-white/80 px-2.5 py-1 rounded-md shadow-xs"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom-Right Floating Frosted Star Badge */}
            <div className="absolute -bottom-4 -right-2 sm:-right-4 glass-card px-4 py-3 rounded-2xl flex items-center gap-2">
              <Star className="w-5 h-5 text-amber-500 fill-amber-500 flex-shrink-0" />
              <span className="text-xs font-bold text-[#131313] leading-tight">
                {activeTab.badgeText}
              </span>
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold font-['Montserrat'] text-[#131313] leading-tight">
              {activeTab.heading}
            </h3>
            <p className="text-base text-gray-600 leading-relaxed font-normal">
              {activeTab.desc}
            </p>

            {/* Feature Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {activeTab.features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#022640] text-white flex items-center justify-center flex-shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-sm font-medium text-gray-800">{feature}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-wrap gap-4 items-center">
              <button
                onClick={onLearnMoreClick}
                className="bg-[#131313] hover:bg-[#022640] text-white px-8 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 shadow-md hover:shadow-xl transform hover:-translate-y-0.5 cursor-pointer"
              >
                Book Consultation
              </button>
              <a
                href={
                  activeTab.id === 'schools'
                    ? '#/makerspace-masters'
                    : activeTab.id === 'colleges'
                    ? '#/makerspace-masters-x'
                    : '#/makerspace-masters-arena'
                }
                className="border border-[#131313]/20 hover:border-[#131313] hover:bg-black/5 text-[#131313] px-6 py-3.5 rounded-full font-semibold text-sm transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Explore Full Details</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

