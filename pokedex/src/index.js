import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createHashRouter } from "react-router-dom";
import { Pokemon, Pokemons, About } from "./pages/index";

const router = createHashRouter([
  {
    path: "/",
    element: <Pokemons />,
  },
  {
    path: "/pokemons/:id",
    element: <Pokemon />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);