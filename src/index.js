import React from "react";
import reactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import "react-toastify/dist/ReactToastify.min.css";
import "react-calendar/dist/Calendar.css";
import "./app/layout/styles.css";
import App from "./app/layout/App";
import ScrollToTop from "./app/layout/ScrollToTop";
import { configureStore } from "./app/store/configureStore";

const store = configureStore();

const rootEl = document.getElementById("root");

let render = () => {
  reactDOM.render(
    <Provider store={store}>
      <Router>
        <ScrollToTop />
        <App />
      </Router>
    </Provider>,
    rootEl
  );
};

if (module.hot) {
  module.hot.accept("./app/layout/App", () => {
    setTimeout(render);
  });
}

// ReactDOM.render(
//     <App />
//   document.getElementById("root")
// );

render();
