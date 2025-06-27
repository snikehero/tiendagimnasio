import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import App from "./App.jsx";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage.jsx";
const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/*", element: <NotFoundPage /> },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
