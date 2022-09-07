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
  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState<IUser>({} as IUser);
  const [loading, setLoading] = useState(true);

  const formSchema = yup.object().shape({
    email: yup.string().required("Insira seu e-mail").email("E-mail invalido"),
    password: yup.string().required("Insira sua senha"),
  });

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
        console.log(res.data.user)
        setUser(res.data.user);
        window.localStorage.setItem("@RCTL: Token", res.data.accessToken);
        window.localStorage.setItem("@RCTL: UserId", res.data.user.id);
        window.localStorage.setItem("@RCTL: Username", res.data.user.name);
        window.localStorage.setItem("@RCTL: typeUser", res.data.user.typeUser);
        window.localStorage.setItem("@RCTL: UserEmail", res.data.user.email);

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
    const userId = localStorage.getItem("@RCTL: UserId");
    const userName = localStorage.getItem("@RCTL: Username");
    const typeUser = localStorage.getItem("@RCTL: typeUser");
    const userEmail = localStorage.getItem("@RCTL: UserEmail");


    token && setAuth(true);
  }, [auth]);

  const GetUser = async () => {
    const currentUser = await api.get(`/users/${user.id}`);
    console.log(currentUser)
  }

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
        GetUser
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};

export const useLogin = () => useContext(LoginContext);

export default LoginProvider;
