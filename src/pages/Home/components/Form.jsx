import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";

// Import your image path
import backgroundImage from "./assets/Deep Breathing Yoga Exercises.jpg"; // Make sure this path is correct

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleBookDemo = async () => {
    try {
      if (!name.trim() || !email.trim() || !phone.trim()) {
        alert("Please fill in all fields");
        return;
      }

      const nameRegex = /^[a-zA-Z\s]*$/;
      if (!nameRegex.test(name)) {
        alert("Please enter a valid name (letters and spaces only)");
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert("Please enter a valid email address");
        return;
      }

      const phoneRegex = /^\d{10}$/;
      if (!phoneRegex.test(phone)) {
        alert("Please enter a valid 10-digit phone number");
        return;
      }

      const payload = { name, email, phone };
      console.log("Payload:", payload);

      setLoading(true);

      const response = await axios.post(
        "https://yoha-backend.onrender.com/email/auth",
        payload,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Response Data:", response.data);
      alert("Request sent successfully");
      setName("");
      setEmail("");
      setPhone("");
      navigate("/demo");
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
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-300 to-purple-300 w-full overflow-hidden">
      <div className="max-w-4xl w-full">
        <div className="flex bg-blue-100 rounded-lg shadow-md overflow-hidden">
          <div className="w-1/2">
            <img
              src={backgroundImage}
              alt="Deep Breathing Yoga Exercises"
              className="object-cover h-full w-full"
            />
          </div>
          <div className="w-1/2 p-8">
            <Navbar />
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Name:
              </label>
              <input
                type="text"
                placeholder="Enter your name.."
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Email:
              </label>
              <input
                type="email"
                placeholder="Enter your email.."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Phone No:
              </label>
              <input
                type="text"
                placeholder="Enter your phone no.."
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="flex items-center justify-center md:justify-end">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={handleBookDemo}
                disabled={loading}
              >
                {loading ? "Sending..." : "Book Demo"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
