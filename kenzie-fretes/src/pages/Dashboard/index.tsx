import FooterDashboard from "../../components/FooterDashboard"
import Header from "../../components/Header"

import Container, { ContainerObjectDashboard } from "./style";
import { ContainerInfoDashboard } from "../../components/ContainerInfoDashboard/ContainerInfoDashboard";
import { ContainerUserDashboard } from "../../components/ContainerUserDashboard/ContainerUserDashboard";
import ModalInformation from "../../components/ModalInformation";
import { useContext, useEffect, useState } from "react";
import ModalPoster from "../../components/ModalPoster";
import ModalAbout from "../../components/ModalAbout";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../../context/LoginContext/LoginProvider";
import ModalEditSolicitation from "../../components/ModalEditSolicitation";
import { UserContext } from "../../context/UserContext/UserProvider";
const Dashboard = () => {
  const [userPage, setUserPage] = useState(1);
  const navigate = useNavigate();

  const { auth } = useLogin()
  const { currentUser } = useContext(UserContext)

  useEffect (() => {
    !auth && navigate("../login", { replace: true }) 
  }, [auth])

  return (
    <Container>
      <div className="main">
        <Header />
        <div className="info-container">

          <ContainerUserDashboard />
          <ContainerInfoDashboard
            setUserPage={setUserPage}
          ></ContainerInfoDashboard>
          <ContainerObjectDashboard>
            {userPage === 1 && <ModalInformation />}
            {userPage === 2 && <ModalPoster />}
            {userPage === 3 && <ModalAbout />}
          </ContainerObjectDashboard>
        </div>
      </div>
      <FooterDashboard />
    </Container>
  );
};

export default Dashboard
