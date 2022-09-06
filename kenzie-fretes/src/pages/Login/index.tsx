import {
  FormControlLabel,
  FormLabel,
  Icon,
  IconButton,
  Radio,
  RadioGroup,
  Tooltip,
} from "@mui/material"
import { AiOutlineArrowLeft } from "react-icons/ai"
import CInput from "../../components/Input"
import CButton from "../../components/Button"
import { Link, Navigate } from "react-router-dom"
import { useState } from "react"
import { ErrorOutline, Visibility, VisibilityOff } from "@mui/icons-material"
import { useLogin } from "../../context/LoginContext/LoginProvider"

import { Container, LoginWrap } from "./style"

import logo from "../../assets/logo.svg"
import cliente from "../../assets/cliente.svg"
import fretista from "../../assets/fretista.svg"

const Login = () => {
  const [password, setPassword] = useState(false)
  const [type, setType] = useState(false)

  const { auth, register, handleSubmit, errors, onSubmit } = useLogin()

  return (
    <>
      {auth ? (
        <Navigate to={"/dashboard"} />
      ) : (
        <Container>
          <div className="login-container">
            <LoginWrap>
              <Link to="/">
                <IconButton sx={{ width: "40px", height: "40px" }}>
                  <AiOutlineArrowLeft size="30px" />
                </IconButton>
              </Link>

              <img src={logo} alt="kenzie-fretes logo" />

              <h2>Bem-vindo!</h2>
              <form onSubmit={handleSubmit(onSubmit)}>
                <FormLabel id="type">Você é:</FormLabel>

                <RadioGroup
                  aria-labelledby="type"
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
                        {...register("type")}
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
                        {...register("type")}
                        onClick={() => setType(true)}
                      />
                    }
                    label="Cliente"
                  />
                </RadioGroup>

                <CInput
                  variant="outlined"
                  id="email"
                  placeholder="Digite seu e-mail"
                  label="E-mail:"
                  InputProps={{
                    endAdornment: errors.email && (
                      <Tooltip
                        title={`${errors.email?.message}`}
                        placement="right"
                        arrow
                        disableInteractive
                        sx={{
                          "& .MuiTooltip-popper": {
                            width: "300px",
                            height: "300px",
                          },
                        }}
                      >
                        <Icon sx={{ cursor: "default" }}>
                          <ErrorOutline color="error" />
                        </Icon>
                      </Tooltip>
                    ),
                  }}
                  error={errors.email?.message ? true : false}
                  {...register("email")}
                />

                <CInput
                  variant="outlined"
                  id="password"
                  placeholder="Digite sua senha"
                  label="Senha:"
                  type={password ? "text" : "password"}
                  InputProps={{
                    endAdornment: errors.password?.message ? (
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
                    ) : (
                      <IconButton onClick={() => setPassword(!password)}>
                        {password ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    ),
                  }}
                  error={errors.password?.message ? true : false}
                  {...register("password")}
                />

                <CButton variant="contained" type="submit">
                  Login
                </CButton>

                <p>Ainda não possui uma conta?</p>
                <p>
                  <Link to="/register">Clique aqui</Link> e cadastre-se
                </p>
              </form>
            </LoginWrap>
            <div className="login-image">
              {type ? <img src={cliente} /> : <img src={fretista} />}
            </div>
          </div>
        </Container>
      )}
    </>
  )
}

export default Login
