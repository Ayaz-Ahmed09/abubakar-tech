import { LEGAL_NAME, absoluteUrl } from '../../../utils/seo';
import ElectricianPageBody from './ElectricianPageBody';

export const metadata = {
  title: 'Emergency Electrician Services in Dubai | DEWA Certified 24/7',
  description: '24/7 emergency electrician services in Dubai. DEWA-certified electricians for DB box repairs, short circuits, switch & lighting installation, and full villa rewiring with 30–60 min arrival.',
  alternates: {
    canonical: absoluteUrl('/services/electrician'),
  },
  openGraph: {
    title: 'Emergency Electrician Services in Dubai | DEWA Certified',
    description: '24/7 emergency electrician in Dubai. Fast, DEWA-certified repairs for DB boxes, short circuits, switches, lighting & wiring with same-day service.',
  },
};

export default function ElectricianPage() {
  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Electrician Services Dubai',
          url: absoluteUrl('/services/electrician'),
          provider: {
            '@type': 'LocalBusiness',
            name: LEGAL_NAME,
            url: absoluteUrl('/'),
            telephone: '+971547088668',
          },
          description: 'Emergency electrician services in Dubai, DB box repair, short circuit fixing, switch & socket installation, lighting, and villa rewiring.',
          areaServed: 'Dubai',
        })}
      </script>
      <ElectricianPageBody />
    </>
  );
}
