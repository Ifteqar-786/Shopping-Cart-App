import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { store } from "./redux/Store";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    
      <Provider store={store}>
              <App />
        </Provider>
        <Toaster/>
  </BrowserRouter>
  
);
