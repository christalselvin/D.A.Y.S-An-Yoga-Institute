import React, { useState, useEffect } from "react";
import axios from "axios";

// Import the user icon image
import divine from "./assets/chatbot girl.jpg";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [showChatbot, setShowChatbot] = useState(true);

  useEffect(() => {
    // Display welcome message after 2 seconds
    const timer = setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { type: "bot", text: "Welcome! How can I assist you today?" },
      ]);
    }, 2000);

    // Cleanup timer to avoid memory leaks
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Toggle chatbot visibility on scroll
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowChatbot(false);
      } else {
        setShowChatbot(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSend = async () => {
    if (input.trim() !== "") {
      setMessages((prevMessages) => [
        ...prevMessages,
        { type: "user", text: input },
      ]);

      try {
        const response = await axios.post(
          'https://yoha-backend.onrender.com/bot',
          { message: input },
          { headers: { 'Content-Type': 'application/json' } }
        );

        setMessages((prevMessages) => [
          ...prevMessages,
          { type: "bot", text: response.data.response },
        ]);
      } catch (error) {
        console.error('Error sending message to chatbot:', error);
      }

      setInput(""); // Clear input field after sending
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSend();
    }
  };

  return (
    <div
      className={`fixed bottom-10 right-4 flex flex-col items-end mb-14 py-8 transition-opacity duration-300 ${showChatbot ? "opacity-100" : "opacity-0 pointer-events-none"}`}
    >
      <div className="w-full max-w-xs md:max-w-md p-4 bg-white rounded-lg shadow-lg">
        <div className="flex flex-col space-y-4 mb-4 max-h-[300px] overflow-y-auto">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`p-2 md:p-4 rounded-lg ${
                message.type === "user"
                  ? "bg-blue-500 text-white self-end"
                  : "bg-gray-200 self-start"
              }`}
            >
              {message.text}
            </div>
          ))}
        </div>
        <div className="flex">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 p-2 border rounded-l-lg focus:outline-none"
            placeholder="Type a message..."
            aria-label="Type a message"
          />
          <button
            onClick={handleSend}
            className="bg-blue-500 text-white p-2 rounded-r-lg"
            aria-label="Send message"
          >
            Send
          </button>
        </div>
      </div>
      <div
        className="w-12 h-12 rounded-full flex items-center justify-center cursor-pointer"
        onClick={() => setShowChatbot(!showChatbot)}
      >
        <img src={divine} alt="User Icon" className="w-full h-full rounded-full" />
      </div>
    </div>
  );
};

export default Chatbot;
