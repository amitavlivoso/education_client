import React, { useState } from "react";

const formFields = [
  {
    label: "Full Name",
    type: "text",
    name: "fullName",
    placeholder: "Enter your full name",
    required: true,
  },
  {
    label: "Email Address",
    type: "email",
    name: "email",
    placeholder: "Enter your email",
    required: true,
  },
  {
    label: "Password",
    type: "password",
    name: "password",
    placeholder: "Create a password",
    required: true,
  },
  {
    label: "Mobile Number",
    type: "tel",
    name: "phone",
    placeholder: "Enter your mobile number",
    required: true,
  },
  {
    label: "Subject Expertise",
    type: "select",
    name: "subject",
    options: ["Mathematics", "Physics", "Chemistry", "English", "Computer Science"],
    required: true,
  },
  {
    label: "Profile Image",
    type: "file",
    name: "profileImage",
    accept: "image/*",
  },
];

export default function TeacherSignUp() {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, type, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === "file" ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sign Up Data:", formData);
    // Submit to backend API
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-xl w-full max-w-xl p-6 space-y-5"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800">Teacher Sign Up</h2>

        {formFields.map((field, index) => (
          <div key={index} className="flex flex-col">
            <label className="text-sm font-medium mb-1 text-gray-700">{field.label}</label>

            {field.type === "select" ? (
              <select
                name={field.name}
                required={field.required}
                onChange={handleChange}
                className="p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
              >
                <option value="">Select Subject</option>
                {field.options.map((option, idx) => (
                  <option key={idx} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            ) : (
              <input
                type={field.type}
                name={field.name}
                required={field.required}
                placeholder={field.placeholder}
                accept={field.accept || ""}
                onChange={handleChange}
                className="p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
              />
            )}
          </div>
        ))}

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
        >
          Register
        </button>
      </form>
    </div>
  );
}
