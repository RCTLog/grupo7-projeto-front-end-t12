import "./style";
import {
  FormControlLabel,
  FormLabel,
  IconButton,
  Radio,
  RadioGroup,
} from "@mui/material";
import CInput from "../../components/Input";
import CButton from "../../components/Button";
import { Link, Navigate } from "react-router-dom";
import { useState } from "react";
import { useRegister } from "../../context/RegisterContext/RegisterProvider";

import { Container, RegisterWrap } from "./style";

import logo from "../../assets/logo.svg";
import cliente_register from "../../assets/cliente_register.svg";
import fretista_register from "../../assets/fretista_register.svg";
import arrowBack from "../../assets/arrowBack.svg";

const Register = () => {
  const [password, setPassword] = useState(false);
  const [passwordConfirm, setPasswordConfirm] = useState(false);
  const [type, setType] = useState(false);

  const {
    emailError,
    nameError,
    passError,
    auth,
    setAuth,
    loading,
    register,
    handleSubmit,
    errors,
    onSubmit,
  } = useRegister();

  return (
    <>
      {auth ? (
        <Navigate to={"/login"} />
      ) : (
        <Container>
          <div className="register-container">
            <RegisterWrap>
              <Link to={"/login"}>
                <img className="arrowBack" src={arrowBack} alt="voltar" />{" "}
              </Link>

              <img src={logo} alt="kenzie-fretes logo" />

              <form onSubmit={handleSubmit(onSubmit)}>
                <FormLabel id="type">Você é:</FormLabel>

                <RadioGroup
                  aria-labelledby="typeUser"
                  defaultValue="Motorista"
                  sx={{ display: "inline" }}
                >
                  <FormControlLabel
                    value="Motorista"
                    control={
                      <Radio
                        sx={{
                          "&.Mui-checked": {
                            color: "var(--color-primary)",
                          },
                        }}
                        {...register("typeUser")}
                        onClick={() => setType(false)}
                      />
                    }
                    label="Motorista"
                  />

                  <FormControlLabel
                    value="Cliente"
                    control={
                      <Radio
                        sx={{
                          "&.Mui-checked": {
                            color: "var(--color-primary)",
                          },
                        }}
                        {...register("typeUser")}
                        onClick={() => setType(true)}
                      />
                    }
                    label="Cliente"
                  />
                </RadioGroup>

                <CInput
                  variant="outlined"
                  id="name"
                  placeholder="Digite seu nome"
                  label="Nome:"
                  error={nameError}
                  helperText={errors.name?.message}
                  {...register("name")}
                />

                <CInput
                  variant="outlined"
                  id="email"
                  placeholder="Digite seu e-mail"
                  label="E-mail:"
                  error={emailError}
                  helperText={errors.email?.message}
                  {...register("email")}
                />

                <CInput
                  variant="outlined"
                  id="password"
                  placeholder="Digite sua senha"
                  label="Senha:"
                  type={password ? "text" : "password"}
                  error={passError}
                  helperText={errors.password?.message}
                  {...register("password")}
                />

                <CInput
                  variant="outlined"
                  id="passwordConfirm"
                  placeholder="Digite sua senha"
                  label="Confirmação de senha:"
                  type={passwordConfirm ? "text" : "password"}
                  error={passwordConfirm}
                  helperText={errors.passwordConfirm?.message}
                  {...register("passwordConfirm")}
                />

                <CButton variant="contained" type="submit">
                  Cadastre-se
                </CButton>
              </form>
            </RegisterWrap>
            <div className="register-image">
              {type ? (
                <img src={cliente_register} />
              ) : (
                <img src={fretista_register} />
              )}
            </div>
          </div>
        </Container>
      )}
    </>
  );
};

export default Register;
