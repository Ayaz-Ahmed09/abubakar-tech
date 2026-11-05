import { ChevronDown } from 'lucide-react';

export default function FAQAccordion({ faqs, name = "faq-group" }) {
  return (
    <div className="flex flex-col gap-3">
      {/* 
        Semantic FAQ Schema implementation for SEO. 
        Hidden from view, parsed by search engines.
      */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer
            }
          }))
        })}
      </script>

      {faqs.map((faq, index) => (
        <details 
          key={index} 
          name={name}
          className="group bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden [&_summary::-webkit-details-marker]:hidden"
        >
          {/* 
            MANDATORY (modern-web-guidance): 
            <summary> must be the first child. 
            Do not put block-level interactive elements inside.
          */}
          <summary className="flex items-center justify-between gap-4 p-5 cursor-pointer list-none outline-none focus-visible:ring-2 focus-visible:ring-blue focus-visible:ring-inset">
            <h3 className="text-base font-semibold text-lune pr-4">
              {faq.question}
            </h3>
            
            {/* Custom animated chevron indicator */}
            <div className="w-8 h-8 rounded-full bg-sand-gradient flex items-center justify-center shrink-0 group-open:bg-lux-50 group-open:text-lux-700 transition-colors">
              <ChevronDown 
                size={18} 
                className="text-slate-500 group-open:text-lux-700 transition-transform duration-300 group-open:rotate-180" 
              />
            </div>
          </summary>
          
          <div className="px-5 pb-5 pt-1 text-slate-600 text-sm leading-relaxed border-t border-sand mx-5 mt-[-5px]">
            <p>{faq.answer}</p>
          </div>
        </details>
      ))}
    </div>
  );
}
