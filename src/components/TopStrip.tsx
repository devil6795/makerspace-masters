import React, { useState, useEffect } from 'react';

const WORDS = ['learners', 'builders', 'innovators'];

export const TopStrip: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % WORDS.length);
        setAnimating(false);
      }, 400);
    }, 2800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-[#131313] text-white text-xs md:text-sm py-1.5 px-4 flex items-center justify-center font-normal tracking-wide z-50 relative">
      <span>A creative ecosystem for&nbsp;</span>
      <span className="inline-block min-w-[85px] text-left font-semibold text-[#FE9F99]">
        <span
          className={`inline-block transition-all duration-400 transform ${
            animating ? '-translate-y-2 opacity-0' : 'translate-y-0 opacity-100'
          }`}
        >
          {WORDS[index]}
        </span>
      </span>
    </div>
  );
};

