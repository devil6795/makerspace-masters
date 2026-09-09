import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqTab {
  id: string;
  label: string;
  faqs: FaqItem[];
}

const FAQ_DATA: FaqTab[] = [
  {
    id: 'tab1',
    label: 'Getting Started & Setup',
    faqs: [
      {
        question: 'How long does makerspace setup take?',
        answer:
          'Our complete installation process typically requires 4-6 weeks from contract signing to full operation. This includes space planning and design (1-2 weeks), equipment installation and testing (2-3 weeks), plus comprehensive teacher training (1 week intensive program). We also provide ongoing support to ensure smooth operation from day one.',
      },
      {
        question: 'What age groups do you serve?',
        answer:
          'We design programs for learners aged 6-18+ with age-appropriate curricula: Elementary students focus on creativity and basic collaboration skills; Middle schoolers engage in design thinking and STEM integration; High school students tackle advanced projects and entrepreneurship; College and adult programs available through specialized partnerships.',
      },
      {
        question: 'Do you provide teacher training support?',
        answer:
          'Absolutely! Our support includes a 40-hour initial certification program covering all equipment and curriculum integration. Teachers receive monthly workshops, online resources, peer networking opportunities, and annual conferences. Plus, our 24/7 help desk provides technical and educational guidance whenever needed.',
      },
      {
        question: 'What space requirements are needed?',
        answer:
          'We recommend a minimum of 800 square feet for basic functionality, though 1,200-1,500 square feet allows for optimal program offerings. Our flexible design approach adapts to existing classroom layouts and constraints while ensuring all installations meet educational facility safety standards.',
      },
      {
        question: 'Are there ongoing maintenance costs involved?',
        answer:
          'Annual maintenance packages range based on equipment level and usage. This covers equipment servicing and repairs, software updates and new features, replacement parts and consumables, plus optional extended warranties and priority support.',
      },
    ],
  },
  {
    id: 'tab2',
    label: 'Setting up in Schools',
    faqs: [
      {
        question: 'How do makerspaces improve student outcomes?',
        answer:
          'Our programs deliver measurable results with 25% average improvement in STEM subject scores and 85% of students reporting increased motivation for learning. Students develop enhanced problem-solving, collaboration, and creative thinking abilities while gaining skills directly applicable to 21st-century careers.',
      },
      {
        question: 'What real-world projects do students create?',
        answer:
          'Projects span from community problem-solving initiatives addressing local challenges to technology development like apps and IoT devices. Students also launch entrepreneurial ventures with mentorship support and participate in global collaborations connecting classrooms worldwide.',
      },
      {
        question: 'How does this integrate with curriculum?',
        answer:
          'Our programs align seamlessly with educational standards including CBSE, ICSE, IB, Common Core, and NGSS. We integrate mathematics, science, art, and social studies into making projects with portfolio-based evaluation and ready-made lesson plans.',
      },
      {
        question: 'What skills do students actually develop?',
        answer:
          'Students gain both technical skills (3D design, coding, electronics, rapid prototyping) and essential soft skills (communication, teamwork, leadership). We focus on developing a growth mindset, resilience, and creative confidence.',
      },
      {
        question: 'Do you track learning progress effectively?',
        answer:
          'Yes, through comprehensive digital portfolios where students document projects and reflections over time. Our system includes clear competency mapping showing skill progression and regular analytics reports.',
      },
    ],
  },
  {
    id: 'tab3',
    label: 'Technology & Resources',
    faqs: [
      {
        question: 'What equipment is included initially?',
        answer:
          'Your makerspace includes digital fabrication tools (3D printers, laser cutters), electronics and robotics kits (Arduino, sensors, programmable platforms), traditional making supplies (woodworking, pottery), and computing resources with design software licenses and cloud storage access.',
      },
      {
        question: 'How do you handle technology updates?',
        answer:
          'We maintain cutting-edge capabilities through annual equipment refreshes and automatic software updates. Our strategic technology roadmap ensures long-term relevance, with community feedback driving equipment selection.',
      },
      {
        question: 'Is technical support available continuously?',
        answer:
          'Our comprehensive support includes a 24/7 help desk for urgent issues via phone, email, and chat; remote assistance with screen sharing; scheduled maintenance; and ongoing user training to build independence.',
      },
      {
        question: 'What safety measures are implemented?',
        answer:
          'Safety is paramount with age-appropriate equipment access based on student maturity and training levels. We provide comprehensive safety protocols, protective equipment, and clear supervision standards with proper adult-to-student ratios.',
      },
      {
        question: 'Can we customize our equipment selection?',
        answer:
          'Absolutely! We conduct thorough needs assessments to understand your curriculum goals and student interests. Our scalable packages match available budgets while addressing regional industry needs.',
      },
    ],
  },
  {
    id: 'tab4',
    label: 'Partnership & Franchise',
    faqs: [
      {
        question: 'What does Masters+ franchise include?',
        answer:
          'Our comprehensive franchise package covers complete setup (space design, equipment installation), extensive training and certification programs, marketing support with branding materials, and ongoing partnership benefits including access to our global network.',
      },
      {
        question: 'What are the franchise investment requirements?',
        answer:
          'Initial investment packages are transparently structured depending on size and location, covering equipment packages, training and launch support, and working capital for first-year operations without hidden fees.',
      },
      {
        question: 'Do you provide ongoing business support?',
        answer:
          'Yes, our ongoing support includes operational guidance for scheduling and program delivery, marketing assets and campaign strategies, financial planning tools, plus regular franchisee meetings for peer networking.',
      },
      {
        question: 'How quickly can franchises become profitable?',
        answer:
          'Most locations achieve break-even within 18-24 months with strong ongoing renewal patterns. Success depends on location, community engagement, and program quality.',
      },
      {
        question: 'What territories are currently available?',
        answer:
          'We are actively expanding across India, North America, Europe, the Middle East, and the Asia-Pacific region with protected geographic territories.',
      },
    ],
  },
  {
    id: 'tab5',
    label: 'Community & Support',
    faqs: [
      {
        question: 'How does the global community work?',
        answer:
          'Our digital platform serves as a hub for resource sharing and peer connection, facilitating global projects that connect students across cultures. Members access best practice webinars and annual conferences.',
      },
      {
        question: 'What ongoing support do schools receive?',
        answer:
          'Schools benefit from monthly check-ins with dedicated success managers, quarterly curriculum updates with new projects and lessons, professional development workshops, and regional peer networks.',
      },
      {
        question: 'Can students collaborate with international peers?',
        answer:
          'Yes! Our global project platform creates structured initiatives connecting classrooms worldwide, culminating in international student showcase opportunities through exhibitions and hackathons.',
      },
      {
        question: 'How do you measure program success?',
        answer:
          'We track student engagement levels, skill development metrics, teacher satisfaction, parent feedback, and long-term alumni tracking for college success and career outcomes.',
      },
      {
        question: 'What resources are available for educators?',
        answer:
          'Educators access our comprehensive digital library with thousands of project templates and lesson plans, video tutorials for equipment training, and active peer forums for sharing innovations.',
      },
    ],
  },
];

