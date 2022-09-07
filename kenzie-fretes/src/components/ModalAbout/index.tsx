import { useContext } from "react";
import { AiOutlineEllipsis } from "react-icons/ai";
import { UserContext } from "../../context/UserContext/UserProvider";
import Container from "./style";

const ModalAbout = () => {
    const { currentUser } = useContext(UserContext);

    return (
        <Container>
            <div className="description">
                <p>Descrição:</p>
                <span>{currentUser[0]?.about}</span>
            </div>
            <AiOutlineEllipsis size={30} />
        </Container>
    )
}

export default ModalAbout;