import React from "react";

const StatsCard = ({ title, value, icon: Icon, color = "bg-blue-500" }) => {
  return (
    <div className="flex items-center p-4 bg-white dark:bg-gray-900 shadow rounded-xl">
      <div className={`p-3 rounded-full ${color} text-white`}>
        <Icon className="w-6 h-6" />
      </div>
      <div className="ml-4">
        <h4 className="text-sm text-gray-500 dark:text-gray-400">{title}</h4>
        <p className="text-lg font-semibold text-gray-800 dark:text-white">
          {value}
        </p>
      </div>
    </div>
  );
};

export default StatsCard;
