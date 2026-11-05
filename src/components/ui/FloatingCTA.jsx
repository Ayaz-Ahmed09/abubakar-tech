'use client';

import { useEffect, useState } from 'react';
import { ArrowUp, MessageCircle, Phone } from 'lucide-react';
import { getCallUrl } from '../../utils/contact';
import { useWhatsAppUrl } from '../../context/WhatsAppContext';
import { trackCTAClick } from '../../utils/gtm';

export default function FloatingCTA() {
  const whatsAppUrl = useWhatsAppUrl();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 360);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: reduceMotion ? 'auto' : 'smooth',
    });
  };

  return (
    <>
      <button
        type="button"
        onClick={scrollToTop}
        className={`fixed bottom-6 left-6 z-40 btn-liquid-clear flex h-14 w-14 items-center justify-center rounded-full text-slate-800 transition-all duration-200 active:scale-[0.97] ${showScrollTop
          ? 'pointer-events-auto translate-y-0 opacity-100'
          : 'pointer-events-none translate-y-3 opacity-0'
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp size={24} />
      </button>

      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
        {/* Call Button - Blue Liquid Glass */}
        <a
          href={getCallUrl()}
          onClick={() => trackCTAClick('call', 'floating')}
          className="btn-liquid-primary w-14 h-14 rounded-full flex items-center justify-center relative group"
          aria-label="Call Us"
        >
          <Phone size={24} className="fill-white/20" />
          {/* Tooltip */}
          <span className="absolute right-full mr-4 liquid-glass-dark-tint text-white text-xs font-medium py-1.5 px-3 rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all whitespace-nowrap">
            Call Now
          </span>
        </a>

        {/* WhatsApp Button - Emerald Liquid Glass with Ping */}
        <a
          href={whatsAppUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackCTAClick('whatsapp', 'floating')}
          className="btn-liquid-whatsapp w-14 h-14 rounded-full flex items-center justify-center relative group"
          aria-label="WhatsApp Us"
        >
          <MessageCircle size={26} className="fill-white/20" />

          {/* Outer ping animation */}
          <span className="absolute inset-0 rounded-full border-2 border-[#25D366] animate-ping opacity-75 pointer-events-none"></span>

          {/* Tooltip */}
          <span className="absolute right-full mr-4 liquid-glass-dark-tint text-white text-xs font-medium py-1.5 px-3 rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all whitespace-nowrap">
            WhatsApp Us
          </span>
        </a>
      </div>
    </>
  );
}
