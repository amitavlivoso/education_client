// src/pages/Teacher/ExamListPage.jsx

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaClock, FaQuestionCircle, FaPlay, FaSearch, FaBook, FaChartBar } from "react-icons/fa";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ExamListPage = () => {
  const [exams, setExams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCard, setActiveCard] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchExams() {
      try {
        const res = await axios.get("http://localhost:8080/api/teacher/getexam");
        setExams(res.data.exams || []);
      } catch (err) {
        console.error("Failed to fetch exams:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchExams();
  }, []);

  const handleStart = (examId) => {
    navigate(`/teacher/dashboard/exam/${examId}`);
  };

  // Filter exams based on search term
  const filteredExams = exams.filter(exam => 
    exam.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
    exam.chapter.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Card hover effect handler
  const handleCardHover = (examId) => {
    setActiveCard(examId);
  };

  // Card leave handler
  const handleCardLeave = () => {
    setActiveCard(null);
  };

  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto">
      <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Exam Dashboard</h1>
          <p className="text-gray-600 mt-2">
            Manage and conduct your exams efficiently
          </p>
        </div>
        
        <div className="relative w-full md:w-80">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <FaSearch className="text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search by subject or chapter..."
            className="w-full pl-10 pr-4 py-2.5 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 mb-8 flex flex-wrap items-center justify-between">
        <div className="flex items-center">
          <div className="bg-blue-100 p-3 rounded-lg mr-4">
            <FaBook className="text-blue-600 text-xl" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">Total Exams</h3>
            <p className="text-2xl font-bold">{exams.length}</p>
          </div>
        </div>
        <div className="flex items-center mt-4 md:mt-0">
          <div className="bg-indigo-100 p-3 rounded-lg mr-4">
            <FaChartBar className="text-indigo-600 text-xl" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">Active Now</h3>
            <p className="text-2xl font-bold">{exams.filter(e => e.status === 'active').length}</p>
          </div>
        </div>
        <button 
          className="mt-4 md:mt-0 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-xl font-medium shadow-md hover:shadow-lg transition-all"
          onClick={() => navigate('/teacher/dashboard/exam-upload')}
        >
          + Create New Exam
        </button>
      </div>

      <h2 className="text-2xl font-bold text-gray-800 mb-6">Available Exams</h2>

      {loading ? (
        <div className="space-y-6">
          {[...Array(5)].map((_, i) => (
            <div 
              key={i} 
              className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5"
            >
              <div className="flex flex-col md:flex-row">
                <div className="flex items-center mb-4 md:mb-0 md:w-1/4">
                  <Skeleton circle width={60} height={60} />
                  <div className="ml-4">
                    <Skeleton width={100} />
                    <Skeleton width={80} />
                  </div>
                </div>
                <div className="md:w-1/2 flex items-center">
                  <Skeleton width="80%" />
                </div>
                <div className="md:w-1/4 mt-4 md:mt-0 flex items-center justify-end">
                  <Skeleton width={120} height={40} />
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : filteredExams.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-2xl shadow-sm border border-gray-100">
          <div className="bg-gray-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto">
            <FaBook className="text-gray-400 text-3xl" />
          </div>
          <h3 className="text-xl font-semibold mt-4">No exams found</h3>
          <p className="text-gray-600 mt-2 max-w-md mx-auto">
            {searchTerm ? 
              `No exams match "${searchTerm}"` : 
              "Create your first exam to get started"
            }
          </p>
          <button 
            className="mt-6 px-6 py-2.5 bg-blue-600 text-white rounded-xl font-medium shadow-md hover:bg-blue-700 transition-all"
            onClick={() => navigate('/teacher/create-exam')}
          >
            Create Exam
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          {filteredExams.map((exam) => (
            <div
              key={exam.id}
              className={`bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden transition-all duration-300 ${
                activeCard === exam.id ? 'shadow-lg border-blue-300' : 'hover:shadow-md'
              }`}
              onMouseEnter={() => handleCardHover(exam.id)}
              onMouseLeave={handleCardLeave}
            >
              <div className="flex flex-col md:flex-row">
                {/* Left: Exam Icon and Basic Info */}
                <div className="flex items-center p-5 md:w-1/4 border-b md:border-b-0 md:border-r border-gray-100">
                  <div className="bg-blue-100 p-3 rounded-xl">
                    <FaBook className="text-blue-600 text-2xl" />
                  </div>
                  <div className="ml-4">
                    <span className="text-xs font-medium bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                      ID: {exam.id}
                    </span>
                    <h3 className="text-lg font-bold text-gray-800 mt-1.5">{exam.subject}</h3>
                    <p className="text-sm text-gray-600">{exam.chapter}</p>
                  </div>
                </div>
                
                {/* Middle: Exam Details */}
                <div className="p-5 md:w-1/2 border-b md:border-b-0 border-gray-100">
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center text-gray-600">
                      <FaQuestionCircle className="mr-2 text-blue-500" />
                      <span>{exam.total_count} Questions</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <FaClock className="mr-2 text-blue-500" />
                      <span>{exam.estimated_time} Minutes</span>
                    </div>
                    <div className="w-full mt-3">
                      <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full" 
                          style={{ width: `${Math.min(100, exam.total_count * 2)}%` }}
                        ></div>
                      </div>
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>Complexity</span>
                        <span>{Math.min(100, exam.total_count * 2)}%</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Right: Action Button */}
                <div className="p-5 md:w-1/4 flex items-center justify-center">
                  <button
                    onClick={() => handleStart(exam.id)}
                    className={`w-full md:w-auto px-6 py-2.5 rounded-xl font-medium flex items-center justify-center transition-all ${
                      activeCard === exam.id
                        ? 'bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-lg transform -translate-y-0.5'
                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                    }`}
                  >
                    <FaPlay className="mr-2 text-sm" />
                    Start Exam
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ExamListPage;