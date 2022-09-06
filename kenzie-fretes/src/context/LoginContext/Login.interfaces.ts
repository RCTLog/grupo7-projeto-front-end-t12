import { ReactNode } from "react";
import {
  DeepRequired,
  FieldErrorsImpl,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

export interface ILoginProps {
  children: ReactNode;
}

export interface ILoginProvider {
<<<<<<< HEAD
  auth: boolean
  setAuth: React.Dispatch<React.SetStateAction<boolean>>
  loading: boolean
  register: UseFormRegister<ILoginData>
  handleSubmit: UseFormHandleSubmit<ILoginData>
  errors: FieldErrorsImpl<DeepRequired<ILoginData>>
  onSubmit: (data: ILoginData) => void
=======
  emailError: boolean;
  passError: boolean;
  auth: boolean;
  setAuth: React.Dispatch<React.SetStateAction<boolean>>;
  loading: boolean;
  register: UseFormRegister<ILoginData>;
  handleSubmit: UseFormHandleSubmit<ILoginData>;
  errors: FieldErrorsImpl<DeepRequired<ILoginData>>;
  onSubmit: (data: ILoginData) => void;
  user: IUser;
>>>>>>> d3564ac136f3a3e2fcc4a6b383bcdab02e80884d
}

export interface ILoginData {
  email: string;
  password: string;
  type: string;
}

export interface ILoginApi {
  accessToken: string;
  user: IUser;
}

export interface IUser {
  email: string;
  id: number;
  name: string;
  type: string;
}
