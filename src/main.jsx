import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./../global.css";
import Router from "./Router/Router.jsx";
import { RouterProvider } from "react-router-dom";
import { HendleProvider } from "./UseContext/HendleProvider.jsx";
import { AuthContext } from "./UseContext/AuthProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthContext>
      <HendleProvider>
        <RouterProvider router={Router}></RouterProvider>
      </HendleProvider>
    </AuthContext>
  </StrictMode>
);
