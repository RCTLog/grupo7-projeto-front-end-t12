import HeaderButton from "../../components/HeaderButton";
import { Container } from "./style";

import logo from "../../assets/logo.svg";
import userImg from "../../assets/truck.png";

import { MdMarkEmailUnread } from "react-icons/md";
import { BsBell } from "react-icons/bs";

import { useNavigate } from "react-router-dom";
import { useLogin } from "../../context/LoginContext/LoginProvider";

const Header = () => {
  let navigate = useNavigate();
  const { user } = useLogin();

  return (
    <Container>
      <img className="Logo" src={logo} alt="rctlog logo" />
      <div className="buttons">
        <HeaderButton
          onClick={() =>
            navigate("../dashboard/driver/posts", { replace: true })
          }
          variant="contained"
        >
          Página Inicial
        </HeaderButton>
        <MdMarkEmailUnread />
        <BsBell />
        <img src={userImg} alt="" />
      </div>
    </Container>
  );
};

export default Header;
