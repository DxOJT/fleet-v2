import { createBrowserRouter } from "react-router-dom";

//Laayouts
import DashboardLayout from "./routes/dasboardLayout";

//pages
import App from "./pages/App.jsx";


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
]);
