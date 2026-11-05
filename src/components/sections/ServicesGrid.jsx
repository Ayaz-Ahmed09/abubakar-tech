import { services } from '../../data/services';
import ServiceCard from '../ui/ServiceCard';
import SectionHeading from '../ui/SectionHeading';

export default function ServicesGrid() {
  return (
    <section className="py-20 bg-white relative z-10">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title="Our Premium Services" 
          subtitle="What We Do"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {services.map(service => (
            <ServiceCard 
              key={service.slug} 
              service={service} 
              variant="main" 
            />
          ))}
        </div>
      </div>
    </section>
  );
}
