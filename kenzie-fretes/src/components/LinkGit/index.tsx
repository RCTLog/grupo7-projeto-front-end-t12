import { Link } from "react-router-dom";
import Container from "./style";

interface Link {
  src: string;
  alt: string;
  href: string;
}

const LinkGit = ({src, alt, href}: Link) => {
  return (
    <Container>
      <img src={src} alt={alt} />
      <a target="_blank" href={href}>{alt}</a>
    </Container>
  )
}

export default LinkGit;