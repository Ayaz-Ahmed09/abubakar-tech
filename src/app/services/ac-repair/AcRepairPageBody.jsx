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

export default function AcRepairPageBody() {
  useSetServiceWhatsApp('AC repair');
  const whatsAppUrl = useWhatsAppUrl();
  const [selectedSubService, setSelectedSubService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBookNow = (subService) => {
    setSelectedSubService(subService);
    setIsModalOpen(true);
  };

  const subServices = services.find((service) => service.slug === 'ac-repair')?.subServices ?? [];

  return (
    <>
      <section className="relative flex min-h-[68vh] items-center overflow-hidden bg-dark-900 pt-32 pb-16 text-white sm:pb-20 md:pt-40 lg:pb-24">
        <div className="absolute inset-0 z-0 opacity-70">
          <img
            src="/Images/ac-repair-hero.webp"
            alt="AC Repair Dubai"
            width="1600"
            height="1000"
            fetchPriority="high"
            decoding="async"
            className="w-full h-full object-cover object-center"
          />
          {/* <div className="absolute inset-0 bg-linear-to-t from-dark-900/80  to-dark-900/30 opacity-20"></div> */}
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight text-white drop-shadow-md">
              AC Repair Near You In Dubai
            </h1>
            <p className="text-lg text-slate-200 leading-relaxed mt-8 drop-shadow-sm max-w-3xl mx-auto text-pretty">
              Looking for fast AC repair near you in Dubai? Our DEWA-certified technicians fix weak cooling, gas leaks, strange noises, and sudden breakdowns — with same-day, 24/7 service and a 30–60 minute arrival anywhere in Dubai.
            </p>
            <div className="flex flex-col sm:flex-row  items-center gap-4 justify-center mt-8 pt-18">
              <a href={getCallUrl()} onClick={() => trackCTAClick('call', 'ac_hero')} className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/5 backdrop-blur-[2px] backdrop-saturate-150 text-white border border-white/50 px-8 py-4 rounded-xl text-lg font-semibold shadow-[inset_0_1px_0_rgba(255,255,255,0.45),0_10px_28px_-8px_rgba(0,0,0,0.4)] hover:bg-white/15 hover:border-white/80 transition-all duration-300">
                <Phone size={20} className='text-blue-600  animate-bounce' /> {getDisplayPhone()}
              </a>
              <a href={whatsAppUrl} target="_blank" rel="noopener noreferrer" onClick={() => trackCTAClick('whatsapp', 'ac_hero')} className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/5 backdrop-blur-[2px] backdrop-saturate-150 text-white border border-white/50 px-8 py-4 rounded-xl text-lg font-semibold shadow-[inset_0_1px_0_rgba(255,255,255,0.45),0_10px_28px_-8px_rgba(0,0,0,0.4)] hover:bg-white/15 hover:border-white/80 transition-all duration-300">
                <MessageCircle size={20} className="text-[#25D366]" /> WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <SectionHeading title="About Our AC Services" subtitle="About Us" />
            <div className="prose prose-lg text-slate-600 mx-auto text-left md:text-center mt-8">
              <p className="mb-6 leading-relaxed">In the extreme climate of Dubai, a fully functioning air conditioning system is not a luxury; it's a necessity. Abubakar And Waleed Technical Services LLC specializes in comprehensive AC repair, maintenance, and installation services designed to keep your indoor environment perfectly chilled year-round.</p>
              <p className="mb-6 leading-relaxed">Our certified HVAC technicians are equipped to service all major AC brands and types, including split systems, central AC, and ducted units. We go beyond simple fixes; our deep cleaning and preventative maintenance services improve your air quality and reduce energy consumption.</p>
              <p className="mb-6 leading-relaxed">We pride ourselves on our rapid response times and permanent solutions. Whether you're facing a sudden compressor failure or need a routine Freon gas top-up, our team is standing by 24/7.</p>
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


      <section className="bg-s-gradient py-20">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading title="AC Repair Details" subtitle="Service Information" />
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 lg:grid-cols-2">
            <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <h3 className="mb-3 font-heading text-2xl font-bold text-lune">AC issues we diagnose</h3>
              <p className="mb-5 leading-7 text-slate-600">We tackle all common and complex AC problems in Dubai, ensuring your cooling system operates at peak efficiency.</p>
              <ul className="space-y-3">
                <li className="flex gap-3 text-slate-700"><span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary-600" />Weak cooling, warm air, compressor faults, and water leakage.</li>
                <li className="flex gap-3 text-slate-700"><span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary-600" />Split AC, ducted AC, window AC, and thermostat checks.</li>
                <li className="flex gap-3 text-slate-700"><span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary-600" />Preventive cleaning for filters, coils, and drain trays.</li>
              </ul>
            </article>
            <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <h3 className="mb-3 font-heading text-2xl font-bold text-lune">What happens during service</h3>
              <p className="mb-5 leading-7 text-slate-600">The technician checks the unit before recommending repair, cleaning, gas refill, or replacement.</p>
              <ul className="space-y-3">
                <li className="flex gap-3 text-slate-700"><span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary-600" />We confirm the AC type, symptoms, and urgency before dispatch.</li>
                <li className="flex gap-3 text-slate-700"><span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary-600" />The technician tests cooling, airflow, and refrigerant pressure.</li>
                <li className="flex gap-3 text-slate-700"><span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary-600" />You receive a clear explanation and the repair is tested before handover.</li>
              </ul>
            </article>
          </div>
        </div>
      </section>
      <FAQSection serviceSlug="ac-repair" />

      <WhyChooseUs />
      <AreasSection />

      <ServiceTestimonials
        serviceName="AC Repair Services"
        reviews={serviceTestimonials.acRepair}
      />
      <section className="py-12 bg-beige text-lune text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold mb-4 text-lune">Need Immediate AC Repair?</h2>
          <p className="text-lune/70 mb-8 max-w-2xl mx-auto text-lg">Our HVAC technicians are available 24/7. Get in touch today for a free consultation or emergency cooling fix.</p>
          <Link href="/contact" className="btn-liquid-noir inline-flex px-8 py-3 rounded-xl font-bold">Contact Us Now</Link>
        </div>
      </section>
      <MiniQueryForm serviceName="AC Repair Services" />

      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} selectedService={selectedSubService} />
    </>
  );
}
