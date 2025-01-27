import { createBrowserRouter } from "react-router-dom";
import About from "../Component/About/About";
import Contact from "../Component/Contact/Contact";
import Main from "../Layout/Main";
import Home from "../Component/Home/Home";
import SignUp from "../Component/SignUp/SignUp";
import Login from "../Component/Login/Login";
import Order from "../Component/Orders/Order";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,

    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },

      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/sign-up",
        element: <SignUp></SignUp>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/orders",
        element: <Order></Order>,
      },
    ],
  },
]);

export default router;
