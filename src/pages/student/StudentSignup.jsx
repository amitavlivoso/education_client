import React from "react";
import { FaUserGraduate, FaEnvelope, FaLock, FaPhone, FaSchool } from "react-icons/fa";

const StudentSignup = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-purple-100 flex items-center justify-center p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 bg-white/80 backdrop-blur-md shadow-xl rounded-2xl overflow-hidden max-w-5xl w-full">
        
        {/* Left Side - Illustration or Welcome */}
        <div className="bg-gradient-to-br from-indigo-600 to-purple-600 text-white flex flex-col items-center justify-center p-10">
          <h2 className="text-3xl font-bold mb-4 text-center">Welcome, Future Scholar!</h2>
          <p className="text-center text-sm">Sign up to access your learning journey</p>
          <img src="https://www.svgrepo.com/show/389883/study-book-education.svg" alt="Study" className="mt-6 w-3/4" />
        </div>

        {/* Right Side - Form */}
        <form className="p-10 flex flex-col justify-center space-y-5">
          <h3 className="text-2xl font-bold text-indigo-800 text-center">Student Signup</h3>

          {/* Full Name */}
          <div className="relative">
            <FaUserGraduate className="absolute top-4 left-3 text-indigo-600" />
            <input
              type="text"
              placeholder="Full Name"
              className="pl-10 pr-4 py-3 w-full rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          {/* Email */}
          <div className="relative">
            <FaEnvelope className="absolute top-4 left-3 text-indigo-600" />
            <input
              type="email"
              placeholder="Email"
              className="pl-10 pr-4 py-3 w-full rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          {/* Phone */}
          <div className="relative">
            <FaPhone className="absolute top-4 left-3 text-indigo-600" />
            <input
              type="tel"
              placeholder="Phone Number"
              className="pl-10 pr-4 py-3 w-full rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          {/* School/College */}
          <div className="relative">
            <FaSchool className="absolute top-4 left-3 text-indigo-600" />
            <input
              type="text"
              placeholder="School / College Name"
              className="pl-10 pr-4 py-3 w-full rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          {/* Password */}
          <div className="relative">
            <FaLock className="absolute top-4 left-3 text-indigo-600" />
            <input
              type="password"
              placeholder="Password"
              className="pl-10 pr-4 py-3 w-full rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-semibold transition"
          >
            Create Account
          </button>

          <p className="text-sm text-center text-gray-500">
            Already have an account?{" "}
            <a href="/login" className="text-indigo-600 font-semibold hover:underline">
              Login
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default StudentSignup;
