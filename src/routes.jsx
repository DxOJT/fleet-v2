import { createBrowserRouter } from 'react-router-dom';

//route protect
import { ProtectedLayout, HomeLayout } from './utils/routeGuard';
import { RoleGuardLayout } from './utils/roleGuard';

//Layouts
import DashboardLayout from './layout/dasboardLayout';

//pages
import LoginPage from './pages/login';

//routes
import adminRoutes from './routes/adminRoutes';
import Result404 from './pages/results/404';

export default createBrowserRouter([
  {
    // private routes
    path: '/',
    element: <ProtectedLayout />,
    errorElement: <Result404 />,
    children: [
      {
        path: '/',
        element: (
          <RoleGuardLayout>
            <DashboardLayout />
          </RoleGuardLayout>
        ),
        children: [
          {
            //admin routes
            path: '/admin',
            children: adminRoutes,
          },
        ],
      },
    ],
  },
  {
    // public routes
    path: '/',
    element: <HomeLayout />,
    errorElement: <Result404 />,
    children: [
      {
        path: '/login',
        element: <LoginPage />,
      },
    ],
  },
]);
