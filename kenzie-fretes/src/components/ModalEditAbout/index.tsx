import { AiOutlineClose } from "react-icons/ai";
import Container from "./styles";

const ModalEditAnnouncement = () => {
  return (
    <Container>
      <div className="edit">
        <div className="title">
          <h3>Editar Sobre</h3>
          <AiOutlineClose size={25} />
        </div>
        <form>
          <textarea
            name="edit-announcement"
            placeholder="Escreva aqui..."
          ></textarea>
          <button type="submit">Salvar Alterações</button>
        </form>
      </div>
    </Container>
  );
};

export default ModalEditAnnouncement;
