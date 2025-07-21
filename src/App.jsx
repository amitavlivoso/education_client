import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import AllUser from "./pages/Admin/AllUser";
import RoleLayout from "./components/Shared/RoleLayout";
import AddUserForm from "./pages/Admin/AddUser";
import DeActivated from "./pages/Admin/Deactivated";
import DashboardSwitch from "./pages/Dashboard";
import Layout from "./components/student/shared/Layout";
import Home from "./pages/student/Home";

import StudentSignup from "./pages/student/StudentSignup";

import Exam from "./pages/student/Dashboard/Exam";

import Thankyou from "./pages/student/Dashboard/Thankyou";

import Studymaterial from "./pages/student/Dashboard/Studymaterial";

import Result from "./pages/student/Dashboard/Result";

import Assignment from "./pages/student/Dashboard/Assignment";

import TeacherSignUp from "./components/Teacher/TeacherSignUp";

import ExamUpload from "./components/Teacher/ExamManage/ExamUpload";

import AllExamsWithQuestions from "./components/Teacher/ExamManage/AllExamsWithQuestions";

import AllNotesPage from "./components/Teacher/ContentManage/AllNotesPage";

import Uploadpdf from "./components/Teacher/ContentManage/Uploadpdf";

import StudentPerformanceReport from "./components/Teacher/PerformanceReport/StudentReport";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<TeacherSignUp />} />
          </Route>
          <Route path="/:role/dashboard" element={<RoleLayout />}>
            <Route index element={<DashboardSwitch />} />
            <Route path="user" element={<AllUser />} />
            <Route path="add-user" element={<AddUserForm />} />
            <Route path="deactive-user" element={<DeActivated />} />

            {/* Student  */}
            <Route path="exam" element={<Exam />} />
            <Route path="thankyou" element={<Thankyou />} />
            <Route path="studymaterial" element={<Studymaterial />} />
            <Route path="result" element={<Result />} />
            <Route path="assignment" element={<Assignment />} />

            {/* Teacher */}

            <Route path="upload-pdf" element={<Uploadpdf />} />
            <Route path="exam-upload" element={<ExamUpload />} />
            <Route path="all-exams" element={<AllExamsWithQuestions />} />
            <Route path="all-notes" element={<AllNotesPage />} />
            <Route
              path="student-performance-report"
              element={<StudentPerformanceReport />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
