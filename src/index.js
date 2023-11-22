import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginSignUp from "./Components/LoginSignup/LoginSignUp";
import Admin from "./Components/AdminPages/Admin";
import FilmManagerAdmin from "./Components/AdminPages/FilmManagerAdmin";
import Manager from "./Components/AdminPages/Manager";
import Home from "./Customer/Pages/HomePage/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <LoginSignUp /> },
      { path: "/login", element: <LoginSignUp /> },
      {
        path: "/admin",
        element: <Admin />,
        children: [
          { index: true, element: <FilmManagerAdmin /> },
          { path: "/admin/manager/film", element: <FilmManagerAdmin /> },
          { path: "/admin/manager/:typeManager", element: <Manager /> },
        ],
      },
      {
        path: "/user",
        element: <Home />,
        children: [
          { index: true, element: <Home /> },
          { path: "/user/home", element: <Home /> },
        ],
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router}></RouterProvider>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
