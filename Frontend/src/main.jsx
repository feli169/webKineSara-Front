import React from "react";
import "./index.css";
import ReactDOM from "react-dom/client";
import AppRouter from "./router.jsx";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./Context/Context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider>
        <AppRouter />
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
);
