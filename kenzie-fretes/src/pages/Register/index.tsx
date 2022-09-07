import "./style"
import {
  FormControlLabel,
  FormLabel,
  Icon,
  IconButton,
  Radio,
  RadioGroup,
  Tooltip,
} from "@mui/material"
import CInput from "../../components/Input"
import CButton from "../../components/Button"
import { Link, Navigate } from "react-router-dom"
import { useState } from "react"
import { useRegister } from "../../context/RegisterContext/RegisterProvider"

import { Container, RegisterWrap } from "./style"

import logo from "../../assets/logo.svg"
import cliente_register from "../../assets/cliente_register.svg"
import fretista_register from "../../assets/fretista_register.svg"
import arrowBack from "../../assets/arrowBack.svg"
import { ErrorOutline, Visibility, VisibilityOff } from "@mui/icons-material"

const Register = () => {
  const [type, setType] = useState(false)

  const { auth, setAuth, loading, register, handleSubmit, errors, onSubmit } =
    useRegister()

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
                  error={errors.name && true}
                  InputProps={{
                    endAdornment: errors.name && (
                      <Tooltip
                        title={`${errors.name?.message}`}
                        placement="right"
                        arrow
                        disableInteractive
                      >
                        <Icon sx={{ cursor: "default" }}>
                          <ErrorOutline color="error" />
                        </Icon>
                      </Tooltip>
                    ),
                  }}
                  {...register("name")}
                />

                <CInput
                  variant="outlined"
                  id="email"
                  placeholder="Digite seu e-mail"
                  label="E-mail:"
                  error={errors.email && true}
                  InputProps={{
                    endAdornment: errors.email && (
                      <Tooltip
                        title={`${errors.email?.message}`}
                        placement="right"
                        arrow
                        disableInteractive
                      >
                        <Icon sx={{ cursor: "default" }}>
                          <ErrorOutline color="error" />
                        </Icon>
                      </Tooltip>
                    ),
                  }}
                  {...register("email")}
                />

                <CInput
                  variant="outlined"
                  id="password"
                  placeholder="Digite sua senha"
                  label="Senha:"
                  type={"password"}
                  error={errors.password && true}
                  InputProps={{
                    endAdornment: errors.password && (
                      <Tooltip
                        title={`${errors.password?.message}`}
                        placement="right"
                        arrow
                        disableInteractive
                      >
                        <Icon sx={{ cursor: "default" }}>
                          <ErrorOutline color="error" />
                        </Icon>
                      </Tooltip>
                    ),
                  }}
                  {...register("password")}
                />

                <CInput
                  variant="outlined"
                  id="passwordConfirm"
                  placeholder="Digite sua senha"
                  label="Confirmação de senha:"
                  type={"password"}
                  error={errors.passwordConfirm && true}
                  InputProps={{
                    endAdornment: errors.passwordConfirm && (
                      <Tooltip
                        title={`${errors.passwordConfirm?.message}`}
                        placement="right"
                        arrow
                        disableInteractive
                      >
                        <Icon sx={{ cursor: "default" }}>
                          <ErrorOutline color="error" />
                        </Icon>
                      </Tooltip>
                    ),
                  }}
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
  )
}

export default Register
