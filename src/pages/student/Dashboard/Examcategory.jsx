import React from "react";
import { FaCheckCircle, FaTimesCircle, FaListAlt } from "react-icons/fa";
import { FaEye } from "react-icons/fa";


const Examcategory = () => {
  const results = [
    {
      subject: "JEE",
      time: "3 hr",

    },
    {
      subject: "NEET",
      time: "2 hr",

    },
    {
      subject: "10th CBSE",
      time: "2 hr",
     
    },
  ];

  return (
    <div className="min-h-screen  py-12 px-4 sm:px-10">
      <h2 className="text-4xl font-extrabold text-center text-blue-700 mb-12 drop-shadow">
        📘 Your Exams
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {results.map((res, index) => (
          <div
            key={index}
            className="bg-white/60 backdrop-blur-md border border-blue-200 shadow-xl rounded-2xl p-6 hover:scale-[1.02] transition-all duration-300 ease-in-out"
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-blue-800">{res.subject}</h3>
              <span className="text-sm text-gray-700 bg-blue-100 px-2 py-0.5 rounded-full">
                🕒 {res.time}
              </span>
            </div>
                <a
                href="exam"
               
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800"
              >
                <FaEye size={20} />
              </a>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Examcategory;
