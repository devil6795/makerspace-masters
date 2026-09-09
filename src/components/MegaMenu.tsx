import React, { useState } from 'react';
import { ChevronRight, ArrowUpRight, Building2, Layers } from 'lucide-react';

export interface MegaMenuItem {
  id: string;
  title: string;
  icon: string;
  subheading: string;
  links: {
    title: string;
    subtitle: string;
    path: string;
    cards: {
      image: string;
      title: string;
      description: string;
      path: string;
    }[];
  }[];
}

export const MEGA_MENU_DATA: MegaMenuItem[] = [
  {
    id: 'business-model',
    title: 'Business Model',
    icon: 'building',
    subheading: 'Business Model',
    links: [
      {
        title: 'Makerspace Masters',
        subtitle: 'For Schools',
        path: '#/makerspace-masters',
        cards: [
          {
            image: 'https://makerspacemasters.com/images/blog/MakerspaceMasters1.png',
            title: 'Why Makerspace Masters?',
            description: 'Applied learning, real impact',
            path: '#/makerspace-masters#why-makerspace',
          },
          {
            image: 'https://makerspacemasters.com/images/blog/MakerspaceMasters2.png',
            title: 'Beyond the Classroom',
            description: 'Real tools, real skills, real impact',
            path: '#/makerspace-masters#why-makerspace',
          },
        ],
      },
      {
        title: 'Masters X',
        subtitle: 'For Colleges & Institutions',
        path: '#/makerspace-masters-x',
        cards: [
          {
            image: 'https://makerspacemasters.com/images/blog/mastersx.png',
            title: 'Future-Ready Labs for Colleges & Institutions',
            description: 'Turn academic learning into entrepreneurial action',
            path: '#/makerspace-masters-x#why-masters-x',
          },
          {
            image: 'https://makerspacemasters.com/images/blog/mastersx2.png',
            title: 'Learning Beyond Labs',
            description: 'Turning academic insights into entrepreneurial impact',
            path: '#/makerspace-masters-x#why-masters-x',
          },
        ],
      },
      {
        title: 'Masters +',
        subtitle: 'For Partners & Franchisees',
        path: '#/makerspace-masters-arena',
        cards: [
          {
            image: 'https://makerspacemasters.com/images/blog/connect1.png',
            title: 'What Happens Inside',
            description: 'Step into the Arena and you’ll find sparks flying',
            path: '#/makerspace-masters-arena#what-happens-inside',
          },
          {
            image: 'https://makerspacemasters.com/images/blog/connect2.png',
            title: 'We Manage. You Earn.',
            description: 'The foundation for scalable impact',
            path: '#/makerspace-masters-arena#what-happens-inside',
          },
        ],
      },
      {
        title: 'Kaushal Bodh',
        subtitle: 'CBSE-Aligned Skill Learning',
        path: '#/makerspace-Kaushal',
        cards: [
          {
            image: 'https://makerspacemasters.com/images/kaushal/KaushalBodh01.png',
            title: 'Built for CBSE Mandate',
            description: 'End-to-End CBSE Skill Subject Execution.',
            path: '#/makerspace-Kaushal',
          },
          {
            image: 'https://makerspacemasters.com/images/kaushal/KaushalBodh02.png',
            title: 'From Classroom to Capability',
            description: 'Build. Document. Present. Real Projects.',
            path: '#/makerspace-Kaushal',
          },
        ],
      },
    ],
  },
  {
    id: 'platform',
    title: 'Platform',
    icon: 'layers',
    subheading: 'Platform',
    links: [
      {
        title: 'Master Connect',
        subtitle: 'Knowledge Hub',
        path: 'https://mastersconnect.ai',
        cards: [
          {
            image: 'https://makerspacemasters.com/images/index/mega-menu/img-school-kid.png',
            title: 'Centralized Knowledge Base',
            description: 'Access curriculum, projects, and resources instantly.',
            path: 'https://mastersconnect.ai',
          },
          {
            image: 'https://makerspacemasters.com/images/index/woodworks.jpg',
            title: 'Peer-to-Peer Collaboration',
            description: 'Share your best ideas and learn from the community.',
            path: 'https://mastersconnect.ai',
          },
        ],
      },
    ],
  },
];

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectLink?: () => void;
}

