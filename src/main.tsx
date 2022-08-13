import React from "react";
import { createRoot } from "react-dom/client";
import { Provider as StateProvider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import stateStore from "./store/stateStore";

const rootElement = document.getElementById("root") as HTMLElement;
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <StateProvider store={stateStore}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StateProvider>
  </React.StrictMode>
);
