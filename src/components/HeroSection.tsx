import React, { useState, useEffect, useRef } from 'react';
import { ChevronRight } from 'lucide-react';

interface HeroSlide {
  id: number;
  title: string;
  tagline: string;
  videoSrc: string;
  cardImage: string;
  cardTitle: string;
  points: string[];
}

const HERO_SLIDES: HeroSlide[] = [
  {
    id: 0,
    title: 'Mechatronics',
    tagline: 'Not a Lab. A Launchpad.',
    videoSrc: 'https://makerspacemasters.com/videos/Mechatronics.mp4?v=5',
    cardImage: 'https://makerspacemasters.com/images/index/cards/mechatronics.png',
    cardTitle: 'Mechatronics',
    points: [
      'Build with your hands, not just your mind',
      'Hands-on exploration of technologies',
      'Designed for creators, innovators & leaders',
    ],
  },
  {
    id: 1,
    title: 'Robotics',
    tagline: 'Design. Build. Iterate.',
    videoSrc: 'https://makerspacemasters.com/videos/Robotics.mp4?v=2',
    cardImage: 'https://makerspacemasters.com/images/index/cards/robotics.png',
    cardTitle: 'Robotics',
    points: [
      'Immersive learning with real-world projects',
      'Hands-on exploration of technologies',
      'Designed for creators, innovators & leaders',
    ],
  },
  {
    id: 2,
    title: 'Wood working',
    tagline: 'More Than Curriculum. It’s Craft.',
    videoSrc: 'https://makerspacemasters.com/videos/Woodworking.mp4?v=2',
    cardImage: 'https://makerspacemasters.com/images/index/cards/woodworking.png',
    cardTitle: 'Wood working',
    points: [
      'Build practical skills through real woodworks',
      'Experience with tools, techniques, and materials',
      'Crafted for makers, hobbyists and artisans',
    ],
  },
  {
    id: 3,
    title: 'Pottery',
    tagline: 'Real Skills. Real Tools. Real Learning.',
    videoSrc: 'https://makerspacemasters.com/videos/Pottery.mp4?v=2',
    cardImage: 'https://makerspacemasters.com/images/index/cards/pottery.png',
    cardTitle: 'Pottery',
    points: [
      'Shape your creativity through real pottery',
      'Hands-on practice with clay, wheel, and glazing techniques',
      'Designed for artists and aspiring ceramicists',
    ],
  },
  {
    id: 4,
    title: '3D Printing',
    tagline: 'Make Something That Matters.',
    videoSrc: 'https://makerspacemasters.com/videos/3DPrinting.mp4?v=2',
    cardImage: 'https://makerspacemasters.com/images/index/cards/3d_printing.png',
    cardTitle: '3D Printing',
    points: [
      'Bring ideas to life with real 3D printing projects',
      'Learning with printers, design software, and materials',
      'Perfect for innovators, makers, and future tech leaders',
    ],
  },
];

const SLIDE_DURATION = 6500; // ms

export const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  // Timer loop for synchronized progress bar
  useEffect(() => {
    if (isPaused) return;

    const intervalTime = 50;
    const increment = (intervalTime / SLIDE_DURATION) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setCurrentSlide((cur) => (cur + 1) % HERO_SLIDES.length);
          return 0;
        }
        return prev + increment;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [currentSlide, isPaused]);

  // Video playback management
  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (video) {
        if (index === currentSlide) {
          video.currentTime = 0;
          video.play().catch(() => {
            // Autoplay permitted if muted
          });
        } else {
          video.pause();
        }
      }
    });
  }, [currentSlide]);

  const selectSlide = (index: number) => {
    setCurrentSlide(index);
    setProgress(0);
  };

  return (
    <section
      className="relative w-full h-[85vh] min-h-[600px] max-h-[920px] bg-black overflow-hidden select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Videos */}
      {HERO_SLIDES.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
          }`}
        >
          <video
            ref={(el) => {
              videoRefs.current[index] = el;
            }}
            src={slide.videoSrc}
            autoPlay={index === 0}
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
          {/* Subtle cinematic gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/40" />
        </div>
      ))}

      {/* Floating Tagline at bottom-left */}
      <div className="absolute bottom-16 md:bottom-20 left-6 md:left-16 z-20 max-w-2xl text-white">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold font-['Montserrat'] tracking-tight drop-shadow-lg leading-tight transition-all duration-500">
          {HERO_SLIDES[currentSlide].tagline}
        </h1>
      </div>

      {/* Synchronized Timer Progress Indicators */}
      <div className="absolute bottom-8 left-6 md:left-16 z-20 flex items-center gap-2.5">
        {HERO_SLIDES.map((slide, index) => {
          let barFill = 0;
          if (index < currentSlide) barFill = 100;
          else if (index === currentSlide) barFill = progress;

          return (
            <button
              key={slide.id}
              onClick={() => selectSlide(index)}
              className="group py-2 focus:outline-none"
              aria-label={`Jump to slide ${index + 1}`}
            >
              <div className="w-10 sm:w-16 md:w-20 h-1.5 bg-white/30 rounded-full overflow-hidden transition-all duration-300 group-hover:h-2">
                <div
                  className="h-full bg-white rounded-full transition-all duration-75 ease-linear"
                  style={{ width: `${barFill}%` }}
                />
              </div>
            </button>
          );
        })}
      </div>

      {/* Floating Interactive Card Stack (Right Side) */}
      <div className="hidden lg:flex flex-col gap-2.5 absolute right-8 xl:right-16 top-1/2 transform -translate-y-1/2 z-30 w-80 xl:w-96">
        {HERO_SLIDES.map((slide, index) => {
          const isExpanded = index === currentSlide;
          return (
            <div
              key={slide.id}
              onClick={() => selectSlide(index)}
              className={`cursor-pointer rounded-2xl transition-all duration-400 overflow-hidden border ${
                isExpanded
                  ? 'bg-white/95 text-[#131313] p-5 shadow-2xl scale-102 border-white'
                  : 'bg-white/35 hover:bg-white/50 text-white backdrop-blur-md p-3.5 border-white/25 hover:scale-101'
              }`}
            >
              {isExpanded ? (
                <div className="space-y-3 animate-in fade-in duration-300">
                  <div className="flex items-center gap-3">
                    <img
                      src={slide.cardImage}
                      alt={slide.cardTitle}
                      className="w-10 h-10 object-contain rounded-lg"
                    />
                    <h3 className="font-bold text-lg font-['Montserrat'] text-[#131313]">
                      {slide.cardTitle}
                    </h3>
                  </div>

                  <div className="space-y-1.5 pt-1">
                    {slide.points.map((point, ptIdx) => (
                      <div
                        key={ptIdx}
                        className="flex items-start gap-2 text-xs font-medium text-gray-700 leading-snug"
                      >
                        <ChevronRight className="w-3.5 h-3.5 text-[#022640] flex-shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={slide.cardImage}
                      alt={slide.cardTitle}
                      className="w-7 h-7 object-contain opacity-90"
                    />
                    <span className="font-semibold text-sm drop-shadow">
                      {slide.cardTitle}
                    </span>
                  </div>
                  <ChevronRight className="w-4 h-4 opacity-70" />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
