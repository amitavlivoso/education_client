import React, { useState, useEffect } from "react";
import { FaUserPlus } from "react-icons/fa";
import { useLocation } from "react-router-dom";

export default function AddOrEditUserForm() {
  const location = useLocation();
  const id = location?.state?.id || null;

  const [form, setForm] = useState({
    name: "",
    email: "",
    role: "Student",
    status: "Active",
    password: "",
  });

  const [isEditMode, setIsEditMode] = useState(false);

  useEffect(() => {
    if (id) {
      setIsEditMode(true);
      // ✅ Fetch user data using `id`
      // Dummy example — Replace with actual API call
      const dummyUser = {
        name: "John Doe",
        email: "john@example.com",
        role: "Teacher",
        status: "Active",
        password: "hiddenpassword",
      };
      setForm(dummyUser);
    }
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditMode) {
      console.log("Updating user:", form);
      // 🟡 Call PUT / PATCH API endpoint here
    } else {
      console.log("Creating new user:", form);
      // 🟢 Call POST API endpoint here
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-xl rounded-lg mt-10">
      <div className="flex items-center gap-2 mb-6">
        <FaUserPlus className="text-blue-600 text-2xl" />
        <h2 className="text-xl font-semibold text-gray-800">
          {isEditMode ? "Edit User" : "Add New User"}
        </h2>
      </div>
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Name */}
        <div>
          <label className="block text-gray-600 mb-1 font-medium">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="Enter full name"
            className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-blue-500"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-gray-600 mb-1 font-medium">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="Enter email"
            className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-blue-500"
            disabled={isEditMode} // Email is usually not editable
          />
        </div>

        {/* Role */}
        <div>
          <label className="block text-gray-600 mb-1 font-medium">
            Select Role
          </label>
          <select
            name="role"
            value={form.role}
            onChange={handleChange}
            className="w-full border border-gray-300 px-4 py-2 rounded-md bg-white focus:outline-blue-500"
          >
            <option value="Student">Student</option>
            <option value="Teacher">Teacher</option>
          </select>
        </div>

        {/* Status */}
        <div>
          <label className="block text-gray-600 mb-1 font-medium">Status</label>
          <select
            name="status"
            value={form.status}
            onChange={handleChange}
            className="w-full border border-gray-300 px-4 py-2 rounded-md bg-white focus:outline-blue-500"
          >
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>

        {/* Password */}
        {!isEditMode && (
          <div>
            <label className="block text-gray-600 mb-1 font-medium">
              Password
            </label>
            <input
              type="text"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Leave empty to auto-generate"
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-blue-500"
            />
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          {isEditMode ? "Update User" : "Add User"}
        </button>
      </form>
    </div>
  );
}
