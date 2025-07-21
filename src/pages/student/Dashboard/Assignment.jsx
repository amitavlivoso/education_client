import React, { useState } from "react";
import { FaUpload, FaFilePdf } from "react-icons/fa";

const Assignment = () => {
  const [assignments, setAssignments] = useState([
    {
      name: "Math Algebra Assignment",
      status: "Pending",
      link: "assignment1.pdf",
    },
    {
      name: "Physics Motion Worksheet",
      status: "Uploaded",
      link: "assignment2.pdf",
    },
    {
      name: "English Essay Writing",
      status: "Pending",
      link: "assignment3.pdf",
    },
    {
      name: "History Chapter 2",
      status: "Uploaded",
      link: "assignment4.pdf",
    },
    {
      name: "Chemistry Reactions",
      status: "Pending",
      link: "assignment5.pdf",
    },
  ]);

  const handleUpload = (index, file) => {
    const updated = [...assignments];
    updated[index].status = "Uploaded";
    setAssignments(updated);
    alert(`Uploaded: ${file.name} for "${assignments[index].name}"`);
  };

  return (
    <div className="min-h-screen  py-12 px-4 sm:px-10">
      <h2 className="text-4xl font-bold text-center text-indigo-700 mb-12">
        📝 Your Assignments
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
  {assignments.map((item, idx) => (
    <div
      key={idx}
      className="flex flex-col justify-between bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all min-h-[220px]"
    >
      {/* Top content */}
      <div>
        {/* Title + Status */}
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-bold text-lg text-indigo-800">{item.name}</h3>
          <span
            className={`px-3 py-1 rounded-full text-xs font-medium ${
              item.status === "Uploaded"
                ? "bg-green-100 text-green-700"
                : "bg-yellow-100 text-yellow-700"
            }`}
          >
            {item.status}
          </span>
        </div>

        {/* PDF Link */}
        <div className="flex items-center mb-4 text-blue-600 hover:text-blue-800 transition">
          <FaFilePdf className="mr-2 text-xl" />
          <a href={item.link} download className="text-sm font-medium">
            Download Assignment
          </a>
        </div>
      </div>

      {/* Upload Button at bottom */}
      <div className="pt-2">
        <label className="inline-flex items-center bg-indigo-600 text-white px-4 py-2 rounded-md shadow hover:bg-indigo-700 cursor-pointer transition text-sm">
          <FaUpload className="mr-2" />
          Upload
          <input
            type="file"
            accept=".pdf"
            className="hidden"
            onChange={(e) => handleUpload(idx, e.target.files[0])}
          />
        </label>
      </div>
    </div>
  ))}
</div>

    </div>
  );
};

export default Assignment;
