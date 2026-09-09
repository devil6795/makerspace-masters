import React, { useState } from 'react';
import { BookOpen, Check, ArrowRight, Download, Cpu, Leaf, HeartHandshake, ChevronDown, ChevronUp, Sparkles, Award } from 'lucide-react';

interface KaushalBodhPageProps {
  onOpenBookingModal: () => void;
}

const DOMAIN_DATA = [
  {
    id: 'life-forms',
    name: 'Work with Life Forms',
    icon: Leaf,
    color: '#C9F2B6',
    textColor: '#1a472a',
    desc: 'Understanding biological ecosystems, soil vitality, precision farming, and sustainable agricultural technologies.',
    grades: [
      {
        grade: 'Class 6',
        project: 'Smart Composting & Soil Vitality Monitoring',
        outcomes: 'Microbial activity, moisture balance, decomposition sensors, and organic fertility.'
      },
      {
        grade: 'Class 7',
        project: 'Hydroponic Systems & Controlled Environment Agriculture',
        outcomes: 'Nutrient solution circulation, pH balancing, automated water delivery, and urban farming.'
      },
      {
        grade: 'Class 8',
        project: 'Bio-Sensory Environmental Logging & Micro-Greens',
        outcomes: 'Environmental telemetry, sensor data logging, air quality monitoring, and botanical automation.'
      },
    ],
  },
  {
    id: 'materials-machines',
    name: 'Work with Materials & Machines',
    icon: Cpu,
    color: '#FE9F99',
    textColor: '#5a1e1b',
    desc: 'Transforming wood, polymers, metals, and electronic circuits into functioning electro-mechanical solutions.',
    grades: [
      {
        grade: 'Class 6',
        project: 'Mechanical Automata & Precision Joinery',
        outcomes: 'Hand-tool safety, mortise & tenon joints, cam profiles, gear ratios, and kinetic motion.'
      },
      {
        grade: 'Class 7',
        project: 'Embedded Circuits & Microcontroller Logic',
        outcomes: 'Breadboard prototyping, logic gates, sensor actuation, and introductory C++/Block code.'
      },
      {
        grade: 'Class 8',
        project: 'Additive Digital Fabrication & Autonomous Rovers',
        outcomes: '3D parametric CAD modeling, slicing algorithms, mechanical chassis design, and wireless telemetry.'
      },
    ],
  },
  {
    id: 'human-services',
    name: 'Human Services',
    icon: HeartHandshake,
    color: '#ABBCFE',
    textColor: '#1e2d63',
    desc: 'Empathy-driven design, universal accessibility aids, civic infrastructure, and human-centric community tools.',
    grades: [
      {
        grade: 'Class 6',
        project: 'Ergonomic Classroom & Campus Enhancements',
        outcomes: 'Human factors engineering, user interviews, anthropometric measurement, and rapid cardboard prototyping.'
      },
      {
        grade: 'Class 7',
        project: 'Assistive Tech for Differently-Abled Peers',
        outcomes: 'Tactile navigational aids for visually impaired, ultrasonic proximity feedback, and mobility mechanisms.'
      },
      {
        grade: 'Class 8',
        project: 'Civic Resilience & Disaster Mitigation Units',
        outcomes: 'Emergency telemetry, rapid clean-water filtration, portable power distribution, and Kaushal Mela showcase.'
      },
    ],
  },
];

const DELIVERY_PILLARS = [
  {
    step: '01',
    title: 'Lab Design & Safe Infrastructure',
    desc: 'We architect and outfit the complete physical maker space — heavy-duty workbenches, certified hand & digital tools, PPE safety enclosures, and dedicated zones matching all three NCERT domains.',
  },
  {
    step: '02',
    title: 'NCERT-Mapped 110-Hour Curriculum',
    desc: 'A progressive, hands-on pedagogical framework spanning 110 hours per academic session across Classes 6, 7, and 8 — perfectly synchronizing practical making with CBSE requirements.',
  },
  {
    step: '03',
    title: 'Faculty Empowerment & Master Training',
    desc: 'We conduct multi-tier training bootcamps for your school teachers, providing daily lesson execution guides, troubleshooting protocols, and continuous year-round academic facilitation.',
  },
  {
    step: '04',
    title: 'Assessment Rubrics & Kaushal Mela',
    desc: 'Replacing stressful exams with real project portfolios, rubrics for collaborative design thinking, and end-of-year Kaushal Mela exhibitions celebrating student inventions.',
  },
];

