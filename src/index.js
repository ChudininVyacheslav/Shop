import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import MainPage from "./Pages/MainPage/MainPage";
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import Catalog from "./Pages/Catalog/Catalog";
import Chairs from "./Pages/Chairs/Chairs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/catalog",
    element: <Catalog />,
  },
  {
    path: "/catalog/chairs",
    element: <Chairs />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
