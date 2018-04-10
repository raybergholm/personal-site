import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

// Bootstrap
// import "bootstrap/dist/css/bootstrap.min.css";

// Foundation
import "foundation-sites/dist/css/foundation.min.css";

import foundation from "foundation-sites/dist/js/foundation.min.js";

import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
