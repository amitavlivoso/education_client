import React, { useState } from "react";

const formFields = [
  {
    label: "Full Name",
    type: "text",
    name: "fullName",
    placeholder: "Enter your full name",
    required: true,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
      </svg>
    )
  },
  {
    label: "Email Address",
    type: "email",
    name: "email",
    placeholder: "your.email@example.com",
    required: true,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
      </svg>
    )
  },
  {
    label: "Password",
    type: "password",
    name: "password",
    placeholder: "••••••••",
    required: true,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
      </svg>
    )
  },
  {
    label: "Mobile Number",
    type: "tel",
    name: "phone",
    placeholder: "+1 (555) 000-0000",
    required: true,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
      </svg>
    )
  },
  {
    label: "Subject Expertise",
    type: "select",
    name: "subject",
    options: ["Mathematics", "Physics", "Chemistry", "English", "Computer Science", "Biology", "History", "Geography"],
    required: true,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
      </svg>
    )
  },
   {
    label: "Role",
    type: "select",
    name: "role",
    options: ["Teacher", "Student"],
    required: true,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path d="M10 2a6 6 0 016 6v2a6 6 0 01-12 0V8a6 6 0 016-6zm-2 8a2 2 0 104 0 2 2 0 00-4 0z" />
      </svg>
    )
  },
  {
    label: "Profile Image",
    type: "file",
    name: "profileImage",
    accept: "image/*",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
      </svg>
    )
  },
  
];

export default function TeacherSignUp() {
  const [formData, setFormData] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleChange = (e) => {
    const { name, type, value, files } = e.target;
    
    if (type === "file" && files && files[0]) {
      const file = files[0];
      setSelectedImage(URL.createObjectURL(file));
      setFormData({
        ...formData,
        [name]: file,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log("Sign Up Data:", formData);
      setIsSubmitting(false);
      alert("Account created successfully!");
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-cyan-100 p-4">
      <div className="bg-white shadow-2xl rounded-3xl w-full max-w-5xl overflow-hidden flex flex-col md:flex-row">
        {/* Left Panel - Visual Section */}
        <div className="md:w-2/5 bg-gradient-to-br bg-blue-600 p-8 flex flex-col justify-between text-white">
          <div>
            <h1 className="text-3xl font-bold mb-2">Teach & Inspire</h1>
            <p className="text-indigo-100 mb-6">
              Join our platform to share your knowledge with students worldwide
            </p>
            
            <div className="flex items-center mb-6">
              <div className="bg-indigo-500 rounded-full p-3 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Expert Content</h3>
                <p className="text-indigo-200 text-sm">Create and share your own lessons</p>
              </div>
            </div>
            
            <div className="flex items-center mb-6">
              <div className="bg-indigo-500 rounded-full p-3 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Global Reach</h3>
                <p className="text-indigo-200 text-sm">Connect with students from around the world</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="bg-indigo-500 rounded-full p-3 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Secure Platform</h3>
                <p className="text-indigo-200 text-sm">Your data is protected with enterprise-grade security</p>
              </div>
            </div>
          </div>
          
          <div className="mt-8">
            <div className="flex items-center">
              {/* <div className="h-12 w-12 rounded-full bg-indigo-500 flex items-center justify-center mr-3">
                <span className="text-lg font-bold">AJ</span>
              </div> */}
              {/* <div>
                <p className="font-medium">Dr. Amelia Johnson</p>
                <p className="text-indigo-200 text-sm">Physics Professor, 5 years on platform</p>
              </div> */}
            </div>
            <blockquote className="mt-3 pl-2 border-l-2 border-indigo-400 italic text-indigo-100">
              "This platform transformed how I connect with students globally. Highly recommend to educators!"
            </blockquote>
          </div>
        </div>

        {/* Right Panel - Form Section */}
        <div className="md:w-3/5 p-8">
          <div className="text-center mb-4">
            <h2 className="text-3xl font-bold text-gray-800">Create Your Teacher Account</h2>
            <p className="text-gray-600 mt-2">
              Join thousands of educators making an impact
            </p>
          </div>
          
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {formFields.map((field, index) => (
                <div 
                  key={index} 
                  className={field.type === "file" ? "md:col-span-2" : ""}
                >
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {field.label}
                    {field.required && <span className="text-red-500 ml-1">*</span>}
                  </label>
                  
                  {field.type === "select" ? (
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                        {field.icon}
                      </div>
                      <select
                        name={field.name}
                        required={field.required}
                        onChange={handleChange}
                        className="w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-300 focus:border-transparent transition-all duration-200"
                      >
                        <option value="">Select your expertise</option>
                        {field.options.map((option, idx) => (
                          <option key={idx} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>
                  ) : field.type === "file" ? (
                    <div className="flex items-center justify-center w-full">
                      <label className="flex flex-col items-center justify-center w-full border-2 border-dashed border-gray-300 rounded-xl cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors duration-200 p-4">
                        <div className="flex flex-col items-center justify-center">
                          {selectedImage ? (
                            <img src={selectedImage} alt="Preview" className="h-24 w-24 rounded-full object-cover mb-2" />
                          ) : (
                            <>
                              {field.icon}
                              <p className="mb-1 mt-2 text-sm text-gray-500">
                                <span className="font-semibold">Click to upload</span>
                              </p>
                              <p className="text-xs text-gray-500">
                                PNG, JPG (MAX. 2MB)
                              </p>
                            </>
                          )}
                        </div>
                        <input 
                          type="file" 
                          className="hidden" 
                          name={field.name}
                          accept={field.accept || ""}
                          onChange={handleChange}
                        />
                      </label>
                    </div>
                  ) : (
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                        {field.icon}
                      </div>
                      <input
                        type={field.type}
                        name={field.name}
                        required={field.required}
                        placeholder={field.placeholder}
                        onChange={handleChange}
                        className="w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-300 focus:border-transparent transition-all duration-200"
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            <div className="mt-6 flex items-center">
              <input
                id="terms"
                type="checkbox"
                required
                className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
              />
              <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                I agree to the <a href="#" className="text-indigo-600 hover:underline">Terms of Service</a> and <a href="#" className="text-indigo-600 hover:underline">Privacy Policy</a>
              </label>
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full mt-8 py-3.5 px-6 rounded-xl font-medium text-white transition-all duration-300 ${
                isSubmitting 
                  ? "bg-gray-400 cursor-not-allowed" 
                  : "bg-gradient-to-r from-blue-600 to-blue-600 hover:from-indigo-700 hover:to-purple-700 hover:shadow-lg"
              }`}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Creating Account...
                </span>
              ) : (
                "Create Teacher Account"
              )}
            </button>
            
            <p className="text-center text-gray-600 text-sm mt-6">
              Already have an account?{" "}
              <a href="#" className="text-indigo-600 hover:underline font-medium">
                Sign In
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}