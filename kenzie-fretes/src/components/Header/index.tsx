import { Container } from "./style"

import logo from "../../assets/logo.svg";
import userImg from "../../assets/no-image-user.jpg"

import { MdMarkEmailUnread } from "react-icons/md"
import { BsBell } from "react-icons/bs"
import { GiExitDoor } from "react-icons/gi"

import { useNavigate } from "react-router-dom"
import { useLogin } from "../../context/LoginContext/LoginProvider"
import { TiHomeOutline } from "react-icons/ti";

const Header = () => {
  let navigate = useNavigate()
  const { setAuth } = useLogin()

  const Logout = () => {
    localStorage.removeItem("@RCTL: Token")
    localStorage.removeItem("@RCTL: UserId")
    localStorage.removeItem("@RCTL: Username")
    localStorage.removeItem("@RCTL: typeUser")
    localStorage.removeItem("@RCTL: UserEmail")
    setAuth(false)
  }

  return (
    <Container>
      <img className="Logo" src={logo} alt="rctlog logo" />
      <div className="buttons">
        <TiHomeOutline
          onClick={() => navigate("../dashboard/driver/posts", { replace: true })}
        />
        <MdMarkEmailUnread />
        <BsBell />
        <img src={userImg} alt="" />
        <GiExitDoor onClick={Logout} />
      </div>
    </Container>
  )
}

export default Header
