import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./../global.css";
import { RouterProvider } from "react-router-dom";
import Router from "./Router/Router.jsx";
import AppContext from "./Context/AppContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppContext>
      <RouterProvider router={Router}></RouterProvider>
    </AppContext>
  </StrictMode>
);
