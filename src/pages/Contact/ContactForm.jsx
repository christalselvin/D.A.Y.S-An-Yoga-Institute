import React, { useState } from "react";
import Button from "../UI/Button";
import axios from "axios";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSend = async () => {
    console.log("Submit button clicked");
    try {
      // Check if name, email, subject, and message are empty
      if (
        !formData.name.trim() ||
        !formData.email.trim() ||
        !formData.subject.trim() ||
        !formData.message.trim()
      ) {
        alert("Please fill in all fields");
        return;
      }

      // Check if name contains only letters and spaces
      const nameRegex = /^[a-zA-Z\s]*$/;
      if (!nameRegex.test(formData.name)) {
        alert("Please enter a valid name (letters and spaces only)");
        return;
      }

      // Check if email is valid
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        alert("Please enter a valid email address");
        return;
      }

      // Check if subject is alphanumeric
      if (!/^[a-zA-Z0-9\s]+$/.test(formData.subject)) {
        alert("Subject must be alphanumeric.");
        return;
      }

      // Check if message is alphanumeric
      if (!/^[a-zA-Z0-9\s]+$/.test(formData.message)) {
        alert("Message must be alphanumeric.");
        return;
      }

      // Simulate sending data
      console.log("Form data to be sent:", formData);

      // If successful, reset form data
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      alert("Request sent successfully to the email");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Axios error message:", error.message);
        if (error.response) {
          console.error("Error response data:", error.response.data);
          console.error("Error status:", error.response.status);
          console.error("Error headers:", error.response.headers);
        }
      } else {
        console.error("Unexpected error:", error);
      }
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
  };

  return (
    <div className="w-full md:w-[400px] flex flex-col shadow-lg border border-gray-200 rounded-2xl bg-white transition-transform duration-300 hover:scale-105 p-6 my-6">
      <h3 className="text-lg font-semibold mb-4">Please fill out this form to get in touch with us.</h3>
      <div className="flex flex-col">
        <div className="flex flex-col space-y-2">
          <label htmlFor="name" className="text-gray-800">Name</label>
          <input
            type="text"
            id="name"
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-green-500"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label htmlFor="email" className="text-gray-800">Email</label>
          <input
            type="email"
            id="email"
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-green-500"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label htmlFor="subject" className="text-gray-800">Subject</label>
          <input
            type="text"
            id="subject"
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-green-500"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label htmlFor="message" className="text-gray-800">Message</label>
          <textarea
            id="message"
            rows="5"
            style={{ resize: "none" }} // This disables resizing of the textarea
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-green-500"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <Button
          className="bg-blue-500 hover:bg-blue-700 text-white rounded-md"
          onClick={handleSend}
        >
          Send
        </Button>
      </div>
    </div>
  );
}
