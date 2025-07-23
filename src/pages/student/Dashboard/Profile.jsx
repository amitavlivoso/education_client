import React from 'react';
import { FaUserGraduate, FaEnvelope, FaPhone, FaSchool, FaLock } from 'react-icons/fa';

const Profile = () => {
  return (
    <div className="min-h-screen  flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-3xl">
        {/* Profile Header */}
        <div className="text-center mb-8">
          <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-indigo-200 flex items-center justify-center text-4xl text-white font-bold">
            <FaUserGraduate />
          </div>
          <h2 className="text-3xl font-bold text-indigo-700">Student Profile</h2>
          <p className="text-gray-500">Manage your personal information</p>
        </div>

        {/* Profile Form */}
        <form className="space-y-6">
          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative">
              <FaUserGraduate className="absolute top-3.5 left-3 text-indigo-500" />
              <input
                type="text"
                placeholder="Full Name"
                className="pl-10 pr-4 py-3 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                required
              />
            </div>

            <div className="relative">
              <FaEnvelope className="absolute top-3.5 left-3 text-indigo-500" />
              <input
                type="email"
                placeholder="Email"
                className="pl-10 pr-4 py-3 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                required
              />
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative">
              <FaPhone className="absolute top-3.5 left-3 text-indigo-500" />
              <input
                type="tel"
                placeholder="Phone Number"
                className="pl-10 pr-4 py-3 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                required
              />
            </div>

            <div className="relative">
              <FaSchool className="absolute top-3.5 left-3 text-indigo-500" />
              <input
                type="text"
                placeholder="School / College Name"
                className="pl-10 pr-4 py-3 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                required
              />
            </div>
          </div>

          {/* Row 3 */}
          <div className="relative">
            <FaLock className="absolute top-3.5 left-3 text-indigo-500" />
            <input
              type="password"
              placeholder="Password"
              className="pl-10 pr-4 py-3 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              required
            />
          </div>

          {/* Submit */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-10 rounded-full transition duration-300"
            >
              Update Profile
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
