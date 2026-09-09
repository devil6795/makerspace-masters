import React, { useState } from 'react';
import { ChevronDown, Menu, X, ArrowRight, Building2, Layers } from 'lucide-react';
import { MegaMenu, MEGA_MENU_DATA } from './MegaMenu';

interface NavbarProps {
  onOpenBookingModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBookingModal }) => {
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedMobileCategory, setExpandedMobileCategory] = useState<string | null>('business-model');

  return (
    <>
      <nav className="fixed top-[34px] left-0 w-full z-40 px-4 md:px-10 py-3 transition-all duration-300">
        <div className="max-w-7xl mx-auto glass-nav rounded-2xl md:rounded-full px-6 py-3 flex items-center justify-between shadow-lg shadow-black/[0.04]">
          {/* Left Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <button
              onMouseEnter={() => setIsMegaMenuOpen(true)}
              onClick={() => setIsMegaMenuOpen((prev) => !prev)}
              className="flex items-center gap-1.5 text-sm font-semibold text-[#131313] hover:text-[#022640] transition-colors py-1 group"
            >
              <span>What We Do</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-300 text-gray-500 group-hover:text-[#022640] ${
                  isMegaMenuOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            <a
              href="#/about-us"
              className="text-sm font-semibold text-[#131313] hover:text-[#022640] transition-colors py-1"
            >
              Who We Are
            </a>

            <a
              href="#/contact"
              className="text-sm font-semibold text-[#131313] hover:text-[#022640] transition-colors py-1"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="lg:hidden p-2 rounded-xl text-[#131313] hover:bg-black/5"
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>

          {/* Center Logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <a href="#/" className="block focus:outline-none">
              <img
                src="https://makerspacemasters.com/images/common/mainLogo.svg"
                alt="Makerspace Masters"
                className="h-8 md:h-9 w-auto object-contain"
              />
            </a>
          </div>

          {/* Right Action Button */}
          <div className="flex items-center gap-4">
            <button
              onClick={onOpenBookingModal}
              className="bg-[#131313] text-white hover:bg-[#022640] px-5 py-2.5 rounded-full text-xs md:text-sm font-semibold transition-all duration-300 shadow-md hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0"
            >
              Book Your Demo
            </button>
          </div>
        </div>

        {/* Desktop Mega Menu */}
        <MegaMenu
          isOpen={isMegaMenuOpen}
          onClose={() => setIsMegaMenuOpen(false)}
          onSelectLink={() => setIsMegaMenuOpen(false)}
        />
      </nav>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex flex-col bg-white animate-in slide-in-from-left duration-300">
          <div className="p-5 border-b border-black/5 flex items-center justify-between">
            <img
              src="https://makerspacemasters.com/images/common/mainLogo.svg"
              alt="Makerspace Masters"
              className="h-7 w-auto"
            />
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 rounded-full hover:bg-black/5"
              aria-label="Close menu"
            >
              <X className="w-6 h-6 text-gray-700" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            <div className="space-y-3">
              <div className="text-xs uppercase tracking-wider text-gray-400 font-bold">
                Navigation
              </div>

              {MEGA_MENU_DATA.map((category) => {
                const isExpanded = expandedMobileCategory === category.id;
                return (
                  <div key={category.id} className="border border-black/5 rounded-2xl overflow-hidden">
                    <button
                      onClick={() =>
                        setExpandedMobileCategory(isExpanded ? null : category.id)
                      }
                      className="w-full flex items-center justify-between p-4 bg-gray-50/70 text-left font-semibold text-base text-[#131313]"
                    >
                      <div className="flex items-center gap-3">
                        {category.icon === 'building' ? (
                          <Building2 className="w-5 h-5 text-[#022640]" />
                        ) : (
                          <Layers className="w-5 h-5 text-[#022640]" />
                        )}
                        <span>{category.title}</span>
                      </div>
                      <ChevronDown
                        className={`w-4 h-4 text-gray-500 transition-transform ${
                          isExpanded ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    {isExpanded && (
                      <div className="p-3 bg-white space-y-2 border-t border-black/5">
                        {category.links.map((link) => (
                          <a
                            key={link.title}
                            href={link.path}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition-colors"
                          >
                            <div>
                              <div className="font-semibold text-sm text-[#131313]">
                                {link.title}
                              </div>
                              <div className="text-xs text-gray-500">{link.subtitle}</div>
                            </div>
                            <ArrowRight className="w-4 h-4 text-gray-400" />
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}

              <a
                href="#/about-us"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block p-4 rounded-2xl bg-gray-50 font-semibold text-base text-[#131313]"
              >
                Who We Are
              </a>

              <a
                href="#/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block p-4 rounded-2xl bg-gray-50 font-semibold text-base text-[#131313]"
              >
                Contact Us
              </a>

              <a
                href="#faq"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block p-4 rounded-2xl bg-gray-50 font-semibold text-base text-[#131313]"
              >
                FAQs
              </a>
            </div>

            <div className="pt-4">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenBookingModal();
                }}
                className="w-full bg-[#131313] text-white py-3.5 rounded-full font-semibold text-sm shadow-md"
              >
                Book Your Demo
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

