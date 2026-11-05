import SectionHeading from '../ui/SectionHeading';
import ReviewCard from '../ui/ReviewCard';

export default function ServiceTestimonials({ serviceName, reviews }) {
  return (
    <section className="py-20 bg-sand-gradient">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title={`Customer Feedback for ${serviceName}`} 
          subtitle="Real Stories"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {reviews.map((review) => (
            <div key={review.id} className="h-full">
              <ReviewCard review={review} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
