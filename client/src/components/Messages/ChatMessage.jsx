import React from "react";

const ChatMessage = ({ msg }) => {
  return (
    <div
      className={`flex ${
        msg.sender === "me" ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`px-4 py-2 rounded-lg max-w-xs ${
          msg.sender === "me"
            ? "bg-blue-500 text-white"
            : "bg-gray-200 dark:bg-gray-700 dark:text-white"
        }`}
      >
        {msg.text}
      </div>
    </div>
  );
};

export default ChatMessage;