const FAQS = [
  {
    q: 'Is Kaushal Bodh mandatory for all CBSE-affiliated schools?',
    a: 'Yes. In strict alignment with the National Education Policy (NEP 2020) and latest CBSE circulars, Kaushal Bodh is a compulsory skill subject for all students in Classes 6, 7, and 8 starting from the 2025–26 academic session.',
  },
  {
    q: 'How many hours must be allocated in the academic timetable?',
    a: 'A total of 110 hours per academic year (approximately 4 to 5 periods every week) must be woven into the standard school timetable for each enrolled section.',
  },
  {
    q: 'Can existing science or computer laboratories suffice?',
    a: 'Standard labs lack the necessary multi-material worktables, safety ventilation, digital fabrication gear (3D printers, laser engravers), and biological cultivation modules. We assist schools with smart retrofits to transform existing underutilized spaces into certified Maker Hubs without high reconstruction costs.',
  },
  {
    q: 'How are students graded and evaluated in Kaushal Bodh?',
    a: 'There are no conventional rote memorization or pen-and-paper tests. Evaluation is strictly portfolio-based, assessing problem-solving logbooks, design iterations, teamwork, safe tool stewardship, and practical presentation at the annual Kaushal Mela.',
  },
  {
    q: 'Does Makerspace Masters provide continuous teacher support?',
    a: 'Yes. Our master facilitators conduct on-site and hybrid workshops, supply step-by-step digital curriculum portals, issue teacher certifications, and perform quarterly academic check-ins to ensure smooth execution.',
  },
];

