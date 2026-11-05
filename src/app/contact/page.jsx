import ContactSection from '../../components/sections/ContactSection';
import AreasSection from '../../components/sections/AreasSection';
import { absoluteUrl } from '../../utils/seo';

export const metadata = {
  title: 'Contact Abubakar And Waleed Technical Services',
  description: 'Get in touch with Abubakar And Waleed Technical Services LLC for all your home repair needs in Dubai. We are available 24/7.',
  alternates: {
    canonical: absoluteUrl('/contact'),
  },
  openGraph: {
    url: absoluteUrl('/contact'),
    title: 'Contact Abubakar And Waleed Technical Services',
  },
};

export default function ContactPage() {
  return (
    <div className="pt-20">
      <ContactSection isMainHeading={true} />
      <AreasSection />
    </div>
  );
}
