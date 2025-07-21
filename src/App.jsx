import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Admin/Dashboard/Dashboard";
import AllUser from "./pages/Admin/AllUser";
import RoleLayout from "./components/Shared/RoleLayout";
import AddUserForm from "./pages/Admin/AddUser";
import DeActivated from "./pages/Admin/Deactivated";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/:role/dashboard" element={<RoleLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="user" element={<AllUser />} />
            <Route path="add-user" element={<AddUserForm />} />
            <Route path="deactive-user" element={<DeActivated />} />
             
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
