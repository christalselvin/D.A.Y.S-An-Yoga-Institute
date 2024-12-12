import Navbar from "../Home/components/Navbar.jsx";
import ContactCard from "./ContactCard.jsx";
import ContactForm from "./ContactForm.jsx";
import Footer from "../Home/components/Footer";

export default function Contact() {
  return (
    <div className="min-h-screen  flex-col justify-center items-center py-8 px-4 md:flex-row md:space-x-8"> {/* Responsive flex direction */}
      <Navbar />
      <div className="flex flex-col w-full max-w-screen-lg md:flex-row md:space-x-8"> {/* Responsive alignment */}
        <ContactCard />
        <ContactForm />
        <Footer />
      </div>
    </div>
  );
}