export const FaqSection: React.FC = () => {
  const [activeTabId, setActiveTabId] = useState('tab1');
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);

  const activeTab = FAQ_DATA.find((t) => t.id === activeTabId) || FAQ_DATA[0];

  const toggleFaq = (idx: number) => {
    setOpenFaqIdx((prev) => (prev === idx ? null : idx));
  };

  return (
    <section id="faq" className="py-20 md:py-28 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-bold font-['Montserrat'] text-[#131313] mb-3 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-base md:text-lg text-gray-600 font-medium">
            Quick answers, clear guidance
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {FAQ_DATA.map((tab) => {
            const isActive = tab.id === activeTabId;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTabId(tab.id);
                  setOpenFaqIdx(0);
                }}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? 'bg-[#022640] text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {activeTab.faqs.map((faq, idx) => {
            const isOpen = openFaqIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-black/5 bg-[#FAFAFA] overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left font-semibold text-base md:text-lg text-[#131313] font-['Montserrat'] hover:text-[#022640] transition-colors"
                >
                  <span className="pr-4">{faq.question}</span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-all ${
                      isOpen ? 'bg-[#022640] text-white' : 'bg-gray-200 text-gray-700'
                    }`}
                  >
                    {isOpen ? (
                      <Minus className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm md:text-base text-gray-600 leading-relaxed animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

