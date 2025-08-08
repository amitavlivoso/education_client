import React, { use } from "react";
import { FaCheckCircle, FaTimesCircle, FaListAlt } from "react-icons/fa";
import { getUserId } from "../../../services/axiosClient";
import { BiTrophy } from "react-icons/bi";
import { useState, useEffect } from "react";

const Result = () => {
  const [results, setResults] = useState([]);
  const userId = getUserId();
  useEffect(() => {
    async function fetchResults() {
      try {
        const response = await fetch(`http://localhost:8080/api/student/getresults/${userId}`);
        const data = await response.json();
        setResults(data.results || []); // Adjust according to your API response structure
        console.log("Fetched results:", data.results);
      } catch (error) {
        console.error("Error fetching results:", error);
        setResults([]);
      }
    }
    fetchResults();
  }, []);



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
                🕒 {new Date(res.createdAt).toLocaleDateString('en-GB')}
              </span>
            </div>

            {/* Score */}
            <div className="text-center mb-6">
              <h4 className="text-3xl font-extrabold text-indigo-600 drop-shadow">
                {res.correct}/{res.total}
              </h4>
              <p className="text-sm text-gray-600 mt-1">Marks Obtained</p>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 text-center gap-3">
              <div className="bg-gray-100 p-3 rounded-lg shadow-inner">
                <FaListAlt className="mx-auto text-gray-600 text-xl mb-1" />
                <p className="text-sm text-gray-600">Total</p>
                <p className="font-semibold">{res.total}</p>
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
