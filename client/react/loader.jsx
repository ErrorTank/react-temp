import React from "react";
import ReactDOM from "react-dom";
import {App} from "./app";
import {appLoader} from "../lib/app-loader";

appLoader.init().then(() => {
    ReactDOM.render(<App/>, document.getElementById("app"));
})

