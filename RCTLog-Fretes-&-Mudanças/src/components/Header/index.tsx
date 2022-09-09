import { Container } from "./style";
import logo from "../../assets/logo.svg";
import userImg from "../../assets/no-image-user.jpg";
import { MdOutlineEmail } from "react-icons/md";
import { BsBell } from "react-icons/bs";
import { GiExitDoor } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../../context/LoginContext/LoginProvider";
import { TiHomeOutline } from "react-icons/ti";
import { useMain } from "../../context/MainContext/MainProvider";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext/UserProvider";
import imgUser from "../../assets/user.png";

const Header = () => {
  const navigate = useNavigate();
  const { Logout } = useMain();
  const { auth, setAuth } = useLogin();
  const { currentUser } = useContext(UserContext);

  return (
    <Container>
      <img className="Logo" src={logo} alt="rctlog logo" />
      <div className="buttons">
        <div className="home">
          <TiHomeOutline
            onClick={() =>
              currentUser.typeUser === "Motorista"
                ? navigate("/dashboard/driver/posts", { replace: true })
                : navigate("/dashboard/client/posts", { replace: true })
            }
          />
        </div>
        <MdOutlineEmail className="email" />
        <BsBell className="bell" />
        <figure>
          <img
            src={currentUser?.userImg ? currentUser?.userImg : imgUser}
            alt=""
            onClick={() => {
              navigate("../dashboard");
            }}
          />
        </figure>
        <div className="door">
          <GiExitDoor
            onClick={() => {
              Logout();
              setAuth(false);
              navigate("../login", { replace: true });
            }}
          />
        </div>
      </div>
    </Container>
  );
};

export default Header;
