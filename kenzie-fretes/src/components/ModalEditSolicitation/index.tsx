import { AiOutlineClose } from "react-icons/ai"
import Container from "./style"
import { useState } from "react"
import { AnyMessageParams } from "yup/lib/types"
import api from "../../services/api"
import { useContext } from "react"
import { UserContext } from "../../context/UserContext/UserProvider"
import { Grid } from "@mui/material"
import CInput from "../Input"

const ModalEditSolicitation = ({ setModal }: any) => {
  const { currentUser, setModalOpen, modalOpen } = useContext(UserContext)

  const Save = (e: any) => {
    e.preventDefault()
    api
      .patch(`users/${currentUser.id}`, {
        description: e.target[0].value,
        origin: e.target[1].value,
        destination: e.target[2].value,
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
  )
}

export default ModalEditSolicitation
