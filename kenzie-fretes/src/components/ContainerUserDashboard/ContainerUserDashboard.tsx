import userImg from "../../assets/no-image-user.jpg"
import { useLogin } from "../../context/LoginContext/LoginProvider"
import { Container } from "./style"

export const ContainerUserDashboard = () => {
  const { user } = useLogin()

  return (
    <Container>
      <img className="userImg" src={userImg} alt="" />
      <h2 className="userName">{user.name}</h2>
    </Container>
  )
}
