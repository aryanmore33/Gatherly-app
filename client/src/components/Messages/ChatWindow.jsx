import GroupChatMessage from "../Teams/GrpMessage";
import ChatMessage from "./ChatMessage";
import { useState } from "react";
import { ArrowLeft } from "lucide-react";

const ChatWindow = ({ contact, team, onBack }) => {
  const [messages, setMessages] = useState([
    team
      ? [
          { id: 1, text: "Welcome to the group!", sender: "Aryan" },
          { id: 2, text: "Hi everyone 👋", sender: "Neha" },
        ]
      : [
          { id: 1, text: "Hello!", sender: "them" },
          { id: 2, text: "Hi, how are you?", sender: "me" },
        ],
  ].flat());

  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages([
      ...messages,
      { id: Date.now(), text: input, sender: team ? "Me" : "me" },
    ]);
    setInput("");
  };

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="p-4 border-b bg-white dark:bg-gray-900 dark:text-white flex items-center gap-2">
        {/* Show Back button on mobile only */}
        {onBack && (
          <button
            className="md:hidden p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
            onClick={onBack}
          >
            <ArrowLeft size={20} />
          </button>
        )}
        <h2 className="font-semibold">{team ? team.name : contact?.name}</h2>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-2 bg-gray-50 dark:bg-gray-800">
        {messages.map((msg) =>
          team ? (
            <GroupChatMessage key={msg.id} msg={msg} />
          ) : (
            <ChatMessage key={msg.id} msg={msg} />
          )
        )}
      </div>

      {/* Input */}
      <div className="p-3 border-t flex gap-2 bg-white dark:bg-gray-900">
        <input
          type="text"
          className="flex-1 border rounded-lg px-3 py-2 dark:bg-gray-700 dark:text-white"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={team ? "Send message to group..." : "Type a message..."}
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