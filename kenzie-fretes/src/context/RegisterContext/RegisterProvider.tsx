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
import api from "../../services/api"

const RegisterContext = createContext<IRegisterProvider>(
  {} as IRegisterProvider
)

const RegisterProvider = ({ children }: IRegisterProps) => {
  const [emailError, setEmailError] = useState(false)
  const [passError, setPassError] = useState(false)
  const [nameError, setNameError] = useState(false)
  const [passwordConfirmError, setpasswordConfirmError] = useState(false)
  const [auth, setAuth] = useState(false)
  const [loading, setLoading] = useState(true)

  const formSchema = yup.object().shape({
    email: yup
      .string()
      .required(() => {
        setEmailError(true)
        return "Insira seu e-mail"
      })
      .email(() => {
        setEmailError(true)
        return "E-mail invalido"
      }),
    password: yup.string().required(() => {
      setPassError(true)
      return "Insira sua senha"
    }),
    name: yup.string().required(() => {
      setNameError(true)
      return "Insira seu nome"
    }),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password")], "Passwords precisam ser iguais")
      .required(() => {
        setpasswordConfirmError(true)
        return "Insira a confirmação de senha"
      }),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterData>({
    resolver: yupResolver(formSchema),
  })

  const onSubmit = (data: IRegisterData) => {
    api.post<IRegisterApi>("/users/register", data).then(({ data }) => {
      setAuth(true)
      window.localStorage.setItem("@RCTL: Token", data.accessToken)

      /* 
      
      COLOCAR RESPOSTA do USER em algum Lugar
      
      */
    })
  }

  useEffect(() => {
    const token = localStorage.getItem("@RCTL: Token")

    token && setAuth(true)
  }, [auth])

  return (
    <RegisterContext.Provider
      value={{
        emailError,
        nameError,
        passError,
        passwordConfirmError,
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
    </RegisterContext.Provider>
  )
}

export const useRegister = () => useContext(RegisterContext)

export default RegisterProvider
