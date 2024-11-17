// ! External
import registerServiceWorker from "./registerServiceWorker";
import React from "react";
import ReactDOM from "react-dom";

// ! Internal

import App from "./App";

const app = <App />;

ReactDOM.render(app, document.getElementById("root"));
registerServiceWorker();
