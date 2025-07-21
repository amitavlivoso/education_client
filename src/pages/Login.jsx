import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock } from "react-icons/fa";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Dummy users injection
  useEffect(() => {
    const users = localStorage.getItem("users");
    if (!users) {
      const dummyUsers = [
        { email: "admin@example.com", password: "admin123", role: "admin" },
        {
          email: "student1@example.com",
          password: "student123",
          role: "student",
        },
        {
          email: "teacher@example.com",
          password: "teacher123",
          role: "teacher",
        },
      ];
      localStorage.setItem("users", JSON.stringify(dummyUsers));
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

    const foundUser = storedUsers.find(
      (user) => user.email === email && user.password === password
    );

    if (foundUser) {
      localStorage.setItem("currentUser", JSON.stringify(foundUser));

      if (foundUser.role === "admin") {
        window.location.href = "/admin/dashboard";
      } else if (foundUser.role === "student") {
        window.location.href = "/student/dashboard";
      } else if (foundUser.role === "teacher") {
        window.location.href = "/teacher/dashboard";
      } else {
        window.location.href = "/dashboard";
      }
    } else {
      alert("Invalid email or password");
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
            Student LogIn
          </h2>

          <form className="space-y-4" onSubmit={handleLogin}>
            <div className="relative mt-8">
              <FaEnvelope className="absolute top-3.5 left-3 text-indigo-500" />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10 pr-3 py-2 w-full rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-400 text-sm"
              />
            </div>

            <div className="relative mt-8">
              <FaLock className="absolute top-3.5 left-3 text-indigo-500" />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pl-10 pr-3 py-2 w-full rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-400 text-sm"
              />
            </div>

            <button
              type="submit"
              className="mt-5 w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 rounded-md transition text-sm"
            >
              Log In
            </button>

            <p className="text-xs text-gray-600 text-center">
              Not Registered?{" "}
              <a
                href="/register"
                className="text-indigo-600 font-medium hover:underline"
              >
                Register
              </a>
            </p>

            <div className="mt-4 flex justify-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
                alt="Google"
                className="w-6 h-6"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
