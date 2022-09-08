import { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext/UserProvider";
import api from "../../services/api";
import Container from "./style";
import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Skeleton,
} from "@mui/material";
import { SelectStates } from "../Select";
import { Iservices } from "./interface";

const ModalPoster = () => {
  const { currentUser } = useContext(UserContext);
  const [originFilter, setOriginFilter] = useState("SP");
  const [destinationFilter, setDestinationFilter] = useState("RJ");

  const Save = (e: any) => {
    e.preventDefault();
    console.log(currentUser);

    api
      .post<Iservices>(`/services`, {
        createUserId: currentUser.id,
        getUserid: null,
        description: e.target[0].value,
        origin: [
          {
            city: e.target[1].value,
            state: originFilter,
          },
        ],
        destination: [
          {
            city: e.target[2].value,
            state: destinationFilter,
          },
        ],
        typeUser: currentUser.typeUser,
      })
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  };

  return (
    <Container onSubmit={(e) => Save(e)}>
      <div className="input">
        <label htmlFor="text">Solicitar Serviço:</label>
        <textarea
          id="text"
          cols={30}
          rows={3}
          placeholder="Descreva seu serviço"
        />
      </div>

      <div className="origin-destination-container">
        <span className="label-input">
          <label htmlFor="origin">Cidade de origem: </label>
          <input type="text" id="origin" />
        </span>
        <span className="label-input">
          <label htmlFor="destination">Cidade de destino: </label>
          <input type="text" id="destination" />
        </span>
      </div>

      <Grid container spacing={2} className="filters">
        <Grid item xs={6} className="center">
          <SelectStates setState={setOriginFilter} Label="Origem" />
        </Grid>
        <Grid item xs={6} className="center">
          <SelectStates setState={setDestinationFilter} Label="Destino" />
        </Grid>
      </Grid>

      <button type="submit">Publicar</button>
    </Container>
  );
};

export default ModalPoster;
