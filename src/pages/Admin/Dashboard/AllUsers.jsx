export default function AllStudentsTable() {
  const students = [
    {
      id: 1,
      name: "Rajesh Kumar",
      phone: "+91 98765 43210",
      address: "Mumbai, MH",
      completedTasks: 12,
      pendingTasks: 5,
      status: "Active",
    },
    {
      id: 2,
      name: "Anita Sharma",
      phone: "+91 91234 56789",
      address: "Delhi, DL",
      completedTasks: 8,
      pendingTasks: 7,
      status: "Due",
    },
    {
      id: 3,
      name: "Mohammed Ali",
      phone: "+91 99887 66554",
      address: "Bangalore, KA",
      completedTasks: 15,
      pendingTasks: 3,
      status: "Active",
    },
    {
      id: 4,
      name: "Priya Singh",
      phone: "+91 91122 33445",
      address: "Chennai, TN",
      completedTasks: 0,
      pendingTasks: 2,
      status: "Inactive",
    },
  ];

  const statusClasses = {
    Active: "bg-green-100 text-green-800 border border-green-300",
    Due: "bg-yellow-50 text-yellow-800 border border-yellow-300",
    Inactive: "bg-red-50 text-red-800 border border-red-300",
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      {/* Header with gradient */}
      <div className="flex justify-between items-center mb-6 pb-3">
        <h3 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
          All Students
        </h3>
        <button className="text-sm px-3 py-1 rounded-full bg-blue-50 text-blue-700 hover:bg-blue-100 transition">
          View All
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gradient-to-r from-blue-50 to-purple-50 text-gray-700">
            <tr>
              <th className="px-4 py-3 font-semibold">Student</th>
              <th className="px-4 py-3 font-semibold">Contact</th>
              <th className="px-4 py-3 font-semibold">Address</th>
              <th className="px-4 py-3 font-semibold">Performance</th>
              <th className="px-4 py-3 font-semibold">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {students.map((student) => (
              <tr
                key={student.id}
                className="hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition"
              >
                <td className="px-4 py-3 font-medium text-gray-800">
                  {student.name}
                </td>
                <td className="px-4 py-3 text-gray-600">{student.phone}</td>
                <td className="px-4 py-3 text-gray-600">{student.address}</td>
                <td className="px-4 py-3 text-gray-700 font-medium">
                  <span className="text-teal-600">
                    {student.completedTasks} Completed
                  </span>{" "}
                  /{" "}
                  <span className="text-orange-500">
                    {student.pendingTasks} Pending
                  </span>
                </td>
                <td className="px-4 py-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold shadow-sm ${
                      statusClasses[student.status] ||
                      "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {student.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
