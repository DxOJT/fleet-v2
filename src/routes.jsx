import { createBrowserRouter } from "react-router-dom";

//Laayouts
import DashboardLayout from "./routes/dasboardLayout";

import { LoginLayout } from "./routes/loginLayout";

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

        {
          path: "/some",
          element:  <div> Hello world</div>
        },


      ]
    },


    {
      path: "/login",
      element: <LoginLayout/>,
      children:[
      

        {
          path: "/login",
          element: <LoginLayout/>
        },


      ]
    },


]);
