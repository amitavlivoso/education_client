import StatCard from "../../../components/Admin/Dashboard/StatCard";
import {
  FaUserGraduate,
  FaChalkboardTeacher,
  FaClipboardList,
  FaUserCheck,
} from "react-icons/fa";
import StudentStatsCard from "../../../components/Admin/Dashboard/StudentStatsCard";

export default function Dashboard() {
  const stats = [
    {
      icon: <FaUserGraduate className="text-white" />,
      label: "Total Students",
      value: "1,240",
      percentage: 6,
      isIncrease: true,
      chart: "rgba(79, 70, 229, 1)",
    },
    {
      icon: <FaChalkboardTeacher className="text-white" />,
      label: "Classes Held Today",
      value: "38",
      percentage: 4,
      isIncrease: true,
      chart: "rgba(37, 99, 235, 1)",
    },
    {
      icon: <FaClipboardList className="text-white" />,
      label: "Pending Assignments",
      value: "67",
      percentage: 10,
      isIncrease: false,
      chart: "rgba(220, 38, 38, 1)",
    },
    {
      icon: <FaUserCheck className="text-white" />,
      label: "Today's Attendance",
      value: "89%",
      percentage: 3,
      isIncrease: true,
      chart: "rgba(22, 163, 74, 1)",
    },
  ];

  return (
    <div className="mx-auto w-full md:w-full">
      <h2 className="text-xl font-semibold mb-4">Education Dashboard</h2>

      <div className="flex flex-wrap justify-center gap-4">
        {stats.map((item, idx) => (
          <StatCard key={idx} {...item} />
        ))}
      </div>

      <div className="mt-10">
        <StudentStatsCard />
      </div>
      {/* <div className="mt-10">
        <AllUsersTable />
      </div>
      <div className="mt-10">
        <DashboardCards />
      </div> */}
    </div>
  );
}
