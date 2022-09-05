import Container, { FooterContainer } from "./style";
import logo from "../../assets/logo.svg"
import { Link } from "react-router-dom";
import { MdOutlineArrowBackIos } from "react-icons/md";
import  Footer  from "../../components/Footer";

const WorkWithUs = () => {
  return (
    <>
      <Container>
        <img className="logo_top"  src={logo} alt="logo-rctlog" />

        <div className="main">
          <Link to={"/"} >
            <MdOutlineArrowBackIos /> Inicio
          </Link>

          <h2>Desculpe, não estamos contratando no momento.</h2>

        </div>
      </Container>
      <FooterContainer>
        <Footer logo={logo} />
      </FooterContainer>
    </>
    )
}

export default WorkWithUs;