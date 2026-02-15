import ContactForm from "@/features/contact/components/ContactForm";
import Faqs from "@/features/contact/components/Faqs";

function ContactPage() {
  return (
    <section className="mx-auto w-full max-w-[1440px] px-6">
      <ContactForm />
      <Faqs />
    </section>
  );
}

export default ContactPage;
