export default function SectionHeading({ title, subtitle, centered = true, as: Component = 'h2' }) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : 'text-left'}`}>
      {subtitle && (
        <span className="inline-flex items-center gap-1.5 py-1 px-3 rounded-full bg-lux-50 text-lux-700 text-sm font-semibold tracking-wide uppercase mb-3 border border-lux-100">
          <span className="h-1.5 w-1.5 rounded-full bg-lux-500"></span>
          {subtitle}
        </span>
      )}
      <Component className="text-2xl md:text-4xl font-heading font-bold text-lux-500 leading-tight">
        {title}
      </Component>
      <div className={`h-1 w-24 bg-linear-to-r from-lux-600 via-lux-400 to-lux-600 rounded-full mt-4 ${centered ? 'mx-auto' : ''}`}></div>
    </div>
  );
}
