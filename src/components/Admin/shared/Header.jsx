import { FaUserCircle, FaBell, FaChevronDown, FaBars } from "react-icons/fa";

export default function Header({ onMenuClick }) {
  return (
    <header className="w-full bg-white  shadow-xl px-4 py-3">
      <div className="max-w-7xl  mx-auto flex  md:justify-between items-center">
        {/* Left Side: Logo/Title + Hamburger */}
        <div className="flex items-center md:space-x-3 space-x-0 ">
          {/* Hamburger only on mobile */}
          <button
            className="md:hidden text-gray-600 hover:text-blue-600 focus:outline-none"
            onClick={onMenuClick}
          >
            <FaBars className="text-xl" />
          </button>

          {/* App Branding */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2">
            <div className="text-lg sm:text-xl font-semibold text-blue-600">
              EduAdmin Management
            </div>
            <span className="text-gray-400 text-sm hidden sm:inline">
              Dashboard
            </span>
          </div>
        </div>

        {/* Right Side: Notification & User Info */}
        <div className="flex items-center space-x-4 sm:space-x-6 mt-2 sm:mt-0">
          {/* Notification Bell */}
          <div className="relative cursor-pointer flex-shrink-0">
            <FaBell className="text-gray-500 hover:text-blue-600 transition text-lg" />
            <span className="absolute -top-1 -right-2 bg-red-500 text-white text-[10px] px-1.5 py-[1px] rounded-full">
              3
            </span>
          </div>
          {/* User Info */}
          <div className="flex items-center space-x-2 cursor-pointer hover:bg-gray-100 px-2 py-1 rounded-lg transition flex-shrink-0">
            <FaUserCircle className="text-gray-600 text-xl" />
            <span className="text-sm text-gray-700 font-medium hidden sm:inline">
              Admin
            </span>
            <FaChevronDown className="text-gray-400 text-xs hidden sm:inline" />
          </div>
        </div>
      </div>
    </header>
  );
}
