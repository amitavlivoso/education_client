import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1  mt-18">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
