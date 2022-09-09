import { AiOutlineClose } from "react-icons/ai"
import Container from "./style"
import { useState } from "react"
import { AnyMessageParams } from "yup/lib/types"
import api from "../../services/api"
import { useContext } from "react"
import { UserContext } from "../../context/UserContext/UserProvider"
import { Grid, IconButton } from "@mui/material"
import CInput from "../Input"
import CButton from "../Button"
import { SelectStates } from "../Select"
import { toast } from "react-toastify"
import { useLogin } from "../../context/LoginContext/LoginProvider"

const ModalEditSolicitation = ({
  setModal,
  postId,
  reload,
  setReload,
}: any) => {
  const { currentUser, setModalOpen, modalOpen } = useContext(UserContext)
  const { loading, setLoading } = useLogin()

  const token = localStorage.getItem("@RCTL: Token")
  const Save = (e: any) => {
    e.preventDefault()

    api
      .patch(
        `/services/${postId}`,
        {
          description: e.target.postDescription.value,
          origin: [
            {
              city: e.target.originCity.value,
              state: e.target.originState.value,
            },
          ],
          destination: [
            {
              city: e.target.destinationCity.value,
              state: e.target.destinationState.value,
            },
          ],
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => res)
      .catch((err) => console.error(err))

    toast.success(
      currentUser.typeUser === "Motorista"
        ? "Serviço editado com sucesso!"
        : "Solicitação de serviço editada com sucesso!"
    )
    setReload(!reload)
    setModal(null)
    setModalOpen(!modalOpen)
  }

  const deletePost = (e: any) => {
    e.preventDefault()

    api.delete(`/services/${postId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    toast.success(
      currentUser.typeUser === "Motorista"
        ? "Serviço deletado!"
        : "Solicitação de serviço deletada!"
    )
    setModal(null)
    setModalOpen(!modalOpen)

    setReload(!reload)
  }

  return (
    <Container>
      <div className="edit">
        <div className="title">
          <h2>Editar solicitação</h2>
          <IconButton onClick={() => setModal(null)}>
            <AiOutlineClose size={25} />
          </IconButton>
        </div>
        <form onSubmit={Save}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <CInput
                label="Descrição"
                id="description"
                placeholder="Digite a sua descrição..."
                multiline
                rows={4}
                name="postDescription"
              />
            </Grid>
            <Grid item xs={6}>
              <CInput
                type="text"
                id="origin"
                label="Cidade de origem"
                variant="outlined"
                className="input-origin"
                placeholder="Cidade e estado de origem..."
                name="originCity"
              />
            </Grid>
            <Grid item xs={6}>
              <CInput
                type="text"
                id="Destination"
                label="cidade de destino"
                variant="outlined"
                className="input-destination"
                placeholder="Cidade e estado de destino..."
                name="destinationCity"
              />
            </Grid>

            <Grid item xs={6}>
              <SelectStates Label="Origem" name="originState" />
            </Grid>

            <Grid
              item
              xs={6}
              sx={{ display: "flex", justifyContent: "flex-end" }}
            >
              <SelectStates Label="Destino" name="destinationState" />
            </Grid>

            <Grid item xs={9}>
              <CButton variant="outlined" type="submit">
                Salvar Alterações
              </CButton>
            </Grid>
            <Grid item xs={3}>
              <CButton
                variant="text"
                color="error"
                size="large"
                onClick={deletePost}
              >
                Deletar Post
              </CButton>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  )
}

export default ModalEditSolicitation
