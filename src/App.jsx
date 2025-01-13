import React from "react";
import "./App.css";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Layout from "./Components/Layout/Layout";
import Portfolio from "./Components/Portfolio/Portfolio";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true, 
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "portfolio",
        element: <Portfolio/>,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
