import { ClipboardCheck, Home, MapPinned, ShieldCheck } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

const trustDetails = [
  {
    icon: ShieldCheck,
    title: 'Licensed Dubai technical service',
    text: 'The company operates under License No. 935347 and lists its business name and phone number clearly across the site.',
  },
  {
    icon: ClipboardCheck,
    title: 'Clear inspection before work starts',
    text: 'Our technician checks the problem, explains the likely cause, and confirms the repair scope before beginning paid work.',
  },
  {
    icon: Home,
    title: 'Respectful home visits',
    text: 'Technicians arrive prepared for occupied homes and offices, protect the work area, and clean up after the repair or installation.',
  },
  {
    icon: MapPinned,
    title: 'Dubai-wide service coverage',
    text: 'We serve apartments, villas, retail spaces, and small offices across key Dubai communities with emergency and scheduled visits.',
  },
];

export default function AboutDetailsSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeading title="What Customers Can Expect" subtitle="Company Standards" />
          <p className="-mt-8 mb-10 text-lg leading-8 text-slate-600">
            We keep the service experience practical: clear contact options, visible company details, direct booking, and job-specific explanations before repairs begin.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {trustDetails.map((item) => {
            const Icon = item.icon;

            return (
              <article key={item.title} className="rounded-2xl border border-slate-200 bg-sand-gradient p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-600">
                  <Icon size={24} />
                </div>
                <h3 className="mb-2 font-heading text-xl font-bold text-lune">{item.title}</h3>
                <p className="leading-7 text-slate-600">{item.text}</p>
              </article>
            );
          })}
        </div>

        <div className="mt-10 rounded-2xl bg-dark-900 p-6 text-white md:p-8">
          <h2 className="font-heading text-2xl font-bold text-white">Our Commitment to Excellence</h2>
          <p className="mt-3 max-w-4xl leading-8 text-slate-300">
            We are dedicated to providing the highest quality home maintenance services across Dubai. With a focus on safety, reliability, and transparency, our certified professionals ensure your home is in the best hands from start to finish.
          </p>
        </div>
      </div>
    </section>
  );
}
