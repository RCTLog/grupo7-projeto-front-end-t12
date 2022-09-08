import { AiOutlineClose } from "react-icons/ai";
import Container from "./style";

const ModalEditSolicitation = () => {
  return (
    <Container>
      <div className="edit">
        <div className="title">
          <h2>Editar solicitação</h2>
          <AiOutlineClose size={25} />
        </div>
        <form>
          <div className="container-textarea">
            <label htmlFor="description">Descrição: </label>
            <textarea
              name=""
              id="description"
              cols={30}
              rows={10}
              placeholder="Digite a sua descrição..."
            ></textarea>
          </div>
          <div className="origin-destination-container">
            <span className="label-input">
              <label htmlFor="origin">origem: </label>
              <input type="text" id="origin" />
            </span>
            <span className="label-input">
              <label htmlFor="destination">Destino: </label>
              <input type="text" id="destination" />
            </span>
          </div>
          <button>Salvar Alterações</button>
        </form>
      </div>
    </Container>
  );
};

export default ModalEditSolicitation;
