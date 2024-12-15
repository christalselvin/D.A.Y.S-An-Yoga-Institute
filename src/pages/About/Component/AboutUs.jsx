import React from 'react';
import Contact1 from "./assets/Contact/Contact1.png";
import Contact2 from "./assets/Contact/Contact2.png";
import Contact3 from "./assets/Contact/Contact3.png";
import Contact4 from "./assets/Contact/Contact4.png";
import Contact5 from "./assets/Contact/Contact5.png";
import Contact6 from "./assets/Contact/Contact6.png";
import Contact7 from "./assets/Contact/Contact7.png";

const AboutUs = () => {
  return (
    <div className="max-w-full mx-auto px-6 py-12 overflow-x-hidden">
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-10">About Us</h1>

      {/* Story Section */}
      <section className="mb-12 grid lg:grid-cols-2 gap-10">
        <div className="lg:order-2">
          <img
            src={Contact1}
            alt="Founding Team"
            className="w-full rounded-lg shadow-lg max-w-full"
          />
        </div>
        <div className="lg:order-1">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Story</h2>
          <p className="text-lg text-gray-600">
            In [Year], we started as a small idea with a big vision. Founded by [Founders' names], we wanted to create a space where [purpose/goal]. Over the years, we've grown into a company that values innovation, excellence, and customer satisfaction.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="mb-12 grid lg:grid-cols-2 gap-10">
        <div className="lg:order-1">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Values</h2>
          <p className="text-lg text-gray-600">
            At [Your Company Name], we believe in [list of core values]. These values guide every decision we make and drive us to work hard for our clients and the community. We prioritize integrity, collaboration, and sustainability in everything we do.
          </p>
        </div>
        <div className="lg:order-2">
          <img
            src={Contact2}
            alt="Core Values"
            className="w-full rounded-lg shadow-lg max-w-full"
          />
        </div>
      </section>

      {/* What We Do Section */}
      <section className="mb-12 grid lg:grid-cols-2 gap-10">
        <div className="lg:order-2">
          <img
            src={Contact3}
            alt="Our Work"
            className="w-full rounded-lg shadow-lg max-w-full"
          />
        </div>
        <div className="lg:order-1">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">What We Do</h2>
          <p className="text-lg text-gray-600">
            We specialize in [describe products or services]. Whether you’re looking for [specific service or product], we strive to offer innovative solutions that meet your needs. Our team is committed to delivering top-notch quality and support, no matter what.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="mb-12 text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Meet the Team</h2>
        <div className="flex justify-center space-x-6">
          <img
            src={Contact4}
            alt="Team Member 1"
            className="w-32 h-32 rounded-full object-cover shadow-lg"
          />
          <img
            src={Contact5}
            alt="Team Member 2"
            className="w-32 h-32 rounded-full object-cover shadow-lg"
          />
          <img
            src={Contact6}
            alt="Team Member 3"
            className="w-32 h-32 rounded-full object-cover shadow-lg"
          />
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="mb-12 text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Why Choose Us?</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          With years of experience, a commitment to excellence, and a customer-first approach, we stand out in the [industry/field]. Our clients trust us to deliver quality, innovation, and results, and we’re proud to have built lasting relationships with each one.
        </p>
        <div className="lg:order-2">
          <img
            src={Contact7}
            alt="Our Work"
            className="w-full rounded-lg shadow-lg max-w-full"
          />
        </div>
      </section>

      {/* Contact Section */}
      <section className="text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Contact Us</h2>
        <p className="text-lg text-gray-600">
          Have any questions or want to learn more about what we do? Feel free to reach out to us at [contact information] or visit our [location/social media links].
        </p>
      </section>
    </div>
  );
};

export default AboutUs;
