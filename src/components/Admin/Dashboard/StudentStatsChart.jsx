import {
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
} from "recharts";

export default function StudentStatsChart({ range }) {
  const data = [
    { month: "Jan", enrolled: 320, assignments: 45, fees: 12 },
    { month: "Feb", enrolled: 300, assignments: 38, fees: 11 },
    { month: "Mar", enrolled: 350, assignments: 40, fees: 13 },
    { month: "Apr", enrolled: 370, assignments: 30, fees: 14 },
    { month: "May", enrolled: 390, assignments: 28, fees: 15 },
    { month: "Jun", enrolled: 310, assignments: 35, fees: 12 },
    { month: "Jul", enrolled: 330, assignments: 32, fees: 13 },
    { month: "Aug", enrolled: 360, assignments: 29, fees: 14 },
    { month: "Sep", enrolled: 400, assignments: 27, fees: 16 },
    { month: "Oct", enrolled: 410, assignments: 22, fees: 17 },
    { month: "Nov", enrolled: 395, assignments: 20, fees: 15 },
    { month: "Dec", enrolled: 380, assignments: 25, fees: 14 },
  ];

  return (
    <div className="bg-white rounded-lg shadow-xl p-4">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 5 }}
          barCategoryGap={12}
          barSize={8}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis dataKey="month" fontSize={12} stroke="#9ca3af" />
          <YAxis fontSize={12} stroke="#9ca3af" />
          <Tooltip contentStyle={{ fontSize: 12 }} />
          <Legend verticalAlign="top" height={36} />
          <Bar
            dataKey="enrolled"
            stackId="a"
            fill="#3b82f6"
            name="Enrolled Students"
          />
          <Bar
            dataKey="assignments"
            stackId="a"
            fill="#f59e0b"
            name="Pending Assignments"
          />
          <Bar
            dataKey="fees"
            stackId="a"
            fill="#10b981"
            name="Fees Collected (in $k)"
          />
        </BarChart>
      </ResponsiveContainer>

      <div className="flex justify-center mt-3 text-sm space-x-4">
        <div className="flex items-center space-x-1">
          <span className="w-3 h-3 rounded-full bg-blue-500 inline-block" />
          Enrolled Students
        </div>
        <div className="flex items-center space-x-1">
          <span className="w-3 h-3 rounded-full bg-yellow-500 inline-block" />
          Pending Assignments
        </div>
        <div className="flex items-center space-x-1">
          <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block" />
          Fees Collected (in $k)
        </div>
      </div>
    </div>
  );
}
