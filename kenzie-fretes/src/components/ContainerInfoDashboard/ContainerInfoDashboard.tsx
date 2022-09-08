import { Dispatch, SetStateAction, useContext } from "react";
import { UserContext } from "../../context/UserContext/UserProvider";
import { Container } from "./style";

interface IUserPage {
  setUserPage: Dispatch<SetStateAction<number>>;
}

export const ContainerInfoDashboard = ({ setUserPage }: IUserPage) => {
  const { currentUser } = useContext(UserContext);
 
  return (
    <Container>
      <p
        onClick={() => {
          setUserPage(1);
        }}
      >
        Informações
      </p>
      <p
        onClick={() => {
          setUserPage(2);
        }}
      >
        Anúncios
      </p>
      {currentUser && currentUser.typeUser === "Motorista" &&  
        <p
          onClick={() => {
            setUserPage(3);
          }}
        >
          Sobre
        </p>
      }
    </Container>
  );
};
