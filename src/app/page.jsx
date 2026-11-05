import HeroSection from '../components/sections/HeroSection';
import ServicesGrid from '../components/sections/ServicesGrid';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import AreasSection from '../components/sections/AreasSection';
import ReviewsSection from '../components/sections/ReviewsSection';
import FAQSection from '../components/sections/FAQSection';
import AboutSection from '../components/sections/AboutSection';
import ContactSection from '../components/sections/ContactSection';
import HowItWorksSection from '../components/sections/HowItWorksSection';
import { LEGAL_NAME, SITE_URL, SOCIAL_IMAGE_URL } from '../utils/seo';

export const metadata = {
  title: 'Abubakar And Waleed Technical Services LLC | Dubai',
  description: 'AC Repair Near Me, Servicing, And  Maintenance in Dubai. Licensed Technicians With a 30-min Arrival At Your Door-Step.',
  keywords: 'ac repair dubai, ac repair near me, ac repair near you, ac repair dubai,  ac maintenance dubai, ac service dubai, ac gas refill dubai, hvac company dubai',
  alternates: {
    canonical: `${SITE_URL}/`,
  },
  openGraph: {
    url: `${SITE_URL}/`,
    title: 'Abubakar And Waleed Technical Services LLC',
    images: [SOCIAL_IMAGE_URL],
  },
  twitter: {
    title: 'Abubakar And Waleed Technical Services LLC',
    images: [SOCIAL_IMAGE_URL],
  },
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          name: LEGAL_NAME,
          url: SITE_URL,
          image: SOCIAL_IMAGE_URL,
          description: "Dubai's Most Trusted Home Repair & Maintenance Services",
          telephone: '+971547088668',
          areaServed: 'Dubai',
        })}
      </script>

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
