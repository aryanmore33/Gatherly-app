import ChatMessage from "./ChatMessage";
import { useState } from "react";

const ChatWindow = ({ contact }) => {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello!", sender: "them" },
    { id: 2, text: "Hi, how are you?", sender: "me" },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages([...messages, { id: Date.now(), text: input, sender: "me" }]);
    setInput("");
  };

  return (
    <div className="flex flex-col h-full">
      {/* Chat Header */}
      <div className="p-4 border-b bg-white dark:bg-gray-900 dark:text-white">
        <h2 className="font-semibold">{contact.name}</h2>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-2 bg-gray-50 dark:bg-gray-800">
        {messages.map((msg) => (
          <ChatMessage key={msg.id} msg={msg} />
        ))}
      </div>

      {/* Input Box */}
      <div className="p-3 border-t flex gap-2 bg-white dark:bg-gray-900">
        <input
          type="text"
          className="flex-1 border rounded-lg px-3 py-2 dark:bg-gray-700 dark:text-white"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
        />
        <button
          onClick={sendMessage}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatWindow;
