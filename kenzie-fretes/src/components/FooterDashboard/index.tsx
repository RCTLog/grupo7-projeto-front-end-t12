import { BsFacebook, BsGithub } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { Container } from "./style";
import { TiSocialInstagramCircular } from "react-icons/ti";

const FooterDashboard = () => {
  return (
    <Container>
      <div className="contact">
        <div className="flex">
          <MdEmail />
          <p>ajuda-rctlog@rctlog.com.br</p>
        </div>
        <p>08:00 - 17:00 (seg-sex)</p>
      </div>
      <div className="contact">
        <div className="contact">
          <div className="flex">
            <BsGithub />
            <p>Suporte</p>
          </div>
          <p> Trabalhe Conosco</p>
        </div>
        <div className="contact">
          <BsFacebook className="facebook" />
          <TiSocialInstagramCircular className="pokeInsta" />
        </div>
      </div>
    </Container>
  );
};

export default FooterDashboard;
