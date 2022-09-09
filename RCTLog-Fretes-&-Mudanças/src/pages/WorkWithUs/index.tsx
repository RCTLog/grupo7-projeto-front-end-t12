import Container, { FooterContainer } from "./style";
import logo from "../../assets/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineArrowBackIos } from "react-icons/md";
import Footer from "../../components/Footer";
import { useLogin } from "../../context/LoginContext/LoginProvider";

const WorkWithUs = () => {
  const navigate = useNavigate();

  const { auth } = useLogin();

  const handleLink = () => {
    if (auth) {
      navigate("/dashboard");
    } else {
      navigate("/");
    }
  };
  return (
    <>
      <Container>
        <img className="logo_top" src={logo} alt="logo-rctlog" />

        <div className="main">
          <button onClick={() => handleLink()}>
            <MdOutlineArrowBackIos /> Voltar
          </button>

          <h2>Desculpe, não estamos contratando no momento.</h2>
        </div>
      </Container>
      <FooterContainer>
        <Footer logo={logo} />
      </FooterContainer>
    </>
  );
};

export default WorkWithUs;
