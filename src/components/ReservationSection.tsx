import React, { useState } from 'react';
import { Phone, Calendar, Clock, Users, MessageCircle, MapPin, Navigation, Info, CheckCircle2 } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const ReservationSection: React.FC = () => {
  const [guestCount, setGuestCount] = useState<string>('2-4 Guests');
  const [preferredDate, setPreferredDate] = useState<string>('');
  const [preferredTime, setPreferredTime] = useState<string>('08:00 PM (Dinner)');
  const [name, setName] = useState<string>('');
  const [specialRequest, setSpecialRequest] = useState<string>('');
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);

  const handleSubmitEnquiry = (e: React.FormEvent) => {
    e.preventDefault();

    let message = "Hello The Delhi Story, I would like to enquire about a table reservation. Please share the availability.";
    
    const details = [];
    if (name.trim()) details.push(`Name: ${name.trim()}`);
    if (preferredDate) details.push(`Date: ${preferredDate}`);
    if (preferredTime) details.push(`Time: ${preferredTime}`);
    if (guestCount) details.push(`Party Size: ${guestCount}`);
    if (specialRequest.trim()) details.push(`Notes: ${specialRequest.trim()}`);

    if (details.length > 0) {
      message += `\n\nBooking Details:\n- ${details.join('\n- ')}`;
    }

    const whatsappUrl = `https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-24 bg-[#0d0e12] border-t border-[#232532] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="text-xs font-semibold tracking-widest uppercase text-[#d4af37] mb-2">
            Reservations & Inquiries
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#fbf7ed]">
            Enquire About a Table
          </h2>
          <p className="mt-4 text-base text-[#cfc7b8] leading-relaxed">
            Planning a celebration or a dinner with loved ones at City Center Mall, Patna? Connect directly with our host team.
          </p>
        </div>

        {/* 2-Column Split: Form and Contact Cards */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Column 1: Interactive Table Enquiry Form */}
          <div className="lg:col-span-7 bg-[#14151d] rounded-xl border border-[#272a39] p-6 sm:p-9 shadow-2xl">
            <div className="flex items-center justify-between pb-6 border-b border-[#232635]">
              <div>
                <h3 className="font-display text-xl font-bold text-[#f5ebd9]">
                  Table Availability Request
                </h3>
                <p className="text-xs text-[#a8a192] mt-1">
                  Connects to restaurant management via instant WhatsApp message
                </p>
              </div>
              <div className="w-10 h-10 rounded-full bg-[#831828]/25 border border-[#831828] flex items-center justify-center text-[#e5c158]">
                <Calendar className="w-5 h-5" />
              </div>
            </div>

            <form onSubmit={handleSubmitEnquiry} className="mt-6 space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Guest Count */}
                <div>
                  <label className="block text-xs font-medium text-[#c5beb0] mb-1.5 flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-[#d4af37]" />
                    <span>Number of Guests</span>
                  </label>
                  <select
                    value={guestCount}
                    onChange={(e) => setGuestCount(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-md bg-[#1a1c26] border border-[#2c3040] text-xs text-[#f0ebe0] focus:outline-none focus:border-[#d4af37]"
                  >
                    <option value="1-2 Guests">1 - 2 Guests (Intimate Dining)</option>
                    <option value="3-4 Guests">3 - 4 Guests (Small Family / Friends)</option>
                    <option value="5-8 Guests">5 - 8 Guests (Family Table)</option>
                    <option value="9+ Guests">9+ Guests (Large Celebration / Group)</option>
                  </select>
                </div>

                {/* Preferred Date */}
                <div>
                  <label className="block text-xs font-medium text-[#c5beb0] mb-1.5 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#d4af37]" />
                    <span>Preferred Date</span>
                  </label>
                  <input
                    type="date"
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-md bg-[#1a1c26] border border-[#2c3040] text-xs text-[#f0ebe0] focus:outline-none focus:border-[#d4af37]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Preferred Time Slot */}
                <div>
                  <label className="block text-xs font-medium text-[#c5beb0] mb-1.5 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#d4af37]" />
                    <span>Preferred Time Slot</span>
                  </label>
                  <select
                    value={preferredTime}
                    onChange={(e) => setPreferredTime(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-md bg-[#1a1c26] border border-[#2c3040] text-xs text-[#f0ebe0] focus:outline-none focus:border-[#d4af37]"
                  >
                    <option value="12:30 PM (Lunch)">12:30 PM (Lunch)</option>
                    <option value="01:30 PM (Lunch)">01:30 PM (Lunch)</option>
                    <option value="02:30 PM (Lunch)">02:30 PM (Late Lunch)</option>
                    <option value="07:30 PM (Dinner)">07:30 PM (Early Dinner)</option>
                    <option value="08:00 PM (Dinner)">08:00 PM (Dinner)</option>
                    <option value="08:30 PM (Dinner)">08:30 PM (Dinner)</option>
                    <option value="09:15 PM (Dinner)">09:15 PM (Late Dinner)</option>
                  </select>
                </div>

                {/* Name */}
                <div>
                  <label className="block text-xs font-medium text-[#c5beb0] mb-1.5">
                    Your Name (Optional)
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full px-3.5 py-2.5 rounded-md bg-[#1a1c26] border border-[#2c3040] text-xs text-[#f0ebe0] placeholder-[#767167] focus:outline-none focus:border-[#d4af37]"
                  />
                </div>
              </div>

              {/* Special Dining Requests */}
              <div>
                <label className="block text-xs font-medium text-[#c5beb0] mb-1.5">
                  Special Notes / Requests (Optional)
                </label>
                <textarea
                  rows={2}
                  value={specialRequest}
                  onChange={(e) => setSpecialRequest(e.target.value)}
                  placeholder="e.g. Birthday celebration, booth seating preference, high chair needed..."
                  className="w-full px-3.5 py-2.5 rounded-md bg-[#1a1c26] border border-[#2c3040] text-xs text-[#f0ebe0] placeholder-[#767167] focus:outline-none focus:border-[#d4af37]"
                />
              </div>

              {/* Confirmation Disclosure */}
              <div className="p-3 bg-[#1c1e2a] rounded-md border border-[#2c3040] flex items-start gap-2.5 text-[11px] text-[#b3aa9c]">
                <Info className="w-3.5 h-3.5 text-[#d4af37] shrink-0 mt-0.5" />
                <p>
                  <strong>Note:</strong> Submitting this enquiry initiates an authorized message with the restaurant on WhatsApp. A table is confirmed only when our team verifies live seating availability.
                </p>
              </div>

              {/* Submit Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="submit"
                  className="w-full sm:flex-1 flex items-center justify-center gap-2 py-3 px-5 text-xs font-semibold text-white bg-[#831828] hover:bg-[#9d1c31] border border-[#ab2239] rounded-md transition-all shadow-md group"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
                  <span>Send Enquiry via WhatsApp</span>
                </button>

                <a
                  href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 py-3 px-5 text-xs font-semibold text-[#ede8dc] bg-[#1e202b] hover:bg-[#282a39] border border-[#35384a] rounded-md transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>Call Reception</span>
                </a>
              </div>

              {formSubmitted && (
                <div className="p-3 bg-emerald-950/40 border border-emerald-800/60 rounded text-xs text-emerald-300 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Redirecting to WhatsApp with your reservation details!</span>
                </div>
              )}
            </form>
          </div>

          {/* Column 2: Official Contact Information & Opening Hours Note */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Calling & Contact Card */}
            <div className="bg-[#14151d] rounded-xl border border-[#272a39] p-7 shadow-xl">
              <h3 className="font-display text-xl font-bold text-[#f5ebd9]">
                Direct Contacts
              </h3>
              
              <div className="mt-5 space-y-4">
                <div className="p-4 bg-[#1a1c26] rounded-lg border border-[#2a2d3e]">
                  <div className="text-[11px] uppercase tracking-wider text-[#9f9687] font-semibold">
                    Phone Inquiries & Takeaway
                  </div>
                  <a
                    href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                    className="mt-1 font-display text-xl font-bold text-[#f5ebd9] hover:text-[#e5c158] transition-colors block"
                  >
                    {RESTAURANT_INFO.phone}
                  </a>
                  <div className="mt-2 flex items-center gap-2">
                    <a
                      href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white bg-[#831828] hover:bg-[#9d1c31] rounded transition-colors"
                    >
                      <Phone className="w-3 h-3" />
                      <span>Call Restaurant</span>
                    </a>
                    <a
                      href={RESTAURANT_INFO.whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#dcd6c9] bg-[#222533] hover:bg-[#2c3042] border border-[#373a4c] rounded transition-colors"
                    >
                      <MessageCircle className="w-3 h-3 text-emerald-400" />
                      <span>WhatsApp Message</span>
                    </a>
                  </div>
                </div>

                <div className="p-4 bg-[#1a1c26] rounded-lg border border-[#2a2d3e]">
                  <div className="text-[11px] uppercase tracking-wider text-[#9f9687] font-semibold">
                    Full Address
                  </div>
                  <p className="mt-1 text-xs text-[#d6cfc1] leading-relaxed">
                    {RESTAURANT_INFO.address}
                  </p>
                  <a
                    href={RESTAURANT_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-1 text-xs text-[#d4af37] hover:underline"
                  >
                    <Navigation className="w-3 h-3" />
                    <span>Get Directions on Maps</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Opening Hours Policy Box (No Invented Times) */}
            <div className="bg-[#14151d] rounded-xl border border-[#272a39] p-7 shadow-xl">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#d4af37] mb-2">
                <Clock className="w-4 h-4" />
                <span>Operating Hours</span>
              </div>

              <h4 className="font-display text-lg font-bold text-[#f5ebd9]">
                Today’s Schedule
              </h4>

              <div className="mt-3 p-4 bg-[#1a1c26] rounded-lg border border-[#2a2d3e] text-xs text-[#cfc7b8] leading-relaxed">
                <p className="font-semibold text-[#f0ebe0]">
                  “Please contact the restaurant to confirm today's opening hours.”
                </p>
                <p className="mt-2 text-[#9e9586]">
                  Mall operating schedules and festive timings can vary. Our team is available on phone and WhatsApp to confirm current seating times.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
