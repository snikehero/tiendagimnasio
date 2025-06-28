import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import App from "./App.jsx";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import About from "./components/AboutPage/About.jsx";
import SingleProductPage from "./components/SingleProductPage/SingleProductPage.jsx";
const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/*", element: <NotFoundPage /> },
  { path: "/AboutPage", element: <About /> }, // Ejemplo <-
  { path: "/SingleProductPage", element: <SingleProductPage /> },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
