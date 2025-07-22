import React, { useState } from "react";

import { FiMenu, FiX, FiSearch, FiUser, FiShoppingCart } from "react-icons/fi";

import logo from "../../assets/logo.png";

import { Link, useNavigate } from "react-router-dom";



const Navbar = () => {

  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);



  return (

    <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">

      <div className="container mx-auto px-4 lg:px-10 h-20 flex items-center justify-between">

        {/* Logo */}

        <div className="flex items-center gap-2">

          <img src={logo} alt="EduMove" className="w-8 h-8" />

          <h1 className="text-xl font-bold text-green-600">EduMove</h1>

        </div>



        {/* Center Navigation (desktop only) */}

        <nav className="hidden lg:flex gap-6 font-medium text-gray-700">

          <Link to="/" className="hover:text-blue-600">

            Home

          </Link>

          <Link to="about" className="hover:text-blue-600">

            About

          </Link>

          <Link to="login" className="hover:text-blue-600">

            Study Metarial

          </Link>

          <Link to="login" className="hover:text-blue-600">

            Exam

          </Link>

          <Link to="blog" className="hover:text-blue-600">

            Blog

          </Link>

        </nav>



        {/* Right Side (icons + buttons compact) */}

        <div className="flex items-center gap-2">

          {/* All inline icons and buttons */}

          <div className="hidden sm:flex items-center gap-2 text-gray-600">

            <span

              className="text-sm text-gray-700 hover:text-blue-600 cursor-pointer ml-2"

              onClick={() => navigate("/login")}

            >

              Login

            </span>

            <button

              className="px-3 py-1.5 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-md text-sm"

              onClick={() => navigate("/signup")}

            >

              Signup

            </button>

          </div>



          {/* Mobile Hamburger */}

          <button

            onClick={() => setMenuOpen(!menuOpen)}

            className="sm:hidden text-gray-700"

          >

            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}

          </button>

        </div>

      </div>



      {/* Mobile Menu Dropdown */}

      {menuOpen && (

        <div className="sm:hidden bg-white px-4 pb-4 shadow-md">

          <nav className="flex flex-col gap-2 text-gray-700 font-medium mt-2">

            <Link to="/" className="hover:text-blue-600">

            Home

          </Link>

          <Link to="about" className="hover:text-blue-600">

            About

          </Link>

          <Link to="login" className="hover:text-blue-600">

            Study Metarial

          </Link>

          <Link to="login" className="hover:text-blue-600">

            Exam

          </Link>

          <Link to="blog" className="hover:text-blue-600">

            Blog

          </Link>


          </nav>



          {/* Mobile icons + buttons */}

          <div className="flex items-center gap-5 mt-4 text-gray-600">

            <FiSearch className="w-5 h-5" />

            <FiUser className="w-5 h-5" />

            <FiShoppingCart className="w-5 h-5" />

            <Link className="text-sm text-gray-700 ps-5" to="/login">

              Login

            </Link>

            <Link

              className="px-3 py-1.5 bg-gradient-to-r cursor-pointer from-blue-500 to-purple-500 text-white rounded-md text-sm"

              to="/signup"

            >

              Signup

            </Link>

          </div>

        </div>

      )}

    </header>

  );

};



export default Navbar;