import React, { useRef, useState } from "react";
import { ContentImage, MainContent } from "./styles";
import FirstImage from "../../assets/FirstImage.svg";
import Logo from "../../assets/logo.svg";
import SecondImage from "../../assets/SecondImage.svg";
import { Button } from "../../styles/Button";
import entregador from "../../assets/entregador.json";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import Lottie from "react-lottie";

export const Homepage = () => {
  let navigate = useNavigate();

  const sobreRef = useRef<any>();

  const gotoSobre = (): any => {
    window.scrollTo({
      top: sobreRef.current?.offsetTop,
      behavior: "smooth",
    });
  };

  const [animateState] = useState({ isStopped: false, isPaused: false });

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: entregador,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <>
      <MainContent>
        <div className="main-image-buttons">
          <img src={Logo} alt="logo" className="logo" />
          <div className="image-buttons">
            <ContentImage>
              <Lottie
                options={defaultOptions}
                isStopped={animateState.isStopped}
                isPaused={animateState.isPaused}
              />
            </ContentImage>
            <div className="buttons">
              <Button onClick={gotoSobre}>Sobre</Button>
              <Button onClick={() => navigate("../login", { replace: true })}>
                Login
              </Button>
              <Button
                onClick={() => navigate("../register", { replace: true })}
              >
                Cadastre-se
              </Button>
            </div>
          </div>
        </div>
        <div className="main-text" ref={sobreRef}>
          <div className="text-image">
            <p>
              <h2>SOBRE</h2>A RTCLog é uma plataforma voltada para motoristas se
              cadastrarem e oferecerem seus serviços de transporte, e ao mesmo
              tempo, para o cliente final que busca por esses serviços, ter a
              facilidade em poucos cliques de se cadastrar e de contratar os
              serviços de que precisa, de forma assertiva e direta ao ponto, é
              só escolher um fretista e marcar um horário!
            </p>
            <img
              src={SecondImage}
              alt="Imagem de uma pessoa em cima de uma caixa"
              className="main-second-image"
            />
          </div>
        </div>
        <Footer logo={Logo} />
      </MainContent>
    </>
  );
};

export default Homepage;
