import { createRoot } from "react-dom/client";
import "./index.css";

import App from "./App.jsx";
import { RouterProvider, Routes } from "react-router-dom";
import { router } from "./router/router.jsx";
import { AuthProvider } from "./context/AuthContxt.jsx";

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
);
