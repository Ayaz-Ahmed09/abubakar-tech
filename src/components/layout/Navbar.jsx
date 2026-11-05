'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, MessageCircle, ChevronDown } from 'lucide-react';
import { services } from '../../data/services';
import { getWhatsAppUrl, getCallUrl, getDisplayPhone } from '../../utils/contact';
import { trackCTAClick } from '../../utils/gtm';

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeNavigation = () => {
    setIsOpen(false);
    setServicesOpen(false);
  };

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const normalizePath = (p) => (p.length > 1 && p.endsWith('/') ? p.slice(0, -1) : p);
  const isActive = (path) => normalizePath(pathname) === normalizePath(path);

  const navLinkClasses = (path) =>
    `rounded-full px-3.5 py-2 text-sm font-semibold transition-all duration-200 ${isActive(path)
      ? 'btn-liquid-primary !py-1.5 !px-4 text-white'
      : 'text-slate-700 hover:bg-white/80 hover:text-accent-600 hover:shadow-xs'
    }`;

  const mobileNavLinkClasses = (path) =>
    `flex min-h-11 items-center rounded-xl border px-4 text-base font-semibold transition-all duration-200 ${isActive(path)
      ? 'border-lux-400/50 bg-white/70 text-lune shadow-[inset_0_1px_1px_rgba(255,255,255,0.85),0_8px_18px_rgba(120,96,48,0.20)] backdrop-blur-md'
      : 'border-transparent text-lune/75 hover:border-lune/10 hover:bg-white/40 hover:text-lune'
    }`;

  const mobileServiceLinkClasses = (path) =>
    `flex min-h-10 items-center rounded-lg border px-4 text-sm font-medium transition-all duration-200 ${isActive(path)
      ? 'border-lux-400/45 bg-white/60 text-lune shadow-[inset_0_1px_1px_rgba(255,255,255,0.8)] backdrop-blur-md'
      : 'border-transparent text-lune/65 hover:border-lune/10 hover:bg-white/40 hover:text-lune'
    }`;

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${isScrolled ? 'py-3' : 'py-4 md:py-5'
        }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div
          className={`flex items-center justify-between rounded-2xl px-3.5 py-3 transition-all duration-300 md:px-5 ${isScrolled
            ? 'liquid-glass-scrolled'
            : 'liquid-glass-clear'
            }`}
        >
          {/* Logo */}
          <Link href="/" className="flex min-w-0 items-center gap-2 group" onClick={closeNavigation}>
            <div className="logo-glass-mark">
              <img
                src="/logo.webp"
                alt="Abubakar And Waleed Technical Services LLC logo"
                width="96"
                height="96"
                decoding="async"
                className="logo-glass-image"
              />
            </div>
            <div className="hidden min-w-0 flex-col md:flex">
              <span className="truncate font-heading text-xl font-bold leading-tight text-lune">
                Abubakar & Waleed
              </span>
              <span className="truncate text-[10px] font-semibold uppercase tracking-wider text-primary-600">
                Technical Services LLC
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-2 md:flex" aria-label="Main navigation">
            <Link href="/" className={navLinkClasses('/')} onClick={closeNavigation}>Home</Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                className={`flex items-center gap-1 rounded-full px-3.5 py-3.5 text- font-semibold transition-all duration-200 ${servicesOpen
                  ? 'bg-white/60 text-primary-600 shadow-xs font-semibold'
                  : 'text-slate-700 hover:bg-white/80 hover:text-accent-600'
                  }`}
                onClick={() => setServicesOpen((open) => !open)}
                aria-expanded={servicesOpen}
                aria-haspopup="true"
              >
                Services
                <ChevronDown size={14} className={`transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>

              <div
                className={`absolute left-0 top-full mt-3 w-72 origin-top-left rounded-2xl liquid-glass-clear p-2 shadow-[inset_0_1.5px_1px_rgba(255,255,255,0.85),0_20px_50px_rgba(15,23,42,0.14)] transition-all duration-200 ${servicesOpen
                  ? 'visible translate-y-0 opacity-100'
                  : 'invisible translate-y-2 opacity-0'
                  }`}
              >
                {services.map(service => (
                  <Link
                    key={service.slug}
                    href={service.path}
                    onClick={closeNavigation}
                    className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-700 transition-colors hover:bg-accent-50/90 hover:text-accent-600"
                  >
                    {service.navLabel}
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/about" className={navLinkClasses('/about')} onClick={closeNavigation}>About Us</Link>
            <Link href="/contact" className={navLinkClasses('/contact')} onClick={closeNavigation}>Contact</Link>
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackCTAClick('whatsapp', 'navbar')}
              className="btn-liquid-whatsapp rounded-full px-4 py-2 text-sm font-semibold gap-2"
            >
              <MessageCircle size={16} /> WhatsApp
            </a>
            <a
              href={getCallUrl()}
              onClick={() => trackCTAClick('call', 'navbar')}
              className="btn-liquid-primary rounded-full px-5 py-2 text-sm font-semibold gap-2"
            >
              <Phone size={16} /> {getDisplayPhone()}
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="btn-liquid-clear h-11 w-11 rounded-xl p-0 md:hidden text-slate-800"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-controls="mobile-navigation"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-slate-950/45 backdrop-blur-md transition-opacity duration-300 md:hidden ${isOpen
          ? 'pointer-events-auto opacity-100'
          : 'pointer-events-none opacity-0'
          }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Drawer */}
      <div
        id="mobile-navigation"
        className={`fixed bottom-3 right-3 top-3 z-50 flex w-[min(92vw,380px)] flex-col overflow-hidden rounded-2xl liquid-glass-beige transition-transform duration-300 ease-out before:pointer-events-none before:absolute before:inset-x-5 before:top-0 before:z-10 before:h-px before:bg-white/70 md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-[calc(100%+1rem)]'
          }`}
      >
        <span className="pointer-events-none absolute -right-16 -top-16 z-0 h-44 w-44 rounded-full bg-white/30 blur-3xl" />
        <span className="pointer-events-none absolute -bottom-20 left-4 z-0 h-52 w-52 rounded-full bg-lux-400/25 blur-3xl" />

        <div className="relative z-10 flex items-center justify-between gap-4 border-b border-lune/10 bg-white/30 px-4 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.6)]">
          <div className="min-w-0">
            <span className="block font-heading text-lg font-bold leading-tight text-lune">
              Abubakar & Waleed
            </span>
            <span className="block text-[10px] font-semibold uppercase tracking-wider text-lune/55">
              Technical Services LLC
            </span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="flex min-h-10 min-w-10 items-center justify-center rounded-full border border-lune/15 bg-white/45 text-lune shadow-[inset_0_1px_1px_rgba(255,255,255,0.7)] transition-colors hover:bg-white/70 hover:text-lune"
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        <div className="relative z-10 flex-1 overflow-y-auto px-4 py-5">
          <div className="flex flex-col gap-1.5">
            <Link href="/" className={mobileNavLinkClasses('/')} onClick={closeNavigation}>Home</Link>
            <Link href="/about" className={mobileNavLinkClasses('/about')} onClick={closeNavigation}>About Us</Link>
            <Link href="/contact" className={mobileNavLinkClasses('/contact')} onClick={closeNavigation}>Contact</Link>
          </div>

          <div className="mt-6 rounded-2xl border border-lune/10 bg-white/30 p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.6)]">
            <div className="mb-2 px-1 text-sm font-bold text-lune">Services</div>
            <div className="flex flex-col gap-1.5">
              {services.map(service => (
                <Link
                  key={service.slug}
                  href={service.path}
                  onClick={closeNavigation}
                  className={mobileServiceLinkClasses(service.path)}
                >
                  {service.navLabel}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="relative z-10 flex flex-col gap-3 border-t border-lune/10 bg-white/30 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.6)]">
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackCTAClick('whatsapp', 'mobile_drawer')}
            className="btn-liquid-whatsapp flex min-h-12 w-full items-center justify-center gap-2 rounded-xl py-3 font-semibold text-white"
          >
            <MessageCircle size={18} /> WhatsApp Us
          </a>
          <a
            href={getCallUrl()}
            onClick={() => trackCTAClick('call', 'mobile_drawer')}
            className="btn-liquid-primary flex min-h-12 w-full items-center justify-center gap-2 rounded-xl py-3 font-semibold text-white"
          >
            <Phone size={18} /> Call Now
          </a>
        </div>
      </div>
    </header>
  );
}
