import FooterDashboard from "../../components/FooterDashboard";
import Header from "../../components/Header";

import { ContainerObjectDashboard } from "./style";
import { ContainerInfoDashboard } from "../../components/ContainerInfoDashboard/ContainerInfoDashboard";
import { ContainerUserDashboard } from "../../components/ContainerUserDashboard/ContainerUserDashboard";
import DriverPosts from "../../components/DriverPosts";
import { useState } from "react";

const Dashboard = () => {
  const [userPage, setUserPage] = useState(2);
  return (
    <>
      <Header />
      <ContainerUserDashboard />
      <ContainerInfoDashboard
        setUserPage={setUserPage}
      ></ContainerInfoDashboard>
      <ContainerObjectDashboard>
        {userPage === 2 && <DriverPosts />}
      </ContainerObjectDashboard>
      <FooterDashboard />
    </>
  );
};

export default Dashboard;
