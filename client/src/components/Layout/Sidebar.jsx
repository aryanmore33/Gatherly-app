import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../../redux/Uislice";
import {
  Home,
  MessageSquare,
  Users,
  CheckSquare,
  Settings,
  ChevronLeft,
} from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/Avatar";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { name: "Dashboard", icon: Home, path: "/" },
  { name: "Messages", icon: MessageSquare, path: "/messages" },
  { name: "Teams", icon: Users, path: "/teams" },
  { name: "Tasks", icon: CheckSquare, path: "/tasks" },
  { name: "Settings", icon: Settings, path: "/settings" },
];

const Sidebar = () => {
  const dispatch = useDispatch();
  const { sidebarOpen } = useSelector((state) => state.ui);
  const location = useLocation();

  return (
    <aside
      className={`${
        sidebarOpen ? "w-60" : "w-15"
      } bg-white dark:bg-gray-900 h-screen border-r dark:border-gray-800 flex flex-col transition-all duration-300`}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4">
        <h1
          className={`font-bold text-xl text-gray-800 dark:text-white transition-opacity duration-300 ${
            sidebarOpen ? "opacity-100" : "opacity-0 hidden"
          }`}
        >
          Gatherly
        </h1>
        <button
          onClick={() => dispatch(toggleSidebar())}
          className="p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-800"
        >
          <ChevronLeft
            className={`w-5 h-5 text-gray-600 dark:text-gray-300 transition-transform ${
              sidebarOpen ? "rotate-0" : "rotate-180"
            }`}
          />
        </button>
      </div>

      {/* Nav */}
      <nav className="flex-1 mt-4">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.name}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-3 text-sm font-medium 
                ${
                  isActive
                    ? "bg-gray-100 dark:bg-gray-800 text-blue-600 dark:text-blue-400"
                    : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white"
                }`}
            >
              <item.icon className="w-5 h-5" />
              {sidebarOpen && <span>{item.name}</span>}
            </Link>
          );
        })}
      </nav>

      {/* Profile Section */}
      <div className="p-4 border-t dark:border-gray-800 flex items-center gap-3">
        <Avatar>
          <AvatarImage src="https://i.pravatar.cc/40" alt="User" />
          <AvatarFallback>AM</AvatarFallback>
        </Avatar>
        {sidebarOpen && (
          <div className="flex flex-col">
            <span className="text-sm font-medium text-gray-800 dark:text-white">
              Aryan More
            </span>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              Web Lead
            </span>
          </div>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
