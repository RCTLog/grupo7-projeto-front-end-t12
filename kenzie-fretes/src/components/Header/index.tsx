import HeaderButton from "../../components/HeaderButton";
import { Container } from "./style";

import logo from "../../assets/logo.svg";
import userImg from "../../assets/react.svg";

import { MdMarkEmailUnread } from "react-icons/md";
import { BsBell } from "react-icons/bs";

const Header = () => {
  return (
    <Container>
      <img className="Logo" src={logo} alt="kenzie-fretes logo" />
      <div className="buttons">
        <HeaderButton variant="contained">Página Inicial</HeaderButton>
        <MdMarkEmailUnread />
        <BsBell />
        <img src={userImg} alt="" />
      </div>
    </Container>
  );
};

export default Header;
