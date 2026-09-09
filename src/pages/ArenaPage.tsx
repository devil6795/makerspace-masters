import React from 'react';
import { Users, Compass, Check, ArrowRight, Flame, Star } from 'lucide-react';

interface ArenaPageProps {
  onOpenBookingModal: () => void;
}

const ARENA_ZONES = [
  {
    title: 'Idea Pods',
    desc: 'Spaces where creative thoughts take shape and wild ideas turn into blueprint sketches.',
    image: 'https://makerspacemasters.com/images/Arena/Frame 337.png',
  },
  {
    title: 'Maker Zones',
    desc: 'Tools and tech for building the future — 3D printers, laser cutters, electronics, and woodworking.',
    image: 'https://makerspacemasters.com/images/Arena/Frame 334.png',
  },
  {
    title: 'Challenge Corners',
    desc: 'Real-world problems tackled hands-on through live team hackathons and engineering sprints.',
    image: 'https://makerspacemasters.com/images/Arena/Frame 335.png',
  },
  {
    title: 'Showcase Walls',
    desc: 'Where every student creation gets its spotlight and community recognition.',
    image: 'https://makerspacemasters.com/images/Arena/Frame 336.png',
  },
];

const ENGAGEMENT_MODES = [
  {
    title: 'Walk-In Sessions',
    desc: 'Step in anytime, explore our zones, and get a taste of making. Perfect for spontaneous creators or families looking to discover something new together.',
    image: 'https://makerspacemasters.com/images/blog/blog-1.png',
    badge: 'Drop-In',
  },
  {
    title: 'Long-Form Sessions',
    desc: 'Build, iterate, and evolve. Structured programs that deep-dive into Robotics, Design Thinking, AR/VR, AI, and more, guided by expert mentors.',
    image: 'https://makerspacemasters.com/images/blog/blog-2.png',
    badge: 'Structured',
  },
  {
    title: 'Maker Events & Challenges',
    desc: 'From weekend builds to community hackathons, these sessions turn creativity into collaboration and learning into real impact.',
    image: 'https://makerspacemasters.com/images/blog/blog-3.png',
    badge: 'Community',
  },
];

const MEMBERSHIPS = [
  {
    tier: 'Explorer',
    period: 'Monthly',
    subtitle: 'Perfect for curious beginners',
    features: [
      'Access to 4 maker sessions / month',
      'Basic mentorship + weekend projects',
      'Access to core fabrication tools',
      'Community project sharing',
    ],
    highlight: false,
    color: '#FE9F99',
  },
  {
    tier: 'Innovator',
    period: 'Quarterly',
    subtitle: 'Deeper engagement & projects',
    features: [
      'Unlimited weekend projects + events',
      'Access to all Maker Zones & tools',
      '1-on-1 mentor guidance sessions',
      'Personal project storage locker',
      'Priority registration for hackathons',
    ],
    highlight: true,
    color: '#C9F2B6',
  },
  {
    tier: 'Creator',
    period: 'Annual',
    subtitle: 'Full membership experience',
    features: [
      'Year-round unlimited studio access',
      'Exclusive project slots & masterclasses',
      'Permanent feature on Arena Showcase Wall',
      'Free entry to national maker championships',
      'Dedicated startup & IP incubation guidance',
    ],
    highlight: false,
    color: '#ABBCFE',
  },
];

const FRANCHISE_PILLARS = [
  {
    image: 'https://makerspacemasters.com/images/makerspace/Frame 205.png',
    title: 'Recurring Membership Growth',
    desc: 'Predictable, compounding monthly subscription revenue from engaged local communities.',
  },
  {
    image: 'https://makerspacemasters.com/images/makerspace/Frame 363.png',
    title: 'High Workshop Conversion',
    desc: 'Introductory drop-ins and summer camps routinely convert into high-LTV long-term members.',
  },
  {
    image: 'https://makerspacemasters.com/images/makerspace/Frame 206.png',
    title: 'Event-Driven Upsell Potential',
    desc: 'Weekend challenges, school trips, and take-home maker kits generate high profit margins.',
  },
];

