import React, { useState } from 'react';
import { X, Calendar, Clock, Users, MessageCircle, Phone, Info } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({ isOpen, onClose }) => {
  const [guestCount, setGuestCount] = useState('2-4 Guests');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('08:00 PM (Dinner)');
  const [name, setName] = useState('');
  const [specialRequest, setSpecialRequest] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
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
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div
        className="fixed inset-0"
        onClick={onClose}
      />
      <div className="relative w-full max-w-lg bg-[#14151e] border border-[#2e3142] rounded-xl shadow-2xl p-6 sm:p-8 z-10 overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-md text-[#9e9687] hover:text-white hover:bg-[#20222f] transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="pr-8">
          <div className="text-[11px] font-semibold tracking-widest uppercase text-[#d4af37]">
            Table Enquiry
          </div>
          <h3 className="font-display text-2xl font-bold text-[#f5ebd9] mt-1">
            The Delhi Story · Patna
          </h3>
          <p className="text-xs text-[#aba292] mt-1 leading-relaxed">
            Send an instant reservation enquiry directly to our team via WhatsApp.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-[11px] font-medium text-[#c5beb0] mb-1 flex items-center gap-1">
                <Users className="w-3 h-3 text-[#d4af37]" />
                <span>Guests</span>
              </label>
              <select
                value={guestCount}
                onChange={(e) => setGuestCount(e.target.value)}
                className="w-full px-3 py-2 rounded-md bg-[#1a1c27] border border-[#2c3041] text-xs text-[#f0ebe0] focus:outline-none focus:border-[#d4af37]"
              >
                <option value="1-2 Guests">1 - 2 Guests</option>
                <option value="3-4 Guests">3 - 4 Guests</option>
                <option value="5-8 Guests">5 - 8 Guests</option>
                <option value="9+ Guests">9+ Guests (Large Group)</option>
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-medium text-[#c5beb0] mb-1 flex items-center gap-1">
                <Calendar className="w-3 h-3 text-[#d4af37]" />
                <span>Date</span>
              </label>
              <input
                type="date"
                value={preferredDate}
                onChange={(e) => setPreferredDate(e.target.value)}
                className="w-full px-3 py-2 rounded-md bg-[#1a1c27] border border-[#2c3041] text-xs text-[#f0ebe0] focus:outline-none focus:border-[#d4af37]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-[11px] font-medium text-[#c5beb0] mb-1 flex items-center gap-1">
                <Clock className="w-3 h-3 text-[#d4af37]" />
                <span>Time</span>
              </label>
              <select
                value={preferredTime}
                onChange={(e) => setPreferredTime(e.target.value)}
                className="w-full px-3 py-2 rounded-md bg-[#1a1c27] border border-[#2c3041] text-xs text-[#f0ebe0] focus:outline-none focus:border-[#d4af37]"
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

            <div>
              <label className="block text-[11px] font-medium text-[#c5beb0] mb-1">
                Name (Optional)
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your Name"
                className="w-full px-3 py-2 rounded-md bg-[#1a1c27] border border-[#2c3041] text-xs text-[#f0ebe0] placeholder-[#716c63] focus:outline-none focus:border-[#d4af37]"
              />
            </div>
          </div>

          <div>
            <label className="block text-[11px] font-medium text-[#c5beb0] mb-1">
              Special Requests (Optional)
            </label>
            <input
              type="text"
              value={specialRequest}
              onChange={(e) => setSpecialRequest(e.target.value)}
              placeholder="e.g. Birthday, anniversary, quiet corner table"
              className="w-full px-3 py-2 rounded-md bg-[#1a1c27] border border-[#2c3041] text-xs text-[#f0ebe0] placeholder-[#716c63] focus:outline-none focus:border-[#d4af37]"
            />
          </div>

          <div className="p-3 bg-[#1a1c27] rounded border border-[#272a39] text-[11px] text-[#a8a192] flex items-start gap-2">
            <Info className="w-3.5 h-3.5 text-[#d4af37] shrink-0 mt-0.5" />
            <p>
              Your reservation is confirmed directly by the restaurant team upon reviewing table availability.
            </p>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
            <button
              type="submit"
              className="w-full sm:flex-1 flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold text-white bg-[#831828] hover:bg-[#9d1c31] border border-[#a6233a] rounded-md transition-all shadow"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>Send WhatsApp Enquiry</span>
            </button>

            <a
              href={`tel:${RESTAURANT_INFO.phoneRaw}`}
              className="w-full sm:w-auto flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold text-[#ede8dc] bg-[#1d1f2b] hover:bg-[#27293a] border border-[#323546] rounded-md transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>Call Us</span>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};
