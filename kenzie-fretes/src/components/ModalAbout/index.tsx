import { AiOutlineEllipsis } from "react-icons/ai";
import Container from "./style";

const ModalAbout = () => {
    return (
        <Container>
            <div className="description">
                <p>Descrição:</p>
                <span></span>
            </div>
            <AiOutlineEllipsis size={30} />
        </Container>
    )
}

export default ModalAbout;