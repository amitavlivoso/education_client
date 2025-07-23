import { useState, useRef, useEffect } from "react";
import { useNavigate,Link } from "react-router-dom"; // <-- ADD THIS
import { FaUserCircle, FaBell, FaChevronDown, FaBars } from "react-icons/fa";

export default function Header({ onMenuClick }) {
  const navigate = useNavigate(); // <-- INIT NAVIGATE
  const storedUser = JSON.parse(localStorage.getItem("currentUser"));
  const role = storedUser?.role || "";
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Logout handler
  const handleLogout = () => {
    localStorage.removeItem("currentUser"); // Clear session
    navigate("/"); // Redirect to home
  };

  return (
    <header className="w-full bg-white shadow-xl px-4 py-3">
      <div className="max-w-7xl mx-auto flex md:justify-between items-center">
        {/* Left Side */}
        <div className="flex  items-center md:space-x-3 space-x-0">
          <button
            className="md:hidden sm:mr-2 text-gray-600 hover:text-blue-600 focus:outline-none"
            onClick={onMenuClick}
          >
            <FaBars className="text-xl" />
          </button>
          <div className="flex  flex-col sm:flex-row sm:items-center sm:space-x-2">
            <div className="text-lg  font-semibold text-blue-600">
              EduAdmin Management
            </div>
            <span className="text-gray-400 text-sm hidden sm:inline">
              Dashboard
            </span>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center space-x-4 sm:space-x-6 mt-2 sm:mt-0">
          {/* Notifications */}
          <div className="relative cursor-pointer flex-shrink-0">
            <FaBell className="text-gray-500 hover:text-blue-600 transition text-lg" />
            <span className="absolute -top-1 -right-2 bg-red-500 text-white text-[10px] px-1.5 py-[1px] rounded-full">
              3
            </span>
          </div>

          {/* User Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <div
              className="flex items-center space-x-2 cursor-pointer hover:bg-gray-100 px-2 py-1 rounded-lg transition flex-shrink-0"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <FaUserCircle className="text-gray-600 text-xl" />
              <span className="text-sm text-gray-700 font-medium hidden sm:inline">
                {role}
              </span>
              <FaChevronDown className="text-gray-400 text-xs hidden sm:inline" />
            </div>

            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-100 rounded-lg shadow-lg z-50">
                <ul className="py-1 text-sm text-gray-700">
                  <Link to="profile">
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      Profile
                    </li>
                  </Link>

                  <li
                    onClick={handleLogout}
                    className="border-t border-gray-200 px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    Logout
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
