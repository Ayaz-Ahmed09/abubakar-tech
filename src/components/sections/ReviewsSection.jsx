import SectionHeading from '../ui/SectionHeading';
import ReviewCard from '../ui/ReviewCard';
import { reviews } from '../../data/reviews';

export default function ReviewsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title="What Our Customers Say" 
          subtitle="Testimonials"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
