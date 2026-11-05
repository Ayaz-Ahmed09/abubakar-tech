import AboutSection from '../../components/sections/AboutSection';
import AboutDetailsSection from '../../components/sections/AboutDetailsSection';
import WhyChooseUs from '../../components/sections/WhyChooseUs';
import ReviewsSection from '../../components/sections/ReviewsSection';
import { absoluteUrl } from '../../utils/seo';

export const metadata = {
  title: 'About Abubakar And Waleed Technical Services',
  description: 'Learn more about Abubakar And Waleed Technical Services LLC, License No. 935347. We are a licensed and trusted home repair company operating across Dubai.',
  alternates: {
    canonical: absoluteUrl('/about'),
  },
  openGraph: {
    url: absoluteUrl('/about'),
    title: 'About Abubakar And Waleed Technical Services',
  },
};

export default function AboutPage() {
  return (
    <div className="pt-20">
      <AboutSection isMainHeading={true} />
      <AboutDetailsSection />
      <WhyChooseUs />
      <ReviewsSection />
    </div>
  );
}
