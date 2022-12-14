import { createContext, useContext, useEffect, useState } from "react"
import {
  ILoginApi,
  ILoginData,
  ILoginProps,
  ILoginProvider,
  IUser,
} from "./Login.interfaces"
import * as yup from "yup"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { toast } from "react-toastify"

import api from "../../services/api"

const LoginContext = createContext<ILoginProvider>({} as ILoginProvider)

const LoginProvider = ({ children }: ILoginProps) => {
  const [auth, setAuth] = useState(false)
  const [user, setUser] = useState<IUser>({} as IUser)
  const [loading, setLoading] = useState(true)

  const formSchema = yup.object().shape({
    email: yup.string().required("Insira seu e-mail").email("E-mail invalido"),
    password: yup.string().required("Insira sua senha"),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginData>({
    resolver: yupResolver(formSchema),
  })

  const onSubmit = (data: ILoginData) => {
    setLoading(true)
    api
      .post<ILoginApi>("/login/users", data)
      .then((res) => {
        setAuth(true)

        setUser(res.data.user)
        window.localStorage.setItem("@RCTL: Token", res.data.accessToken)
        window.localStorage.setItem("@RCTL: UserId", res.data.user.id)
        window.localStorage.setItem("@RCTL: Username", res.data.user.name)
        window.localStorage.setItem("@RCTL: typeUser", res.data.user.typeUser)
        window.localStorage.setItem("@RCTL: UserEmail", res.data.user.email)

        toast.success("Login realizado com sucesso!", {
          toastId: 1,
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
        })
        setLoading(false)
      })
      .catch(() => {
        toast.error("Login ou senha inválidos!", {
          toastId: 1,
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
        })
        setLoading(false)
      })
  }

  useEffect(() => {
    const token = localStorage.getItem("@RCTL: Token")
    const userId = localStorage.getItem("@RCTL: UserId")
    const userName = localStorage.getItem("@RCTL: Username")
    const typeUser = localStorage.getItem("@RCTL: typeUser")
    const userEmail = localStorage.getItem("@RCTL: UserEmail")

    token && setAuth(true)
    setLoading(false)
  }, [auth])

  return (
    <LoginContext.Provider
      value={{
        auth,
        setAuth,
        loading,
        setLoading,
        register,
        handleSubmit,
        errors,
        onSubmit,
        user,
      }}
    >
      {children}
    </LoginContext.Provider>
  )
}

export const useLogin = () => useContext(LoginContext)

export default LoginProvider
