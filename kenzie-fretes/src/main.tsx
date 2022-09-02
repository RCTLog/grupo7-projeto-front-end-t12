import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import MainProvider from "./context/MainContext/MainProvider";

import GlobalStyle from "./styles/GlobalStyle";

ReactDOM.createRoot(document.getElementById("root")as HTMLElement).render(
  <React.StrictMode>
    <MainProvider>
      <GlobalStyle />
      <App />
    </MainProvider>
  </React.StrictMode>
);
