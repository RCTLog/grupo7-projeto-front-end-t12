import HeaderButton from "../../components/HeaderButton"
import { Container } from "./style"

import logo from "../../assets/logo.svg"
import userImg from "../../assets/no-image-user.jpg"

import { MdMarkEmailUnread } from "react-icons/md"
import { BsBell } from "react-icons/bs"

import { useNavigate } from "react-router-dom"
import { useLogin } from "../../context/LoginContext/LoginProvider"

const Header = () => {
  let navigate = useNavigate()
  const { user } = useLogin()

  return (
    <Container>
      <img className="Logo" src={logo} alt="kenzie-fretes logo" />
      <div className="buttons">
        <HeaderButton
          onClick={() => navigate("../login", { replace: true })}
          variant="contained"
        >
          Página Inicial
        </HeaderButton>
        <MdMarkEmailUnread />
        <BsBell />
        <img src={userImg} alt="" />
      </div>
    </Container>
  )
}

export default Header
