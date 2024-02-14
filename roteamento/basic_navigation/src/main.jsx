import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

//1. Roteamento básico
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";

//2. Roteamento com parâmetros
import User from "./components/User.jsx";

//4. Pagina de erro
import NotFound from "./components/NotFound.jsx";

//5. Roteamento com query params
import Search from "./components/Search.jsx";

//6. Rota protegida
const isAuthorized = false;
import { Navigate } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { path: "/", element: <Home /> },
      { path: "about", element: <About /> },
      {
        path: "contact",
        element: isAuthorized ? <Contact /> : <Navigate to="/" />,
      },
      { path: "/users/:userId", element: <User /> },
      { path: "/search", element: <Search /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
