import React, { useState } from 'react';
import { X, Check, MessageSquare, CheckCircle2, PlusCircle } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Form fields
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    role: '',
    institution: '',
    type: '',
    location: '',
    students: '',
    solutionInterest: '',
    timeToImplement: '',
    comment: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  if (!isOpen) return null;

  const validateStep = (currentStep: number): boolean => {
    const errs: Record<string, string> = {};

    if (currentStep === 1) {
      if (!formData.firstName.trim()) errs.firstName = 'First name is required.';
      if (!formData.lastName.trim()) errs.lastName = 'Last name is required.';
      if (!formData.email.trim()) {
        errs.email = 'Email address is required.';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        errs.email = 'Enter a valid email address.';
      }
      if (!formData.phone.trim()) {
        errs.phone = 'Phone number is required.';
      } else if (!/^[+]?[\d\s\-()]{7,20}$/.test(formData.phone)) {
        errs.phone = 'Enter a valid phone number.';
      }
      if (!formData.role.trim()) errs.role = 'Role is required.';
    } else if (currentStep === 2) {
      if (!formData.institution.trim()) errs.institution = 'Institution name is required.';
      if (!formData.type) errs.type = 'Please select institution type.';
      if (!formData.location.trim()) errs.location = 'Location is required.';
      if (!formData.students.trim()) errs.students = 'Number of students is required.';
    } else if (currentStep === 3) {
      if (!formData.solutionInterest) errs.solutionInterest = 'Please select a solution.';
      if (!formData.timeToImplement) errs.timeToImplement = 'Please select time to implement.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    setStep((prev) => Math.max(1, prev - 1));
    setErrors({});
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep(3)) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setStep(1);
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          role: '',
          institution: '',
          type: '',
          location: '',
          students: '',
          solutionInterest: '',
          timeToImplement: '',
          comment: '',
        });
        onClose();
      }, 2500);
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-5xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-white/80 grid grid-cols-1 md:grid-cols-12 max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 text-[#131313] flex items-center justify-center transition-colors z-20"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Side: Information */}
        <div className="md:col-span-5 bg-gradient-to-br from-[#022640] to-[#043354] p-8 md:p-12 text-white flex flex-col justify-between">
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold font-['Montserrat'] leading-tight">
              Looking for<br />support?
            </h2>

            <ul className="space-y-5 text-sm md:text-base font-normal text-gray-200">
              <li className="flex items-start gap-3">
                <MessageSquare className="w-5 h-5 text-[#FE9F99] flex-shrink-0 mt-0.5" />
                <span>Get detailed guidance on labs &amp; curriculum solutions</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#C9F2B6] flex-shrink-0 mt-0.5" />
                <span>Find the right setup customized for your institution</span>
              </li>
              <li className="flex items-start gap-3">
                <PlusCircle className="w-5 h-5 text-[#ABBCFE] flex-shrink-0 mt-0.5" />
                <span>Start a conversation about turnkey pricing &amp; mentorship</span>
              </li>
            </ul>
          </div>

          <div className="pt-8 border-t border-white/15 text-xs text-gray-300">
            Makerspace Masters India • USA • UAE
          </div>
        </div>

        {/* Right Side: Stepper Form */}
        <div className="md:col-span-7 p-6 sm:p-10 bg-[#FBFBFB] flex flex-col justify-between">
          {isSubmitted ? (
            <div className="py-16 text-center space-y-4 animate-in fade-in zoom-in duration-300">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md">
                <Check className="w-8 h-8 stroke-[3]" />
              </div>
              <h3 className="text-2xl font-bold font-['Montserrat'] text-[#131313]">
                Form submitted successfully 🎉
              </h3>
              <p className="text-sm text-gray-600 max-w-sm mx-auto">
                Thank you for reaching out! Our innovation lab specialist will connect with you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Stepper Header */}
              <div className="flex items-center justify-between max-w-md mx-auto mb-6">
                {[
                  { num: 1, label: 'Personal Info', color: '#FE9F99' },
                  { num: 2, label: 'Organization Info', color: '#88D49E' },
                  { num: 3, label: 'Solution Info', color: '#ABBCFE' },
                ].map((s, idx) => {
                  const isPast = step > s.num;
                  const isCurrent = step === s.num;

                  return (
                    <React.Fragment key={s.num}>
                      <div className="flex flex-col items-center">
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all ${
                            isPast
                              ? 'bg-emerald-500 text-white'
                              : isCurrent
                              ? 'text-[#131313] shadow-md ring-4 ring-black/5'
                              : 'bg-gray-200 text-gray-500'
                          }`}
                          style={{
                            backgroundColor: isCurrent ? s.color : undefined,
                          }}
                        >
                          {isPast ? <Check className="w-5 h-5 stroke-[3]" /> : s.num}
                        </div>
                        <span className="text-[11px] font-medium text-gray-500 mt-1 hidden sm:block">
                          {s.label}
                        </span>
                      </div>
                      {idx < 2 && (
                        <div
                          className={`flex-1 h-0.5 mx-2 ${
                            step > idx + 1 ? 'bg-emerald-500' : 'bg-gray-200'
                          }`}
                        />
                      )}
                    </React.Fragment>
                  );
                })}
              </div>

              {/* Step 1: Personal Info */}
              {step === 1 && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        First Name *
                      </label>
                      <input
                        type="text"
                        value={formData.firstName}
                        onChange={(e) =>
                          setFormData({ ...formData, firstName: e.target.value })
                        }
                        placeholder="First Name"
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:border-[#022640] bg-white"
                      />
                      {errors.firstName && (
                        <span className="text-xs text-red-500 mt-1 block">
                          {errors.firstName}
                        </span>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        value={formData.lastName}
                        onChange={(e) =>
                          setFormData({ ...formData, lastName: e.target.value })
                        }
                        placeholder="Last Name"
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:border-[#022640] bg-white"
                      />
                      {errors.lastName && (
                        <span className="text-xs text-red-500 mt-1 block">
                          {errors.lastName}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="you@school.edu"
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:border-[#022640] bg-white"
                      />
                      {errors.email && (
                        <span className="text-xs text-red-500 mt-1 block">
                          {errors.email}
                        </span>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:border-[#022640] bg-white"
                      />
                      {errors.phone && (
                        <span className="text-xs text-red-500 mt-1 block">
                          {errors.phone}
                        </span>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Your Role *
                    </label>
                    <input
                      type="text"
                      value={formData.role}
                      onChange={(e) =>
                        setFormData({ ...formData, role: e.target.value })
                      }
                      placeholder="e.g. Principal, Trustee, STEM Lead, Educator"
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:border-[#022640] bg-white"
                    />
                    {errors.role && (
                      <span className="text-xs text-red-500 mt-1 block">
                        {errors.role}
                      </span>
                    )}
                  </div>

                  <div className="pt-4 flex justify-end">
                    <button
                      type="button"
                      onClick={handleNext}
                      className="bg-[#131313] hover:bg-[#022640] text-white px-8 py-3 rounded-full text-sm font-semibold transition-colors"
                    >
                      Next
                    </button>
                  </div>
                </div>
              )}

              {/* Step 2: Organization Info */}
              {step === 2 && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Institution / Organization Name *
                    </label>
                    <input
                      type="text"
                      value={formData.institution}
                      onChange={(e) =>
                        setFormData({ ...formData, institution: e.target.value })
                      }
                      placeholder="e.g. DPS International, Amity, St. Xaviers"
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:border-[#022640] bg-white"
                    />
                    {errors.institution && (
                      <span className="text-xs text-red-500 mt-1 block">
                        {errors.institution}
                      </span>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Institution Type *
                    </label>
                    <select
                      value={formData.type}
                      onChange={(e) =>
                        setFormData({ ...formData, type: e.target.value })
                      }
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:border-[#022640] bg-white"
                    >
                      <option value="">Select Type</option>
                      <option value="School">School (K-12)</option>
                      <option value="College">College</option>
                      <option value="University">University</option>
                      <option value="Incubators">Incubator / Startup Hub</option>
                      <option value="Other">Other</option>
                    </select>
                    {errors.type && (
                      <span className="text-xs text-red-500 mt-1 block">
                        {errors.type}
                      </span>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Location (City / State) *
                      </label>
                      <input
                        type="text"
                        value={formData.location}
                        onChange={(e) =>
                          setFormData({ ...formData, location: e.target.value })
                        }
                        placeholder="e.g. New Delhi, NCR"
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:border-[#022640] bg-white"
                      />
                      {errors.location && (
                        <span className="text-xs text-red-500 mt-1 block">
                          {errors.location}
                        </span>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Number of Students *
                      </label>
                      <input
                        type="text"
                        value={formData.students}
                        onChange={(e) =>
                          setFormData({ ...formData, students: e.target.value })
                        }
                        placeholder="e.g. 500, 1500, 3000+"
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:border-[#022640] bg-white"
                      />
                      {errors.students && (
                        <span className="text-xs text-red-500 mt-1 block">
                          {errors.students}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="pt-4 flex justify-between">
                    <button
                      type="button"
                      onClick={handleBack}
                      className="px-6 py-2.5 rounded-full border border-gray-300 text-sm font-semibold text-gray-700 hover:bg-gray-100"
                    >
                      Back
                    </button>
                    <button
                      type="button"
                      onClick={handleNext}
                      className="bg-[#131313] hover:bg-[#022640] text-white px-8 py-3 rounded-full text-sm font-semibold transition-colors"
                    >
                      Next
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: Solution Info */}
              {step === 3 && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Solutions you are interested in *
                    </label>
                    <select
                      value={formData.solutionInterest}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          solutionInterest: e.target.value,
                        })
                      }
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:border-[#022640] bg-white"
                    >
                      <option value="">Select Solution</option>
                      <option value="Makerspace Masters">Makerspace Masters (For Schools)</option>
                      <option value="Masters X">Masters X (For Colleges & Institutions)</option>
                      <option value="Masters +">Masters + (For Partners & Franchisees)</option>
                      <option value="Kaushal Bodh">Kaushal Bodh (CBSE-Aligned Skill Learning)</option>
                      <option value="Other">Other Custom Setup</option>
                    </select>
                    {errors.solutionInterest && (
                      <span className="text-xs text-red-500 mt-1 block">
                        {errors.solutionInterest}
                      </span>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Time To Implement *
                    </label>
                    <select
                      value={formData.timeToImplement}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          timeToImplement: e.target.value,
                        })
                      }
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:border-[#022640] bg-white"
                    >
                      <option value="">Select Timeline</option>
                      <option value="Immediately">Immediately (Within 30 Days)</option>
                      <option value="3-6 Months">3 - 6 Months</option>
                      <option value="6-12 Months">6 - 12 Months</option>
                      <option value="Just Exploring">Just Exploring for Future</option>
                    </select>
                    {errors.timeToImplement && (
                      <span className="text-xs text-red-500 mt-1 block">
                        {errors.timeToImplement}
                      </span>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Additional Comments / Requirements (Optional)
                    </label>
                    <textarea
                      rows={3}
                      value={formData.comment}
                      onChange={(e) =>
                        setFormData({ ...formData, comment: e.target.value })
                      }
                      placeholder="Share any special goals, space dimensions, or equipment preferences..."
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:border-[#022640] bg-white resize-none"
                    />
                  </div>

                  <div className="pt-4 flex justify-between">
                    <button
                      type="button"
                      onClick={handleBack}
                      className="px-6 py-2.5 rounded-full border border-gray-300 text-sm font-semibold text-gray-700 hover:bg-gray-100"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-[#022640] hover:bg-[#043354] text-white px-8 py-3 rounded-full text-sm font-semibold transition-colors shadow-md disabled:opacity-50"
                    >
                      {isSubmitting ? 'Submitting...' : 'Get In Touch'}
                    </button>
                  </div>
                </div>
              )}
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
