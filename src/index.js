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
import FilmDetail from "./Customer/Pages/FilmDetailPage/FilmDetail";
import MainHome from "./Customer/Pages/MainHome/MainHome";
import Cinema from "./Customer/Pages/Cinema";
import ShowTimes from "./Customer/Pages/ShowTimes";
import Ticket from "./Customer/Pages/Ticket";
import PayPal from "./Customer/Pages/PayPal";
import Voucher from "./Customer/Pages/Voucher";

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
        element: <MainHome />,
        children: [
          { index: true, element: <Home /> },
          { path: "/user/home", element: <Home /> },
          { path: "/user/filmDetail/:filmId", element: <FilmDetail /> },
          { path: "/user/cinema/:filmId", element: <Cinema /> },
          { path: "/user/showtimes/:filmId", element: <ShowTimes /> },
          { path: "/user/ticket/:showTimesId", element: <Ticket /> },
          { path: "/user/paypal/success", element: <PayPal /> },
          { path: "/user/voucher", element: <Voucher /> },
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
