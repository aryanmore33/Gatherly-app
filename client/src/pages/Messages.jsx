import ChatSidebar from "../components/Layout/ChatSidebar";
import ChatWindow from "../components/Messages/ChatWindow";
import { useState } from "react";

const Messages = () => {
  const [selectedContact, setSelectedContact] = useState(null);

  return (
    <div className="flex h-full">
      {/* Left Contacts Sidebar */}
      <ChatSidebar onSelectContact={setSelectedContact} />

      {/* Right Chat Window */}
      <div className="flex-1">
        {selectedContact ? (
          <ChatWindow contact={selectedContact} />
        ) : (
          <div className="flex h-full items-center justify-center text-gray-500">
            Select a contact to start chatting
          </div>
        )}
      </div>
    </div>
  );
};

export default Messages;
