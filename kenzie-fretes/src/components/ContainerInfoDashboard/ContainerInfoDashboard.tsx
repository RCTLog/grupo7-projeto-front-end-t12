import { Dispatch, SetStateAction } from "react";
import { Container } from "./style";

interface IUserPage {
  setUserPage: Dispatch<SetStateAction<number>>;
}

export const ContainerInfoDashboard = ({ setUserPage }: IUserPage) => {
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
      <p
        onClick={() => {
          setUserPage(3);
        }}
      >
        Sobre
      </p>
    </Container>
  );
};
