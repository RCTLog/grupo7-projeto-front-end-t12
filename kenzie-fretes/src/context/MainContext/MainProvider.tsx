import { createContext, useContext } from "react"
import LoginProvider from "../LoginContext/LoginProvider"
import { IMainProvider } from "./Main.interfaces"

const MainContext = createContext({})

const MainProvider = ({ children }: IMainProvider) => {
  return (
    <MainContext.Provider value={{}}>
      <LoginProvider>{children}</LoginProvider>
    </MainContext.Provider>
  )
}

export const useMain = () => useContext(MainContext)

export default MainProvider
