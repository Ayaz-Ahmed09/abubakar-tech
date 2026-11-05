import { ShieldCheck, Zap, LockKeyhole, FileText, Wrench, Clock } from 'lucide-react';

const features = [
  {
    icon: <ShieldCheck size={28} />,
    title: "DEWA-Certified Experts",
    description: "Our DEWA-certified, background-checked technicians make us a trusted AC repair and electrical service provider across Dubai."
  },
  {
    icon: <Zap size={28} />,
    title: "Fastest 30-Min Arrival",
    description: "Facing an emergency AC failure or power outage? We guarantee a 30–60 minute dispatch anywhere in Dubai."
  },
  {
    icon: <LockKeyhole size={28} />,
    title: "Security & Cleanliness",
    description: "We protect your furniture during work, document repairs, and leave your property spotless after every service call."
  },
  {
    icon: <FileText size={28} />,
    title: "Transparent Pricing",
    description: "Clear upfront quotes before any AC maintenance or electrical work begins — zero hidden fees."
  },
  {
    icon: <Wrench size={28} />,
    title: "Warranty on All Work",
    description: "Every AC repair, gas refill, DB box fix, and fixture installation is backed by a comprehensive parts-and-labour warranty."
  },
  {
    icon: <Clock size={28} />,
    title: "Available 24/7",
    description: "AC breakdowns and short circuits don't wait. Our rapid emergency units operate 24 hours a day across Dubai."
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white text-lune relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyMCwgMjEsIDI0LCAwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] z-50"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-1.5 py-1 px-3 rounded-full bg-lux-50 text-lux-700 border border-lux-100 text-sm font-semibold tracking-wide uppercase mb-3">
            <span className="h-1.5 w-1.5 rounded-full bg-lux-500"></span>
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-lune leading-tight">
            Why We're Dubai's Trusted Home Technical Services Company
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-lux-600 via-lux-400 to-lux-600 rounded-full mt-4 mx-auto"></div>
        </div>

        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="liquid-glass-beige p-8 rounded-2xl flex flex-col items-center justify-center gap-4 group transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="badge-gold-plate w-14 h-14 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                <span className="drop-shadow-[0_1px_1px_rgba(0,0,0,0.35)]">{feature.icon}</span>
              </div>
              <div>
                <h3 className="text-xl font-bold font-heading text-lune mb-2">{feature.title}</h3>
                <p className="text-lune leading-relaxed text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
