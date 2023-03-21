
import { Dashboard } from "../pages/Dashboard";
import DriverList from "../pages/DriverList";
import Gatekeeper from "../pages/GateKeeper";

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
        path: "/admin/gatekeeper",
        element: <Gatekeeper />,
    },
];