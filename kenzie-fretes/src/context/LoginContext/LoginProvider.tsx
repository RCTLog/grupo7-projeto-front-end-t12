import { createContext, useContext, useEffect, useState } from "react"
import {
  ILoginApi,
  ILoginData,
  ILoginProps,
  ILoginProvider,
} from "./Login.interfaces"
import * as yup from "yup"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import api from "../../services/api"

const LoginContext = createContext<ILoginProvider>({} as ILoginProvider)

const LoginProvider = ({ children }: ILoginProps) => {
  const [auth, setAuth] = useState(false)
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
    api.post<ILoginApi>("/login/users", data).then((res) => {
      setAuth(true)
      window.localStorage.setItem("@RCTL: Token", res.data.accessToken)
    })
  }

  useEffect(() => {
    const token = localStorage.getItem("@RCTL: Token")

    token && setAuth(true)
  }, [auth])

  return (
    <LoginContext.Provider
      value={{
        auth,
        setAuth,
        loading,
        register,
        handleSubmit,
        errors,
        onSubmit,
      }}
    >
      {children}
    </LoginContext.Provider>
  )
}

export const useLogin = () => useContext(LoginContext)

export default LoginProvider
