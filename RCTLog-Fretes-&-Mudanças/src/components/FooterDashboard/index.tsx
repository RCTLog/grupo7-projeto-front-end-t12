import { BsFacebook, BsGithub } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { Container } from "./style";
import { TiSocialInstagramCircular } from "react-icons/ti";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { Link } from "react-router-dom";

const FooterDashboard = () => {
  return (
    <Container>
      <div className="email">
        <div className="flex">
          <MdEmail size={30} />
          <p>ajuda.rctlog@rctlog.com.br</p>
        </div>
        <p>08:00 - 17:00 (seg-sex)</p>
      </div>

      <div className="contact">
        <div className="contact-pages">
          <Link to="/work-with-us">Trabalhe Conosco</Link>
          <Link to="/support">
            <AiFillGithub size={30} />
            Suporte
          </Link>
        </div>

        <div className="contact-info">
          <a href="https://www.facebook.com/RCTLog/" target="_blank">
            <BsFacebook size={30} className="face" />
          </a>
          <a
            href="https://www.instagram.com/rctlogfretesemudancas/"
            target="_blank"
          >
            <AiFillInstagram size={38} className="insta" />
          </a>
        </div>
      </div>
    </Container>
  );
};

export default FooterDashboard;
