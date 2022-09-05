import { AiOutlineClose } from "react-icons/ai";
import CInput from "../Input";
import Container from "./style";

const ModalEditInformation = () => {
    return (
        <Container>
            <div className="edit">
                <div className="title">
                    <h2>Editar</h2>
                    <AiOutlineClose size={25} />
                </div>
                <form>
                    <label htmlFor="image">Foto de perfil:</label>
                    <input type="text" id="image" placeholder="URL da imagem"/>

                    <label htmlFor="contact">Contato:</label>
                    <input type="text" id="contact" placeholder="Digite seu número"/>

                    <label htmlFor="">Estado:</label>
                    <select name="state" id="states-selection">
                        <option value="" selected disabled>Selecione seu Estado</option>
                        <option value="AC">AC</option>
                        <option value="AL">AL</option>
                        <option value="AP">AP</option>
                        <option value="AM">AM</option>
                        <option value="BA">BA</option>
                        <option value="CE">CE</option>
                        <option value="DF">DF</option>
                        <option value="ES">ES</option>
                        <option value="GO">GO</option>
                        <option value="MA">MA</option>
                        <option value="MT">MT</option>
                        <option value="MS">MS</option>
                        <option value="MG">MG</option>
                        <option value="PA">PA</option>
                        <option value="PB">PB</option>
                        <option value="PR">PR</option>
                        <option value="PE">PE</option>
                        <option value="PI">PI</option>
                        <option value="RJ">RJ</option>
                        <option value="RN">RN</option>
                        <option value="RS">RS</option>
                        <option value="RO">RO</option>
                        <option value="RR">RR</option>
                        <option value="SC">SC</option>
                        <option value="SP">SP</option>
                        <option value="SE">SE</option>
                        <option value="TO">TO</option>
                    </select>
                    
                    <button>Salvar Alterações</button>
                </form>
            </div>
        </Container>
    )
}

export default ModalEditInformation;