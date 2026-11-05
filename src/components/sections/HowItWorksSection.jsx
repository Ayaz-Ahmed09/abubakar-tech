'use client';

import { CalendarCheck, MessageCircle, Phone, Timer, Wrench } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import { getCallUrl, getWhatsAppUrl } from '../../utils/contact';
import { trackCTAClick } from '../../utils/gtm';

const steps = [
  {
    icon: Phone,
    title: 'Call or WhatsApp',
    text: 'Tell us your AC problem — not cooling, gas leak, noise, or breakdown — and your location in Dubai. We confirm the nearest available AC technician.',
  },
  {
    icon: CalendarCheck,
    title: 'Book the visit',
    text: 'Choose emergency same-day AC repair or a scheduled slot. We share the expected arrival window before dispatch.',
  },
  {
    icon: Timer,
    title: 'We arrive fast',
    text: 'Our DEWA-certified AC technicians target a 30–60 minute arrival across Dubai for urgent AC repair calls.',
  },
  {
    icon: Wrench,
    title: 'Approve the fix',
    text: 'The technician diagnoses the AC fault, explains the repair, and starts only after you approve — then tests the cooling before leaving.',
  },
];

export default function HowItWorksSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeading title="How It Works" subtitle="Fast Booking" />
          <p className="-mt-8 mb-10 text-lg leading-8 text-slate-600">
            Booking AC repair in Dubai takes minutes. Here's how our AC technicians get your cooling back fast — from your first call to a fully tested fix.
          </p>
        </div>

        <div className="relative mx-auto max-w-6xl">
          <div className="workflow-line hidden sm:block" aria-hidden="true">
            <span />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <article
                  key={step.title}
                  className="workflow-step group relative rounded-2xl liquid-glass-beige p-5"
                  style={{ '--step-index': index }}
                >
                  <div className="mb-5 flex items-center justify-between">
                    <div className="badge-gold-plate relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-105">
                      <span className="relative text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.35)]">
                        <Icon size={22} />
                      </span>
                    </div>
                    <span className="text-sm font-bold text-lux-700">{String(index + 1).padStart(2, '0')}</span>
                  </div>
                  <h3 className="mb-2 font-heading text-xl font-bold text-lune">{step.title}</h3>
                  <p className="text-sm leading-6 text-slate-600">{step.text}</p>
                </article>
              );
            })}
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={getCallUrl()}
            onClick={() => trackCTAClick('call', 'how_it_works')}
            className="btn-liquid-noir inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl px-6 font-semibold sm:w-auto"
          >
            <Phone size={18} /> Call now
          </a>
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackCTAClick('whatsapp', 'how_it_works')}
            className="btn-liquid-whatsapp inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl px-6 font-semibold text-white sm:w-auto"
          >
            <MessageCircle size={18} /> WhatsApp booking
          </a>
        </div>
      </div>
    </section>
  );
}
