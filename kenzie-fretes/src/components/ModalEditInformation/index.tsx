import { AiOutlineClose } from "react-icons/ai"
import Container from "./style"
import { useContext, useState } from "react"
import { UserContext } from "../../context/UserContext/UserProvider"
import api from "../../services/api"

const ModalEditInformation = ({ setModal }: any) => {
  const [text, setText] = useState("")
  const { currentUser, modalOpen, setModalOpen } = useContext(UserContext)

  const Save = (e: any) => {
    e.preventDefault()

    api
      .patch(`users/${currentUser.id}`, {
        userImg: e.target[0].value,
        contact: e.target[1].value,
        address: {
          street: "Rua dos bobos",
          number: 166,
          distric: "Volta redonda",
          state: e.target[2].value,
        },
      })
      .then((res) => res)
      .catch((err) => console.error(err))

    setModal(null)
    setModalOpen(!modalOpen)
  }

  return (
    <Container>
      <div className="edit">
        <div className="title">
          <h2>Editar</h2>
          <AiOutlineClose
            size={25}
            onClick={() => {
              setModal(null)
            }}
          />
        </div>
        <form onSubmit={(e) => Save(e)}>
          <label htmlFor="image">Foto de perfil:</label>
          <input
            type="text"
            id="image"
            placeholder="URL da imagem"
            defaultValue=""
          />

          <label htmlFor="contact">Contato:</label>
          <input
            type="text"
            id="contact"
            placeholder="Digite seu número"
            defaultValue=""
          />

          <label htmlFor="">Estado:</label>
          <select name="state" id="states-selection" defaultValue="">
            <option value="" selected disabled>
              Selecione seu Estado
            </option>
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

export default ModalEditInformation
