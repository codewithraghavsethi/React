import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";


const root = ReactDOM.createRoot(document.getElementById("root"));

let allRoutes = createBrowserRouter(
  [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "about",
    element: <About/>
  },
  {
    path: "contact",
    element: <Contact/>
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={allRoutes}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
