import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./bootstrap.min.css";
// We download files bootstrap.min.css from bootswatch.com and save files in frontend/src. Then import ./bootstrap.min.css into index.js. Reload your app page and see it incorporate the styles.
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
