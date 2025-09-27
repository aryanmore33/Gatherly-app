import { useState } from "react";
import TeamSidebar from "../components/Layout/TeamsSidebar";
import ChatWindow from "../components/Messages/ChatWindow";

const Teams = () => {
  const [selectedTeam, setSelectedTeam] = useState(null);

  return (
    <div className="flex h-full">
      {/* Sidebar (hidden when chat is open on mobile) */}
      <div
        className={`${
          selectedTeam ? "hidden md:block" : "block"
        } w-full md:w-64`}
      >
        <TeamSidebar onSelectTeam={setSelectedTeam} />
      </div>

      {/* Chat Window (full screen on mobile if selected) */}
      <div
        className={`flex-1 ${
          !selectedTeam ? "hidden md:flex" : "flex"
        } flex-col`}
      >
        {selectedTeam ? (
          <ChatWindow
            team={selectedTeam}
            onBack={() => setSelectedTeam(null)} // back button handler
          />
        ) : (
          <div className="hidden md:flex h-full items-center justify-center text-gray-500">
            Select a team to view group chat
          </div>
        )}
      </div>
    </div>
  );
};

export default Teams;