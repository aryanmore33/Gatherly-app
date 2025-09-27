import React from 'react'
import { MessageSquare, Users, CheckSquare, Bell } from "lucide-react";
import StatsCard from '../components/Dashboard/StatsCard.jsx';
import ActivityItem from '../components/Dashboard/ActivityItem';

const Dashboard = () => {
  return (
    <div className="p-5 space-y-6">
      {/* Top Section - Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard title="Unread Messages" value="12" icon={MessageSquare} color="bg-blue-500" />
        <StatsCard title="Teams Joined" value="4" icon={Users} color="bg-green-500" />
        <StatsCard title="Tasks Due" value="7" icon={CheckSquare} color="bg-yellow-500" />
        <StatsCard title="Notifications" value="3" icon={Bell} color="bg-red-500" />
      </div>

      {/* Recent Activity */}
      <div className="bg-white dark:bg-gray-900 shadow rounded-xl p-6">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
          Recent Activity
        </h2>
        <div className="space-y-2">
          <ActivityItem user="Aryan" action="sent a message in Team Alpha" time="2 mins ago" />
          <ActivityItem user="Neha" action="completed a task in Project Beta" time="10 mins ago" />
          <ActivityItem user="Rahul" action="joined Team Gamma" time="1 hour ago" />
          <ActivityItem user="You" action="updated your profile" time="3 hours ago" />
        </div>
      </div>
    </div>
  );
}

export default Dashboard