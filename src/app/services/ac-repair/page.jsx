import { LEGAL_NAME, absoluteUrl } from '../../../utils/seo';
import AcRepairPageBody from './AcRepairPageBody';

export const metadata = {
  title: 'AC Repair in Dubai | 24/7 Emergency Repair',
  description: '24/7 emergency AC repair in Dubai. Our DEWA-certified technicians fix AC not cooling, gas leaks, and sudden breakdowns fast — same-day service with a 30–60 minute arrival across Dubai.',
  alternates: {
    canonical: absoluteUrl('/services/ac-repair'),
  },
  openGraph: {
    title: 'AC Repair in Dubai ',
    description: '24/7 emergency AC repair in Dubai. Fast, DEWA-certified fixes for AC not cooling, gas leaks, and breakdowns with same-day service.',
  },
};

export default function AcRepairPage() {
  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'AC Repair Services Dubai',
          url: absoluteUrl('/services/ac-repair'),
          provider: {
            '@type': 'LocalBusiness',
            name: LEGAL_NAME,
            url: absoluteUrl('/'),
            telephone: '+971547088668',
          },
          description: 'AC repair in Dubai, gas refill, general maintaince ',
          areaServed: 'Dubai',
        })}
      </script>
      <AcRepairPageBody />
    </>
  );
}
