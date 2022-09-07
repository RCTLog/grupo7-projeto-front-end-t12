import { Container } from "./style"

import logo from "../../assets/logo.svg";
import userImg from "../../assets/no-image-user.jpg"

import { MdOutlineEmail } from "react-icons/md"
import { BsBell } from "react-icons/bs"
import { GiExitDoor } from "react-icons/gi"

import { useNavigate } from "react-router-dom"
import { useLogin } from "../../context/LoginContext/LoginProvider"
import { TiHomeOutline } from "react-icons/ti";
import { useMain } from "../../context/MainContext/MainProvider";

const Header = () => {
  const navigate = useNavigate()
  const { Logout } = useMain()
  const { auth, setAuth } = useLogin()


  return (
    <Container>
      <img className="Logo" src={logo} alt="rctlog logo" />
      <div className="buttons">
        <TiHomeOutline
          onClick={() => navigate("../dashboard/driver/posts", { replace: true })}
        />
        <MdOutlineEmail />
        <BsBell />
        <img src={userImg} alt="" />
        <GiExitDoor onClick={() => {
          Logout();
          setAuth(false)
          navigate("../login", { replace: true })
        }} />
      </div>
    </Container>
  );
};

export default Header;