export const KaushalBodhPage: React.FC<KaushalBodhPageProps> = ({ onOpenBookingModal }) => {
  const [activeDomain, setActiveDomain] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="pt-28 pb-20 px-4 bg-[#FBFBFB]">
      <div className="max-w-7xl mx-auto space-y-24">
        {/* Hero Section */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#022640] via-[#043354] to-[#131313] p-8 sm:p-14 md:p-20 text-white shadow-2xl">
          <div className="max-w-3xl space-y-6 z-10 relative">
            <span className="text-xs font-bold text-[#C9F2B6] uppercase tracking-wider bg-white/10 px-4 py-1.5 rounded-full inline-block">
              CBSE Mandatory Skill Subject (NEP 2020)
            </span>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold font-[Montserrat] tracking-tight">
              Kaushal Bodh
            </h1>
            <p className="text-xl sm:text-2xl font-semibold text-gray-200">
              What It Is, What It Demands, and How to Get It Right.
            </p>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-normal">
              A comprehensive turnkey execution blueprint for School Principals, Chairpersons, and Academic Directors navigating India&apos;s compulsory skill curriculum for Classes 6 to 8, effective 2025–26.
            </p>

            {/* 3 Mandate Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="bg-white/10 backdrop-blur-md px-4 py-3.5 rounded-2xl border border-white/15 text-center">
                <span className="text-xs text-[#FE9F99] font-bold block mb-1">CBSE Directive</span>
                <span className="text-sm font-semibold">Mandatory 2025–26</span>
              </div>
              <div className="bg-white/10 backdrop-blur-md px-4 py-3.5 rounded-2xl border border-white/15 text-center">
                <span className="text-xs text-[#C9F2B6] font-bold block mb-1">Timetable Load</span>
                <span className="text-sm font-semibold">110 Hours / Year</span>
              </div>
              <div className="bg-white/10 backdrop-blur-md px-4 py-3.5 rounded-2xl border border-white/15 text-center">
                <span className="text-xs text-[#ABBCFE] font-bold block mb-1">Learning Arc</span>
                <span className="text-sm font-semibold">9 Capstones (3 Years)</span>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <button
                onClick={onOpenBookingModal}
                className="bg-[#C9F2B6] hover:bg-[#b2e89d] text-[#022640] font-bold px-8 py-4 rounded-full text-sm transition-all shadow-lg hover:shadow-xl cursor-pointer"
              >
                Book School Consultation
              </button>
              <a
                href="https://makerspacemasters.com/files/Kaushal_Bodh.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/40 hover:bg-white/10 text-white font-semibold px-8 py-4 rounded-full text-sm transition-colors flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span>Download Framework PDF</span>
              </a>
            </div>
          </div>

          <div className="absolute right-0 bottom-0 top-0 w-1/2 opacity-20 pointer-events-none hidden lg:block">
            <img
              src="https://makerspacemasters.com/images/kaushal/kaushal.webp"
              alt="Kaushal Bodh Lab"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Why Kaushal Bodh Matters */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-xs font-bold text-[#022640] uppercase tracking-wider bg-[#022640]/10 px-3 py-1 rounded-full">
              The Regulatory Mandate
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#022640] tracking-tight">
              Moving from Theoretical Knowledge to Tangible Craftsmanship
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Kaushal Bodh represents the most ambitious curricular transformation in Indian school education in decades. Mandated under NEP 2020 by CBSE and NCERT, it replaces purely didactic lectures with tactile, multidisciplinary maker literacy.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Every student in Classes 6, 7, and 8 must now engage in hands-on design, construction, scientific testing, and community-oriented engineering across three distinct domains of work.
            </p>
            <div className="space-y-3 pt-2">
              {[
                'Compulsory for all CBSE-affiliated private, public, and government schools',
                'Requires 110 structured instructional hours per grade per year',
                'Assessed via experiential portfolios rather than stressful written examinations',
                'Culminates in student-led public demonstrations at the annual Kaushal Mela',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#C9F2B6] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-[#022640]" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-lg border border-gray-100 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-[#022640] flex items-center justify-center text-white">
                <BookOpen className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#022640]">The Implementation Challenge</h3>
                <p className="text-xs text-gray-500">What keeps school leaders up at night</p>
              </div>
            </div>

            <div className="space-y-4 text-sm text-gray-600">
              <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100">
                <span className="font-bold text-[#022640] block mb-1">Infrastructure Deficiency</span>
                Standard science labs lack mechanical woodworking benches, soldering stations, safety guards, and 3D printing equipment.
              </div>
              <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100">
                <span className="font-bold text-[#022640] block mb-1">Faculty Readiness</span>
                Teachers trained in traditional lecture delivery lack structured practical maker pedagogy and prototyping confidence.
              </div>
              <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100">
                <span className="font-bold text-[#022640] block mb-1">Timetable & Resource Strain</span>
                Sourcing raw materials, managing consumables, and carving out 110 hours without disrupting core academics.
              </div>
            </div>
          </div>
        </div>

        {/* The 3 Core NCERT Work Domains */}
        <div className="space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-bold text-[#022640] uppercase tracking-wider bg-[#022640]/10 px-3 py-1 rounded-full">
              Curriculum Architecture
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#022640] tracking-tight">
              The Three Core NCERT Work Domains
            </h2>
            <p className="text-gray-600">
              Explore how our turn-key curriculum activates each domain with progressive grade-level projects for Classes 6, 7, and 8.
            </p>
          </div>

          {/* Domain Selector Tabs */}
          <div className="flex flex-wrap justify-center gap-3">
            {DOMAIN_DATA.map((domain, index) => {
              const Icon = domain.icon;
              const isActive = activeDomain === index;
              return (
                <button
                  key={domain.id}
                  onClick={() => setActiveDomain(index)}
                  className={`flex items-center gap-3 px-6 py-3.5 rounded-full font-bold text-sm transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#022640] text-white shadow-md scale-105'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-[#C9F2B6]' : 'text-gray-500'}`} />
                  <span>{domain.name}</span>
                </button>
              );
            })}
          </div>

          {/* Active Domain Detail Card */}
          {(() => {
            const current = DOMAIN_DATA[activeDomain];
            const Icon = current.icon;
            return (
              <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-gray-100 space-y-8">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-gray-100 pb-6">
                  <div className="flex items-center gap-4">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm"
                      style={{ backgroundColor: current.color }}
                    >
                      <Icon className="w-7 h-7" style={{ color: current.textColor }} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-extrabold text-[#022640]">{current.name}</h3>
                      <p className="text-sm text-gray-500 mt-0.5">{current.desc}</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold px-3.5 py-1.5 rounded-full bg-gray-100 text-gray-700">
                    Domain {activeDomain + 1} of 3
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {current.grades.map((g, i) => (
                    <div
                      key={i}
                      className="rounded-2xl p-6 bg-[#FBFBFB] border border-gray-100 hover:border-gray-300 transition-all space-y-4 flex flex-col justify-between"
                    >
                      <div className="space-y-2">
                        <span className="text-xs font-extrabold uppercase tracking-wider text-[#022640] bg-white px-3 py-1 rounded-full inline-block shadow-xs border border-gray-200">
                          {g.grade}
                        </span>
                        <h4 className="text-lg font-bold text-[#022640] leading-snug">{g.project}</h4>
                      </div>
                      <div className="pt-3 border-t border-gray-200/60">
                        <span className="text-xs text-gray-400 font-semibold block mb-1">Key Outcomes & Skills</span>
                        <p className="text-xs text-gray-600 leading-relaxed">{g.outcomes}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })()}
        </div>

        {/* 4 Pillars of Turnkey Implementation */}
        <div className="space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-bold text-[#022640] uppercase tracking-wider bg-[#022640]/10 px-3 py-1 rounded-full">
              Our Turnkey Solution
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#022640] tracking-tight">
              The 4 Pillars of Effortless Compliance
            </h2>
            <p className="text-gray-600">
              Makerspace Masters manages every facet of Kaushal Bodh implementation so school leaders can focus on academic excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {DELIVERY_PILLARS.map((pillar, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-all relative overflow-hidden flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#022640] text-[#C9F2B6] font-extrabold flex items-center justify-center text-lg shadow-sm group-hover:scale-110 transition-transform">
                    {pillar.step}
                  </div>
                  <h3 className="text-xl font-bold text-[#022640] leading-snug">{pillar.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{pillar.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Kaushal Mela Callout */}
        <div className="bg-gradient-to-r from-[#022640] to-[#0a4872] rounded-3xl p-8 sm:p-14 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-4 max-w-2xl">
            <div className="flex items-center gap-2 text-[#C9F2B6] text-xs font-bold uppercase tracking-wider">
              <Award className="w-4 h-4" />
              <span>Annual Culmination Event</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
              Kaushal Mela: Celebrating Young Makers
            </h3>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              We guide your school in conducting an awe-inspiring annual Kaushal Mela where parents, alumni, and community leaders witness student prototypes in action — transforming regulatory compliance into a marquee school brand showcase.
            </p>
          </div>
          <button
            onClick={onOpenBookingModal}
            className="shrink-0 bg-[#C9F2B6] hover:bg-[#b2e89d] text-[#022640] font-bold px-8 py-4 rounded-full text-sm transition-all shadow-lg hover:shadow-xl cursor-pointer"
          >
            Plan Your Kaushal Mela
          </button>
        </div>

        {/* Frequently Asked Questions */}
        <div className="space-y-8 max-w-4xl mx-auto">
          <div className="text-center space-y-3">
            <span className="text-xs font-bold text-[#022640] uppercase tracking-wider bg-[#022640]/10 px-3 py-1 rounded-full">
              Leadership FAQs
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#022640]">
              Frequently Asked Questions for School Leaders
            </h2>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full text-left p-6 flex items-center justify-between gap-4 font-bold text-[#022640] hover:text-[#0a4872] transition-colors cursor-pointer"
                  >
                    <span className="text-base sm:text-lg">{faq.q}</span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 shrink-0 text-[#022640]" />
                    ) : (
                      <ChevronDown className="w-5 h-5 shrink-0 text-gray-400" />
                    )}
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 text-sm text-gray-600 leading-relaxed border-t border-gray-50 pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA Card */}
        <div className="bg-white rounded-3xl p-8 sm:p-14 border border-gray-200 shadow-xl text-center space-y-6 max-w-4xl mx-auto">
          <div className="w-16 h-16 rounded-full bg-[#022640]/10 text-[#022640] flex items-center justify-center mx-auto">
            <Sparkles className="w-8 h-8" />
          </div>
          <div className="space-y-2">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#022640]">
              Get Your School Ready for the 2025–26 Academic Year
            </h3>
            <p className="text-gray-600 max-w-xl mx-auto text-sm sm:text-base">
              Schedule a personalized Kaushal Bodh diagnostic with our senior academic specialists to review your lab spaces, timetable adjustments, and budget allocations.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <button
              onClick={onOpenBookingModal}
              className="bg-[#022640] hover:bg-[#043354] text-white font-bold px-8 py-4 rounded-full text-sm transition-all shadow-md hover:shadow-lg cursor-pointer flex items-center gap-2"
            >
              <span>Book Strategy Session</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="https://makerspacemasters.com/files/Kaushal_Bodh.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-300 hover:bg-gray-50 text-gray-700 font-semibold px-8 py-4 rounded-full text-sm transition-colors flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span>Download Whitepaper</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};