'use client';

import Link from 'next/link';
import { ArrowRight, Phone, MessageCircle, Calendar } from 'lucide-react';
import { getCallUrl } from '../../utils/contact';
import { useWhatsAppUrl } from '../../context/WhatsAppContext';
import { trackCTAClick } from '../../utils/gtm';

export default function ServiceCard({
  variant = 'main', // 'main' or 'sub'
  service,
  onBookNow
}) {
  const isMain = variant === 'main';
  const whatsAppUrl = useWhatsAppUrl();

  return (
    <div className="group rounded-2xl overflow-hidden glass-card border-3 border-lux-500 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col h-full border border-slate-100 bg-white">
      {/* Image Container */}
      <div className="relative aspect-4/3 overflow-hidden bg-slate-100">
        <img
          src={service.image}
          alt={service.title}
          width="800"
          height="600"
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          onError={(e) => { e.target.style.display = 'none'; }}
        />
        {/* Subtle overlay gradient */}
        <div className="absolute inset-0 bg-linear-to-t from-lune/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Content Container */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-heading font-bold text-lune mb-2 leading-tight">
          {service.title}
        </h3>

        <p className="text-sm text-slate-600 mb-6 flex-1 line-clamp-3">
          {isMain ? service.heroDescription : service.description}
        </p>

        {/* Action Buttons */}
        {isMain ? (
          <Link
            href={service.path}
            className="inline-flex items-center gap-2 text-blue font-semibold text-sm hover:text-blue-700 transition-colors mt-auto"
          >
            View Details <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        ) : (
          <div className="flex flex-col gap-3 mt-auto">
            {/* Primary Action - Call Now */}
            <a
              href={getCallUrl()}
              onClick={() => trackCTAClick('call', 'service_card')}
              className="badge-gold-plate w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-medium hover:shadow-lg transition-shadow"
            >
              <Phone size={16} /> Call Now
            </a>

            {/* Secondary Actions - Book & WhatsApp */}
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => {
                  trackCTAClick('book_now', 'service_card');
                  onBookNow(service);
                }}
                className="flex items-center justify-center gap-1.5 btn-liquid-primary text-white hover:bg-blue-700 py-2 rounded-xl text-xs font-medium border border-blue transition-colors"
              >
                <Calendar size={14} className="text-white" /> Book
              </button>
              <a
                href={whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackCTAClick('whatsapp', 'service_card')}
                className="flex items-center justify-center gap-1.5 btn-liquid-whatsapp py-2 rounded-xl text-xs font-medium transition-colors"
              >
                <MessageCircle size={14} /> WhatsApp
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
