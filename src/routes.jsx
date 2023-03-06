import { createBrowserRouter } from "react-router-dom";

//Laayouts
import DashboardLayout from "./routes/dasboardLayout";


//pages
import App from "./pages/App.jsx";
import { Dashboard } from "./pages/Dashboard";

export default createBrowserRouter([
    {
      path: "/",
      element: <DashboardLayout/>,
      children:[
        {
          path: "/",
          element: <Dashboard/>,
        },

       


      ]
    },


   


]);
