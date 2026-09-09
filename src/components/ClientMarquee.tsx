import React from 'react';

const CLIENT_LOGOS = [
  'https://makerspacemasters.com/images/client/Asset 101@2x.png',
  'https://makerspacemasters.com/images/client/Asset 102@2x.png',
  'https://makerspacemasters.com/images/client/Asset 103@2x.png',
  'https://makerspacemasters.com/images/client/Asset 104@2x 2.png',
  'https://makerspacemasters.com/images/client/Asset 105@2x.png',
  'https://makerspacemasters.com/images/client/Asset 106@2x.png',
  'https://makerspacemasters.com/images/client/Asset 107@2x.png',
  'https://makerspacemasters.com/images/client/Asset 108@2x.png',
  'https://makerspacemasters.com/images/client/Asset 109@2x.png',
  'https://makerspacemasters.com/images/client/Asset 110@2x.png',
  'https://makerspacemasters.com/images/client/Asset 111@2x.png',
  'https://makerspacemasters.com/images/client/Asset 112@2x.png',
  'https://makerspacemasters.com/images/client/Asset 113@2x.png',
  'https://makerspacemasters.com/images/client/Asset 114@2x.png',
  'https://makerspacemasters.com/images/client/Asset 115@2x.png',
  'https://makerspacemasters.com/images/client/Asset 116@2x.png',
  'https://makerspacemasters.com/images/client/Asset 117@2x.png',
  'https://makerspacemasters.com/images/client/Asset 118@2x.png',
  'https://makerspacemasters.com/images/client/Asset 119@2x.png',
  'https://makerspacemasters.com/images/client/Asset 120@2x.png',
  'https://makerspacemasters.com/images/client/Asset 121@2x.png',
  'https://makerspacemasters.com/images/client/Asset 122@2x.png',
  'https://makerspacemasters.com/images/client/Asset 123@2x.png',
  'https://makerspacemasters.com/images/client/Asset 124@2x.png',
  'https://makerspacemasters.com/images/client/Asset 125@2x.png',
];

export const ClientMarquee: React.FC = () => {
  return (
    <section className="py-20 md:py-24 px-4 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto mb-14 text-center">
        <h2 className="text-3xl md:text-5xl font-bold font-['Montserrat'] text-[#131313] mb-3 tracking-tight">
          Clients That Believe in Us
        </h2>
        <p className="text-base md:text-lg text-gray-600 font-medium">
          We're proud to have worked with institutions that share our passion for transformative education.
        </p>
      </div>

      {/* Infinite Marquee Container */}
      <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="animate-marquee flex items-center gap-12 sm:gap-16">
          {/* Double list for smooth endless loop */}
          {[...CLIENT_LOGOS, ...CLIENT_LOGOS].map((logo, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 h-16 sm:h-20 w-36 sm:w-44 flex items-center justify-center p-2 grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300 transform hover:scale-105"
            >
              <img
                src={logo}
                alt="Client Institution Logo"
                className="max-h-full max-w-full object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

