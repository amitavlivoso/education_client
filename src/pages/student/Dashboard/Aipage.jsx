import React, { useState } from "react";
import { FaUser, FaRobot, FaPaperPlane } from "react-icons/fa";
import { askGpt } from "../../../services/service"; // your backend API function

const Aipage = () => {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi! I’m your AI assistant. How can I help you today?" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (input.trim() === "") return;

    // Add user message
    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    const userInput = input;
    setInput("");
    setLoading(true);

    try {
      const payload = { question: userInput };
      const res = await askGpt(payload);
      const botText = res?.data?.answer || "Sorry, I could not get a response.";

      // Streaming effect
      let displayText = "";
      for (let word of botText.split(" ")) {
        displayText += word + " ";
        await new Promise((resolve) => setTimeout(resolve, 25));
        setMessages((prev) => {
          const last = prev[prev.length - 1];
          if (last?.sender === "bot" && last.streaming) {
            const updated = [...prev];
            updated[updated.length - 1] = {
              ...updated[updated.length - 1],
              text: displayText.trim(),
            };
            return updated;
          } else {
            return [...prev, { sender: "bot", text: displayText.trim(), streaming: true }];
          }
        });
      }

      // Remove streaming flag
      setMessages((prev) => {
        const updated = [...prev];
        updated[updated.length - 1] = { ...updated[updated.length - 1], streaming: false };
        return updated;
      });

    } catch (error) {
      console.error("Error calling GPT API:", error);
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "⚠️ Oops! Something went wrong while fetching the answer." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-black text-white pb-10">
      {/* Header */}
      <header className="bg-gray-900 text-white text-center py-4 text-xl font-semibold shadow-md">
        AI Chat Assistant
      </header>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-6 space-y-4 max-w-4xl mx-auto w-full">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
          >
            {msg.sender === "bot" ? (
              <div className="bg-gray-800 text-white p-4 rounded-2xl shadow-md max-w-full whitespace-pre-wrap leading-relaxed">
                <div className="flex items-start space-x-3">
                  <FaRobot className="text-indigo-400 mt-1" />
                  <span>{msg.text}</span>
                </div>
              </div>
            ) : (
              <div className="bg-indigo-600 text-white p-3 rounded-2xl shadow-md max-w-xs whitespace-pre-wrap">
                <div className="flex items-center space-x-2">
                  <span>{msg.text}</span>
                  <FaUser className="text-white mt-0.5" />
                </div>
              </div>
            )}
          </div>
        ))}

        {loading && <div className="text-gray-400 text-sm italic">Bot is typing...</div>}
      </div>

      {/* Input Box */}
      <div className="bg-gray-900 p-4 border-t border-gray-700 flex items-center max-w-4xl w-full mx-auto mt-4 rounded-lg shadow-sm">
        <input
          type="text"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          className="flex-1 bg-black text-white border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
        <button
          onClick={handleSend}
          className="ml-3 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg flex items-center space-x-1"
        >
          <FaPaperPlane />
          <span>Send</span>
        </button>
      </div>
    </div>
  );
};

export default Aipage;
