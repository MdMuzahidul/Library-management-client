import { createBrowserRouter } from "react-router-dom";
import AboutUs from "../Components/Pages/About/About";
import Home from "../Components/Pages/Home/Home";
import Blog from "../Components/Pages/Blog/Blog";
import Dashboard from "../Components/Pages/Dashboard/Dashboard";
import BookList from "../Components/BookList/BookList";
import Login from "../Components/Pages/Login/Login";
import Registation from "../Components/Pages/Registation/Registation";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/books",
    element: <BookList></BookList>,
  },
  {
    path: "/blog",
    element: <Blog></Blog>,
  },
  {
    path: "/about",
    element: <AboutUs />,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/registration",
    element: <Registation></Registation>,
  },
  {
    path: "/dashboard",
    element: (
      <Dashboard
        user={{
          name: "John Doe",
          email: "john.doe@example.com",
          membership: "Premium",
          activity: {
            borrowedBooks: [1, 2],
            blogsWritten: 3,
            browsedGenres: ["Fiction", "Science"],
          },
        }}
      />
    ),
  },
]);
export default Router;
