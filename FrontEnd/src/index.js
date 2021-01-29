import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import AuthApp from "./components/Authcomponents/AuthApp";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css"; //this is necessary when using CSS and bootstrap

ReactDOM.render(
  <React.StrictMode>
    <AuthApp />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
