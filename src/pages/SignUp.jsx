import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock, FaUser, FaPhone } from "react-icons/fa";
import axios from "axios";

const SignUp = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    role: "student",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post("http://localhost:8080/api/auth/register", formData);
      if (res.data.success) {
        alert("Registration successful! Please check your email for the OTP.");
        navigate("/verify-otp", { state: { email: formData.email } });
      } else {
        alert(res.data.message || "Registration failed");
      }
    } catch (err) {
      console.error(err);
      alert("An error occurred during registration.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-5xl bg-white shadow-lg rounded-xl overflow-hidden">
        <div className="hidden md:block">
          <img
            src="https://images.pexels.com/photos/5212335/pexels-photo-5212335.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="Student Studying"
            className="w-full h-100 object-cover"
          />
        </div>

        <div className="p-6 md:p-8 bg-gradient-to-tr from-white to-blue-50">
          <h2 className="text-2xl font-bold text-indigo-700 text-center mb-4">
            Register
          </h2>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="relative mt-4">
              <FaUser className="absolute top-3.5 left-3 text-indigo-500" />
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="pl-10 pr-3 py-2 w-full rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-400 text-sm"
              />
            </div>

            <div className="relative">
              <FaEnvelope className="absolute top-3.5 left-3 text-indigo-500" />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="pl-10 pr-3 py-2 w-full rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-400 text-sm"
              />
            </div>

            <div className="relative">
              <FaLock className="absolute top-3.5 left-3 text-indigo-500" />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
                className="pl-10 pr-3 py-2 w-full rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-400 text-sm"
              />
            </div>

            <div className="relative">
              <FaPhone className="absolute top-3.5 left-3 text-indigo-500" />
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="pl-10 pr-3 py-2 w-full rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-400 text-sm"
              />
            </div>

            {/* <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md text-sm"
            >
              <option value="student">Student</option>
              <option value="teacher">Teacher</option>
            </select> */}

            <button
              type="submit"
              disabled={loading}
              className="mt-5 w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 rounded-md transition text-sm"
            >
              {loading ? "Registering..." : "Register"}
            </button>

            <p className="text-xs text-gray-600 text-center">
              Already have an account? {" "}
              <a
                href="/login"
                className="text-indigo-600 font-medium hover:underline"
              >
                Login
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
