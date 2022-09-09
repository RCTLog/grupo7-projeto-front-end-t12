import { createContext, useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import LoginProvider, { useLogin } from "../LoginContext/LoginProvider"
import RegisterProvider from "../RegisterContext/RegisterProvider"
import UserProvider from "../UserContext/UserProvider"

import { IMainContext, IMainProvider } from "./Main.interfaces"

const MainContext = createContext<IMainContext>({} as IMainContext)

const MainProvider = ({ children }: IMainProvider) => {
  const navigate = useNavigate()
  const { auth, setAuth } = useLogin()

  const Logout = () => {
    localStorage.clear()
  }

  return (
    <MainContext.Provider
      value={{
        Logout,
      }}
    >
      <LoginProvider>
        <RegisterProvider>
          <UserProvider>{children}</UserProvider>
        </RegisterProvider>
      </LoginProvider>
    </MainContext.Provider>
  )
}

export const useMain = () => useContext(MainContext)

export default MainProvider
