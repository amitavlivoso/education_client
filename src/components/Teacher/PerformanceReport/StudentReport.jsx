import React, { useState } from "react";

// Dummy exam performance data
const examReport = {
  subject: "Physics",
  chapter: "Motion",
  totalQuestions: 10,
  examDate: "2025-07-20",
  students: [
    {
      id: "s1",
      name: "Ankit Verma",
      correctAnswers: 8,
      attempted: 10,
    },
    {
      id: "s2",
      name: "Neha Sharma",
      correctAnswers: 4,
      attempted: 9,
    },
    {
      id: "s3",
      name: "Raj Singh",
      correctAnswers: 10,
      attempted: 10,
    },
    {
      id: "s4",
      name: "Aisha Patel",
      correctAnswers: 6,
      attempted: 10,
    },
    {
      id: "s5",
      name: "Sandeep Kumar",
      correctAnswers: 7,
      attempted: 10,
    },
    {
      id: "s6",
      name: "Priya Desai",
      correctAnswers: 9,
      attempted: 10,
    },
    {
      id: "s7",
      name: "Vikram Joshi",
      correctAnswers: 5,
      attempted: 9,
    },
    {
      id: "s8",
      name: "Meera Reddy",
      correctAnswers: 8,
      attempted: 10,
    },
  ],
};

// Function to calculate class statistics
const calculateStats = (students, totalQuestions) => {
  const totalStudents = students.length;
  const totalCorrect = students.reduce((sum, student) => sum + student.correctAnswers, 0);
  const totalAttempted = students.reduce((sum, student) => sum + student.attempted, 0);
  
  const averageScore = ((totalCorrect / (totalStudents * totalQuestions)) * 100).toFixed(1);
  const passCount = students.filter(student => 
    ((student.correctAnswers / totalQuestions) * 100) >= 50
  ).length;
  
  const passPercentage = ((passCount / totalStudents) * 100).toFixed(0);
  
  return {
    totalStudents,
    averageScore,
    passPercentage,
    passCount,
    failCount: totalStudents - passCount
  };
};

// Function to generate performance distribution
const getPerformanceDistribution = (students, totalQuestions) => {
  const distribution = {
    excellent: 0, // 90-100%
    good: 0,      // 70-89%
    average: 0,   // 50-69%
    poor: 0       // 0-49%
  };
  
  students.forEach(student => {
    const percentage = (student.correctAnswers / totalQuestions) * 100;
    if (percentage >= 90) distribution.excellent++;
    else if (percentage >= 70) distribution.good++;
    else if (percentage >= 50) distribution.average++;
    else distribution.poor++;
  });
  
  return distribution;
};

// Progress bar component for visual representation
const ProgressBar = ({ percentage, color }) => (
  <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
    <div 
      className={`h-full rounded-full ${color}`}
      style={{ width: `${percentage}%` }}
    />
  </div>
);

// Donut chart component
const DonutChart = ({ data, colors }) => {
  const total = Object.values(data).reduce((sum, value) => sum + value, 0);
  let startAngle = 0;
  
  return (
    <svg width="160" height="160" viewBox="0 0 160 160">
      <circle cx="80" cy="80" r="70" fill="none" stroke="#f3f4f6" strokeWidth="20" />
      {Object.entries(data).map(([key, value], index) => {
        if (value === 0) return null;
        
        const percentage = (value / total) * 100;
        const angle = (percentage / 100) * 360;
        const endAngle = startAngle + angle;
        
        // Convert angles to radians
        const startRad = (startAngle - 90) * Math.PI / 180;
        const endRad = (endAngle - 90) * Math.PI / 180;
        
        // Calculate coordinates
        const x1 = 80 + 70 * Math.cos(startRad);
        const y1 = 80 + 70 * Math.sin(startRad);
        const x2 = 80 + 70 * Math.cos(endRad);
        const y2 = 80 + 70 * Math.sin(endRad);
        
        // Large arc flag (1 if angle >= 180, 0 otherwise)
        const largeArcFlag = angle > 180 ? 1 : 0;
        
        const pathData = [
          `M ${x1} ${y1}`,
          `A 70 70 0 ${largeArcFlag} 1 ${x2} ${y2}`,
        ].join(" ");
        
        startAngle = endAngle;
        
        return (
          <path 
            key={key}
            d={pathData}
            fill="none"
            stroke={colors[index]}
            strokeWidth="20"
            strokeLinecap="round"
          />
        );
      })}
      <text 
        x="80" 
        y="80" 
        textAnchor="middle" 
        dominantBaseline="middle" 
        className="text-lg font-bold"
      >
        {total}
      </text>
    </svg>
  );
};

// Bar chart component
const BarChart = ({ data, labels, colors }) => {
  const maxValue = Math.max(...data);
  
  return (
    <div className="flex items-end h-48 gap-2 mt-6 border-b border-l border-gray-200 pb-4 pl-4">
      {data.map((value, index) => (
        <div key={index} className="flex flex-col items-center flex-1">
          <div className="text-center text-xs mb-1 text-gray-600">{labels[index]}</div>
          <div 
            className={`w-full rounded-t-md ${colors[index]} transition-all duration-500`}
            style={{ height: `${(value / maxValue) * 100}%` }}
          />
          <div className="mt-1 text-sm font-medium">{value}</div>
        </div>
      ))}
    </div>
  );
};

