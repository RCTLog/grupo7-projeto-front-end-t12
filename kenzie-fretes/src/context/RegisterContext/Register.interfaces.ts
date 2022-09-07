import { ReactNode } from "react"
import {
  DeepRequired,
  FieldErrorsImpl,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form"

export interface IRegisterProps {
  children: ReactNode
}

export interface IRegisterProvider {
  auth: boolean
  setAuth: React.Dispatch<React.SetStateAction<boolean>>
  loading: boolean
  register: UseFormRegister<IRegisterData>
  handleSubmit: UseFormHandleSubmit<IRegisterData>
  errors: FieldErrorsImpl<DeepRequired<IRegisterData>>
  onSubmit: (data: IRegisterData) => void
}

export interface IRegisterData {
  email: string
  name: string
  password: string
  passwordConfirm: string
  typeUser: string
}

export interface IRegisterApi {
  accessToken: string
  user: {
    email: string
    id: number
    name: string
    typeUser: string
  }
}
