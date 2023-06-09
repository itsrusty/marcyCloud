import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ReactDom from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "../routes/root.jsx";
import ErrorPage from "./components/error/error-page.jsx";
import AllProducts from "./pages/AllProducts.jsx";
import Login from "./pages/Login.jsx";
import CreateNewUser from "./pages/CreateNewUser.jsx";

// routing
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/all",
    element: <AllProducts />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/new-user",
    element: <CreateNewUser />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
