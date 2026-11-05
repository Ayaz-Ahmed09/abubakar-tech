'use client';

import { Phone, MessageCircle, ShieldCheck, Clock, Award } from 'lucide-react';
import { getCallUrl, getWhatsAppUrl, getDisplayPhone } from '../../utils/contact';
import { trackCTAClick } from '../../utils/gtm';
import HeroStats from '../ui/HeroStats';

export default function HeroSection() {
  return (
    <>
      <section className="relative flex min-h-[100vh] items-center overflow-hidden pt-32 pb-16 sm:pb-20 lg:pt-40 lg:pb-24">
        {/* Background with modern glassmorphic blur effects */}
        <div className="absolute inset-0 z-0 overflow-hidden bg-sand">
          {/* Animated gradient orbs */}
          {/* <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-lux-200/35 rounded-full blur-3xl opacity-60 mix-blend-multiply translate-x-1/3 -translate-y-1/4 animate-blob"></div> */}
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-sand/10 rounded-full blur-3xl opacity-60 mix-blend-multiply -translate-x-1/3 translate-y-1/4 animate-blob animation-delay-2000"></div>

          {/* Subtle grid pattern */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyMCwgMjEsIDI0LCAwLjA2KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] z-10"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Text Content */}
            <div className="lg:col-span-7 flex flex-col gap-6 text-center lg:text-left">
              <div className="badge-gold-plate inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full font-semibold text-sm w-fit mx-auto lg:mx-0">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ffffff] opacity-60"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#000000]"></span>
                </span>
                24/7 Emergency Service
              </div>

              {/* SEO-Optimized H1 */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-beige-900 leading-[1.15] antialiased">
                Dubai's Most Trusted <br className="hidden md:block" />
                <span className="text-gold-metallic">Home Repair</span> Services
              </h1>

              <p className="text-lg text-pretty text-slate-600 font-sans max-w-2xl mx-auto lg:mx-0 subpixel-antialiased">
                Licensed technicians at your door in 30 minutes. We provide guaranteed, secure, and professional AC repair, servicing, and maintenance across Dubai.
              </p>

              {/* Trust Signals */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 md:gap-8 my-2">
                <div className="flex items-center gap-2 text-sm font-medium lure-black">
                  <ShieldCheck size={20} className="text-lux-600" /> Fully Licensed
                </div>
                <div className="flex items-center gap-2 text-sm font-medium lure-black  ">
                  <Clock size={20} className="text-lux-600" /> 30-Min Arrival
                </div>
                <div className="flex items-center gap-2 text-sm font-medium lure-black">
                  <Award size={20} className="text-lux-600" /> Guaranteed Work
                </div>
              </div>

              {/* CTAs */}
              <div className="mx-auto mt-2 flex w-full max-w-md flex-col items-stretch justify-center gap-4 sm:max-w-none sm:flex-row sm:flex-wrap sm:items-center lg:mx-0 lg:justify-start">
                <a
                  href={getCallUrl()}
                  onClick={() => trackCTAClick('call', 'hero')}
                  className="btn-liquid-primary flex min-h-14 w-full items-center justify-center gap-3 rounded-2xl px-5 py-4 text-center font-sans font-bold text-white sm:w-auto sm:min-w-48 sm:px-6 md:min-w-56 lg:min-w-0 lg:px-7"
                >
                  <Phone size={20} className="shrink-0" />
                  <span className="whitespace-nowrap">Call {getDisplayPhone()}</span>
                </a>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackCTAClick('whatsapp', 'hero')}
                  className="btn-liquid-whatsapp flex min-h-14 w-full items-center justify-center gap-3 rounded-2xl px-5 py-4 text-center font-sans font-bold text-white sm:w-auto sm:min-w-48 sm:px-6 md:min-w-56 lg:min-w-0 lg:px-7"
                >
                  <MessageCircle size={20} className="shrink-0" />
                  <span className="whitespace-nowrap">WhatsApp Us</span>
                </a>
              </div>
            </div>

            {/* Hero Visual / Glass Card */}
            <div className="lg:col-span-5 relative hidden md:block">
              {/* Generated Image will go here */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-4/5 bg-slate-200">
                <img
                  src="/Images/our-ac-repairing-units.webp"
                  alt="AC repair technician servicing a unit in Dubai"
                  width="960"
                  height="1200"
                  fetchPriority="high"
                  decoding="async"
                  className="w-full h-full object-cover"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
                <div className="absolute inset-0 bg-linear-to-t from-lune/80 via-lune/20 to-transparent"></div>

                {/* Floating review card */}
                <div className="absolute bottom-6 left-6 right-6 glass-card p-4 rounded-xl bg-white/90 backdrop-blur-md">
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-[#FFB800] fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>
                    ))}
                  </div>
                  <p className="text-sm text-slate-800 font-medium mb-1">"Fixed my AC in 20 minutes. Incredible service!"</p>
                  <p className="text-xs text-slate-500">Sarah J., Dubai Marina</p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </section>
      <HeroStats />
    </>
  );
}
