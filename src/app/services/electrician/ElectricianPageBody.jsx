'use client';

import Link from 'next/link';
import { Phone, MessageCircle } from 'lucide-react';
import { getCallUrl, getDisplayPhone } from '../../../utils/contact';
import { useWhatsAppUrl, useSetServiceWhatsApp } from '../../../context/WhatsAppContext';
import { trackCTAClick } from '../../../utils/gtm';
import ServiceCard from '../../../components/ui/ServiceCard';
import SectionHeading from '../../../components/ui/SectionHeading';
import FAQSection from '../../../components/sections/FAQSection';
import ServiceTestimonials from '../../../components/sections/ServiceTestimonials';
import WhyChooseUs from '../../../components/sections/WhyChooseUs';
import AreasSection from '../../../components/sections/AreasSection';
import MiniQueryForm from '../../../components/ui/MiniQueryForm';
import BookingModal from '../../../components/ui/BookingModal';
import HeroStats from '../../../components/ui/HeroStats';
import { serviceTestimonials } from '../../../data/serviceTestimonials';
import { services } from '../../../data/services';
import { useState } from 'react';

export default function ElectricianPageBody() {
  useSetServiceWhatsApp('electrician');
  const whatsAppUrl = useWhatsAppUrl();
  const [selectedSubService, setSelectedSubService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBookNow = (subService) => {
    setSelectedSubService(subService);
    setIsModalOpen(true);
  };

  const subServices = services.find((service) => service.slug === 'electrician')?.subServices ?? [];

  return (
    <>
      <section className="relative flex min-h-[68vh] items-center overflow-hidden bg-dark-900 pt-32 pb-16 text-white sm:pb-20 md:pt-40 lg:pb-24">
        <div className="absolute inset-0 z-0 opacity-70">
          <img
            src="/Images/electricen/hero.jpeg"
            alt="Electrician Services Dubai"
            width="1408"
            height="768"
            fetchPriority="high"
            decoding="async"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight text-white drop-shadow-md">
              Electrician Services Near You In Dubai
            </h1>
            <p className="text-lg text-slate-200 leading-relaxed mt-8 drop-shadow-sm max-w-3xl mx-auto text-pretty">
              Looking for a fast, licensed electrician near you in Dubai? Our DEWA-certified electricians fix tripping DB boxes, short circuits, switch & socket faults, and lighting installations — with same-day, 24/7 service and a 30–60 minute arrival anywhere in Dubai.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center mt-8 pt-18">
              <a href={getCallUrl()} onClick={() => trackCTAClick('call', 'electrician_hero')} className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/5 backdrop-blur-[2px] backdrop-saturate-150 text-white border border-white/50 px-8 py-4 rounded-xl text-lg font-semibold shadow-[inset_0_1px_0_rgba(255,255,255,0.45),0_10px_28px_-8px_rgba(0,0,0,0.4)] hover:bg-white/15 hover:border-white/80 transition-all duration-300">
                <Phone size={20} className='text-blue-600 animate-bounce' /> {getDisplayPhone()}
              </a>
              <a href={whatsAppUrl} target="_blank" rel="noopener noreferrer" onClick={() => trackCTAClick('whatsapp', 'electrician_hero')} className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/5 backdrop-blur-[2px] backdrop-saturate-150 text-white border border-white/50 px-8 py-4 rounded-xl text-lg font-semibold shadow-[inset_0_1px_0_rgba(255,255,255,0.45),0_10px_28px_-8px_rgba(0,0,0,0.4)] hover:bg-white/15 hover:border-white/80 transition-all duration-300">
                <MessageCircle size={20} className="text-[#25D366]" /> WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <SectionHeading title="About Our Electrician Services" subtitle="About Us" />
            <div className="prose prose-lg text-slate-600 mx-auto text-left md:text-center mt-8">
              <p className="mb-6 leading-relaxed">In modern Dubai homes and commercial properties, a safe and fully operational electrical system is essential. Abubakar And Waleed Technical Services LLC specializes in comprehensive electrician services, emergency troubleshooting, and high-precision electrical maintenance to keep your property safe and fully powered year-round.</p>
              <p className="mb-6 leading-relaxed">Our certified DEWA electricians are trained to handle all electrical systems in villas, apartments, and offices. From fixing tripping DB circuit breakers and wiring high-load appliances to installing decorative chandeliers and LED lighting, we deliver safe, code-compliant work with maximum reliability.</p>
              <p className="mb-6 leading-relaxed">We pride ourselves on our rapid 24/7 response times and transparent pricing. Whether you face a midnight power loss, burning electrical outlet, or need scheduled property rewiring, our team is standing by to deliver permanent, guaranteed electrical solutions.</p>
            </div>
          </div>
          <div className='py-10'><HeroStats /></div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading title="What We Offer" subtitle="Our Services" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {subServices.map(sub => (
              <ServiceCard key={sub.id} service={sub} variant="sub" onBookNow={handleBookNow} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sand-gradient py-20">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading title="Electrical Repair Details" subtitle="Service Information" />
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 lg:grid-cols-2">
            <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <h3 className="mb-3 font-heading text-2xl font-bold text-lune">Electrical issues we diagnose</h3>
              <p className="mb-5 leading-7 text-slate-600">We tackle all common and complex electrical problems in Dubai, ensuring your home power system is 100% safe and compliant.</p>
              <ul className="space-y-3">
                <li className="flex gap-3 text-slate-700"><span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary-600" />Sudden power outages, short circuits, burnt sockets, and tripping breakers.</li>
                <li className="flex gap-3 text-slate-700"><span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary-600" />Distribution board (DB) checks, ELCB/MCB testing, and earthing audits.</li>
                <li className="flex gap-3 text-slate-700"><span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary-600" />Indoor, outdoor, garden, and decorative chandelier lighting installation.</li>
              </ul>
            </article>
            <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <h3 className="mb-3 font-heading text-2xl font-bold text-lune">What happens during service</h3>
              <p className="mb-5 leading-7 text-slate-600">The technician performs standard safety testing before recommending repair, replacement, or rewiring.</p>
              <ul className="space-y-3">
                <li className="flex gap-3 text-slate-700"><span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary-600" />We confirm the electrical symptoms, property type, and urgency before dispatch.</li>
                <li className="flex gap-3 text-slate-700"><span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary-600" />The technician tests load capacity, voltage stability, and earthing continuity.</li>
                <li className="flex gap-3 text-slate-700"><span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary-600" />You receive a clear explanation of the issue and the repair is load-tested before handover.</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* New Section 1: DEWA Compliance & Safety Standards */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading title="DEWA Compliance & Villa Electrical Safety Standards" subtitle="Safety Protocols" />
          <div className="max-w-4xl mx-auto mb-12 text-center text-slate-600 leading-relaxed">
            <p className="text-lg">In Dubai's extreme climate, electrical infrastructure faces heavy continuous loads from high-capacity AC systems, water heaters, and modern luxury appliances. Our certified technicians adhere to strict DEWA regulations and Dubai Municipality codes to ensure complete safety and fire prevention.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="rounded-2xl border border-slate-100 bg-slate-50/50 p-6 transition-all duration-300 hover:shadow-md">
              <div className="w-12 h-12 rounded-xl bg-blue-600/10 text-blue-600 flex items-center justify-center mb-4 font-bold text-xl">01</div>
              <h3 className="text-xl font-heading font-bold text-lune mb-3">DB Board Phase Balancing</h3>
              <p className="text-sm text-slate-600 leading-relaxed">High summer temperatures can overload unbalanced DB phases. We re-distribute circuit loads evenly across 3-phase DB boards to prevent localized overheating and breaker trips.</p>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-slate-50/50 p-6 transition-all duration-300 hover:shadow-md">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center mb-4 font-bold text-xl">02</div>
              <h3 className="text-xl font-heading font-bold text-lune mb-3">Earthing &amp; ELCB Testing</h3>
              <p className="text-sm text-slate-600 leading-relaxed">Coastal soil condition in areas like Palm Jumeirah or Dubai Marina can affect earth grounding. We conduct digital earth-loop impedance tests to ensure earth leakage circuit breakers trip instantly during faults.</p>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-slate-50/50 p-6 transition-all duration-300 hover:shadow-md">
              <div className="w-12 h-12 rounded-xl bg-emerald-600/10 text-emerald-600 flex items-center justify-center mb-4 font-bold text-xl">03</div>
              <h3 className="text-xl font-heading font-bold text-lune mb-3">Surge &amp; Fire Protection</h3>
              <p className="text-sm text-slate-600 leading-relaxed">We fit DEWA-approved fire-retardant wiring, surge protection devices, and heat-resistant terminal blocks to protect your luxury home electronics from voltage spikes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* New Section 2: 5-Step Electrical Workflow */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <SectionHeading title="Our 5-Step Electrical Repair & Inspection Process" subtitle="How We Work" className="[&_h2]:text-white [&_p]:text-amber-400" />
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mt-12">
            <div className="flex flex-col items-center text-center p-4 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-xs">
              <span className="w-10 h-10 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center mb-4 shadow-lg">1</span>
              <h4 className="font-heading font-bold text-lg mb-2 text-white">Rapid Dispatch</h4>
              <p className="text-xs text-slate-300 leading-relaxed">30–60 min emergency arrival anywhere in Dubai with full toolsets.</p>
            </div>
            <div className="flex flex-col items-center text-center p-4 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-xs">
              <span className="w-10 h-10 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center mb-4 shadow-lg">2</span>
              <h4 className="font-heading font-bold text-lg mb-2 text-white">Digital Fault Test</h4>
              <p className="text-xs text-slate-300 leading-relaxed">Multimeter & thermal checks to isolate hidden short circuits.</p>
            </div>
            <div className="flex flex-col items-center text-center p-4 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-xs">
              <span className="w-10 h-10 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center mb-4 shadow-lg">3</span>
              <h4 className="font-heading font-bold text-lg mb-2 text-white">Upfront Quote</h4>
              <p className="text-xs text-slate-300 leading-relaxed">Transparent pricing provided before work starts with zero surprises.</p>
            </div>
            <div className="flex flex-col items-center text-center p-4 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-xs">
              <span className="w-10 h-10 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center mb-4 shadow-lg">4</span>
              <h4 className="font-heading font-bold text-lg mb-2 text-white">DEWA Fix</h4>
              <p className="text-xs text-slate-300 leading-relaxed">Licensed execution following Dubai Municipality electrical safety standards.</p>
            </div>
            <div className="flex flex-col items-center text-center p-4 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-xs">
              <span className="w-10 h-10 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center mb-4 shadow-lg">5</span>
              <h4 className="font-heading font-bold text-lg mb-2 text-white">Load Handover</h4>
              <p className="text-xs text-slate-300 leading-relaxed">Full system safety testing and clean site restoration before handover.</p>
            </div>
          </div>
        </div>
      </section>

      <FAQSection serviceSlug="electrician" />

      <WhyChooseUs />
      <AreasSection />

      <ServiceTestimonials
        serviceName="Electrician Services"
        reviews={serviceTestimonials.electrician}
      />

      <section className="py-12 bg-beige text-lune text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold mb-4 text-lune">Need Immediate Electrician Service?</h2>
          <p className="text-lune/70 mb-8 max-w-2xl mx-auto text-lg">Our DEWA-certified electricians are available 24/7. Get in touch today for a free consultation or emergency power fix.</p>
          <Link href="/contact" className="btn-liquid-noir inline-flex px-8 py-3 rounded-xl font-bold">Contact Us Now</Link>
        </div>
      </section>

      <MiniQueryForm serviceName="Electrician Services" />

      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} selectedService={selectedSubService} />
    </>
  );
}
