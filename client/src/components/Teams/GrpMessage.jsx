import React from 'react'

const GrpMessage = ({msg}) => {
  const isMe = msg.sender === "Me";

  return (
    <div className={`flex ${isMe ? "justify-end" : "justify-start"}`}>
      <div
        className={`px-4 py-2 rounded-lg max-w-xs ${
          isMe
            ? "bg-blue-500 text-white"
            : "bg-gray-200 dark:bg-gray-700 dark:text-white"
        }`}
      >
        {!isMe && <div className="text-xs font-semibold">{msg.sender}</div>}
        <div>{msg.text}</div>
      </div>
    </div>
  );
}

export default GrpMessage