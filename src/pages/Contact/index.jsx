import ContactCard from "./ContactCard.jsx";
import ContactForm from "./ContactForm.jsx";


export default function Contact() {
  return (
    <div className="min-h-screen  flex-col justify-center items-center py-8 px-4 md:flex-row md:space-x-8"> {/* Responsive flex direction */}
      <div className="flex flex-col w-full max-w-screen-lg md:flex-row md:space-x-8"> {/* Responsive alignment */}
        <ContactCard />
        <ContactForm />
      </div>
    </div>
  );
}
