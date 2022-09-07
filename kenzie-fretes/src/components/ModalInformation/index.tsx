import { AiOutlineEllipsis } from "react-icons/ai";
import Container from "./style";

const ModalInformation = () => {
    return (
        <Container>
            <div className="info">
                <p>Contato: <span>{/* buscar contato na api */}</span></p>
                <p>Email: <span>{/* buscar email na api */}</span></p>
                <p>Estado: <span>{/* buscar estado na api */}</span></p>
            </div>
            <AiOutlineEllipsis size={30} />
        </Container>
    )
}

export default ModalInformation;