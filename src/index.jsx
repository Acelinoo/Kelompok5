import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
