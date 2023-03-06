import { createBrowserRouter } from "react-router-dom";

//Laayouts
import DashboardLayout from "./routes/dasboardLayout";

//pages
import App from "./pages/App.jsx";
import LoginPage from "./pages/Login";


export default createBrowserRouter([
    {
      path: "/",
      element: <DashboardLayout/>,
      children:[
        {
          path: "/",
          element: <App/>,
        },
      ]
    },
    {
        path: "/login",
        element: <LoginPage/>,
    },
]);
