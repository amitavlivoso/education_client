import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./SIdebar";
import Header from "./Header";

export default function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar - Desktop */}
      <div className="hidden md:block ">
        <Sidebar />
      </div>

      {/* Sidebar - Mobile Overlay */}
      {isSidebarOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setIsSidebarOpen(false)}
          ></div>
          <div className="fixed inset-y-0 left-0 w-64 bg-white shadow-lg z-50 transform transition-transform duration-300">
            <Sidebar onClose={() => setIsSidebarOpen(false)} />
          </div>
        </>
      )}

      {/* Main Content */}
      <div className="flex flex-col flex-1 ">
        <Header onMenuClick={() => setIsSidebarOpen(true)} />
        <main className="flex-1 bg-gray-50 overflow-y-auto p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
