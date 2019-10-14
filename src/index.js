import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./res/barlow.css";
import * as serviceWorker from "./serviceWorker";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter } from "react-router-dom";
import "font-awesome/css/font-awesome.css";
import FlagIcon from "react-flag-icon-css";
import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.min.js";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

serviceWorker.unregister();
