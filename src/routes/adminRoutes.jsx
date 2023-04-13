// pages
import Dashboard from '../pages/admin/dashboard';
import AddDriver from '../pages/admin/employee/addDriver';
import DriverList from '../pages/admin/employee/driver';

export default [
  {
    path: '/admin',
    element: <Dashboard />,
  },
  {
    path: '/admin/driver-list',
    element: <DriverList />,
  },
  {
    path: '/admin/add-driver',
    element: <AddDriver />,
  },
];
