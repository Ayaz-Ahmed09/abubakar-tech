import Link from 'next/link';
import { Phone, FileText } from 'lucide-react';
import { services } from '../../data/services';
import { getWhatsAppUrl, getCallUrl, getDisplayPhone } from '../../utils/contact';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-beige pt-16 pb-8 border-t border-lux text-lune/80">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center justify-center gap-2">
              <div className="logo-glass-mark">
                <img
                  src="/logo.webp"
                  alt="Abubakar And Waleed Technical Services LLC Logo"
                  width="96"
                  height="96"
                  loading="lazy"
                  decoding="async"
                  className="logo-glass-image"
                />
              </div>
            </Link>
            <div className="flex flex-col text-center">
              <span className="font-heading font-bold text-lg leading-tight text-gold-metallic">
                Abubakar And Waleed Technical Services LLC
              </span>
            </div>
            <p className="text-sm text-lune/65 leading-relaxed text-center text-pretty mt-2">
              Dubai's most trusted home repair and maintenance service. Licensed, insured, and ready to fix any issue in your home rapidly and reliably.
            </p>
            <p className="badge-gold-plate inline-flex w-fit mx-auto items-center gap-2 rounded-full px-3.5 py-1.5 text-sm font-semibold">
              <FileText size={16} />
              License No. 935347
            </p>
            <div className="flex gap-4">
              {/* <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-accent-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-accent-500 transition-colors">
                <Instagram size={20} />
              </a> */}
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center text-center justify-center gap-4">
            <h3 className="font-heading font-bold text-lune tracking-wide">Quick Links</h3>
            <ul className="flex flex-col gap-2">
              <li><Link href="/" className="text-sm hover:text-lux-700 transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-sm hover:text-lux-700 transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-sm hover:text-lux-700 transition-colors">Contact</Link></li>
              <li><Link href="/privacy-policy" className="text-sm hover:text-lux-700 transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="flex flex-col items-center justify-center gap-4">
            <h3 className="font-heading font-bold text-lune tracking-wide">Our Services</h3>
            <ul className="flex flex-col items-center justify-center gap-2">
              {services.map(service => (
                <li key={service.slug}>
                  <Link
                    href={service.path}
                    className="text-sm text-center justify-center hover:text-lux-700 transition-colors"
                  >
                    {service.navLabel}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center justify-center gap-4">
            <h3 className="font-heading font-bold text-lune tracking-wide">Contact Us</h3>
            <ul className="flex flex-col items-center justify-center gap-4">
              <li>
                <a href={getCallUrl()} className="flex items-start gap-3 group">
                  <Phone size={18} className="text-lux-600 mt-0.5 group-hover:text-lux-700 transition-colors" />
                  <span className="text-sm group-hover:text-lune transition-colors">{getDisplayPhone()}</span>
                </a>
              </li>
              <li>
                <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 group">
                  <MessageCircleIcon size={12} className="text-[#25D366] mt-0.5" />
                  <span className="text-sm group-hover:text-lune transition-colors">WhatsApp Us</span>
                </a>
              </li>
              <li>

              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-blue/50 text-center flex flex-col md:flex-row justify-center items-center gap-4">
          <p className="text-xs text-lune/55">
            &copy; {currentYear} Abubakar And Waleed Technical Services LLC License No. 935347. All rights reserved.
          </p>
          {/* <p className="text-xs text-slate-500">
            Designed & Developed by
          </p> */}
        </div>
      </div>
    </footer>
  );
}

// Inline MessageCircleIcon to avoid importing it here if it wasn't already
function MessageCircleIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
    </svg>
  );
}
