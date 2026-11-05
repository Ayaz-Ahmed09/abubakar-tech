import SectionHeading from '../ui/SectionHeading';
import FAQAccordion from '../ui/FAQAccordion';
import { faqs } from '../../data/faqs';

export default function FAQSection({ serviceSlug = 'general' }) {
  const displayFaqs = faqs[serviceSlug] || faqs.general;
  const title = serviceSlug === 'general' ? "Frequently Asked Questions" : "Common Questions";

  if (!displayFaqs || displayFaqs.length === 0) return null;

  return (
    <section className="py-20 bg-sand-gradient">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title={title} 
          subtitle="Clear Your Doubts"
        />
        
        <div className="max-w-3xl mx-auto">
          <FAQAccordion faqs={displayFaqs} name={`faq-${serviceSlug}`} />
        </div>
      </div>
    </section>
  );
}
