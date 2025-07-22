import React from "react";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, LineChart, Line
} from "recharts";
import { FaBookOpen, FaClipboardCheck, FaChartLine, FaUserGraduate } from "react-icons/fa";

const StudentDashboard = () => {
  const barData = [
    { subject: "Math", marks: 88 },
    { subject: "Science", marks: 75 },
    { subject: "English", marks: 92 },
    { subject: "History", marks: 66 },
  ];

  const pieData = [
    { name: "Correct", value: 72 },
    { name: "Wrong", value: 18 },
    { name: "Skipped", value: 10 },
  ];

  const COLORS = ["#10B981", "#EF4444", "#F59E0B"];

  const lineData = [
    { name: "Jan", marks: 70 },
    { name: "Feb", marks: 82 },
    { name: "Mar", marks: 76 },
    { name: "Apr", marks: 90 },
    { name: "May", marks: 88 },
  ];

  const tableData = [
    { subject: "Math", obtained: 88, total: 100, status: "Passed" },
    { subject: "Science", obtained: 75, total: 100, status: "Passed" },
    { subject: "History", obtained: 50, total: 100, status: "Failed" },
    { subject: "English", obtained: 92, total: 100, status: "Passed" },
  ];

  return (
    <div className="w-full  sm:px-2 lg:px-8 py-6 space-y-10">
      <h1 className="text-2xl sm:text-3xl font-bold text-indigo-700 text-center">
        🎓 Student Dashboard
      </h1>

      {/* Top Cards */}
     <div className="">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-2">
    
    {/* Card 1 */}
    <div className="max-w-xs w-full p-4 bg-gradient-to-r from-purple-400 to-purple-600 text-white rounded-xl shadow-md flex items-center gap-4"  style={{ maxWidth: "300px" }}>
      <FaBookOpen className="text-2xl sm:text-3xl" />
      <div>
        <p className="text-sm">Subjects</p>
        <h3 className="text-lg sm:text-xl font-bold">5</h3>
      </div>
    </div>

    {/* Card 2 */}
    <div className="max-w-xs w-full  p-4 bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-xl shadow-md flex items-center gap-4"  style={{ maxWidth: "300px" }}>
      <FaClipboardCheck className="text-2xl sm:text-3xl" />
      <div>
        <p className="text-sm">Assignments</p>
        <h3 className="text-lg sm:text-xl font-bold">12</h3>
      </div>
    </div>

    {/* Card 3 */}
    <div className="max-w-xs w-full  p-4 bg-gradient-to-r from-green-400 to-green-600 text-white rounded-xl shadow-md flex items-center gap-4"  style={{ maxWidth: "300px" }}>
      <FaChartLine className="text-2xl sm:text-3xl" />
      <div>
        <p className="text-sm">Average Score</p>
        <h3 className="text-lg sm:text-xl font-bold">82%</h3>
      </div>
    </div>

    {/* Card 4 */}
    <div className="max-w-xs w-full  p-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white rounded-xl shadow-md flex items-center gap-4"  style={{ maxWidth: "300px" }}>
      <FaUserGraduate className="text-2xl sm:text-3xl" />
      <div>
        <p className="text-sm">Rank</p>
        <h3 className="text-lg sm:text-xl font-bold">#4</h3>
      </div>
    </div>
    
  </div>
</div>


      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-2">
        {/* Bar Chart */}
        <div className="bg-white rounded-xl shadow p-4">
          <h2 className="text-base sm:text-lg font-semibold text-gray-700 mb-2">Subject-wise Performance</h2>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={barData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="subject" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="marks" fill="#4F46E5" barSize={25} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart */}
        <div className="bg-white rounded-xl shadow p-4">
          <h2 className="text-base sm:text-lg font-semibold text-gray-700 mb-2">Answer Stats</h2>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                outerRadius={70}
                dataKey="value"
                label
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Line Chart */}
        <div className="bg-white rounded-xl shadow p-4">
          <h2 className="text-base sm:text-lg font-semibold text-gray-700 mb-2">Monthly Progress</h2>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={lineData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <CartesianGrid strokeDasharray="3 3" />
              <Line type="monotone" dataKey="marks" stroke="#10B981" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow p-4 sm:p-6 max-w-7xl mx-auto">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-700 mb-4">Subject Report</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-600">
            <thead className="bg-indigo-100 text-indigo-700">
              <tr>
                <th className="py-2 px-4">Subject</th>
                <th className="py-2 px-4">Obtained</th>
                <th className="py-2 px-4">Total</th>
                <th className="py-2 px-4">Status</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((item, idx) => (
                <tr key={idx} className="hover:bg-indigo-50">
                  <td className="py-2 px-4 font-medium">{item.subject}</td>
                  <td className="py-2 px-4">{item.obtained}</td>
                  <td className="py-2 px-4">{item.total}</td>
                  <td className={`py-2 px-4 font-semibold ${item.status === "Passed" ? "text-green-600" : "text-red-500"}`}>
                    {item.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
