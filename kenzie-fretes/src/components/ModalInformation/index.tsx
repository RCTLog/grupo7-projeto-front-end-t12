import { useContext } from "react";
import { AiOutlineEllipsis } from "react-icons/ai";
import { UserContext } from "../../context/UserContext/UserProvider";
import Container from "./style";

const ModalInformation = () => {
    const { currentUser } = useContext(UserContext);

    return (
        <Container>
            <div className="info">
                <p>Contato: <span>{currentUser[0]?.contact}</span></p>
                <p>Email: <span>{currentUser[0]?.email}</span></p>
                <p>Estado: <span>{currentUser[0]?.address[0]?.state}</span></p>
            </div>
            <AiOutlineEllipsis size={30} />
        </Container>
    )
}

export default ModalInformation;