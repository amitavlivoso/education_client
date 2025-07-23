import React, { useState } from 'react';
import { FaUser, FaRobot, FaPaperPlane } from 'react-icons/fa';

const Aipage = () => {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hi! I’m your AI assistant. How can I help you today?' },
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim() === '') return;

    const userMessage = { sender: 'user', text: input };
    const botReply = {
      sender: 'bot',
      text: "I'm still learning. Ask me something else!",
    };

    setMessages([...messages, userMessage, botReply]);
    setInput('');
  };

  return (
   <div className="min-h-screen flex flex-col bg-black text-white pb-10">
  {/* Header */}
  <header className="bg-gray-900 text-white text-center py-4 text-xl font-semibold shadow-md">
    AI Chat Assistant
  </header>

  {/* Chat Messages */}
  <div className="flex-1 overflow-y-auto px-4 py-6 space-y-4 max-w-3xl mx-auto w-full">
    {messages.map((msg, index) => (
      <div
        key={index}
        className={`flex items-start space-x-3 ${
          msg.sender === 'user' ? 'justify-end' : 'justify-start'
        }`}
      >
        {msg.sender === 'bot' && (
          <div className="bg-gray-700 text-white p-3 rounded-xl flex items-center space-x-2 max-w-xs">
            <FaRobot className="text-indigo-400 mt-0.5" />
            <span>{msg.text}</span>
          </div>
        )}

        {msg.sender === 'user' && (
          <div className="bg-gray-800 text-white border border-gray-600 p-3 rounded-xl flex items-center space-x-2 max-w-xs">
            <span>{msg.text}</span>
            <FaUser className="text-indigo-400 mt-0.5" />
          </div>
        )}
      </div>
    ))}
  </div>

  {/* Input Box */}
  <div className="bg-gray-900 p-4 border-t border-gray-700 flex items-center max-w-3xl w-full mx-auto mt-4 rounded-lg shadow-sm">
    <input
      type="text"
      placeholder="Type your message..."
      value={input}
      onChange={(e) => setInput(e.target.value)}
      onKeyDown={(e) => e.key === 'Enter' && handleSend()}
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
