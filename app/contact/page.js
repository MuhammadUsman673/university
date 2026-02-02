import ContactHero from '../components/ContactHero';
import ContactForm from '../components/ContactForm';
import ContactFAQ from '../components/ContactFAQ';

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <ContactHero />
      <ContactForm />
      <ContactFAQ />
    </div>
  );
}