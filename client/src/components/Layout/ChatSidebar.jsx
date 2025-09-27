import { useState } from "react";

const dummyContacts = [
  { id: 1, name: "Aryan", avatar: "https://i.pravatar.cc/40?img=1" },
  { id: 2, name: "Neha", avatar: "https://i.pravatar.cc/40?img=2" },
  { id: 3, name: "Ravi", avatar: "https://i.pravatar.cc/40?img=3" },
];

const ChatSidebar = ({ onSelectContact }) => {
  const [active, setActive] = useState(null);

  return (
    <div className="w-64 border-r bg-white dark:bg-gray-900 dark:text-white">
      <h2 className="p-4 text-lg font-semibold border-b">Contacts</h2>
      <ul>
        {dummyContacts.map((contact) => (
          <li
            key={contact.id}
            onClick={() => {
              setActive(contact.id);
              onSelectContact(contact);
            }}
            className={`flex items-center gap-3 p-3 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 ${
              active === contact.id ? "bg-gray-200 dark:bg-gray-700" : ""
            }`}
          >
            <img
              src={contact.avatar}
              alt={contact.name}
              className="w-10 h-10 rounded-full"
            />
            <span>{contact.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChatSidebar;
