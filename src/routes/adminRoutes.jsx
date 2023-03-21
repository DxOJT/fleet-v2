import { Dashboard } from "../pages/Dashboard";
import DriverList from "../pages/DriverList";

export default [
  {
    path: "/admin",
    element: <Dashboard />,
  },
  {
    path: "/admin/driver-list",
    element: <DriverList />,
  },
];
