import { createBrowserRouter, useRouteError } from "react-router-dom";

//route protect
import { ProtectedLayout, HomeLayout } from "./utils/routeGuard";
import { RoleGuardLayout } from "./utils/roleGuard";

//Layouts
import DashboardLayout from "./layout/dasboardLayout";

//pages
import LoginPage from "./pages/Login";

//routes
import adminRoutes from "./routes/adminRoutes";


export default createBrowserRouter([
  {
    // private routes
    path: "/",
    element: <ProtectedLayout />,
    children: [
      {
        path: "/",
        element: (
          <RoleGuardLayout>
            <DashboardLayout />
          </RoleGuardLayout>
        ),
        children: [
          {
            //admin routes
            path: "/admin",
            children: adminRoutes,
          },  


       


        ],
      },
    ],
  },
  {
    // public routes
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "/login",
        element: <LoginPage />,
      },
    ],
  },
]);


