import React from "react";
import ReactDOM from "react-dom";
import { register } from "./serviceWorker";

// Call the register function
register();

// import * as serviceWorker from "./serviceWorker";

import App from "./App/App";

import "./index.css";

ReactDOM.render(<App />, document.getElementById("root"));
