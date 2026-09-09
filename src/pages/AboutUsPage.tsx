import React from 'react';
import { Target, Sparkles, HeartHandshake } from 'lucide-react';

interface AboutUsPageProps {
  onOpenBookingModal: () => void;
}

const TIMELINE = [
  { year: '2018', title: 'Foundation', desc: 'Started with a vision to transform traditional rote classrooms into dynamic, hands-on maker ecosystems.' },
  { year: '2020', title: 'Strategic Partnerships', desc: 'Partnered with premier K-12 institutions and universities across India to pilot integrated maker curricula.' },
  { year: '2022', title: 'Business Expansion', desc: 'Scaled to 150+ operational labs, launching dedicated mechatronics, 3D printing, and composite engineering pods.' },
  { year: '2023', title: 'Global Recognition', desc: 'Recognized for pioneering NEP-2020 aligned experiential curricula and design-thinking frameworks.' },
  { year: '2024', title: 'Global Expansion', desc: 'Established international offices in Sheridan, Wyoming (USA) and Dubai Digital Park (UAE).' },
  { year: '2025', title: 'Masters Connect Launch', desc: 'Deployed Masters Connect platform connecting over 50,000+ students and educators worldwide.' },
];

const TEAM = [
  {
    name: 'Darpan Sharma',
    role: 'Founder & CEO',
    bio: 'Visionary educator and innovator dedicated to empowering the next generation with real-world maker skills and entrepreneurial mindsets.',
    image: 'https://makerspacemasters.com/images/blog/blog-3.png',
  },
  {
    name: 'Yatharth',
    role: "Founder's Office & Strategy",
    bio: "Works at the intersection of product, strategy, and execution within Founder's Office, driving business outcomes through structured operational systems.",
    image: 'https://makerspacemasters.com/images/blog/blog-2.png',
  },
  {
    name: 'Lab Architecture Team',
    role: 'Design & Engineering',
    bio: 'Specialized industrial architects and engineers who design, fabricate, and install state-of-the-art makerspaces compliant with international safety standards.',
    image: 'https://makerspacemasters.com/images/blog/blog-1.png',
  },
];

export const AboutUsPage: React.FC<AboutUsPageProps> = ({ onOpenBookingModal }) => {
  return (
    <div className="pt-28 pb-20 px-4 bg-[#FBFBFB]">
      <div className="max-w-7xl mx-auto space-y-24">
        {/* Hero Banner */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <span className="text-xs font-bold text-[#5786AB] uppercase tracking-wider bg-[#5786AB]/10 px-4 py-1.5 rounded-full">
            Who We Are
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-['Montserrat'] text-[#131313] tracking-tight leading-tight">
            Our Story, Our Purpose
          </h1>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-normal">
            We believe that learning happens best when minds think and hands build. We don't just build labs — we build launchpads for tomorrow's creators, problem-solvers, and leaders.
          </p>
        </div>

        {/* Vision, Mission, Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-3xl p-8 border border-black/5 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#FE9F99]/20 flex items-center justify-center text-[#FE9F99]">
              <Target className="w-6 h-6 text-[#131313]" />
            </div>
            <h3 className="text-2xl font-bold font-['Montserrat'] text-[#131313]">Our Mission</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              To democratize access to world-class innovation infrastructure and practical maker education for schools, colleges, and community centers worldwide.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-black/5 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#C9F2B6]/30 flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-[#131313]" />
            </div>
            <h3 className="text-2xl font-bold font-['Montserrat'] text-[#131313]">Our Vision</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              To foster a global generation of confident builders who can tackle 21st-century technological, social, and environmental challenges through design thinking.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-black/5 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#ABBCFE]/30 flex items-center justify-center">
              <HeartHandshake className="w-6 h-6 text-[#131313]" />
            </div>
            <h3 className="text-2xl font-bold font-['Montserrat'] text-[#131313]">Our Core Values</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Integrity, hands-on rigor, radical creativity, strict safety compliance, and continuous support for educators and institutions.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="space-y-12">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-['Montserrat'] text-[#131313] mb-3">
              People Behind The Transformation
            </h2>
            <p className="text-gray-600 text-base">
              A dedicated team of educators, engineers, and product strategists reshaping modern education.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TEAM.map((member, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl overflow-hidden border border-black/5 shadow-sm hover:shadow-xl transition-all duration-300 p-6 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="h-64 rounded-2xl overflow-hidden bg-gray-100">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold font-['Montserrat'] text-[#131313]">
                      {member.name}
                    </h4>
                    <span className="text-xs font-semibold text-[#5786AB]">
                      {member.role}
                    </span>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Growth Story Timeline */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 md:p-16 border border-black/5 shadow-sm space-y-12">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-['Montserrat'] text-[#131313] mb-3">
              Our Growth Story
            </h2>
            <p className="text-gray-600 text-base">
              From an ambitious idea to a global maker ecosystem impacting 50,000+ students.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {TIMELINE.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#FAFAFA] border border-black/5 space-y-2 hover:border-[#022640] transition-colors"
              >
                <span className="text-xs font-extrabold text-[#022640] bg-[#022640]/10 px-3 py-1 rounded-full">
                  {item.year}
                </span>
                <h4 className="text-lg font-bold font-['Montserrat'] text-[#131313] pt-2">
                  {item.title}
                </h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Global Presence */}
        <div className="bg-gradient-to-r from-[#022640] to-[#0d3b61] rounded-3xl p-8 sm:p-14 text-white text-center space-y-8">
          <div className="max-w-3xl mx-auto space-y-3">
            <h2 className="text-3xl sm:text-4xl font-bold font-['Montserrat']">
              Trusted Worldwide
            </h2>
            <p className="text-gray-300 text-sm sm:text-base">
              With operational hubs in India, the USA, and the UAE, we bring international innovation standards directly to your campus.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/15">
              <h4 className="font-bold text-lg mb-1">USA</h4>
              <p className="text-xs text-gray-300">Makerspace Masters LLC</p>
              <p className="text-xs text-gray-300 mt-2">30 N Gould St Ste R Sheridan, WY 82801</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/15">
              <h4 className="font-bold text-lg mb-1">India</h4>
              <p className="text-xs text-gray-300">Makerspace Masters India Pvt Ltd</p>
              <p className="text-xs text-gray-300 mt-2">B66, Sector 65, Noida, Uttar Pradesh 201301</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/15">
              <h4 className="font-bold text-lg mb-1">UAE</h4>
              <p className="text-xs text-gray-300">Makerspace Masters Innovations</p>
              <p className="text-xs text-gray-300 mt-2">Building A1, Dubai Digital Park, Dubai</p>
            </div>
          </div>

          <div className="pt-4">
            <button
              onClick={onOpenBookingModal}
              className="bg-white text-[#022640] hover:bg-gray-100 font-bold px-8 py-3.5 rounded-full text-sm transition-all shadow-lg hover:shadow-xl"
            >
              Collaborate With Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
