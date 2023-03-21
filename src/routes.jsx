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
import NotFoundPage from "./pages/NotFoundPage";

export default createBrowserRouter([
  {
    // private routes
    path: "/",
    element: <ProtectedLayout />,
    errorElement: <NotFoundPage />,
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
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/login",
        element: <LoginPage />,
      },
    ],
  },
]);
