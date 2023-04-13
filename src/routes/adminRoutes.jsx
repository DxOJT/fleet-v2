// pages
import Dashboard from '../pages/admin/dashboard';
import DriverList from '../pages/admin/employee/driver';

export default [
  {
    path: '/admin',
    element: <Dashboard />,
  },
  {
    path: '/admin/driver-list',
    element: <DriverList />,
  }
];
