import React from "react";
import ReactDom from "react-dom";
import "./index.css";
import App from "./App";
import { AppProvider } from "./context";
import { CartProvider } from "./components/store/CartContext";

ReactDom.render(
  <React.StrictMode>
    <AppProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </AppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
