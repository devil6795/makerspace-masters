import React, { useState, useEffect } from 'react';
import { Globe, Mail, Phone } from 'lucide-react';

const ROTATING_WORDS = ['Prototypes.', 'Projects.', 'Solutions.'];

interface FooterProps {
  onOpenBookingModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBookingModal }) => {
  const [wordIdx, setWordIdx] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setWordIdx((prev) => (prev + 1) % ROTATING_WORDS.length);
        setAnimating(false);
      }, 400);
    }, 2400);

    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="bg-white border-t border-black/5 pt-16 pb-12 px-4">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Call to action section */}
        <div className="bg-gradient-to-r from-[#022640] to-[#0d3b61] rounded-3xl p-8 sm:p-12 md:p-16 text-white text-center space-y-6 shadow-2xl relative overflow-hidden">
          <div className="max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-['Montserrat']">
              Build Your Makerspace
            </h2>
            <p className="text-base sm:text-lg text-gray-200 leading-relaxed font-normal">
              Whether you’re ready to start your makerspace, have questions about our process, or just want to explore possibilities, we’d love to hear from you.
            </p>
          </div>

          <div className="pt-2">
            <button
              onClick={onOpenBookingModal}
              className="bg-white text-[#022640] hover:bg-gray-100 font-bold px-8 py-4 rounded-full text-base transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-0.5"
            >
              Let's Build Your Space
            </button>
          </div>
        </div>

        {/* Top Branding Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-black/5">
          <img
            src="https://makerspacemasters.com/images/common/mainLogo.svg"
            alt="Makerspace Masters Logo"
            className="h-9 w-auto"
          />

          <h2 className="text-xl sm:text-2xl font-semibold font-['Montserrat'] text-[#131313] text-center md:text-right">
            Creating Spaces Where Ideas Become{' '}
            <span className="inline-block min-w-[130px] text-left font-bold text-[#022640]">
              <span
                className={`inline-block transition-all duration-400 transform ${
                  animating ? '-translate-y-2 opacity-0' : 'translate-y-0 opacity-100'
                }`}
              >
                {ROTATING_WORDS[wordIdx]}
              </span>
            </span>
          </h2>
        </div>

        {/* Middle Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-bold text-base text-[#131313] font-['Montserrat']">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-600">
              <li>
                <a href="#/" className="hover:text-[#022640] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#/about-us" className="hover:text-[#022640] transition-colors">
                  Who We Are
                </a>
              </li>
              <li>
                <a href="#/makerspace-masters" className="hover:text-[#022640] transition-colors">
                  Makerspace Masters (Schools)
                </a>
              </li>
              <li>
                <a href="#/makerspace-masters-x" className="hover:text-[#022640] transition-colors">
                  Masters X (Colleges)
                </a>
              </li>
              <li>
                <a href="#/makerspace-masters-arena" className="hover:text-[#022640] transition-colors">
                  Masters + (Arena)
                </a>
              </li>
              <li>
                <a href="#/makerspace-Kaushal" className="hover:text-[#022640] transition-colors">
                  Kaushal Bodh (CBSE)
                </a>
              </li>
              <li>
                <a href="#/contact" className="hover:text-[#022640] transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div className="space-y-4">
            <h4 className="font-bold text-base text-[#131313] font-['Montserrat']">
              Socials
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-600">
              <li>
                <a
                  href="https://www.linkedin.com/company/makerspace-masters/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 hover:text-[#022640] transition-colors"
                >
                  <svg className="w-4 h-4 fill-[#0077b5]" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.65 1.65 0 1 0 0-3.3 1.65 1.65 0 0 0 0 3.3m1.39 9.74v-8.37H5.07v8.37h2.78z" />
                  </svg>
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/makerspacemasters/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 hover:text-[#022640] transition-colors"
                >
                  <svg className="w-4 h-4 fill-[#e1306c]" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  <span>Instagram</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/makerspacemasters"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 hover:text-[#022640] transition-colors"
                >
                  <svg className="w-4 h-4 fill-[#1877f2]" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  <span>Facebook</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-bold text-base text-[#131313] font-['Montserrat']">
              Contact Us
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-600">
              <li>
                <a
                  href="https://makerspacemasters.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 hover:text-[#022640] transition-colors"
                >
                  <Globe className="w-4 h-4 text-gray-400" />
                  <span>makerspacemasters.com</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@makerspacemasters.com"
                  className="flex items-center gap-2 hover:text-[#022640] transition-colors"
                >
                  <Mail className="w-4 h-4 text-gray-400" />
                  <span>hello@makerspacemasters.com</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:18005477600"
                  className="flex items-center gap-2 hover:text-[#022640] transition-colors"
                >
                  <Phone className="w-4 h-4 text-gray-400" />
                  <span>1800-547-7600 (Toll Free)</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Global Locations */}
          <div className="space-y-4">
            <h4 className="font-bold text-base text-[#131313] font-['Montserrat']">
              Global Locations
            </h4>
            <div className="space-y-3 text-xs text-gray-600 leading-relaxed">
              <div>
                <strong className="text-[#131313]">India:</strong>
                <p>Makerspace Masters India Pvt Ltd, B66, Sector 65, Noida, UP 201301</p>
              </div>
              <div>
                <strong className="text-[#131313]">USA:</strong>
                <p>Makerspace Masters LLC, 30 N Gould St Ste R Sheridan, WY 82801</p>
              </div>
              <div>
                <strong className="text-[#131313]">UAE:</strong>
                <p>Makerspace Masters Innovations, Building A1, Dubai Digital Park, Dubai</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 border-t border-black/5 text-center text-xs text-gray-500 font-medium">
          &copy; {new Date().getFullYear()} Makerspace Masters. All Rights Reserved. Complete lab setup for schools &amp; educational institutions.
        </div>
      </div>
    </footer>
  );
};

