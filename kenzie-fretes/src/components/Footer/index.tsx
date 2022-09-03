import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import logo_support from "../../assets/logo_support.svg"
import google_play from "../../assets/google_play.svg";
import app_store from "../../assets/app_store.svg"
import Container from "./style";

const Footer = () => {
  return (
    <Container>

      <div className="logo">
        <img src={logo_support} alt="logo-rctlog" />
      </div>

      <div className="info">
        <div className="contact">
          <h3>Fale Conosco:</h3>
          <p>08:00 - 17:00 (seg - sex)</p>
          <p><MdEmail size={25} /> ajuda.rctlog@rctlog.com.br</p>
        </div>

        <div className="links">
          <div className="pages">
            <Link to="/worktous" >Trabalhe Conosco</Link>
            <Link to="/support" ><AiFillGithub size={25} />Suporte</Link>
          </div>

          <div className="networks">
            <a href="https://www.facebook.com/RCTLog/" target="_blank"><BsFacebook size={30} /></a>
            <a href="https://www.instagram.com/rctlogfretesemudancas/" target="_blank"><AiFillInstagram size={38} /></a>
          </div>
        </div>

        <div className="mobile">
          <p>Em breve disponivel nas demais plataformas</p>

          <div className="apps">
            <img src={google_play} alt="Google Play" />
            <img src={app_store} alt="App Store" />
          </div>
        </div>
      </div>

      <div className="rtclog">
        <p>2022 RCTLog, Todos direitos reservados</p>
      </div>
    </Container>
  )
}

export default Footer;