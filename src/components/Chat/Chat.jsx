import React, { useState, useRef, useEffect } from "react";
import { HiPaperAirplane, HiFaceSmile } from "react-icons/hi2";
import "./Chat.css";

/**
 * Reusable Chat Component
 *
 * @param {Array} messages - Chat messages
 * @param {Function} onSend - Send message handler
 * @param {string} placeholder - Input placeholder
 * @param {string} className - Additional CSS classes
 */
export default function Chat({
  messages = [],
  onSend,
  placeholder = "Type a message...",
  className = "",
  ...props
}) {
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (inputValue.trim() && onSend) {
      onSend(inputValue.trim());
      setInputValue("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className={`chat ${className}`} {...props}>
      <div className="chat-messages">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`chat-message ${message.sender === "user" ? "user" : "other"}`}
          >
            {message.avatar && (
              <div className="chat-avatar">{message.avatar}</div>
            )}
            <div className="chat-message-content">
              {message.sender !== "user" && message.name && (
                <div className="chat-message-name">{message.name}</div>
              )}
              <div className="chat-message-text">{message.text}</div>
              {message.timestamp && (
                <div className="chat-message-time">{message.timestamp}</div>
              )}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className="chat-input-container">
        <button 
          className="chat-input-button"
          type="button"
          aria-label="Add emoji"
        >
          <HiFaceSmile />
        </button>
        <input
          type="text"
          className="chat-input"
          placeholder={placeholder}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button
          className="chat-input-button chat-send-button"
          onClick={handleSend}
          type="button"
          aria-label="Send message"
          disabled={!inputValue.trim()}
        >
          <HiPaperAirplane />
        </button>
      </div>
    </div>
  );
}
