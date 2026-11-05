import Link from 'next/link';
import { Phone, Home } from 'lucide-react';
import { getCallUrl, getDisplayPhone } from '../../utils/contact';

export const metadata = {
  title: 'Thank You | Abubakar And Waleed Technical Services LLC',
  description: 'Thank you — your request has been received. Our AC repair team in Dubai will contact you shortly.',
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-sand-gradient px-4 py-24">
      {/* Ambient glow */}
      <span className="pointer-events-none absolute -top-24 right-0 h-96 w-96 rounded-full bg-lux-200/40 blur-[120px]" />
      <span className="pointer-events-none absolute -bottom-24 left-0 h-96 w-96 rounded-full bg-blue/10 blur-[120px]" />

      <div className="relative z-10 w-full max-w-xl text-center">
        {/* Gold check badge */}
        <div
          className="ty-pop badge-gold-plate mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full"
          style={{ animationDelay: '0.05s' }}
        >
          <svg viewBox="0 0 52 52" className="h-12 w-12" fill="none" aria-hidden="true">
            <path
              className="ty-check"
              d="M14 27 l8 8 l16 -18"
              stroke="#0B2A38"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <span
          className="ty-in inline-flex items-center gap-1.5 rounded-full border border-lux-100 bg-lux-50 px-3 py-1 text-sm font-semibold uppercase tracking-wide text-lux-700"
          style={{ animationDelay: '0.15s' }}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-lux-500" />
          Request Received
        </span>

        <h1
          className="ty-in mt-5 font-heading text-4xl font-bold leading-tight text-lune md:text-5xl"
          style={{ animationDelay: '0.25s' }}
        >
          Thank <span className="text-gold-metallic">You!</span>
        </h1>

        <p
          className="ty-in mx-auto mt-5 max-w-md text-lg leading-relaxed text-slate-600"
          style={{ animationDelay: '0.35s' }}
        >
          Your request has reached our team. One of our DEWA-certified AC technicians will call you back shortly to confirm your AC repair in Dubai.
        </p>

        <div
          className="ty-in mx-auto mt-9 flex w-full max-w-md flex-col items-stretch justify-center gap-4 sm:flex-row"
          style={{ animationDelay: '0.45s' }}
        >
          <a
            href={getCallUrl()}
            className="btn-liquid-primary flex min-h-14 items-center justify-center gap-3 rounded-2xl px-7 font-sans font-bold text-white"
          >
            <Phone size={20} className="shrink-0" />
            <span className="whitespace-nowrap">Call {getDisplayPhone()}</span>
          </a>
          <Link
            href="/"
            className="btn-liquid-noir flex min-h-14 items-center justify-center gap-3 rounded-2xl px-7 font-sans font-bold"
          >
            <Home size={20} className="shrink-0" />
            <span className="whitespace-nowrap">Back to Home</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
