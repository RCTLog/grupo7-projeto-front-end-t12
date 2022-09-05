import { useState } from "react";
import { Content, ContentImage } from "./styles";
import notFound from "../../assets/notFound.json";
import Lottie from "react-lottie";

const ContentNotFound = () => {
  const [animateState] = useState({ isStopped: false, isPaused: false });

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: notFound,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Content>
      <ContentImage>
        <Lottie
          options={defaultOptions}
          isStopped={animateState.isStopped}
          isPaused={animateState.isPaused}
        />
      </ContentImage>
    </Content>
  );
};

export default ContentNotFound;
