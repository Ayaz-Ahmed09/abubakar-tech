import { Phone, Mail, Clock } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import ContactForm from '../ui/ContactForm';
import { getCallUrl, getDisplayPhone } from '../../utils/contact';
import HeroStats from '../ui/HeroStats';

export default function ContactSection({ isMainHeading = false }) {
  return (
    <>
      <section className={`relative bg-sand py-20 ${isMainHeading ? 'overflow-hidden pb-16 sm:pb-20 lg:pb-24' : 'overflow-hidden'}`}>
        {/* Decorative blob */}
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-lux-200/30 rounded-full blur-[80px] -translate-x-1/2 translate-y-1/2"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <SectionHeading
            title="Get In Touch"
            subtitle="Contact Us"
            as={isMainHeading ? 'h1' : 'h2'}
          />

          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

            {/* Contact Info */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              <div className="prose prose-slate">
                <p className="text-lg text-slate-600">
                  Facing a home repair emergency? Need a quick quote? Our friendly team is ready to help you 24 hours a day, 7 days a week.
                </p>
              </div>

              <div className="flex flex-col gap-6 mt-4">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white shadow-sm border border-slate-100 flex items-center justify-center text-lux-600 shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lune mb-1">Call Us 24/7</h4>
                    <a href={getCallUrl()} className="text-lg font-medium text-slate-600 hover:text-blue transition-colors">
                      {getDisplayPhone()}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white shadow-sm border border-slate-100 flex items-center justify-center text-lux-600 shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lune mb-1">Email Address</h4>
                    <a href="mailto:amintechnicalservice@gmail.com" className="text-lg font-medium text-slate-600 hover:text-blue transition-colors">
                      amintechnicalservice@gmail.com
                    </a>
                  </div>
                </div>

                {/* Location */}


                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white shadow-sm border border-slate-100 flex items-center justify-center text-lux-600 shrink-0">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lune mb-1">Working Hours</h4>
                    <p className="text-lg font-medium text-slate-600">
                      Monday - Sunday: 24 Hours
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

          </div>
        </div>
      </section>
      {isMainHeading && <HeroStats />}
    </>
  );
}
