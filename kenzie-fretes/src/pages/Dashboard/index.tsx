import FooterDashboard from "../../components/FooterDashboard"
import Header from "../../components/Header"

import Container, { ContainerObjectDashboard } from "./style";
import { ContainerInfoDashboard } from "../../components/ContainerInfoDashboard/ContainerInfoDashboard";
import { ContainerUserDashboard } from "../../components/ContainerUserDashboard/ContainerUserDashboard";
import ModalInformation from "../../components/ModalInformation";
import { useEffect, useState } from "react";
import ModalPoster from "../../components/ModalPoster";
import ModalAbout from "../../components/ModalAbout";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../../context/LoginContext/LoginProvider";

const Dashboard = () => {
  const [userPage, setUserPage] = useState(1);
  const navigate = useNavigate();

  const { auth } = useLogin()

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
