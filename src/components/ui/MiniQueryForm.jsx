'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { MessageSquare, Send } from 'lucide-react';
import { trackFormSubmission } from '../../utils/gtm';
import { submitWeb3Form } from '../../utils/web3forms';

export default function MiniQueryForm({ serviceName }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append('form_type', `Service Query: ${serviceName}`);
    formData.append('subject', `New query for ${serviceName} from Abubakar And Waleed Technical Services LLC website`);

    try {
      await submitWeb3Form(formData);
      trackFormSubmission(`query_form_${serviceName.toLowerCase().replace(/\\s+/g, '_')}`, 'success');
      router.push('/thank-you');
    } catch (error) {
      setIsSubmitting(false);
      setErrorMessage(error.message || 'Something went wrong. Please call us or try again.');
      trackFormSubmission(`query_form_${serviceName.toLowerCase().replace(/\\s+/g, '_')}`, 'error');
    }
  };

  return (
    <section className="py-16 bg-sand-gradient">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden flex flex-col md:flex-row">
          <div className="md:w-1/3 btn-liquid-primary border-3 border-sand p-8 text-white flex flex-col justify-center">
            <MessageSquare size={40} className="mb-6 opacity-80 text-shadow-gray-600" />
            <h2 className="text-2xl font-bold font-heading mb-4 text-white">Quick Query</h2>
            <p className="text-white/85 leading-relaxed">
              Have a specific question about our {serviceName} services? Send us a quick message and we'll get back to you in 30 minutes.
            </p>
          </div>
          <div className="md:w-2/3 p-8 ">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Name *</label>
                  <input required name="name" type="text" placeholder="Your Name" className="w-full px-4 py-2.5 bg-beige border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue/20 focus:border-blue transition-all text-sm" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Phone *</label>
                  <input required name="phone" type="tel" placeholder="05X XXX XXXX" className="w-full px-4 py-2.5 bg-beige border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue/20 focus:border-blue transition-all text-sm" />
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Your Query *</label>
                <textarea required name="message" rows="3" placeholder="How can we help you today?" className="w-full px-4 py-2.5 bg-beige border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue/20 focus:border-blue transition-all text-sm resize-none"></textarea>
              </div>
              <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />
              <div className="flex items-center justify-between gap-4">
                {errorMessage && <p className="text-xs font-medium text-red-600">{errorMessage}</p>}
                <button disabled={isSubmitting} className="btn-liquid-primary ml-auto inline-flex items-center gap-2 px-6 py-2.5 rounded-xl font-bold disabled:opacity-50">
                  {isSubmitting ? 'Sending...' : 'Send Query'} <Send size={16} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
