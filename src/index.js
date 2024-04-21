import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Price from "./componentsfirstpage/Price/price";
import Our_barbers from "./componentsfirstpage/Our_barbers/barber";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/price",
    element: <Price />,
  },
  {
    path: "/Our_barbers",
    element: <Our_barbers />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
