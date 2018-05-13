import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import todoApp from "./reducers/index";
import App from "./components/App.js";

// Recupera o estado inicial do localstorage
const persistedState = localStorage.getItem("reduxState") ? JSON.parse(localStorage.getItem("reduxState")) : {};

const store = createStore(todoApp, persistedState);

// Persiste o estado no localstorage quando alterado
store.subscribe(() => {
    localStorage.setItem("reduxState", JSON.stringify(store.getState()));
});

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);