import React from 'react'

const dummyTeams = [
  {
    id: 1,
    name: "CSI Committee",
    avatar: "https://i.pravatar.cc/40?img=10",
  },
  {
    id: 2,
    name: "Blockchain Club",
    avatar: "https://i.pravatar.cc/40?img=11",
  },
  {
    id: 3,
    name: "Final Year Project",
    avatar: "https://i.pravatar.cc/40?img=12",
  },
];

const TeamsSidebar = ({ onSelectTeam }) => {
  return (
    <div className="w-64 border-r bg-white dark:bg-gray-900 dark:text-white">
      <h2 className="p-4 text-lg font-semibold border-b">Teams</h2>
      <ul>
        {dummyTeams.map((team) => (
          <li
            key={team.id}
            onClick={() => onSelectTeam(team)}
            className="flex items-center gap-3 p-3 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <img
              src={team.avatar}
              alt={team.name}
              className="w-10 h-10 rounded-full"
            />
            <span>{team.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TeamsSidebar