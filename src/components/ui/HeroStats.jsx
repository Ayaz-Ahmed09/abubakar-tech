import { Star, Trophy, Users, ShieldCheck } from 'lucide-react';

const heroStats = [
  {
    icon: <Trophy size={24} />,
    value: '12+',
    label: 'Years Experience',
  },
  {
    icon: <Star size={24} />,
    value: '4.8',
    label: 'Customer Rating',
  },
  {
    icon: <Users size={24} />,
    value: '20k+',
    label: 'Projects Done',
  },
  {
    icon: <ShieldCheck size={24} />,
    value: '100%',
    label: 'Licensed & Insured',
  },
];

export default function HeroStats() {
  return (
    <section className="relative z-30 -mt-8 bg-transparent px-4 md:px-6" aria-label="Service highlights">
      <div className="mx-auto w-full max-w-5xl">
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4 sm:gap-4">
          {heroStats.map((stat) => (
            <div
              key={stat.label}
              className="group relative flex min-h-20 items-center justify-center gap-3 overflow-hidden rounded-2xl p-3 sm:gap-4 sm:p-5 liquid-glass-beige sm:flex-col sm:items-center sm:justify-center sm:text-center sm:min-h-24 lg:min-h-28"
            >
              <span className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-lux-400/25 blur-3xl transition-opacity duration-300 group-hover:opacity-100" />
              <div className="badge-gold-plate relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-105 sm:h-12 sm:w-12">
                <span className="relative text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.35)]">{stat.icon}</span>
              </div>
              <div className="relative">
                <div className="font-heading text-xl font-bold leading-none text-lune sm:text-2xl md:text-3xl tracking-tight">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs sm:text-sm font-semibold text-lune/70 tracking-wide">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
