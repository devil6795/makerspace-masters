import React from 'react';
import { X, Wrench, GraduationCap } from 'lucide-react';

export interface ModuleDetailData {
  title: string;
  image: string;
  tools: string[];
  outcomes: string[];
}

interface ModuleModalProps {
  data: ModuleDetailData | null;
  onClose: () => void;
}

export const ModuleModal: React.FC<ModuleModalProps> = ({ data, onClose }) => {
  if (!data) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl bg-[#F5F5F5] rounded-3xl overflow-hidden shadow-2xl border border-white/80 p-6 md:p-8 animate-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-[#131313] flex items-center justify-center shadow-md transition-all z-10"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Left: Image */}
          <div className="md:col-span-5">
            <div className="w-full h-64 md:h-80 rounded-2xl overflow-hidden shadow-lg bg-gray-200">
              <img
                src={data.image}
                alt={data.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right: Info */}
          <div className="md:col-span-7 space-y-6">
            <div>
              <span className="text-xs uppercase tracking-wider font-bold text-[#5786AB]">
                Innovation Module
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-['Montserrat'] text-[#131313] mt-1">
                {data.title}
              </h3>
            </div>

            {/* Tools list */}
            <div>
              <div className="flex items-center gap-2 text-sm font-bold text-gray-800 mb-2.5">
                <Wrench className="w-4 h-4 text-[#022640]" />
                <span>Tools & Equipment:</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-medium text-gray-700">
                {data.tools.map((tool, idx) => (
                  <div
                    key={idx}
                    className="bg-white/80 px-3 py-1.5 rounded-lg border border-black/5"
                  >
                    • {tool}
                  </div>
                ))}
              </div>
            </div>

            {/* Outcomes list */}
            <div>
              <div className="flex items-center gap-2 text-sm font-bold text-gray-800 mb-2.5">
                <GraduationCap className="w-4 h-4 text-[#022640]" />
                <span>Learning Outcomes:</span>
              </div>
              <div className="space-y-1.5 text-xs font-medium text-gray-700">
                {data.outcomes.map((outcome, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2 bg-white/80 p-2 rounded-lg border border-black/5"
                  >
                    <span className="text-[#022640] font-bold">✓</span>
                    <span>{outcome}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

