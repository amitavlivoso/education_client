import { useParams } from "react-router-dom";
import AdminDashboard from "./Admin/Dashboard/Dashboard";
import TeacherDashboard from "./Admin/Dashboard/Dashboard";
import StudentDashboard from "./student/Dashboard/Dashboard";

export default function DashboardSwitch() {
  const { role } = useParams();
  console.log(role);

  switch (role) {
    case "admin":
      return <AdminDashboard />;
    case "teacher":
      return <TeacherDashboard />;
    case "student":
      return <StudentDashboard />;
    default:
      return <div className="p-4 text-red-600">Invalid role: {role}</div>;
  }
}
