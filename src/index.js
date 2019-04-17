// ! External
import registerServiceWorker from "./registerServiceWorker";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

// ! Internal
import RootReducer from "./Ducks";
import App from "./App";

const store = createStore(
    RootReducer,
    compose(
        applyMiddleware(thunk),
        window.navigator.userAgent.includes("Chrome")
            ? window.__REDUX_DEVTOOLS_EXTENSION__ &&
                  window.__REDUX_DEVTOOLS_EXTENSION__()
            : compose
    )
);

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(app, document.getElementById("root"));
registerServiceWorker();
