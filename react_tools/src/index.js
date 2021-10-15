import React from "react";
import ReactDom from "react-dom";
import "./index.css";
import App from "./App";
import { AppProvider } from "./context";
import { BrowserRouter } from "react-router-dom";

ReactDom.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
