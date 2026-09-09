import React, { useState, useEffect, useRef } from 'react';

const STATS = [
  { value: 200, suffix: '+', label: 'Educators trained', color: '#FE9F99', bg: 'bg-[#FE9F99]/15' },
  { value: 50000, suffix: '+', label: 'Students Impacted', color: '#88D49E', bg: 'bg-[#C9F2B6]/25' },
  { value: 250, suffix: '+', label: 'Institutions onboarded', color: '#ABBCFE', bg: 'bg-[#ABBCFE]/20' },
];

const ROTATING_SECTIONS = [
  {
    title: 'Design Creates Impact',
    subtitle: 'Where Imagination Meets Real Impact',
    desc: "State-of-the-art makerspaces that turn curious minds into confident innovators, preparing students for careers that don't yet exist.",
  },
  {
    title: 'Innovation Gets Unleashed',
    subtitle: 'Innovation Labs That Change Everything',
    desc: 'Beyond STEM education - create environments where students collaborate globally, solve real problems, and discover their power to change the world.',
  },
  {
    title: 'Learning Through Making',
    subtitle: 'Shaping Schools That Shape Tomorrow',
    desc: 'Premium innovation ecosystems where students don’t just learn—they create, collaborate, and launch ideas that transform their communities and beyond.',
  },
  {
    title: 'Learning Revolutionized Through Making',
    subtitle: 'Where Potential Becomes Unstoppable Impact',
    desc: 'Cutting-edge makerspaces that bridge education and entrepreneurship, developing resilient, creative thinkers ready for a VUCA world.',
  },
];

const GRID_ICONS = [
  { name: 'Robo Hand', src: 'https://makerspacemasters.com/images/index/grid-icons/robo-hand.svg', pos: 'top-2 left-6 md:left-16' },
  { name: 'Screw', src: 'https://makerspacemasters.com/images/index/grid-icons/screw.svg', pos: 'top-8 right-8 md:right-24' },
  { name: 'Pottery', src: 'https://makerspacemasters.com/images/index/grid-icons/pottery.svg', pos: 'bottom-4 left-10 md:left-32' },
  { name: 'Robo Head', src: 'https://makerspacemasters.com/images/index/grid-icons/robo-head.svg', pos: 'bottom-6 right-6 md:right-20' },
  { name: 'Saw', src: 'https://makerspacemasters.com/images/index/grid-icons/saw.svg', pos: 'top-1/2 left-4 md:left-8' },
];

export const StatsSection: React.FC = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [activeHeadline, setActiveHeadline] = useState(0);
  const [counts, setCounts] = useState([0, 0, 0]);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  // IntersectionObserver for count-up
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          const duration = 2000;
          const steps = 40;
          const interval = duration / steps;
          let step = 0;

          const timer = setInterval(() => {
            step++;
            const progress = step / steps;
            setCounts(
              STATS.map((s) => Math.min(Math.round(s.value * progress), s.value))
            );

            if (step >= steps) {
              clearInterval(timer);
              setCounts(STATS.map((s) => s.value));
            }
          }, interval);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  // Headline rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveHeadline((prev) => (prev + 1) % ROTATING_SECTIONS.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24 px-4 bg-white relative overflow-hidden text-center"
    >
      <div className="max-w-6xl mx-auto">
        {/* 3 Counter Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {STATS.map((stat, idx) => (
            <div
              key={stat.label}
              className={`p-8 rounded-3xl ${stat.bg} flex flex-col items-center justify-center transition-all duration-300 hover:scale-105`}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-['Montserrat'] text-[#131313] mb-2 tracking-tight">
                {counts[idx].toLocaleString()}
                {stat.suffix}
              </h2>
              <p className="text-sm md:text-base font-semibold text-gray-700">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Dynamic Changing Headline Area with Floating Tool Icons */}
        <div className="relative py-12 px-6 md:px-16 rounded-3xl bg-gray-50 border border-gray-100 min-h-[260px] flex flex-col items-center justify-center">
          {/* Subtle floating tool icons */}
          {GRID_ICONS.map((icon, i) => (
            <div
              key={i}
              className={`absolute ${icon.pos} w-8 md:w-12 h-8 md:h-12 opacity-25 hover:opacity-80 transition-opacity pointer-events-none`}
            >
              <img src={icon.src} alt={icon.name} className="w-full h-full object-contain" />
            </div>
          ))}

          {/* Animated Headline Content */}
          <div className="max-w-3xl mx-auto z-10 transition-all duration-500">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-['Montserrat'] text-[#131313] mb-2">
              {ROTATING_SECTIONS[activeHeadline].title}
            </h2>
            <p className="text-base sm:text-lg font-semibold text-[#5786AB] mb-4 font-['Montserrat']">
              {ROTATING_SECTIONS[activeHeadline].subtitle}
            </p>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-2xl mx-auto">
              {ROTATING_SECTIONS[activeHeadline].desc}
            </p>
          </div>

          {/* Dots Indicator */}
          <div className="flex gap-2 mt-6 z-10">
            {ROTATING_SECTIONS.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveHeadline(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === activeHeadline ? 'w-8 bg-[#022640]' : 'w-2 bg-gray-300'
                }`}
                aria-label={`Go to statement ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

