// pages
import Dashboard from "../pages/admin/dashboard";
import DriverList from "../pages/admin/employee/driver";
import GatekeeperList from "../pages/admin/employee/gatekeeper";
import AddDriver from "../pages/admin/employee/addDriver";
import DriverViewDetails from "../pages/admin/employee/driverViewDetails";
import AddGatekeeper from "../pages/admin/employee/addGatekeeper";
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
    path: "/admin/gatekeeper-list",
    element: <GatekeeperList />,
  },

  {
    path: "/admin/add-gatekeeper",
    element: <AddGatekeeper />,
  },
  {
    path: "/admin/add-driver",
    element: <AddDriver />,
  },
  {
    path: "/admin/driver-view-details",
    element: <DriverViewDetails />,
  },
];