export const MegaMenu: React.FC<MegaMenuProps> = ({ isOpen, onClose, onSelectLink }) => {
  const [activeCategoryId, setActiveCategoryId] = useState('business-model');
  const [activeLinkIndex, setActiveLinkIndex] = useState(0);

  const activeCategory = MEGA_MENU_DATA.find((item) => item.id === activeCategoryId) || MEGA_MENU_DATA[0];
  const activeLink = activeCategory.links[activeLinkIndex] || activeCategory.links[0];

  if (!isOpen) return null;

  return (
    <div
      className="absolute top-full left-0 w-full bg-[#F5F5F5] border-t border-black/5 shadow-2xl z-50 transition-all duration-300 max-h-[85vh] overflow-y-auto"
      onMouseLeave={onClose}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row min-h-[440px]">
        {/* Sidebar categories */}
        <div className="w-full md:w-80 bg-[#131313]/[0.03] border-r border-black/5 p-6 md:p-8 flex flex-col gap-6 flex-shrink-0">
          <h3 className="text-2xl font-bold font-['Montserrat'] text-[#131313]">What We Do</h3>
          <ul className="space-y-2">
            {MEGA_MENU_DATA.map((category) => {
              const isActive = category.id === activeCategoryId;
              return (
                <li key={category.id}>
                  <button
                    onClick={() => {
                      setActiveCategoryId(category.id);
                      setActiveLinkIndex(0);
                    }}
                    onMouseEnter={() => {
                      setActiveCategoryId(category.id);
                      setActiveLinkIndex(0);
                    }}
                    className={`w-full flex items-center justify-between px-5 py-3.5 rounded-xl font-medium text-base transition-all duration-200 text-left ${
                      isActive
                        ? 'bg-white shadow-md text-[#131313] font-semibold translate-x-1'
                        : 'text-[#666] hover:bg-black/5 hover:text-[#131313]'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {category.icon === 'building' ? (
                        <Building2 className={`w-5 h-5 ${isActive ? 'text-[#022640]' : 'text-gray-400'}`} />
                      ) : (
                        <Layers className={`w-5 h-5 ${isActive ? 'text-[#022640]' : 'text-gray-400'}`} />
                      )}
                      <span>{category.title}</span>
                    </div>
                    {isActive && <ChevronRight className="w-4 h-4 text-[#022640]" />}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Center Sublinks */}
        <div className="w-full md:w-80 p-6 md:p-8 border-r border-black/5 flex flex-col gap-4 flex-shrink-0">
          <h4 className="text-lg font-semibold text-[#131313] font-['Montserrat']">
            {activeCategory.subheading}
          </h4>
          <div className="flex flex-col gap-2">
            {activeCategory.links.map((link, idx) => {
              const isSelected = idx === activeLinkIndex;
              return (
                <button
                  key={link.title}
                  onClick={() => {
                    setActiveLinkIndex(idx);
                    if (onSelectLink) onSelectLink();
                  }}
                  onMouseEnter={() => setActiveLinkIndex(idx)}
                  className={`flex flex-col text-left px-4 py-3 rounded-xl transition-all ${
                    isSelected
                      ? 'bg-white shadow-sm border-l-4 border-[#022640]'
                      : 'hover:bg-black/[0.03]'
                  }`}
                >
                  <span className={`text-base font-semibold ${isSelected ? 'text-[#022640]' : 'text-[#131313]'}`}>
                    {link.title}
                  </span>
                  <span className="text-xs text-[#777] font-normal">{link.subtitle}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Cards Showcase */}
        <div className="flex-1 p-6 md:p-8 bg-white/60">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 h-full items-start">
            {activeLink?.cards.map((card, idx) => (
              <a
                key={idx}
                href={card.path}
                onClick={onClose}
                className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-black/5 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="h-44 w-full overflow-hidden bg-gray-100">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-5 flex items-end justify-between">
                  <div className="pr-3">
                    <h5 className="font-semibold text-base text-[#131313] font-['Montserrat'] mb-1">
                      {card.title}
                    </h5>
                    <p className="text-xs text-[#666] leading-relaxed line-clamp-2">
                      {card.description}
                    </p>
                  </div>
                  <div className="w-9 h-9 rounded-full bg-[#131313] text-white flex items-center justify-center flex-shrink-0 group-hover:bg-[#022640] transition-colors">
                    <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

