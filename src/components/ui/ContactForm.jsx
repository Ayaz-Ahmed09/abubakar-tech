'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { User, Phone, Mail, MessageSquare, Send } from 'lucide-react';
import { trackFormSubmission } from '../../utils/gtm';
import { submitWeb3Form } from '../../utils/web3forms';

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append('form_type', 'Contact Us');
    formData.append('subject', 'New contact request from Abubakar And Waleed Technical Services LLC website');

    try {
      await submitWeb3Form(formData);
      trackFormSubmission('contact_form', 'success');
      router.push('/thank-you');
    } catch (error) {
      setIsSubmitting(false);
      setErrorMessage(error.message || 'Something went wrong. Please call us or try again.');
      trackFormSubmission('contact_form', 'error');
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-white rounded-2xl p-8 shadow-xl border border-slate-100 text-center flex flex-col items-center justify-center min-h-[400px]">
        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        <h3 className="text-2xl font-bold font-heading text-lune mb-3">Message Sent!</h3>
        <p className="text-slate-600 mb-8 max-w-sm">
          Thank you for reaching out. One of our specialists will get back to you within 30 minutes.
        </p>
        <button 
          onClick={() => {
            setIsSuccess(false);
            setErrorMessage('');
          }}
          className="text-primary-600 font-semibold hover:text-accent-700 transition-colors"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 md:p-8 shadow-xl border border-slate-100 flex flex-col gap-5">
      <h3 className="text-2xl font-bold font-heading text-lune mb-2">Request a Call Back</h3>
      
      <div className="space-y-1.5">
        <label htmlFor="contact-name" className="text-sm font-medium text-slate-700">Full Name *</label>
        <div className="relative">
          <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
          <input required id="contact-name" name="name" type="text" placeholder="John Doe" className="w-full pl-11 pr-4 py-3 bg-beige border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue/20 focus:border-blue focus:bg-white transition-all text-sm" />
        </div>
      </div>

      <div className="space-y-1.5">
        <label htmlFor="contact-phone" className="text-sm font-medium text-slate-700">Phone Number *</label>
        <div className="relative">
          <Phone size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
          <input required id="contact-phone" name="phone" type="tel" placeholder="05X XXX XXXX" className="w-full pl-11 pr-4 py-3 bg-beige border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue/20 focus:border-blue focus:bg-white transition-all text-sm" />
        </div>
      </div>

      <div className="space-y-1.5">
        <label htmlFor="contact-email" className="text-sm font-medium text-slate-700">Email Address</label>
        <div className="relative">
          <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
          <input id="contact-email" name="email" type="email" placeholder="john@example.com" className="w-full pl-11 pr-4 py-3 bg-beige border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue/20 focus:border-blue focus:bg-white transition-all text-sm" />
        </div>
      </div>

      <div className="space-y-1.5">
        <label htmlFor="contact-message" className="text-sm font-medium text-slate-700">How can we help? *</label>
        <div className="relative">
          <MessageSquare size={18} className="absolute left-4 top-3.5 text-slate-400" />
          <textarea required id="contact-message" name="message" rows="4" placeholder="Describe the issue you're facing..." className="w-full pl-11 pr-4 py-3 bg-beige border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue/20 focus:border-blue focus:bg-white transition-all text-sm resize-none"></textarea>
        </div>
      </div>

      <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

      {errorMessage && (
        <p className="rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
          {errorMessage}
        </p>
      )}

      <button 
        type="submit" 
        disabled={isSubmitting}
        className="btn-liquid-primary w-full mt-2 py-3.5 rounded-xl font-medium disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none flex justify-center items-center gap-2"
      >
        {isSubmitting ? (
          <>
            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
            Sending...
          </>
        ) : (
          <>
            Send Message <Send size={18} className="ml-1" />
          </>
        )}
      </button>
    </form>
  );
}
