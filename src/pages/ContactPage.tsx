import React, { useState } from 'react';
import { MapPin, Phone, Mail, MessageSquare, Check, ArrowRight, ArrowLeft, Send, CheckCircle2 } from 'lucide-react';

const OFFICES = [
  {
    country: 'India (Headquarters)',
    address: 'B66, Sector 65, Noida, Uttar Pradesh 201301 – INDIA',
    phone: '1800-547-7600',
    email: 'hello@makerspacemasters.com',
    hours: 'Mon - Sat: 9:00 AM - 6:00 PM IST',
  },
  {
    country: 'USA - Wyoming',
    address: '30 N Gould St Ste R, Sheridan, WY 82801 – USA',
    phone: '+1 (307) 201-9874',
    email: 'usa@makerspacemasters.com',
    hours: 'Mon - Fri: 9:00 AM - 5:00 PM MST',
  },
  {
    country: 'UAE - Dubai',
    address: 'Building A1, Dubai Digital Park, Dubai Silicon Oasis, Dubai, UAE',
    phone: '+971 4 248 7000',
    email: 'dubai@makerspacemasters.com',
    hours: 'Mon - Fri: 9:00 AM - 6:00 PM GST',
  },
];

export const ContactPage: React.FC = () => {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    role: '',
    institution: '',
    instType: 'School',
    location: '',
    students: '',
    solution: 'Makerspace Masters (For Schools)',
    timeline: '3-6 Months',
    comment: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateStep = (s: number): boolean => {
    const newErrors: Record<string, string> = {};

    if (s === 1) {
      if (!formData.firstName.trim()) newErrors.firstName = 'First name is required.';
      if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required.';
      if (!formData.email.trim()) {
        newErrors.email = 'Email address is required.';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = 'Please enter a valid email address.';
      }
      if (!formData.phone.trim()) newErrors.phone = 'Phone number is required.';
      if (!formData.role.trim()) newErrors.role = 'Role is required.';
    } else if (s === 2) {
      if (!formData.institution.trim()) newErrors.institution = 'Institution name is required.';
      if (!formData.location.trim()) newErrors.location = 'Location is required.';
      if (!formData.students.trim()) newErrors.students = 'Student count is required.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep((prev) => Math.min(prev + 1, 3));
    }
  };

  const handleBack = () => {
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep(step)) {
      setSubmitted(true);
    }
  };

  return (
    <div className="pt-28 pb-20 px-4 bg-[#FBFBFB]">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold text-[#5786AB] uppercase tracking-wider bg-[#5786AB]/10 px-4 py-1.5 rounded-full inline-block">
            Get In Touch
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-['Montserrat'] text-[#131313] tracking-tight">
            Contact Our Global Team
          </h1>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-normal">
            Whether you're ready to start your makerspace, have questions about curriculum alignment, or want to explore franchise opportunities, we’re here to help.
          </p>
        </div>

        {/* 3 Contact Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-3xl p-8 border border-black/5 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#FE9F99]/20 flex items-center justify-center text-[#131313]">
              <MessageSquare className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold font-['Montserrat'] text-[#131313]">Talk to Sales</h3>
            <p className="text-sm text-gray-600 leading-relaxed font-['Work_Sans']">
              Learn about Makerspace Masters turnkey lab setup, equipment catalogs, curriculum integration, and institutional pricing.
            </p>
            <a href="#contact-form" className="text-sm font-bold text-[#022640] inline-flex items-center gap-1 pt-2 hover:underline">
              <span>Start consultation</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-black/5 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#C9F2B6]/30 flex items-center justify-center text-[#131313]">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold font-['Montserrat'] text-[#131313]">Partner Support</h3>
            <p className="text-sm text-gray-600 leading-relaxed font-['Work_Sans']">
              Already have an operational lab? Get on-demand technical assistance, equipment maintenance, and teacher training refreshes.
            </p>
            <p className="text-sm font-bold text-[#022640] pt-2">
              Toll-Free: 1800-547-7600
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-black/5 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#ABBCFE]/30 flex items-center justify-center text-[#131313]">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold font-['Montserrat'] text-[#131313]">Direct Inquiries</h3>
            <p className="text-sm text-gray-600 leading-relaxed font-['Work_Sans']">
              Email our founder's office or advisory team directly with strategic partnership and franchise proposals.
            </p>
            <a href="mailto:hello@makerspacemasters.com" className="text-sm font-bold text-[#022640] pt-2 block hover:underline">
              hello@makerspacemasters.com
            </a>
          </div>
        </div>

        {/* Global Offices Showcase & Map Embed */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-black/5 shadow-sm space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-3xl font-bold font-['Montserrat'] text-[#131313]">
              Connect With Our Global Offices
            </h2>
            <p className="text-gray-600 text-sm">
              Find our physical operational centers across India, USA, and UAE.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Embedded Google Map */}
            <div className="lg:col-span-7 rounded-2xl overflow-hidden shadow-inner border border-black/5 h-[380px] bg-gray-100">
              <iframe
                title="Makerspace Masters HQ Map"
                className="w-full h-full border-0"
                src="https://maps.google.com/maps?width=800&height=400&hl=en&q=B66%2C%20B%20Block%2C%20Sector%2065%2C%20Noida%2C%20Uttar%20Pradesh%2C%20201309&t=&z=14&ie=UTF8&iwloc=B&output=embed"
                loading="lazy"
              />
            </div>

            {/* HQ Highlight */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-[#F8F9FA] rounded-2xl p-6 border border-black/5 space-y-3">
                <span className="text-xs font-bold text-[#5786AB] uppercase tracking-wider bg-white px-3 py-1 rounded-full border border-black/5">
                  Corporate Headquarters
                </span>
                <h3 className="text-xl font-bold font-['Montserrat'] text-[#131313]">
                  Noida Innovation Campus
                </h3>
                <div className="space-y-2 text-sm text-gray-600 font-['Work_Sans']">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 mt-0.5 text-gray-500 shrink-0" />
                    <span>B66, Sector 65, Noida, Uttar Pradesh 201301 – INDIA</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-gray-500 shrink-0" />
                    <span>1800-547-7600 (Toll Free)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-gray-500 shrink-0" />
                    <span>hello@makerspacemasters.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 3 Office Addresses Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-gray-100">
            {OFFICES.map((office, idx) => (
              <div key={idx} className="space-y-2">
                <h4 className="font-bold font-['Montserrat'] text-base text-[#131313]">
                  {office.country}
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed font-['Work_Sans']">
                  {office.address}
                </p>
                <p className="text-xs text-gray-500 font-medium pt-1">
                  {office.hours}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Embedded Interactive 3-Step Form */}
        <div id="contact-form" className="bg-[#022640] rounded-3xl p-8 sm:p-14 text-white shadow-2xl">
          <div className="max-w-3xl mx-auto space-y-10">
            <div className="text-center space-y-3">
              <span className="text-xs font-bold text-[#FE9F99] uppercase tracking-wider bg-white/10 px-4 py-1.5 rounded-full inline-block">
                Start Consultation
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-['Montserrat']">
                Let's Start The Conversation
              </h2>
              <p className="text-gray-300 text-sm sm:text-base font-['Work_Sans']">
                Fill out the form below and our team will get back to you within 2 business days.
              </p>
            </div>

            {/* Stepper Progress Header */}
            <div className="flex items-center justify-between max-w-md mx-auto relative px-4">
              <div className="flex flex-col items-center z-10">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all ${
                    step >= 1 ? 'bg-[#FE9F99] text-[#131313]' : 'bg-white/20 text-white'
                  }`}
                >
                  {step > 1 ? <Check className="w-5 h-5 stroke-[3]" /> : '1'}
                </div>
                <span className="text-xs mt-2 text-gray-300">Personal</span>
              </div>

              <div className={`flex-1 h-0.5 mx-2 ${step >= 2 ? 'bg-[#C9F2B6]' : 'bg-white/20'}`} />

              <div className="flex flex-col items-center z-10">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all ${
                    step >= 2 ? 'bg-[#C9F2B6] text-[#131313]' : 'bg-white/20 text-white'
                  }`}
                >
                  {step > 2 ? <Check className="w-5 h-5 stroke-[3]" /> : '2'}
                </div>
                <span className="text-xs mt-2 text-gray-300">Organization</span>
              </div>

              <div className={`flex-1 h-0.5 mx-2 ${step >= 3 ? 'bg-[#ABBCFE]' : 'bg-white/20'}`} />

              <div className="flex flex-col items-center z-10">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all ${
                    step >= 3 ? 'bg-[#ABBCFE] text-[#131313]' : 'bg-white/20 text-white'
                  }`}
                >
                  {submitted ? <Check className="w-5 h-5 stroke-[3]" /> : '3'}
                </div>
                <span className="text-xs mt-2 text-gray-300">Solution</span>
              </div>
            </div>

            {submitted ? (
              <div className="bg-white/10 rounded-3xl p-10 text-center space-y-4 border border-white/20">
                <div className="w-16 h-16 rounded-full bg-[#C9F2B6] text-[#022640] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold font-['Montserrat']">
                  Thank You, {formData.firstName}!
                </h3>
                <p className="text-gray-300 text-sm max-w-md mx-auto">
                  Your request has been received. Our senior education consultant will contact you via <strong>{formData.email}</strong> shortly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setStep(1);
                  }}
                  className="bg-white text-[#022640] font-bold px-6 py-2.5 rounded-full text-xs mt-4 hover:bg-gray-100 transition-colors cursor-pointer"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-md rounded-3xl p-6 sm:p-10 border border-white/15 space-y-6">
                {/* Step 1: Personal Info */}
                {step === 1 && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-gray-300 mb-1">First Name *</label>
                        <input
                          type="text"
                          value={formData.firstName}
                          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                          placeholder="e.g. Rahul"
                          className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#FE9F99]"
                        />
                        {errors.firstName && <p className="text-xs text-[#FE9F99] mt-1">{errors.firstName}</p>}
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-300 mb-1">Last Name *</label>
                        <input
                          type="text"
                          value={formData.lastName}
                          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                          placeholder="e.g. Sharma"
                          className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#FE9F99]"
                        />
                        {errors.lastName && <p className="text-xs text-[#FE9F99] mt-1">{errors.lastName}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-gray-300 mb-1">Email Address *</label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="name@school.edu.in"
                          className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#FE9F99]"
                        />
                        {errors.email && <p className="text-xs text-[#FE9F99] mt-1">{errors.email}</p>}
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-300 mb-1">Phone Number *</label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 98765 43210"
                          className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#FE9F99]"
                        />
                        {errors.phone && <p className="text-xs text-[#FE9F99] mt-1">{errors.phone}</p>}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-300 mb-1">Your Role *</label>
                      <input
                        type="text"
                        value={formData.role}
                        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                        placeholder="e.g. Principal / Academic Director / Trustee"
                        className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#FE9F99]"
                      />
                      {errors.role && <p className="text-xs text-[#FE9F99] mt-1">{errors.role}</p>}
                    </div>

                    <div className="pt-4 flex justify-end">
                      <button
                        type="button"
                        onClick={handleNext}
                        className="bg-[#FE9F99] hover:bg-[#fc8f88] text-[#131313] font-bold px-8 py-3 rounded-full text-sm transition-all cursor-pointer flex items-center gap-2"
                      >
                        <span>Next: Organization Info</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 2: Organization Info */}
                {step === 2 && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-300 mb-1">Institution Name *</label>
                      <input
                        type="text"
                        value={formData.institution}
                        onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                        placeholder="e.g. Delhi Public School, Noida"
                        className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#C9F2B6]"
                      />
                      {errors.institution && <p className="text-xs text-[#FE9F99] mt-1">{errors.institution}</p>}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-gray-300 mb-1">Institution Type *</label>
                        <select
                          value={formData.instType}
                          onChange={(e) => setFormData({ ...formData, instType: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-[#022640] border border-white/20 text-white focus:outline-none focus:border-[#C9F2B6]"
                        >
                          <option value="School">School (K-12)</option>
                          <option value="College">College / University</option>
                          <option value="Incubator">Incubator / Hub</option>
                          <option value="Franchise">Franchise / Partner</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-300 mb-1">Location (City, State) *</label>
                        <input
                          type="text"
                          value={formData.location}
                          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                          placeholder="e.g. Gurgaon, Haryana"
                          className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#C9F2B6]"
                        />
                        {errors.location && <p className="text-xs text-[#FE9F99] mt-1">{errors.location}</p>}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-300 mb-1">Approximate Student Strength *</label>
                      <input
                        type="text"
                        value={formData.students}
                        onChange={(e) => setFormData({ ...formData, students: e.target.value })}
                        placeholder="e.g. 1,500"
                        className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#C9F2B6]"
                      />
                      {errors.students && <p className="text-xs text-[#FE9F99] mt-1">{errors.students}</p>}
                    </div>

                    <div className="pt-4 flex justify-between">
                      <button
                        type="button"
                        onClick={handleBack}
                        className="border border-white/30 text-white hover:bg-white/10 font-bold px-6 py-3 rounded-full text-sm transition-all cursor-pointer flex items-center gap-2"
                      >
                        <ArrowLeft className="w-4 h-4" />
                        <span>Back</span>
                      </button>
                      <button
                        type="button"
                        onClick={handleNext}
                        className="bg-[#C9F2B6] hover:bg-[#b2e89d] text-[#131313] font-bold px-8 py-3 rounded-full text-sm transition-all cursor-pointer flex items-center gap-2"
                      >
                        <span>Next: Solution Info</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 3: Solution Info */}
                {step === 3 && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-300 mb-1">Solution You Are Interested In *</label>
                      <select
                        value={formData.solution}
                        onChange={(e) => setFormData({ ...formData, solution: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#022640] border border-white/20 text-white focus:outline-none focus:border-[#ABBCFE]"
                      >
                        <option value="Makerspace Masters (For Schools)">Makerspace Masters (For Schools)</option>
                        <option value="Masters X (For Colleges & Institutions)">Masters X (For Colleges & Institutions)</option>
                        <option value="Masters + (For Partners & Franchisees)">Masters + (For Partners & Franchisees)</option>
                        <option value="Kaushal Bodh (CBSE Mandate)">Kaushal Bodh (CBSE Mandate)</option>
                        <option value="Masters Connect Platform">Masters Connect Platform</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-300 mb-1">Timeline To Implement *</label>
                      <select
                        value={formData.timeline}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#022640] border border-white/20 text-white focus:outline-none focus:border-[#ABBCFE]"
                      >
                        <option value="Immediately">Immediately (Within 30 Days)</option>
                        <option value="3-6 Months">3 - 6 Months</option>
                        <option value="6-12 Months">6 - 12 Months</option>
                        <option value="Just Exploring">Just Exploring for Now</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-300 mb-1">Additional Requirements / Notes</label>
                      <textarea
                        rows={3}
                        value={formData.comment}
                        onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                        placeholder="Tell us about your space size, goals, or questions..."
                        className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#ABBCFE]"
                      />
                    </div>

                    <div className="pt-4 flex justify-between">
                      <button
                        type="button"
                        onClick={handleBack}
                        className="border border-white/30 text-white hover:bg-white/10 font-bold px-6 py-3 rounded-full text-sm transition-all cursor-pointer flex items-center gap-2"
                      >
                        <ArrowLeft className="w-4 h-4" />
                        <span>Back</span>
                      </button>
                      <button
                        type="submit"
                        className="bg-[#ABBCFE] hover:bg-[#99adfc] text-[#022640] font-bold px-8 py-3 rounded-full text-sm transition-all cursor-pointer flex items-center gap-2 shadow-lg"
                      >
                        <Send className="w-4 h-4" />
                        <span>Submit Consultation Request</span>
                      </button>
                    </div>
                  </div>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
