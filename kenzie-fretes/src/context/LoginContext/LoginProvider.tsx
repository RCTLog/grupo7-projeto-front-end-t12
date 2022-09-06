import { createContext, useContext, useEffect, useState } from "react";
import {
  ILoginApi,
  ILoginData,
  ILoginProps,
  ILoginProvider,
  IUser,
} from "./Login.interfaces";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";

import api from "../../services/api";

const LoginContext = createContext<ILoginProvider>({} as ILoginProvider);

const LoginProvider = ({ children }: ILoginProps) => {
<<<<<<< HEAD
  const [auth, setAuth] = useState(false)
  const [loading, setLoading] = useState(true)

  const formSchema = yup.object().shape({
    email: yup.string().required("Insira seu e-mail").email("E-mail invalido"),
    password: yup.string().required("Insira sua senha"),
  })
=======
  const [emailError, setEmailError] = useState(false);
  const [passError, setPassError] = useState(false);

  const [auth, setAuth] = useState(false);

  const [user, setUser] = useState<IUser>({} as IUser);

  const [loading, setLoading] = useState(true);

  const formSchema = yup.object().shape({
    email: yup
      .string()
      .required(() => {
        setEmailError(true);
        return "Insira seu e-mail";
      })
      .email(() => {
        setEmailError(true);

        return "E-mail invalido";

      }),
    password: yup.string().required(() => {
      setPassError(true);
      return "Insira sua senha";
    }),
  });
>>>>>>> d3564ac136f3a3e2fcc4a6b383bcdab02e80884d

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginData>({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = (data: ILoginData) => {
    api
      .post<ILoginApi>("/login/users", data)
      .then((res) => {
        setAuth(true);
        window.localStorage.setItem("@RCTL: Token", res.data.accessToken);

        toast.success("Login realizado com sucesso! Você será redirecionado.", {
          toastId: 1,
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
        });
      })
      .catch((error) => {
        toast.error("Login ou senha inválidos.", {
          toastId: 1,
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
        });
      });
  };

  useEffect(() => {
    const token = localStorage.getItem("@RCTL: Token");

    token && setAuth(true);
  }, [auth]);

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
        user,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};

export const useLogin = () => useContext(LoginContext);

export default LoginProvider;
