import { useContext, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { UserContext } from "../../context/UserContext/UserProvider";
import api from "../../services/api";
import Container from "./styles";

const ModalEditAbout = ({ setModal }: any) => {
  const { currentUser, modalOpen, setModalOpen } = useContext(UserContext);

  const token = localStorage.getItem("@RCTL: Token")
  api.defaults.headers.common.Authorization = `Bearer ${token}`

  const Save = (e: any) => {
    e.preventDefault()

    api.patch(`users/${currentUser.id}`, { about: e.target[0].value }).then((res) => console.log(res)).catch((err) => console.error(err))
    setModal(null)
    setModalOpen(!modalOpen)
  }

  return (
    <Container>
      <div className="edit">
        <div className="title">
          <h3>Editar Sobre</h3>
          <AiOutlineClose
            size={25}
            onClick={() => { setModal(null) }}
          />
        </div>
        <form onSubmit={(e) => Save(e)} >
          <textarea
            name="edit-announcement"
            placeholder="Escreva aqui..."
            readOnly={false}
            defaultValue={currentUser.about}
            onChange={(e) => e.target.value}

          ></textarea>
          <button
            type="submit"
          >Salvar Alterações
          </button>
        </form>
      </div>
    </Container>
  );
};

export default ModalEditAbout;
