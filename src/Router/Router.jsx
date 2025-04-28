import { createBrowserRouter } from "react-router-dom";
import Blog from "../Components/Pages/Blog";
import AboutUs from "../Components/Pages/About";
import Home from "../Components/Pages/Home";
import Dashboard from "../Components/Pages/Dashboard";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "/about",
    element: <AboutUs />,
  },
  {
    path: "/dashboard",
    element: <Dashboard user={{
      name: "John Doe",
      email: "john.doe@example.com",
      membership: "Premium",
      activity: {
        borrowedBooks: [1, 2],
        blogsWritten: 3,
        browsedGenres: ["Fiction", "Science"],
      },
    }} />,
  },
]);
export default Router;
