import { useParams, Navigate, Outlet } from "react-router-dom";
import Layout from "../Admin/shared/Layout";

const allowedLayouts = {
  admin: Layout,
  teacher: Layout,
  student: Layout,
};

const RoleLayout = () => {
  const { role } = useParams();
  const roleKey = role?.toLowerCase();

  const LayoutComponent = allowedLayouts[roleKey];
  if (!LayoutComponent) {
    return <Navigate to="/login" replace />;
  }

  return (
    <LayoutComponent>
      <Outlet />
    </LayoutComponent>
  );
};

export default RoleLayout;
