import { createContext, useContext } from "react";
import LoginProvider from "../LoginContext/LoginProvider";
import RegisterProvider from "../RegisterContext/RegisterProvider";

import { IMainProvider } from "./Main.interfaces";

const MainContext = createContext({});

const MainProvider = ({ children }: IMainProvider) => {
  return (
    <MainContext.Provider value={{}}>
      <LoginProvider>
        <RegisterProvider>{children}</RegisterProvider>
      </LoginProvider>
    </MainContext.Provider>
  );
};

export const useMain = () => useContext(MainContext);

export default MainProvider;
