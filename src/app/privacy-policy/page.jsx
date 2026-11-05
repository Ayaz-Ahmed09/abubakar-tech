import SectionHeading from '../../components/ui/SectionHeading';
import { absoluteUrl } from '../../utils/seo';

export const metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Abubakar And Waleed Technical Services LLC',
  alternates: {
    canonical: absoluteUrl('/privacy-policy'),
  },
  openGraph: {
    url: absoluteUrl('/privacy-policy'),
    title: 'Privacy Policy',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <section className="relative overflow-hidden bg-white pt-32 pb-16 sm:pb-20 lg:pb-24">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <SectionHeading
          title="Privacy Policy"
          subtitle="Legal"
          centered={false}
          as="h1"
        />

        <div className="prose prose-slate max-w-none">
          <p>Last updated: June 2026</p>

          <h3>1. Introduction</h3>
          <p>
            Abubakar And Waleed Technical Services LLC ("we", "our", "us") respects your privacy and is committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
          </p>

          <h3>2. The Data We Collect</h3>
          <p>
            We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:
          </p>
          <ul>
            <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
            <li><strong>Contact Data</strong> includes billing address, service address, email address and telephone numbers.</li>
            <li><strong>Technical Data</strong> includes internet protocol (IP) address, browser type and version, time zone setting and location.</li>
          </ul>

          <h3>3. How We Use Your Data</h3>
          <p>
            We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
          </p>
          <ul>
            <li>Where we need to perform the contract we are about to enter into or have entered into with you (e.g., to provide home repair services).</li>
            <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
            <li>Where we need to comply with a legal or regulatory obligation.</li>
          </ul>

          <h3>4. Data Security</h3>
          <p>
            We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorised way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
          </p>

          <h3>5. Contact Us</h3>
          <p>
            If you have any questions about this privacy policy or our privacy practices, please contact us at:<br />
            <strong>Phone:</strong> 054 708 8668
          </p>
        </div>
      </div>
    </section>
  );
}
