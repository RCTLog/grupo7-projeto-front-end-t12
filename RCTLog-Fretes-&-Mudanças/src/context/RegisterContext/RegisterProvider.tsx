import { createContext, useContext, useEffect, useState } from "react"
import {
  IRegisterApi,
  IRegisterData,
  IRegisterProps,
  IRegisterProvider,
} from "./Register.interfaces"

import * as yup from "yup"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { toast } from "react-toastify"
import api from "../../services/api"
import { useNavigate } from "react-router-dom"
import { useLogin } from "../LoginContext/LoginProvider"

const RegisterContext = createContext<IRegisterProvider>(
  {} as IRegisterProvider
)

const RegisterProvider = ({ children }: IRegisterProps) => {
  const { loading, setLoading } = useLogin()
  const [auth, setAuth] = useState(false)

  const navigate = useNavigate()

  const formSchema = yup.object().shape({
    email: yup.string().required("Insira seu e-mail").email("E-mail invalido"),
    password: yup.string().required("Insira sua senha"),
    name: yup.string().required("Insira seu nome"),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password")], "Senha precisam ser iguais")
      .required("Insira a confirmação de senha"),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterData>({
    resolver: yupResolver(formSchema),
  })

  const onSubmit = (data: IRegisterData) => {
    setLoading(true)
    api
      .post<IRegisterApi>("/users/register", data)
      .then(() => {
        navigate("/login")

        toast.success("Cadastro realizado com sucesso!", {
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
        toast.error("Verifique as informações e tente novamente!", {
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

  return (
    <RegisterContext.Provider
      value={{
        auth,
        setAuth,
        register,
        handleSubmit,
        errors,
        onSubmit,
      }}
    >
      {children}
    </RegisterContext.Provider>
  )
}

export const useRegister = () => useContext(RegisterContext)

export default RegisterProvider
