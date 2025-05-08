import { createBrowserRouter } from "react-router-dom";
import HomeLayOut from "../LayOut/HomeLayOut.jsx";
import HomePage from "../Pages/HomePage.jsx";
import Login from "../Pages/Login.jsx";
import Registation from "../Pages/Registation.jsx";
import ErrorPage from "../Pages/ErrorPage.jsx";
import AboutUs from "../Pages/AboutUS.jsx";
import Blog from "../Pages/Blog.jsx";
import BooksDetails from "../Pages/BooksDetails.jsx";
const Router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayOut />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
      {
        path: "/books",
        element: <BooksDetails></BooksDetails>,
      },
      { path: "/blog", element: <Blog></Blog> },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/registration",
        element: <Registation></Registation>,
      },
      {
        path: "/about",
        element: <AboutUs></AboutUs>,
      },
    ],
  },
]);
export default Router;
