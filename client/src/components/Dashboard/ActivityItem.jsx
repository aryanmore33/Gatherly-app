import React from "react";

const ActivityItem = ({ user, action, time }) => {
  return (
    <div className="flex items-center justify-between py-2 border-b border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 px-3 rounded">
      <div>
        <p className="text-sm text-gray-800 dark:text-gray-200">
          <span className="font-medium">{user}</span> {action}
        </p>
        <span className="text-xs text-gray-500">{time}</span>
      </div>
    </div>
  );
};

export default ActivityItem;
