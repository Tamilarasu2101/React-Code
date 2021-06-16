import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from "react-dom";
import App from "../src/components/App";
import reportWebVitals from "./reportWebVitals";
import { createStore } from "redux";
import allReducers from "./reducers/index";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
const store = createStore(
  allReducers /* preloadedState, */,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();
