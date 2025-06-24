import { createBrowserRouter } from "react-router-dom";
import HomeLayOut from "../LayOut/HomeLayOut.jsx";
import HomePage from "../Pages/HomePage.jsx";
import Login from "../Pages/Login.jsx";
import Registation from "../Pages/Registation.jsx";
import ErrorPage from "../Pages/ErrorPage.jsx";
import AboutUs from "../Pages/AboutUS.jsx";
import Blog from "../Pages/Blog.jsx";
import AboutLibrary from "../Components/AboutLibrary.jsx";
import AllBooks from "../Components/Books/AllBooks.jsx";
import BlogDetails from "../Pages/BlogDetails.jsx";
import AddBooks from "../Pages/AddBooks.jsx";
import BooksDetails from "../Pages/BooksDetails/BooksDetails.jsx";
import PendingRequest from "../Pages/BorrowedList/PendingRequest.jsx";
import Allusers from "../Pages/AllUsers/Allusers.jsx";
import PendingRequestOfAdmin from "../Pages/PendingRequestOfAdmin.jsx";
import ApprovedList from "../Pages/ApproveList/ApprovedList.jsx";
import UserApprovedList from "../Pages/UserApprovedList/UserApprovedList.jsx";
import WriteBlog from "../Pages/WriteBlog.jsx";
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
        element: <AllBooks></AllBooks>,
      },
      {
        path: "books/details/:id",
        element: <BooksDetails></BooksDetails>,
        loader: async ({ params }) => {
          const res = await fetch(`http://localhost:5000/books/${params.id}`);
          if (!res.ok) {
            throw new Error("Book not found");
          }
          return res.json();
        },
      },
      {
        path: "books/addbooks",
        element: <AddBooks></AddBooks>,
      },
      { path: "/blog", element: <Blog></Blog> },
      {
        path: "/pending-requests",
        element: <PendingRequest></PendingRequest>,
      },
      {
        path: "/borrowed-books",
        element: <UserApprovedList></UserApprovedList>,
      },
      {
        path: "/writeblog",
        element: <WriteBlog></WriteBlog>,
      },
      {
        path: "/blog/details/:id",
        element: <BlogDetails></BlogDetails>,
        loader: async ({ params }) => {
          const res = await fetch(`http://localhost:5000/blogs/${params.id}`);
          if (!res.ok) {
            throw new Error("Blog post not found");
          }
          return res.json();
        },
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
        path: "/about",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/library",
        element: <AboutLibrary></AboutLibrary>,
      },
      {
        path: "/allusers",
        element: <Allusers></Allusers>,
      },
      {
        path: "/pending-requests-of-admin",
        element: <PendingRequestOfAdmin></PendingRequestOfAdmin>,
      },
      {
        path: "/approved-list",
        element: <ApprovedList></ApprovedList>,
      },
    ],
  },
]);
export default Router;
