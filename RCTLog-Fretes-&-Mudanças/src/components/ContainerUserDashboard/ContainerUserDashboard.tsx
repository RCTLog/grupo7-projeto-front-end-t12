import { useContext } from "react";
import { UserContext } from "../../context/UserContext/UserProvider";
import { Container } from "./style";
import imgUser from "../../assets/user.png"

export const ContainerUserDashboard = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <Container>
      <figure className="userImg">
        <img src={currentUser?.userImg ? currentUser?.userImg : imgUser} alt="" />
      </figure>
      <h2 className="userName">{currentUser?.name}</h2>
    </Container>
  );
};
