import { useContext, useState } from "react"
import { UserContext } from "../../context/UserContext/UserProvider"
import api from "../../services/api"
import Container from "./style"
import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Skeleton,
} from "@mui/material"
import { SelectStates } from "../Select"
import { Iservices } from "./interface"
import CInput from "../Input"
import CButton from "../Button"

const ModalPoster = () => {
  const { currentUser } = useContext(UserContext)
  const [originFilter, setOriginFilter] = useState("SP")
  const [destinationFilter, setDestinationFilter] = useState("RJ")

  const Save = (e: any) => {
    e.preventDefault()

    api
      .post<Iservices>(`/services`, {
        createUserId: currentUser.id,
        getUserid: null,
        description: e.target[0].value,
        origin: [
          {
            city: e.target.origin.value,
            state: e.target[9].value,
          },
        ],
        destination: [
          {
            city: e.target.destination.value,
            state: e.target[11].value,
          },
        ],
        typeUser: currentUser.typeUser,
        contact: e.target.contact.value,
      })
      .then((res) => res)
      .catch((err) => console.error(err))
  }

  return (
    <Container onSubmit={(e) => Save(e)}>
      {currentUser.typeUser === "Motorista" ? (
        <label htmlFor="text">Postar Serviço:</label>
      ) : (
        <label htmlFor="text">Solicitar Serviço:</label>
      )}
      <Grid
        container
        spacing={2}
        className="filters"
        sx={{ justifyContent: "center" }}
      >
        <Grid item xs={12} sm={12} md={12}>
          <CInput
            multiline
            rows={4}
            label="Descrição"
            placeholder={
              currentUser.typeUser === "Motorista"
                ? "Insira mais detalhes sobre o serviço prestado"
                : "Insira mais detalhes do serviço solicitado"
            }
          />
        </Grid>

        <Grid item xs={12} sm={6} md={6}>
          <CInput
            label="Cidade de origem:"
            name="origin"
            placeholder="Ex:. Rio de Janeiro"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <CInput
            label="Cidade de destino:"
            name="destination"
            placeholder="Ex:. São Paulo"
          />
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <CInput
            label="Numero de celular"
            name="contact"
            placeholder="(12)55555-4444"
          />
        </Grid>
        <Grid item xs={6} className="select-1">
          <SelectStates setState={setOriginFilter} Label="Origem" />
        </Grid>
        <Grid item xs={6} className="select-2">
          <SelectStates setState={setDestinationFilter} Label="Destino" />
        </Grid>

        <Grid item xs={6}>
          <CButton type="submit" variant="contained" size="large">
            Enviar
          </CButton>
        </Grid>
      </Grid>
    </Container>
  )
}

export default ModalPoster
