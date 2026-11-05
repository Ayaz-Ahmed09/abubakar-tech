import { Rethink_Sans, Outfit } from 'next/font/google';
import './globals.css';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import FloatingCTA from '../components/ui/FloatingCTA';
import ClientProviders from '../components/layout/ClientProviders';
import RouteTracker from '../components/analytics/RouteTracker';
import { SITE_URL, SOCIAL_IMAGE_URL } from '../utils/seo';

const googleSans = Rethink_Sans({
  subsets: ['latin'],
  variable: '--font-google-sans',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Abubakar And Waleed Technical Services LLC | Dubai',
  description: 'Licensed AC repair, servicing, and maintenance across Dubai. Fast 30-minute arrival for cooling emergencies.',
  icons: {
    icon: '/logo.webp',
  },
  openGraph: {
    type: 'website',
    siteName: 'Abubakar And Waleed Technical Services',
    title: 'Dubai Home Repair',
    description: 'Professional AC repair, servicing, and maintenance across Dubai.',
    url: SITE_URL,
    images: [
      {
        url: SOCIAL_IMAGE_URL,
        width: 1200,
        height: 630,
        alt: 'Abubakar And Waleed Technical Services LLC Dubai home repair and maintenance services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dubai Home Repair',
    description: 'Professional AC repair, servicing, and maintenance across Dubai.',
    images: [SOCIAL_IMAGE_URL],
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

const HERO_IMAGE_PRELOAD_SCRIPT = `
(function() {
  var path = window.location.pathname;
  var heroImages = {
    '/': { src: '/Images/our-ac-repairing-units.webp', type: 'image/webp' },
    '/services/ac-repair': { src: '/Images/ac-repair-hero.webp', type: 'image/webp' },
    '/services/electrician': { src: '/Images/electricen/hero-image.webp', type: 'image/webp' }
  };
  var hero = heroImages[path] || heroImages['/'];
  if (hero) {
    var link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = hero.src;
    if (hero.type) { link.type = hero.type; }
    if (hero.srcset) { link.setAttribute('imagesrcset', hero.srcset); }
    if (hero.sizes) { link.setAttribute('imagesizes', hero.sizes); }
    link.setAttribute('fetchpriority', 'high');
    document.head.appendChild(link);
  }
})();
`;

const GTM_LOADER_SCRIPT = `
function loadGTM() {
  (function (w, d, s, l, i) {
    w[l] = w[l] || []; w[l].push({
      'gtm.start': new Date().getTime(), event: 'gtm.js'
    }); var f = d.getElementsByTagName(s)[0],
      j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : ''; j.async = true; j.defer = true; j.src =
        'https://www.googletagmanager.com/gtm.js?id=' + i + dl; f.parentNode.insertBefore(j, f);
  })(window, document, 'script', 'dataLayer', 'GTM-KPRBZ884');
}
// Delay GTM to prioritize the main thread for React INP
if (window.requestIdleCallback) {
  window.requestIdleCallback(loadGTM, { timeout: 2000 });
} else {
  setTimeout(loadGTM, 1500);
}
`;

export default function RootLayout({ children }) {
  return (
    // suppressHydrationWarning on html/body: some browser extensions (ad/tracking
    // blockers, password managers) inject attributes into <html>/<body>/<script>
    // before React hydrates. That's a known false-positive source for React's
    // hydration warning and not a bug in this app — see https://react.dev/link/hydration-mismatch
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: GTM_LOADER_SCRIPT }} />
        <script dangerouslySetInnerHTML={{ __html: HERO_IMAGE_PRELOAD_SCRIPT }} />
      </head>
      <body suppressHydrationWarning className={`${googleSans.variable} ${outfit.variable}`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KPRBZ884"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        <RouteTracker />
        <ClientProviders>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
            <FloatingCTA />
          </div>
        </ClientProviders>
      </body>
    </html>
  );
}
