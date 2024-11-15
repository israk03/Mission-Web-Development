import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Root from "./Root.jsx";
import { AuthProvider } from "./Providers/authProvider.jsx";
import Home from "./Components/Home.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Components/Login.jsx";
import Register from "./Components/Register.jsx";
import Orders from "./Components/Orders.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "orders",
        element: <Orders></Orders>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