export const ArenaPage: React.FC<ArenaPageProps> = ({ onOpenBookingModal }) => {
  return (
    <div className="pt-28 pb-20 px-4 bg-[#FBFBFB]">
      <div className="max-w-7xl mx-auto space-y-24">
        {/* Hero Section */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#131313] via-[#022640] to-[#043354] p-8 sm:p-14 md:p-20 text-white shadow-2xl">
          <div className="max-w-3xl space-y-6 z-10 relative">
            <span className="text-xs font-bold text-[#FE9F99] uppercase tracking-wider bg-white/10 px-4 py-1.5 rounded-full inline-block">
              For Partners &amp; Franchisees
            </span>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold font-['Montserrat'] tracking-tight">
              Makers Arena
            </h1>
            <p className="text-xl sm:text-2xl font-semibold text-[#C9F2B6]">
              Not a classroom, not a lab, a playground with imagination.
            </p>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-normal">
              Step into an electric ecosystem where sparks fly, circuits glow, and creativity knows no bounds. Join as an enthusiastic maker or launch your own profitable Makers Arena franchise today.
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <button
                onClick={onOpenBookingModal}
                className="bg-[#FE9F99] hover:bg-[#fd8982] text-[#131313] font-bold px-8 py-4 rounded-full text-sm transition-all shadow-lg hover:shadow-xl cursor-pointer"
              >
                Join the Arena
              </button>
              <button
                onClick={onOpenBookingModal}
                className="border border-white/40 hover:bg-white/10 text-white font-semibold px-8 py-4 rounded-full text-sm transition-colors cursor-pointer"
              >
                Own an Arena Franchise
              </button>
            </div>
          </div>

          <div className="absolute right-0 bottom-0 top-0 w-1/2 opacity-25 pointer-events-none hidden lg:block">
            <img
              src="https://makerspacemasters.com/images/Arena/AreenaImage.webp"
              alt="Makers Arena"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* The Idea Behind It */}
        <div className="space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold font-['Montserrat'] text-[#131313]">
              The Idea Behind It
            </h2>
            <p className="text-base text-gray-600 font-medium">
              Just curiosity, creation, and community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-8 border border-black/5 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#FE9F99]/20 flex items-center justify-center">
                <Flame className="w-6 h-6 text-[#131313]" />
              </div>
              <h3 className="text-xl font-bold font-['Montserrat'] text-[#131313]">
                Experiment Freely
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed font-['Work_Sans']">
                Learn by doing, not memorizing. Break things, re-wire circuits, test prototypes, and iterate with freedom.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-black/5 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#C9F2B6]/30 flex items-center justify-center">
                <Users className="w-6 h-6 text-[#131313]" />
              </div>
              <h3 className="text-xl font-bold font-['Montserrat'] text-[#131313]">
                Collaborate Creatively
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed font-['Work_Sans']">
                Work alongside peers, mentors, and hobbyists on live builds, hackathons, and communal open-source inventions.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-black/5 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#ABBCFE]/30 flex items-center justify-center">
                <Compass className="w-6 h-6 text-[#131313]" />
              </div>
              <h3 className="text-xl font-bold font-['Montserrat'] text-[#131313]">
                Think Like a Maker
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed font-['Work_Sans']">
                Transform abstract ideas into tangible hardware products, functional gadgets, and deployable software.
              </p>
            </div>
          </div>
        </div>

        {/* What Happens Inside */}
        <div id="what-happens-inside" className="space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold font-['Montserrat'] text-[#131313]">
              What Happens Inside
            </h2>
            <p className="text-base text-gray-600 font-medium">
              Step into the Arena and you’ll find sparks flying
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {ARENA_ZONES.map((zone, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl overflow-hidden border border-black/5 shadow-sm hover:shadow-lg transition-all group"
              >
                <div className="h-48 overflow-hidden bg-gray-100">
                  <img
                    src={zone.image}
                    alt={zone.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://makerspacemasters.com/images/index/woodworks.jpg';
                    }}
                  />
                </div>
                <div className="p-6 space-y-2">
                  <h3 className="text-xl font-bold font-['Montserrat'] text-[#131313]">
                    {zone.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed font-['Work_Sans']">
                    {zone.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* From Walk-Ins To Deep Dives */}
        <div className="space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold font-['Montserrat'] text-[#131313]">
              From Walk-Ins To Deep Dives
            </h2>
            <p className="text-base text-gray-600 font-medium">
              Choose How You Want to Make
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ENGAGEMENT_MODES.map((mode, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl overflow-hidden border border-black/5 shadow-sm flex flex-col justify-between p-6 space-y-4"
              >
                <div className="space-y-4">
                  <div className="h-52 rounded-2xl overflow-hidden">
                    <img
                      src={mode.image}
                      alt={mode.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold font-['Montserrat'] text-[#131313]">
                      {mode.title}
                    </h3>
                    <span className="text-xs font-semibold px-3 py-1 bg-gray-100 text-gray-700 rounded-full">
                      {mode.badge}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed font-['Work_Sans']">
                    {mode.desc}
                  </p>
                </div>

                <button
                  onClick={onOpenBookingModal}
                  className="w-full mt-4 flex items-center justify-center gap-2 py-3 rounded-xl bg-gray-50 hover:bg-[#022640] text-gray-800 hover:text-white font-semibold text-sm transition-colors cursor-pointer"
                >
                  <span>Explore Program</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Membership Tiers */}
        <div className="space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold font-['Montserrat'] text-[#131313]">
              Why Makers Choose Arena Membership
            </h2>
            <p className="text-base text-gray-600 font-medium">
              Flexible options designed for hobbyists, young creators, and ambitious builders.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {MEMBERSHIPS.map((mem, idx) => (
              <div
                key={idx}
                className={
                  mem.highlight
                    ? 'rounded-3xl p-8 border transition-all flex flex-col justify-between bg-[#022640] text-white border-[#022640] shadow-2xl scale-105'
                    : 'rounded-3xl p-8 border transition-all flex flex-col justify-between bg-white text-[#131313] border-black/5 shadow-sm'
                }
              >
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <span className={
                      mem.highlight
                        ? 'text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white/20 text-[#C9F2B6]'
                        : 'text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-gray-100 text-gray-600'
                    }>
                      {mem.period}
                    </span>
                    {mem.highlight && (
                      <span className="flex items-center gap-1 text-xs font-bold text-[#FE9F99]">
                        <Star className="w-3.5 h-3.5 fill-current" /> Most Popular
                      </span>
                    )}
                  </div>

                  <div>
                    <h3 className="text-3xl font-extrabold font-['Montserrat']">
                      {mem.tier}
                    </h3>
                    <p className={mem.highlight ? 'text-sm mt-1 text-gray-300' : 'text-sm mt-1 text-gray-500'}>
                      {mem.subtitle}
                    </p>
                  </div>

                  <ul className="space-y-3 pt-2">
                    {mem.features.map((feat, fidx) => (
                      <li key={fidx} className="flex items-start gap-3 text-sm">
                        <Check className={
                          mem.highlight
                            ? 'w-4 h-4 mt-0.5 shrink-0 text-[#C9F2B6]'
                            : 'w-4 h-4 mt-0.5 shrink-0 text-green-600'
                        } />
                        <span className={mem.highlight ? 'text-gray-200' : 'text-gray-700'}>
                          {feat}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-8">
                  <button
                    onClick={onOpenBookingModal}
                    className={
                      mem.highlight
                        ? 'w-full py-4 rounded-2xl font-bold text-sm transition-all cursor-pointer bg-[#C9F2B6] hover:bg-[#b2e89d] text-[#131313] shadow-lg'
                        : 'w-full py-4 rounded-2xl font-bold text-sm transition-all cursor-pointer bg-[#022640] hover:bg-[#033b63] text-white'
                    }
                  >
                    Get Membership Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Build Your Own Arena Franchise Section */}
        <div className="rounded-3xl bg-gradient-to-r from-[#022640] via-[#043354] to-[#5786AB] p-8 sm:p-14 text-white shadow-2xl space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold text-[#FE9F99] uppercase tracking-wider bg-white/10 px-4 py-1.5 rounded-full inline-block">
              Business Opportunity
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold font-['Montserrat']">
              Want To Build Your Own Arena?
            </h2>
            <p className="text-base sm:text-lg text-gray-200">
              A scalable franchise model engineered for steady, predictable revenue. We manage operations, curriculum, and equipment. You earn.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {FRANCHISE_PILLARS.map((item, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/15 space-y-4">
                <div className="h-44 rounded-xl overflow-hidden bg-black/20">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://makerspacemasters.com/images/index/woodworks.jpg';
                    }}
                  />
                </div>
                <h3 className="text-xl font-bold font-['Montserrat'] text-white">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed font-['Work_Sans']">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center pt-4">
            <button
              onClick={onOpenBookingModal}
              className="bg-white text-[#022640] hover:bg-gray-100 font-bold px-10 py-4 rounded-full text-base transition-all shadow-xl hover:shadow-2xl cursor-pointer"
            >
              Apply for an Arena Franchise
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};