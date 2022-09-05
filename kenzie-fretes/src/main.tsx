import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import MainProvider from "./context/MainContext/MainProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GlobalStyle from "./styles/GlobalStyle";

ReactDOM.createRoot(document.getElementById("root")as HTMLElement).render(
  <React.StrictMode>
    <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
    <MainProvider>
      <GlobalStyle />
      <App />
    
    </MainProvider>
  </React.StrictMode>
);
