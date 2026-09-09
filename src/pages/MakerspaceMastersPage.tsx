import React from 'react';
import { Compass, Cpu, ShieldCheck } from 'lucide-react';
import { IndustrySoftware } from '../components/IndustrySoftware';
import { InnovationModules } from '../components/InnovationModules';

interface MakerspaceMastersPageProps {
  onOpenBookingModal: () => void;
}

export const MakerspaceMastersPage: React.FC<MakerspaceMastersPageProps> = ({ onOpenBookingModal }) => {
  return (
    <div className="pt-28 pb-20 px-4 bg-[#FBFBFB]">
      <div className="max-w-7xl mx-auto space-y-24">
        {/* Hero Section */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#022640] via-[#043354] to-[#5786AB] p-8 sm:p-14 md:p-20 text-white shadow-2xl">
          <div className="max-w-3xl space-y-6 z-10 relative">
            <span className="text-xs font-bold text-[#FE9F99] uppercase tracking-wider bg-white/10 px-4 py-1.5 rounded-full">
              For Schools (K-12)
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-['Montserrat'] leading-tight tracking-tight">
              Makerspace Masters
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 leading-relaxed font-normal">
              State-of-the-art innovation labs for future-ready schools. We turn classrooms into creative playgrounds where curiosity transforms into tangible prototypes.
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <button
                onClick={onOpenBookingModal}
                className="bg-white text-[#022640] hover:bg-gray-100 font-bold px-8 py-4 rounded-full text-sm transition-all shadow-lg hover:shadow-xl"
              >
                Book Your School Demo
              </button>
              <a
                href="#why-makerspace"
                className="border border-white/40 hover:bg-white/10 text-white font-semibold px-8 py-4 rounded-full text-sm transition-colors"
              >
                Explore Lab Features
              </a>
            </div>
          </div>

          <div className="absolute right-0 bottom-0 top-0 w-1/2 opacity-20 pointer-events-none hidden lg:block">
            <img
              src="https://makerspacemasters.com/images/index/schools-tab.png"
              alt="Makerspace Schools"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Why Makerspace Masters Section */}
        <div id="why-makerspace" className="space-y-12">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold font-['Montserrat'] text-[#131313] mb-3">
              Why Makerspace Masters?
            </h2>
            <p className="text-base md:text-lg text-gray-600 font-medium">
              Applied learning, real impact. Moving beyond rote textbooks into immersive hands-on capability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-8 border border-black/5 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#FE9F99]/20 flex items-center justify-center">
                <Compass className="w-6 h-6 text-[#131313]" />
              </div>
              <h3 className="text-xl font-bold font-['Montserrat'] text-[#131313]">Design Thinking Core</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Students identify real problems, empathize with users, ideate creative solutions, prototype with real tools, and iterate continuously.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-black/5 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#C9F2B6]/30 flex items-center justify-center">
                <Cpu className="w-6 h-6 text-[#131313]" />
              </div>
              <h3 className="text-xl font-bold font-['Montserrat'] text-[#131313]">NEP 2020 Aligned</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Fully conforms to the National Education Policy mandate for experiential learning, vocational skill integration, and STEM empowerment.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-black/5 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#ABBCFE]/30 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6 text-[#131313]" />
              </div>
              <h3 className="text-xl font-bold font-['Montserrat'] text-[#131313]">Safety First Engineering</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Every machine, tool rack, electrical connection, and ventilation circuit adheres to rigorous institutional safety benchmarks.
              </p>
            </div>
          </div>
        </div>

        {/* The Advantage 4 Pillars */}
        <div className="bg-white rounded-3xl p-8 sm:p-14 border border-black/5 shadow-sm space-y-12">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-['Montserrat'] text-[#131313] mb-3">
              The Makerspace Masters Advantage
            </h2>
            <p className="text-base text-gray-600">
              A comprehensive turnkey solution covering every dimension of lab setup and continuous operations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-3 p-6 rounded-2xl bg-gray-50 border border-black/5">
              <div className="w-10 h-10 rounded-xl bg-[#022640] text-white flex items-center justify-center font-bold">
                1
              </div>
              <h4 className="font-bold text-lg font-['Montserrat'] text-[#131313]">Lab Design &amp; Build</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Custom architectural 3D planning, heavy-duty modular maker benches, tool storage, and optimal safety workflow layout.
              </p>
            </div>

            <div className="space-y-3 p-6 rounded-2xl bg-gray-50 border border-black/5">
              <div className="w-10 h-10 rounded-xl bg-[#022640] text-white flex items-center justify-center font-bold">
                2
              </div>
              <h4 className="font-bold text-lg font-['Montserrat'] text-[#131313]">Curriculum &amp; LMS</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Structured grade-wise learning tracks with digital lesson plans, step-by-step videos, and interactive competency rubrics.
              </p>
            </div>

            <div className="space-y-3 p-6 rounded-2xl bg-gray-50 border border-black/5">
              <div className="w-10 h-10 rounded-xl bg-[#022640] text-white flex items-center justify-center font-bold">
                3
              </div>
              <h4 className="font-bold text-lg font-['Montserrat'] text-[#131313]">Tools &amp; Equipment</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Industrial grade 3D printers, laser cutters, electronics testing stations, robotics components, and woodworking setups.
              </p>
            </div>

            <div className="space-y-3 p-6 rounded-2xl bg-gray-50 border border-black/5">
              <div className="w-10 h-10 rounded-xl bg-[#022640] text-white flex items-center justify-center font-bold">
                4
              </div>
              <h4 className="font-bold text-lg font-['Montserrat'] text-[#131313]">Teacher Training</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                40-hour immersive faculty development program, monthly workshops, round-the-clock technical helpline, and pedagogy refreshers.
              </p>
            </div>
          </div>
        </div>

        {/* 18 Innovation Modules Embedded */}
        <InnovationModules />

        {/* Software Grid Embedded */}
        <IndustrySoftware />

        {/* Bottom CTA Banner */}
        <div className="bg-[#131313] rounded-3xl p-8 sm:p-14 text-white text-center space-y-6 shadow-xl">
          <h2 className="text-3xl sm:text-4xl font-bold font-['Montserrat']">
            Ready to Build a Future-Ready School?
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-sm sm:text-base">
            Book a complimentary consultation with our school lab architecture specialists and get a tailored space proposal for your campus.
          </p>
          <div>
            <button
              onClick={onOpenBookingModal}
              className="bg-[#FE9F99] text-[#131313] hover:bg-[#ffb5b0] font-bold px-8 py-4 rounded-full text-sm transition-all shadow-lg"
            >
              Request School Proposal
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
