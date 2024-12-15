import React, { useState, useEffect, useRef, } from "react";
import axios from "axios";
import Chatgirl from "./assets/Home/chatbot.png";
import typingSound from "./assets/Home/alert.mp3";
import messageReceivedSound from "./assets/Home/message_rece.mp3";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [showChatbot, setShowChatbot] = useState(true);
  const [showMore, setShowMore] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const chatContainerRef = useRef(null);
  const lastMessageRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { type: "bot", text: "Welcome! How can I assist you today?", alert: "sound" },
      ]);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
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

  useEffect(() => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const playTypingSound = () => {
    const audio = new Audio(typingSound);
    audio.play();
  };

  const playMessageReceivedSound = () => {
    const audio = new Audio(messageReceivedSound);
    audio.play();
  };

  const handleSend = async () => {
    if (input.trim() !== "") {
      setMessages((prevMessages) => [...prevMessages, { type: "user", text: input }]);
      setIsTyping(true);
      playTypingSound();

      try {
        setTimeout(async () => {
          const response = await axios.post(
            'https://yoha-backend.onrender.com/bot',
            { message: input },
            { headers: { 'Content-Type': 'application/json' } }
          );

          const botResponse = response.data.response;
          setMessages((prevMessages) => [
            ...prevMessages,
            { type: "bot", text: botResponse },
          ]);

          if (response.data.suggestions) {
            setSuggestions(response.data.suggestions);
          } else {
            setSuggestions([]);
          }

          playMessageReceivedSound();
          setIsTyping(false);
        }, 2000);
      } catch (error) {
        console.error('Error sending message to chatbot:', error);
        setErrorMessage("Sorry, something went wrong. Please try again.");
        setIsTyping(false);
      }

      setInput("");
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSend();
    }
  };

  const handleClearChat = () => {
    setMessages([]);
    setErrorMessage("");
    setSuggestions([]);
  };

  const renderTypingIndicator = () => {
    if (isTyping) {
      return <div className="text-gray-500 text-sm italic">Bot is typing...</div>;
    }
  };

  const toggleConversationLength = () => {
    setShowMore(!showMore);
  };

  const handleSuggestionClick = (suggestion) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { type: "user", text: suggestion },
    ]);
    setInput(suggestion);
    handleSend();
  };

  return (
    <div
      className={`fixed bottom-10 right-4 flex flex-col items-end mb-14 py-8 transition-opacity duration-300 ${showChatbot ? "opacity-100" : "opacity-0 pointer-events-none"}`}
    >
      <div className="w-full max-w-xs sm:max-w-md md:max-w-lg p-4 rounded-lg shadow-lg bg-white">
        <div ref={chatContainerRef} className="flex flex-col space-y-4 mb-4 max-h-[300px] overflow-y-auto">
          {messages.slice(0, showMore ? undefined : 10).map((message, index) => (
            <div
              key={index}
              className={`p-4 md:p-4 rounded-lg ${message.type === "user" ? "bg-blue-500 text-white self-end" : "bg-gray-200 self-start"}`}
              ref={index === messages.length - 1 ? lastMessageRef : null}
            >
              {message.text}
            </div>
          ))}
          {messages.length > 10 && !showMore && (
            <button className="text-blue-500 text-sm mt-2" onClick={toggleConversationLength}>
              See More
            </button>
          )}
          {renderTypingIndicator()}
          {errorMessage && <div className="text-red-500">{errorMessage}</div>}
        </div>
        <div className="flex flex-wrap gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 p-2 border rounded-lg focus:outline-none sm:max-w-xs md:max-w-md"
            placeholder="Type a message..."
            aria-label="Type a message"
          />
          <button onClick={handleSend} className="bg-blue-500 text-white p-2 rounded-lg sm:w-auto w-full" aria-label="Send message">
            Send
          </button>
        </div>

        {suggestions.length > 0 && (
          <div className="mt-4">
            <p className="text-sm font-semibold text-gray-600">Choose a suggestion:</p>
            <div className="space-y-2">
              {suggestions.map((suggestion, index) => (
                <div key={index} className="flex items-center">
                  <input
                    type="radio"
                    id={`suggestion-${index}`}
                    name="suggestion"
                    value={suggestion}
                    onChange={() => handleSuggestionClick(suggestion)}
                    className="mr-2"
                  />
                  <label htmlFor={`suggestion-${index}`} className="cursor-pointer text-blue-500">{suggestion}</label>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="mt-2 flex justify-between">
          <button onClick={handleClearChat} className="text-sm text-blue-500">Clear Chat</button>
        </div>
      </div>

      <div className="w-12 h-12 rounded-full flex items-center justify-center cursor-pointer mt-4 sm:mt-0" onClick={() => setShowChatbot(!showChatbot)}>
        <img src={Chatgirl} alt="User Icon" className="w-full h-full rounded-full" />
      </div>
    </div>
  );
};

export default Chatbot;
