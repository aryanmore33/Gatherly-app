import React from 'react'
import { useState } from "react";
import { Bell, Search, Settings, ChevronDown } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/Avatar";
import { Input } from "../ui/Input";
import { Button } from "../ui/Button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/DropdownMenu";

const TopNavbar = () => {
    const [search, setSearch] = useState("");
   return (
    <header className="flex items-center justify-between bg-white dark:bg-gray-900 px-4 py-2 shadow-sm border-b">
      {/* Left: Workspace Name */}
      <div className="flex items-center gap-2 font-semibold text-lg">
        <span className="text-indigo-600">CollabFlow</span>
        <ChevronDown className="w-4 h-4 text-gray-500 cursor-pointer" />
      </div>

      {/* Center: Search Bar */}
      <div className="flex-1 max-w-md mx-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <Input
            type="text"
            placeholder="Search messages, files, and more..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-4">
        {/* Notifications */}
        <Button
          variant="ghost"
          size="icon"
          className="relative hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          <Bell className="w-5 h-5" />
          <span className="absolute top-1 right-1 bg-red-500 text-white text-xs rounded-full px-1">
            3
          </span>
        </Button>

        {/* Settings */}
        <Button
          variant="ghost"
          size="icon"
          className="hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          <Settings className="w-5 h-5" />
        </Button>

        {/* Profile Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar className="cursor-pointer">
              <AvatarImage src="https://i.pravatar.cc/40" alt="User" />
              <AvatarFallback>AM</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-40">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem className="text-red-600">
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}

export default TopNavbar