export default function StudentPerformanceReport() {
  const [activeTab, setActiveTab] = useState('overview');
  const stats = calculateStats(examReport.students, examReport.totalQuestions);
  const performanceDistribution = getPerformanceDistribution(examReport.students, examReport.totalQuestions);
  
  const performanceColors = {
    excellent: "bg-emerald-500",
    good: "bg-blue-500",
    average: "bg-amber-500",
    poor: "bg-rose-500"
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
              📊 Student Performance Report
            </h1>
            <p className="text-gray-600 mt-2">
              Detailed analysis of student performance in the latest examination
            </p>
          </div>
          <div className="mt-4 md:mt-0 bg-white rounded-xl shadow-sm p-4">
            <p className="text-gray-500 text-sm">Exam Date</p>
            <p className="font-semibold">{examReport.examDate}</p>
          </div>
        </div>
        
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-center">
              <div className="p-3 bg-indigo-100 rounded-lg">
                <span className="text-indigo-600 text-xl">👥</span>
              </div>
              <div className="ml-4">
                <h3 className="text-gray-500 text-sm">Total Students</h3>
                <p className="text-2xl font-bold">{stats.totalStudents}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-center">
              <div className="p-3 bg-emerald-100 rounded-lg">
                <span className="text-emerald-600 text-xl">📈</span>
              </div>
              <div className="ml-4">
                <h3 className="text-gray-500 text-sm">Average Score</h3>
                <p className="text-2xl font-bold">{stats.averageScore}%</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-center">
              <div className="p-3 bg-amber-100 rounded-lg">
                <span className="text-amber-600 text-xl">✅</span>
              </div>
              <div className="ml-4">
                <h3 className="text-gray-500 text-sm">Pass Rate</h3>
                <p className="text-2xl font-bold">{stats.passPercentage}%</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-center">
              <div className="p-3 bg-rose-100 rounded-lg">
                <span className="text-rose-600 text-xl">📚</span>
              </div>
              <div className="ml-4">
                <h3 className="text-gray-500 text-sm">Subject</h3>
                <p className="text-xl font-bold">{examReport.subject}</p>
                <p className="text-gray-500">{examReport.chapter}</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Tabs */}
        <div className="flex border-b border-gray-200 mb-8">
          <button 
            className={`px-4 py-3 font-medium text-sm rounded-t-lg transition-colors ${
              activeTab === 'overview' 
                ? 'text-indigo-600 border-b-2 border-indigo-600 bg-indigo-50' 
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('overview')}
          >
            Overview
          </button>
          <button 
            className={`px-4 py-3 font-medium text-sm rounded-t-lg transition-colors ${
              activeTab === 'detailed' 
                ? 'text-indigo-600 border-b-2 border-indigo-600 bg-indigo-50' 
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('detailed')}
          >
            Detailed Report
          </button>
          <button 
            className={`px-4 py-3 font-medium text-sm rounded-t-lg transition-colors ${
              activeTab === 'analysis' 
                ? 'text-indigo-600 border-b-2 border-indigo-600 bg-indigo-50' 
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('analysis')}
          >
            Performance Analysis
          </button>
        </div>
        
        {/* Tab Content */}
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Pass/Fail Distribution */}
            <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100 lg:col-span-1">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Pass/Fail Distribution</h2>
              <div className="flex justify-center">
                <DonutChart 
                  data={{ Pass: stats.passCount, Fail: stats.failCount }} 
                  colors={["#10b981", "#ef4444"]} 
                />
              </div>
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-emerald-500 rounded-full mr-2"></div>
                  <span>Pass: {stats.passCount}</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-rose-500 rounded-full mr-2"></div>
                  <span>Fail: {stats.failCount}</span>
                </div>
              </div>
            </div>
            
            {/* Performance Distribution */}
            <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100 lg:col-span-2">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Performance Distribution</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.entries(performanceDistribution).map(([category, count], index) => (
                  <div key={category} className="flex items-center">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center mr-4 bg-gray-100">
                      <span className="text-lg">
                        {category === 'excellent' ? '🌟' : 
                         category === 'good' ? '👍' : 
                         category === 'average' ? '📊' : '⚠️'}
                      </span>
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between mb-1">
                        <span className="capitalize font-medium">{category}</span>
                        <span className="font-bold">{count} students</span>
                      </div>
                      <ProgressBar 
                        percentage={(count / stats.totalStudents) * 100} 
                        color={performanceColors[category]} 
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Top Performers */}
            <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100 lg:col-span-3">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Top Performers</h2>
              <div className="flex flex-wrap gap-6">
                {[...examReport.students]
                  .sort((a, b) => b.correctAnswers - a.correctAnswers)
                  .slice(0, 3)
                  .map((student, index) => {
                    const score = ((student.correctAnswers / examReport.totalQuestions) * 100).toFixed(1);
                    return (
                      <div key={student.id} className="flex-1 min-w-[200px] bg-gradient-to-r from-indigo-50 to-purple-50 p-4 rounded-xl">
                        <div className="flex items-center">
                          <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm mr-4">
                            <span className="text-xl">
                              {index === 0 ? '🥇' : index === 1 ? '🥈' : '🥉'}
                            </span>
                          </div>
                          <div>
                            <h3 className="font-bold">{student.name}</h3>
                            <div className="flex items-center mt-1">
                              <span className={`px-2 py-1 text-xs font-bold rounded ${
                                score >= 50 ? "bg-emerald-100 text-emerald-800" : "bg-rose-100 text-rose-800"
                              }`}>
                                Score: {score}%
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="mt-4">
                          <div className="flex justify-between text-sm mb-1">
                            <span>Correct Answers</span>
                            <span className="font-medium">{student.correctAnswers}/{examReport.totalQuestions}</span>
                          </div>
                          <ProgressBar 
                            percentage={score} 
                            color={score >= 80 ? "bg-emerald-500" : score >= 50 ? "bg-amber-500" : "bg-rose-500"} 
                          />
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'detailed' && (
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100">
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Detailed Student Performance</h2>
              
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">#</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student Name</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Correct</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Attempted</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Score (%)</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Performance</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {examReport.students.map((student, idx) => {
                      const score = ((student.correctAnswers / examReport.totalQuestions) * 100).toFixed(1);
                      const passed = score >= 50;
                      
                      return (
                        <tr key={student.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{idx + 1}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">{student.name}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm">{student.correctAnswers}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm">{student.attempted}</td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-3 py-1 rounded-full text-white text-xs font-semibold ${
                              score >= 80
                                ? "bg-emerald-500"
                                : score >= 50
                                ? "bg-amber-500"
                                : "bg-rose-500"
                            }`}>
                              {score}%
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span
                              className={`px-2 py-1 text-xs font-semibold rounded ${
                                passed ? "bg-emerald-100 text-emerald-800" : "bg-rose-100 text-rose-800"
                              }`}
                            >
                              {passed ? "Pass" : "Fail"}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="w-32">
                              <ProgressBar 
                                percentage={score} 
                                color={
                                  score >= 80
                                    ? "bg-emerald-500"
                                    : score >= 50
                                    ? "bg-amber-500"
                                    : "bg-rose-500"
                                } 
                              />
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'analysis' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Score Distribution</h2>
              <BarChart 
                data={Object.values(performanceDistribution)}
                labels={["Excellent (90-100%)", "Good (70-89%)", "Average (50-69%)", "Poor (0-49%)"]}
                colors={["bg-emerald-500", "bg-blue-500", "bg-amber-500", "bg-rose-500"]}
              />
            </div>
            
            <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Performance Insights</h2>
              <div className="space-y-6">
                <div className="p-4 bg-indigo-50 rounded-lg">
                  <h3 className="font-medium text-indigo-800 mb-2">Class Average: {stats.averageScore}%</h3>
                  <p className="text-sm text-gray-600">
                    The class average is {stats.averageScore >= 70 ? 'above' : 'below'} the 70% benchmark. 
                    {stats.averageScore >= 70 ? ' Excellent performance overall!' : ' Consider reviewing challenging topics.'}
                  </p>
                </div>
                
                <div className="p-4 bg-amber-50 rounded-lg">
                  <h3 className="font-medium text-amber-800 mb-2">Attention Needed</h3>
                  <p className="text-sm text-gray-600">
                    {performanceDistribution.poor} student(s) scored below 50%. Consider additional support or remedial classes for these students.
                  </p>
                </div>
                
                <div className="p-4 bg-emerald-50 rounded-lg">
                  <h3 className="font-medium text-emerald-800 mb-2">Topical Mastery</h3>
                  <p className="text-sm text-gray-600">
                    {performanceDistribution.excellent} student(s) demonstrated excellent understanding of the material. 
                    They could be paired with struggling students for peer learning.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100 lg:col-span-2">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Recommendations</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl">
                  <div className="text-blue-600 text-xl mb-2">📝</div>
                  <h3 className="font-medium mb-1">Review Sessions</h3>
                  <p className="text-sm text-gray-600">
                    Schedule review sessions for topics where most students struggled.
                  </p>
                </div>
                
                <div className="p-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl">
                  <div className="text-amber-600 text-xl mb-2">👥</div>
                  <h3 className="font-medium mb-1">Peer Learning</h3>
                  <p className="text-sm text-gray-600">
                    Pair top performers with struggling students for study groups.
                  </p>
                </div>
                
                <div className="p-4 bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl">
                  <div className="text-emerald-600 text-xl mb-2">🔍</div>
                  <h3 className="font-medium mb-1">Detailed Feedback</h3>
                  <p className="text-sm text-gray-600">
                    Provide personalized feedback on incorrect answers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}