import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AppContextProvider from "./Context/AppContext"; // ✅ lowercase
import "./index.css"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AppContextProvider>
    <App />
  </AppContextProvider>
);
