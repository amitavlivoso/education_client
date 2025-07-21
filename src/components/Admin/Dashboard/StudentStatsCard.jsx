import {
  FaUserGraduate,
  FaClipboardList,
  FaExclamationTriangle,
  FaCheckCircle,
} from "react-icons/fa";
import { useState } from "react";
import StudentStatsChart from "./StudentStatsChart";

export default function StudentStatsCard() {
  const [range, setRange] = useState("Monthly");

  const stats = [
    {
      label: "Total Enrolled Students",
      value: "2,340",
      icon: <FaUserGraduate />,
      color: "text-blue-600",
    },
    {
      label: "Pending Assignments",
      value: "128",
      icon: <FaClipboardList />,
      color: "text-red-600",
    },
    {
      label: "Completed Exams",
      value: "520",
      icon: <FaCheckCircle />,
      color: "text-green-600",
    },
    {
      label: "Low Attendance Alerts",
      value: "15",
      icon: <FaExclamationTriangle />,
      color: "text-yellow-500",
    },
  ];

  return (
    <div className="bg-white rounded-lg p-4 shadow-xl w-full">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Student Statistics Overview</h3>
        <select
          className="border rounded px-2 py-1 text-sm"
          value={range}
          onChange={(e) => setRange(e.target.value)}
        >
          <option>Daily</option>
          <option>Weekly</option>
          <option>Monthly</option>
        </select>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
        {stats.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center p-3 rounded bg-gray-50 shadow-sm"
          >
            <div className={`${item.color} mr-3 text-lg`}>{item.icon}</div>
            <div>
              <div className="text-xs text-gray-500">{item.label}</div>
              <div className="font-semibold text-gray-800">{item.value}</div>
            </div>
          </div>
        ))}
      </div>
      <StudentStatsChart range={range} />
    </div>
  );
}
