'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { X, Calendar as CalendarIcon, Clock, User, Phone, Mail, MessageSquare } from 'lucide-react';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';
import 'react-day-picker/dist/style.css';
import { trackFormSubmission } from '../../utils/gtm';
import { submitWeb3Form } from '../../utils/web3forms';

export default function BookingModal({ isOpen, onClose, selectedService }) {
  const dialogRef = useRef(null);
  const [date, setDate] = useState();
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();

  const resetModalState = () => {
    setDate(undefined);
    setIsCalendarOpen(false);
    setIsSubmitting(false);
    setIsSuccess(false);
    setErrorMessage('');
  };

  const handleDialogClose = () => {
    resetModalState();
    onClose();
  };

  // Manage native dialog state
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen) {
      if (!dialog.open) {
        dialog.showModal();
      }
    } else if (dialog.open) {
      dialog.close();
    }
  }, [isOpen]);

  // Fallback for light-dismiss in browsers without closedby="any"
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (!('closedBy' in HTMLDialogElement.prototype)) {
      const handleLightDismiss = (e) => {
        if (e.target === dialog) {
          const rect = dialog.getBoundingClientRect();
          const isDialogContent = (
            rect.top <= e.clientY &&
            e.clientY <= rect.top + rect.height &&
            rect.left <= e.clientX &&
            e.clientX <= rect.left + rect.width
          );
          if (!isDialogContent) onClose();
        }
      };
      dialog.addEventListener('click', handleLightDismiss);
      return () => dialog.removeEventListener('click', handleLightDismiss);
    }
  }, [onClose]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    const form = e.currentTarget;
    const formData = new FormData(form);
    const selectedDate = date ? format(date, 'PPP') : '';

    formData.append('form_type', 'Book Now');
    formData.append('subject', 'New booking request from Abubakar And Waleed Technical Services LLC website');
    formData.append('selected_service', selectedService ? selectedService.title : 'General Repair');
    formData.append('preferred_date', selectedDate);

    try {
      await submitWeb3Form(formData);
      onClose();
      trackFormSubmission('booking_modal', 'success');
      router.push('/thank-you');
    } catch (error) {
      setIsSubmitting(false);
      setErrorMessage(error.message || 'Something went wrong. Please call us or try again.');
      trackFormSubmission('booking_modal', 'error');
    }
  };

  return (
    <dialog 
      ref={dialogRef}
      onClose={handleDialogClose}
      closedby="any"
      aria-labelledby="booking-title"
      className="p-0 bg-transparent backdrop:bg-dark-900/60 backdrop:backdrop-blur-sm outline-none m-auto max-w-lg w-full max-h-[90vh]"
    >
      <div className="bg-white w-full h-full md:rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-500 p-5 text-white flex justify-between items-center shrink-0">
          <div>
            <h2 id="booking-title" className="text-xl font-heading font-bold">Book a Service</h2>
            <p className="text-primary-50 text-sm mt-1 opacity-90">Fast, reliable, and guaranteed.</p>
          </div>
          {/* form method="dialog" correctly closes the native dialog */}
          <form method="dialog">
            <button className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors text-white">
              <X size={20} />
            </button>
          </form>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto custom-scrollbar">
          {isSuccess ? (
            <div className="text-center py-10">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              </div>
              <h3 className="text-2xl font-bold text-lune mb-2">Booking Confirmed!</h3>
              <p className="text-slate-600 mb-6">Thank you. Our team will contact you shortly to confirm the details.</p>
              <form method="dialog">
                <button className="bg-primary-600 text-white px-6 py-2.5 rounded-xl font-medium hover:bg-accent-700 transition-colors">
                  Close Window
                </button>
              </form>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />
              
              {/* Service Selection (Read-only if pre-selected, but let's make it standard text) */}
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-slate-700">Selected Service</label>
                <div className="bg-sand-gradient border border-slate-200 rounded-xl px-4 py-3 flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center shrink-0">
                    <Wrench size={16} />
                  </div>
                  <span className="font-medium text-slate-900">
                    {selectedService ? selectedService.title : 'General Repair'}
                  </span>
                </div>
              </div>

              {/* Personal Details Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                <label htmlFor="name" className="text-sm font-medium text-slate-700">Full Name *</label>
                <div className="relative">
                  <User size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input required id="name" name="name" type="text" placeholder="John Doe" className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all text-sm" />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="phone" className="text-sm font-medium text-slate-700">Phone Number *</label>
                  <div className="relative">
                    <Phone size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input required id="phone" name="phone" type="tel" placeholder="05X XXX XXXX" className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all text-sm" />
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <label htmlFor="email" className="text-sm font-medium text-slate-700">Email Address (Optional)</label>
                <div className="relative">
                  <Mail size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input id="email" name="email" type="email" placeholder="john@example.com" className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all text-sm" />
                </div>
              </div>

              {/* Date & Time Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Custom Date Picker Trigger */}
                <div className="space-y-1.5 relative">
                  <label className="text-sm font-medium text-slate-700">Preferred Date *</label>
                  <button 
                    type="button"
                    onClick={() => setIsCalendarOpen(!isCalendarOpen)}
                    className="w-full flex items-center gap-2 pl-3 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 text-left"
                  >
                    <CalendarIcon size={18} className="text-slate-400" />
                    <span className={date ? 'text-slate-900' : 'text-slate-400'}>
                      {date ? format(date, 'PPP') : 'Select Date'}
                    </span>
                  </button>
                  
                  {/* Calendar Popover */}
                  {isCalendarOpen && (
                    <div className="absolute top-[calc(100%+0.5rem)] left-0 z-10 bg-white border border-slate-100 rounded-2xl shadow-xl p-3 animate-in fade-in slide-in-from-top-2 duration-200">
                      <DayPicker
                        mode="single"
                        selected={date}
                        onSelect={(d) => { setDate(d); setIsCalendarOpen(false); }}
                        disabled={{ before: new Date() }}
                        modifiersClassNames={{
                          selected: 'bg-primary-600 text-white hover:bg-accent-700',
                          today: 'text-primary-600 font-bold'
                        }}
                        styles={{
                          head_cell: { width: '40px' },
                          cell: { width: '40px', height: '40px' }
                        }}
                      />
                    </div>
                  )}
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="time" className="text-sm font-medium text-slate-700">Preferred Time *</label>
                  <div className="relative">
                    <Clock size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <select required id="time" name="preferred_time" defaultValue="" className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all text-sm appearance-none cursor-pointer">
                      <option value="" disabled>Select Time Slot</option>
                      <option value="morning">Morning (8 AM - 12 PM)</option>
                      <option value="afternoon">Afternoon (12 PM - 4 PM)</option>
                      <option value="evening">Evening (4 PM - 8 PM)</option>
                      <option value="emergency">Emergency (ASAP)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label htmlFor="message" className="text-sm font-medium text-slate-700">Issue Details *</label>
                <div className="relative">
                  <MessageSquare size={18} className="absolute left-3 top-3 text-slate-400" />
                  <textarea required id="message" name="message" rows="3" placeholder="Please describe the issue you're facing..." className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all text-sm resize-none"></textarea>
                </div>
              </div>

              {errorMessage && (
                <p className="rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
                  {errorMessage}
                </p>
              )}

              {/* Submit */}
              <div className="pt-2 border-t border-slate-100 mt-2">
                <button 
                  type="submit" 
                  disabled={isSubmitting || !date}
                  className="btn-liquid-primary w-full py-3.5 rounded-xl font-medium disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center gap-2 text-white"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Confirming...
                    </>
                  ) : 'Confirm Booking'}
                </button>
                {!date && <p className="text-xs text-red-500 text-center mt-2">Please select a date to proceed</p>}
                <p className="text-xs text-slate-500 text-center mt-3">We will contact you to confirm the final quotation before arrival.</p>
              </div>
            </form>
          )}
        </div>
      </div>
    </dialog>
  );
}

function Wrench(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
  );
}
