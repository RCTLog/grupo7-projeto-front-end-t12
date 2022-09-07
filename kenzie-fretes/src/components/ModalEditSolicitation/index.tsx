import { AiOutlineClose } from "react-icons/ai";
import Container from "./style";
import CInput from "../Input";

const ModalEditSolicitation = () => {

  
  return (
    <Container>
      <div className="edit">
        
        <form>
        <div className="title">
          <h2>Editar solicitação</h2>
          <AiOutlineClose size={25} />
        </div>
          <div className="container-textarea">
            <CInput
              label="Descrição"
              id="description"
              maxRows={4}
              placeholder="Digite a sua descrição..."
              multiline
              rows={4}
            />
          </div>
          <div className="origin-destination-container">
            <CInput
              type="text"
              id="origin"
              label="Origem"
              variant="outlined"
              className="input-origin"
              placeholder="Cidade e estado de origem..."
            />

            <CInput
              type="text"
              id="Destination"
              label="Destino"
              variant="outlined"
              className="input-destination"
              placeholder="Cidade e estado de destino..."
            />
          </div>
          <button>Salvar Alterações</button>
        </form>
      </div>
    </Container>
  );
};

export default ModalEditSolicitation;
