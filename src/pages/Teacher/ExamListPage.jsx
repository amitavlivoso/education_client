import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ExamListPage = () => {
  const [exams, setExams] = useState([]);
  const [filteredExams, setFilteredExams] = useState([]);
  const [selectedExamType, setSelectedExamType] = useState(null);
  const [activeCard, setActiveCard] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Simulating API call with delay to show loading state
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get('http://localhost:8080/api/teacher/getexam');
        if (response.data.success) {
          setExams(response.data.exams);
        }
      } catch (err) {
        console.error('Error fetching exams:', err);
      } finally {
        setIsLoading(false);
      }
    };

    setTimeout(fetchData, 1200); // Simulate network delay
  }, []);

  useEffect(() => {
    if (selectedExamType) {
      const filtered = exams.filter(exam => exam.selectedExamType === selectedExamType);
      setFilteredExams(filtered);
    }
  }, [selectedExamType, exams]);

  const handleStartExam = (examId) => {
    navigate(`/teacher/dashboard/exam/${examId}`);
  };

  const handleCardHover = (examId) => {
    setActiveCard(examId);
  };

  const handleCardLeave = () => {
    setActiveCard(null);
  };

  // Exam types with icons and colors
  const examTypes = [
    { id: '10th', name: '10th Board', icon: '📚', color: 'from-blue-500 to-indigo-600' },
    { id: 'JEE', name: 'JEE Advanced', icon: '🧪', color: 'from-purple-500 to-fuchsia-600' },
    { id: 'NEET', name: 'NEET', icon: '⚕️', color: 'from-green-500 to-emerald-600' }
  ];

  // Loading skeleton component
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-lg p-6 animate-pulse">
                <div className="h-8 bg-gray-200 rounded w-3/4 mx-auto mb-4"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 sm:p-6 md:p-8">
      <div className="max-w-6xl mx-auto">
        <header className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">Exams</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {selectedExamType 
              ? `Browse available ${selectedExamType} exams below` 
              : "Select an exam category to get started"}
          </p>
        </header>

        {!selectedExamType ? (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {examTypes.map((type) => (
              <div
                key={type.id}
                onClick={() => setSelectedExamType(type.id)}
                className={`bg-gradient-to-br ${type.color} rounded-2xl shadow-lg p-6 cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-xl text-white`}
              >
                <div className="text-4xl mb-3">{type.icon}</div>
                <h2 className="text-xl font-bold">{type.name}</h2>
                <p className="text-sm opacity-90 mt-2">
                  {type.id === '10th' && 'CBSE, ICSE & State Boards'}
                  {type.id === 'JEE' && 'Engineering Entrance Exam'}
                  {type.id === 'NEET' && 'Medical Entrance Exam'}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <>
            <div className="mb-8 flex items-center">
              <button
                onClick={() => setSelectedExamType(null)}
                className="flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                </svg>
                Back to Exam Types
              </button>
              <h2 className="text-2xl font-bold text-gray-800 ml-4">
                {examTypes.find(t => t.id === selectedExamType)?.name} Exams
              </h2>
            </div>
            
            {filteredExams.length === 0 ? (
              <div className="bg-white rounded-2xl shadow-md p-8 text-center">
                <div className="text-5xl mb-4">📝</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">No Exams Available</h3>
                <p className="text-gray-600 mb-4">There are no exams for this category yet.</p>
                <button
                  onClick={() => setSelectedExamType(null)}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Browse Other Categories
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredExams.map((exam) => (
                  <div
                    key={exam.id}
                    onMouseEnter={() => handleCardHover(exam.id)}
                    onMouseLeave={handleCardLeave}
                    className={`bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-300 ease-in-out ${
                      activeCard === exam.id ? 'shadow-xl scale-[1.02] ring-2 ring-blue-500' : 'hover:shadow-lg'
                    }`}
                  >
                    <div className="p-5 border-b border-gray-100">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-lg font-bold text-gray-800">{exam.subject}</h3>
                          <p className="text-sm text-gray-600">{exam.chapter}</p>
<p className="text-sm text-gray-600">
  {new Date(exam.createdAt).toLocaleString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  })}
</p>                        </div>
                        <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                          {exam.selectedExamType}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-5">
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                          </svg>
                          <div>
                            <p className="text-xs text-gray-500">Duration</p>
                            <p className="font-medium">{exam.estimated_time} min</p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                          </svg>
                          <div>
                            <p className="text-xs text-gray-500">Questions</p>
                            <p className="font-medium">{exam.total_count}</p>
                          </div>
                        </div>
                      </div>
                      
                      <button
                        onClick={() => handleStartExam(exam.id)}
                        className="w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-medium rounded-lg hover:from-blue-700 hover:to-indigo-800 transition-all transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                      >
                        Start Exam
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        )}
        
        <footer className="mt-12 pt-6 border-t border-gray-200 text-center text-gray-600 text-sm">
          <p>© 2023 Exam Management System. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default ExamListPage;