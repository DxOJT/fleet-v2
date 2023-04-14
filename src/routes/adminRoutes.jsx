// pages
import Dashboard from "../pages/admin/dashboard";
import DriverList from "../pages/admin/employee/driver";
import AddDriver from "../pages/admin/employee/addDriver";

export default [
  {
    path: "/admin",
    element: <Dashboard />,
  },
  {
    path: "/admin/driver-list",
    element: <DriverList />,
  },
  {
    path: "/admin/add-driver",
    element: <AddDriver />,
  },
];
