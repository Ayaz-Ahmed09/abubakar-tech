import HeroSection from '../components/sections/HeroSection';
import ServicesGrid from '../components/sections/ServicesGrid';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import AreasSection from '../components/sections/AreasSection';
import ReviewsSection from '../components/sections/ReviewsSection';
import FAQSection from '../components/sections/FAQSection';
import AboutSection from '../components/sections/AboutSection';
import ContactSection from '../components/sections/ContactSection';
import HowItWorksSection from '../components/sections/HowItWorksSection';

export default function NotFound() {
  return (
    <>
      <HeroSection />
      <ServicesGrid />
      <HowItWorksSection />
      <AboutSection showReadMore={true} />
      <WhyChooseUs />
      <AreasSection />
      <FAQSection serviceSlug="general" />
      <ReviewsSection />
      <ContactSection />
    </>
  );
}
