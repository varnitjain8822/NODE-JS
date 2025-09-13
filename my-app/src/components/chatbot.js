import React, { useState } from "react";
import "./Chatbot.css";

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi! 👋 How can I help you today?" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim() === "") return;

    const newMessages = [...messages, { sender: "user", text: input }];
    setMessages(newMessages);

    const botReply = {
      sender: "bot",
      text: "Thanks for your query! (AI will reply here 🤖)",
    };
    setMessages([...newMessages, botReply]);

    setInput("");
  };

  return (
    <div className={`chatbot-container ${isOpen ? "open" : ""}`}>
      {isOpen && (
        <div className="chat-window">
          <div className="chat-header">AI Chatbot 💬</div>
          <div className="chat-messages">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`message ${msg.sender === "user" ? "user" : "bot"}`}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <div className="input-area">
            <input
              type="text"
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button onClick={handleSend}>Send</button>
          </div>
        </div>
      )}
      <button className="chat-toggle" onClick={() => setIsOpen(!isOpen)}>
        💬
      </button>
    </div>
  );
}

export default Chatbot;
