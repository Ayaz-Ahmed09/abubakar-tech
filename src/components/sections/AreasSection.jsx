import { MapPin } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import { areas } from '../../data/areas';

export default function AreasSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          title="Areas We Serve in Dubai"
          subtitle="Coverage"
        />

        <div className="max-w-4xl mx-auto text-center mb-12">
          <p className="text-lg text-slate-600">
            Our teams are strategically positioned across Dubai to ensure we can reach you within 30-60 minutes, no matter where you are located.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {areas.map((area, index) => (
            <div
              key={index}
              className="liquid-glass-beige flex items-center gap-2.5 p-2.5 rounded-xl group cursor-default"
            >
              <span className="badge-gold-plate flex h-7 w-7 shrink-0 items-center justify-center rounded-lg">
                <MapPin size={14} className="text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.35)]" />
              </span>
              <span className="text-sm font-medium text-lune">
                {area}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
