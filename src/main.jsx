import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./../global.css";
import { RouterProvider } from "react-router-dom";
import Router from "./Router/Router.jsx";
import { HendleProvider } from "./UseContext/HendleProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HendleProvider>
      <RouterProvider router={Router}></RouterProvider>
    </HendleProvider>
  </StrictMode>
);
