import { useEffect, useState } from "react";
import {
  FaUserGraduate,
  FaChalkboardTeacher,
  FaClipboardList,
  FaUserCheck,
} from "react-icons/fa";
import { getAllUserByCond } from "../../../services/service";
import StatCard from "../../../components/Admin/Dashboard/StatCard";
import StudentStatsCard from "../../../components/Admin/Dashboard/StudentStatsCard";
import AllUsersTable from "./AllUsers";
import DashboardCards from "../../../components/Admin/Dashboard/DashboardCard";

export default function Dashboard() {
  const [students, setStudents] = useState([]);
  const [teachers, setTeachers] = useState([]);

  const [studentStats, setStudentStats] = useState({
    total: 0,
    currentWeek: 0,
    previousWeek: 0,
    percentage: 0,
    isIncrease: true,
  });

  const [teacherStats, setTeacherStats] = useState({
    total: 0,
    currentWeek: 0,
    previousWeek: 0,
    percentage: 0,
    isIncrease: true,
  });

  useEffect(() => {
    const now = new Date();
    const oneWeekAgo = new Date(now);
    oneWeekAgo.setDate(now.getDate() - 7);

    const twoWeeksAgo = new Date(now);
    twoWeeksAgo.setDate(now.getDate() - 14);

    const calculateStats = (data) => {
      const currentWeek = data.filter(
        (user) => new Date(user.createdAt) > oneWeekAgo
      ).length;
      const previousWeek = data.filter(
        (user) =>
          new Date(user.createdAt) > twoWeeksAgo &&
          new Date(user.createdAt) <= oneWeekAgo
      ).length;

      let percentage = 0;
      let isIncrease = true;

      if (previousWeek === 0 && currentWeek > 0) {
        percentage = 100;
      } else if (previousWeek === 0 && currentWeek === 0) {
        percentage = 0;
      } else {
        const change = ((currentWeek - previousWeek) / previousWeek) * 100;
        percentage = Math.abs(change.toFixed(2));
        isIncrease = change >= 0;
      }

      return {
        total: data.length,
        currentWeek,
        previousWeek,
        percentage,
        isIncrease,
      };
    };

    const fetchData = async (role, setData, setStats) => {
      const payload = {
        role,
        page: 1,
        limit: 1000,
      };

      try {
        const res = await getAllUserByCond(payload);
        const users = res?.data?.users || [];
        setData(users);
        const stats = calculateStats(users);
        setStats(stats);
      } catch (err) {
        console.error(`Error fetching ${role}s:`, err);
      }
    };

    fetchData("student", setStudents, setStudentStats);
    fetchData("teacher", setTeachers, setTeacherStats);
  }, []);

  const stats = [
    {
      icon: <FaUserGraduate className="text-white" />,
      label: "Total Students",
      value: studentStats.total,
      percentage: studentStats.percentage,
      isIncrease: studentStats.isIncrease,
      chart: "rgba(79, 70, 229, 1)",
    },
    {
      icon: <FaChalkboardTeacher className="text-white" />,
      label: "Active Teachers",
      value: teacherStats.total,
      percentage: teacherStats.percentage,
      isIncrease: teacherStats.isIncrease,
      chart: "rgba(37, 99, 235, 1)",
    },
    {
      icon: <FaClipboardList className="text-white" />,
      label: "Exam Given",
      value: "67",
      percentage: 10,
      isIncrease: true,
      chart: "rgba(220, 38, 38, 1)",
    },
    {
      icon: <FaUserCheck className="text-white" />,
      label: "Average Attendance Today",
      value: "89%",
      percentage: 3,
      isIncrease: true,
      chart: "rgba(22, 163, 74, 1)",
    },
  ];

  return (
    <div className="mx-auto p-4 w-full md:w-full">
      <h2 className="text-xl font-semibold mb-4">Education Dashboard</h2>

      <div className="w-full gap-2 flex flex-wrap justify-center">
        {stats.map((item, idx) => (
          <StatCard key={idx} {...item} />
        ))}
      </div>

      <div className="mt-10">
        <StudentStatsCard />
      </div>

      <div className="mt-10 hidden md:block">
        <AllUsersTable />
      </div>

      <div className="mt-10">
        <DashboardCards />
      </div>
    </div>
  );
}
