import { useContext } from "react";
import { UserContext } from "../../context/UserContext/UserProvider";
import { Container } from "./style"

export const ContainerUserDashboard = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <Container>
      <figure className="userImg">
        <img src={currentUser[0]?.userImg} alt="" />
      </figure>
      <h2 className="userName">{}</h2>
    </Container>
  )
}
