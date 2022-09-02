import React, { useRef } from "react";
import { MainContent } from "./styles";
import FirstImage from "../../assets/FirstImage.svg";
import Logo from "../../assets/logo.svg";
import SecondImage from "../../assets/SecondImage.svg";
import { Button } from "../../styles/Button";
import { Footer } from "../../styles/Footer";

export const Homepage = () => {
  const sobreRef = useRef(null);

  const gotoSobre = () => {
    window.scrollTo({
      top: sobreRef.current?.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <>
      <MainContent>
        <div className="main-image-buttons">
          <img src={Logo} alt="logo" className="logo" />
          <div className="image-buttons">
            <img
              src={FirstImage}
              alt="Imagem de uma pessoa segurando uma caixa"
              className="main-first-image"
            />
            <div className="buttons">
              <Button onClick={gotoSobre}>Sobre</Button>
              <Button>Login</Button>
              <Button>Cadastre-se</Button>
            </div>
          </div>
        </div>
        <div className="main-text" ref={sobreRef}>
          <h2>SOBRE</h2>
          <div className="text-image">
            <p>
              A RTCLog é uma plataforma voltada para motoristas se cadastrarem e
              oferecerem seus serviços de transporte, e ao mesmo tempo, para o
              cliente final que busca por esses serviços, ter a facilidade em
              poucos cliques de se cadastrar e de contratar os serviços de que
              precisa, de forma assertiva e direta ao ponto, é só escolher um
              fretista e marcar um horário!
            </p>
            <img
              src={SecondImage}
              alt="Imagem de uma pessoa em cima de uma caixa"
              className="main-second-image"
            />
          </div>
        </div>
      </MainContent>
      <Footer>
        <p>2022 RTCLog, todos os direitos reservados</p>
        {/* <img src={Logo} alt="" /> */}
      </Footer>
    </>
  );
};

export default Homepage;
