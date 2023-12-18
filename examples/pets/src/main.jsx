import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Container } from "react-bootstrap";

import Home from "./routes/Home";
import Pets, { loader as petsLoader } from "./routes/Pets";
import Pet, { loader as petLoader } from "./routes/Pet";
import NotFound from "./components/NotFound";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
    children: [
      {
        path: ":animal/:breed",
        element: <Pets />,
        loader: petsLoader,
      },
    ],
  },
  {
    path: "/pet/:id",
    element: <Pet />,
    loader: petLoader,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Container className="glass">
      <RouterProvider router={router} />
    </Container>
  </React.StrictMode>
);
