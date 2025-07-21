import React from "react";
import { FaCheckCircle, FaTimesCircle, FaListAlt } from "react-icons/fa";

const Result = () => {
  const results = [
    {
      subject: "Mathematics",
      time: "09:30 AM",
      obtained: 42,
      total: 50,
      totalQ: 10,
      correct: 8,
      wrong: 2,
    },
    {
      subject: "Science",
      time: "11:00 AM",
      obtained: 45,
      total: 50,
      totalQ: 10,
      correct: 9,
      wrong: 1,
    },
    {
      subject: "English",
      time: "01:15 PM",
      obtained: 40,
      total: 50,
      totalQ: 10,
      correct: 7,
      wrong: 3,
    },
  ];

  return (
    <div className="min-h-screen  py-12 px-4 sm:px-10">
      <h2 className="text-4xl font-extrabold text-center text-blue-700 mb-12 drop-shadow">
        📘 Your Exam Results
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

            {/* Score */}
            <div className="text-center mb-6">
              <h4 className="text-3xl font-extrabold text-indigo-600 drop-shadow">
                {res.obtained}/{res.total}
              </h4>
              <p className="text-sm text-gray-600 mt-1">Marks Obtained</p>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 text-center gap-3">
              <div className="bg-gray-100 p-3 rounded-lg shadow-inner">
                <FaListAlt className="mx-auto text-gray-600 text-xl mb-1" />
                <p className="text-sm text-gray-600">Total</p>
                <p className="font-semibold">{res.totalQ}</p>
              </div>
              <div className="bg-green-100 p-3 rounded-lg shadow-inner">
                <FaCheckCircle className="mx-auto text-green-600 text-xl mb-1" />
                <p className="text-sm text-green-700">Correct</p>
                <p className="font-semibold">{res.correct}</p>
              </div>
              <div className="bg-red-100 p-3 rounded-lg shadow-inner">
                <FaTimesCircle className="mx-auto text-red-600 text-xl mb-1" />
                <p className="text-sm text-red-700">Wrong</p>
                <p className="font-semibold">{res.wrong}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Result;
