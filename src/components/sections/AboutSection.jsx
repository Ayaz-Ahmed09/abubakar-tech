'use client';

import { Shield, Clock, Users, Wrench } from 'lucide-react';
import Link from 'next/link';
import SectionHeading from '../ui/SectionHeading';
import HeroStats from '../ui/HeroStats';

export default function AboutSection({ showReadMore = false, isMainHeading = false }) {
  return (
    <>
      <section className={`relative bg-white py-20 ${isMainHeading ? 'overflow-hidden pb-16 sm:pb-20 lg:pb-24' : 'overflow-hidden'}`}>
        {/* Decorative bg elements */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-lux-100/40 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Text Content */}
            <div>
              <SectionHeading
                title="Dubai's Trusted Technical & Electrical Experts"
                subtitle="About Us"
                centered={false}
                as={isMainHeading ? 'h1' : 'h2'}
              />

              <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                <p>
                  At <strong className="text-lune">Abubakar And Waleed Technical Services LLC</strong>, we are a licensed home maintenance company in Dubai built on three core pillars: rapid emergency dispatch, DEWA-certified technical expertise, and transparent, upfront pricing. Whether you need urgent AC repair or an emergency electrician near you in Dubai, our technicians arrive ready to solve your problem safely and permanently.
                </p>
                <p>
                  From AC repair, Freon gas top-ups, and ducted deep cleaning to DB box troubleshooting, short-circuit fixes, lighting installation, and complete villa rewiring, our background-verified professionals serve every area in Dubai with a 30–60 minute arrival commitment.
                </p>
                <p className="badge-gold-plate inline-flex rounded-full px-4 py-2 text-sm font-semibold">
                  License No. 935347
                </p>
              </div>

              {showReadMore && (
                <div className="mt-8">
                  <Link href="/about" className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue to-blue-700 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                    Read More About Us
                  </Link>
                </div>
              )}

              <div className="grid grid-cols-2 gap-6 mt-10">
                <div className="flex gap-4">
                  <div className="badge-gold-plate w-12 h-12 rounded-xl flex items-center justify-center text-white shrink-0">
                    <Shield size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lune mb-1">Fully Licensed</h4>
                    <p className="text-sm text-slate-500">License No. 935347</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="badge-gold-plate w-12 h-12 rounded-xl flex items-center justify-center text-white shrink-0">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lune mb-1">24/7 Available</h4>
                    <p className="text-sm text-slate-500">Round the clock emergency support</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="badge-gold-plate w-12 h-12 rounded-xl flex items-center justify-center text-white shrink-0">
                    <Wrench size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lune mb-1">Guaranteed Work</h4>
                    <p className="text-sm text-slate-500">Warranty on all parts & labor</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="badge-gold-plate w-12 h-12 rounded-xl flex items-center justify-center text-white shrink-0">
                    <Users size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lune mb-1">Verified Staff</h4>
                    <p className="text-sm text-slate-500">Background checked professionals</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="aspect-[4/5] md:aspect-square rounded-3xl overflow-hidden shadow-2xl relative z-10 border-4 border-lux">
                <img
                  src="/Images/workshop-ac-repair.webp"
                  alt="Abubakar And Waleed Technical Services workshop"
                  width="1000"
                  height="1000"
                  loading={isMainHeading ? 'eager' : 'lazy'}
                  decoding="async"
                  className="w-full h-full object-cover"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
              </div>

              {/* Experience Badge */}
              <div className="absolute -bottom-6 -left-1 z-20 glass-card bg-white/90 backdrop-blur-md px-6 py-4 rounded-2xl shadow-xl border-2 border-slate-100 flex flex-col items-center justify-center">
                <span className="text-3xl font-heading font-bold text-gold-metallic">12+</span>
                <span className="text-sm font-semibold text-slate-700 uppercase tracking-wider text-center mt-1">Years of<br />Excellence</span>
              </div>
              <div className="absolute -top-8 -right-1 z-20 glass-card bg-liquid-glass backdrop-blur-md px-2 p-2 py-2 rounded-full shadow-xl border-2 border-white flex flex-col items-center justify-center">
                <span className="text-md font-heading font-semibold text-gold-metallic">Excellence</span>
                <span className="text-[10px] font-semibold text-slate-700 uppercase tracking-wider text-center mt-1">Guaranteed</span>
              </div>
            </div>

          </div>
        </div>
      </section>
      {isMainHeading && <HeroStats />}
    </>
  );
}
