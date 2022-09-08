import FooterDashboard from "../../components/FooterDashboard";
import Header from "../../components/Header";

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
// import Announcement from "../../components/Announcement";
import { UserContext } from "../../context/UserContext/UserProvider";
import ModalEditAnnouncement from "../../components/ModalEditAnnouncement";
import ModalEditAbout from "../../components/ModalEditAbout";
import ModalEditInformation from "../../components/ModalEditInformation";
// import ModalEditSolicitation from "../../components/ModalEditSolicitation";


const Dashboard = () => {
  const [userPage, setUserPage] = useState(1);
  const [modal, setModal] = useState(null);
  const navigate = useNavigate();

  const { auth } = useLogin();
  const { currentUser } = useContext(UserContext);

  useEffect(() => {
    !auth && navigate("../login", { replace: true });
  }, [auth]);

  return (
    <Container>
      {modal === 1 && <ModalEditInformation setModal={setModal} />}
      {modal === 2 && <ModalEditSolicitation setModal={setModal}/>}
      {modal === 3 && <ModalEditAbout setModal={setModal} />}

      <div className="main">
        <Header />
        <div className="info-container">
          <ContainerUserDashboard />
          <ContainerInfoDashboard
            setUserPage={setUserPage}
          ></ContainerInfoDashboard>
          <ContainerObjectDashboard>
            {userPage === 1 && <ModalInformation setModal={setModal} />}
            {userPage === 2 && <ModalPoster />}
            {userPage === 3 && currentUser.typeUser === "Motorista" && (
              <ModalAbout setModal={setModal} />
            )}
            {/* {userPage === 4 && currentUser.typeUser === "Cliente" && (

            )} */}
          </ContainerObjectDashboard>
          
        </div>
      </div>
      <FooterDashboard />
    </Container>
  );
};

export default Dashboard;
