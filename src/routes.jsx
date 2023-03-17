import { createBrowserRouter, Navigate } from "react-router-dom";
import DriverList from "./pages/DriverList";
//Laayouts
import DashboardLayout from "./routes/dasboardLayout";

//pages
import App from "./pages/App.jsx";
import { Dashboard } from "./pages/Dashboard";
import LoginPage from "./pages/Login";

export default createBrowserRouter([
  {
    path: "/",
    element:
      localStorage.getItem(import.meta.env.VITE_REACT_APP_TOKEN) == null ? (
        <Navigate to={"/login"} />
      ) : (
        <DashboardLayout />
      ),
    children: [
     
      {
        path: "/",
        element: <Dashboard/>,
      },

      {
        path: "/driverList",
        element: <DriverList/>,
      },
    ],
  },
  {
    path: "/login",
    element:
      localStorage.getItem(import.meta.env.VITE_REACT_APP_TOKEN) == null ? (
        <LoginPage />
      ) : (
        <Navigate to={"/"} />
      ),
  },
]);
