// ContactPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const navigate = useNavigate(); // Hook to navigate to another page

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);  // Print form data to the console
    // After submission, redirect to Thank You page
    navigate('/thank-you');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="text-center py-8">
        <h1 className="text-4xl font-extrabold">Contact Us</h1>
        <p className="text-lg mt-2">We'd love to hear from you!</p>
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="lg:flex lg:space-x-12 flex-wrap justify-between">
          {/* Contact Form */}
          <div className="shadow-lg rounded-lg p-8 w-full lg:w-1/2 mb-8 lg:mb-0">
            <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md mt-2"
                  placeholder="Enter your name"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md mt-2"
                  placeholder="Enter your email"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md mt-2"
                  placeholder="Enter subject"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md mt-2"
                  placeholder="Your message here"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gray-700 text-white py-3 rounded-md hover:bg-gray-600 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Google Map */}
          <div className="shadow-lg rounded-lg p-8 w-full lg:w-1/2">
            <h2 className="text-2xl font-semibold mb-6">Our Location</h2>
            <p className="mb-4">Visit us at:</p>
            <address className="mb-4">
              <p>123 Business Avenue, Suite 456</p>
              <p>New York, NY 10001</p>
              <p>USA</p>
            </address>

            <h3 className="text-xl font-semibold mt-6">Find Us on the Map</h3>
            <div className="relative w-full h-64 rounded-md overflow-hidden shadow-md">
              <iframe
                src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJq4bxFh4FzEwR_M5mTjYoPQA&key=YOUR_GOOGLE_MAPS_API_KEY"
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen
                title="Company Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
