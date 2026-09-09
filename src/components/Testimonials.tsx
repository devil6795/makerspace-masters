import React, { useState } from 'react';
import { Play, X, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface TestimonialItem {
  name: string;
  role: string;
  logo: string;
  quote: string;
  videoId: string;
  thumb: string;
}

const TESTIMONIALS: TestimonialItem[] = [
  {
    name: 'Mr. Naman Jain',
    role: 'VC, Silver Line Prestige School',
    logo: 'https://silverlineprestigeschool.com/assets/images/slps-logo.png',
    quote:
      'Creating 14+ labs in 15,000 Sq. Ft. with such specific needs was challenging, but Mr. Darpan made it a reality. Students now approach science with curiosity, and the makerspace is the highlight of their day.',
    videoId: 'mCUHv-NA4Qk',
    thumb: 'https://img.youtube.com/vi/mCUHv-NA4Qk/hqdefault.jpg',
  },
  {
    name: 'Mr. Dennis George',
    role: 'VC, Shalom Group of Schools, Gurgaon',
    logo: 'https://makerspacemasters.com/images/index/shalom-hills.png',
    quote:
      'Every space we built had unique requirements. Team Makerspace Masters not only became our technology partner but also guided the design, making them an integral part of the project.',
    videoId: 's583ky_Y2Dc',
    thumb: 'https://img.youtube.com/vi/s583ky_Y2Dc/hqdefault.jpg',
  },
];

export const Testimonials: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [playingVideoId, setPlayingVideoId] = useState<string | null>(null);

  const active = TESTIMONIALS[currentIdx];

  const nextSlide = () => setCurrentIdx((prev) => (prev + 1) % TESTIMONIALS.length);
  const prevSlide = () => setCurrentIdx((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <section className="py-20 md:py-28 px-4 bg-[#FBFBFB]">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-['Montserrat'] text-[#131313] mb-3 tracking-tight">
            Trusted and valued by learners
          </h2>
          <p className="text-base md:text-lg text-gray-600 font-medium">
            Look What Our Partners Say
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 md:p-12 border border-black/5 shadow-xl relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left: Video Thumbnail with Pulsing Play Button */}
            <div className="lg:col-span-5 relative group cursor-pointer" onClick={() => setPlayingVideoId(active.videoId)}>
              <div className="relative w-full h-64 sm:h-80 rounded-2xl overflow-hidden shadow-lg bg-gray-900">
                <img
                  src={active.thumb}
                  alt={active.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />

                {/* Ripple Play Button */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white text-[#131313] flex items-center justify-center shadow-2xl transition-transform duration-300 group-hover:scale-110">
                  <div className="ripple-circle-1" />
                  <div className="ripple-circle-2" />
                  <Play className="w-7 h-7 fill-[#131313] ml-1" />
                </div>
              </div>
            </div>

            {/* Right: Quote & Info */}
            <div className="lg:col-span-7 space-y-6">
              <div className="h-12 flex items-center">
                <img
                  src={active.logo}
                  alt={active.role}
                  className="max-h-12 max-w-[180px] object-contain"
                />
              </div>

              <div className="relative">
                <Quote className="w-8 h-8 text-gray-300 mb-2" />
                <blockquote className="text-lg sm:text-xl md:text-2xl font-semibold font-['Montserrat'] text-[#131313] leading-relaxed">
                  "{active.quote}"
                </blockquote>
              </div>

              <div>
                <h4 className="font-bold text-base text-[#131313]">
                  {active.name}
                </h4>
                <p className="text-sm text-gray-500 font-medium">{active.role}</p>
              </div>

              {/* Slider Controls */}
              <div className="flex items-center gap-3 pt-4">
                <button
                  onClick={prevSlide}
                  className="w-10 h-10 rounded-full bg-gray-100 hover:bg-[#022640] hover:text-white flex items-center justify-center transition-colors shadow-xs"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextSlide}
                  className="w-10 h-10 rounded-full bg-gray-100 hover:bg-[#022640] hover:text-white flex items-center justify-center transition-colors shadow-xs"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
                <span className="text-xs font-semibold text-gray-400 ml-2">
                  {currentIdx + 1} / {TESTIMONIALS.length}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Embedded YouTube Modal */}
      {playingVideoId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-4xl bg-black rounded-3xl overflow-hidden shadow-2xl aspect-video">
            <button
              onClick={() => setPlayingVideoId(null)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center transition-colors z-20"
              aria-label="Close video"
            >
              <X className="w-5 h-5" />
            </button>
            <iframe
              src={`https://www.youtube.com/embed/${playingVideoId}?autoplay=1&rel=0`}
              title="YouTube video player"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
};

