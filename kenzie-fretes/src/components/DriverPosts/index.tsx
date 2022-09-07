import { PlaceOutlined } from "@mui/icons-material";
import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Skeleton,
} from "@mui/material";
import { SetStateAction, useEffect, useState } from "react";
import { useLogin } from "../../context/LoginContext/LoginProvider";
import api from "../../services/api";
import CButton from "../Button";
import Footer from "../Footer";
import Header from "../Header";
import CustomSelect from "../Select";
import { IServices } from "./driver.interfaces";
import logo from "../../assets/logo.svg";
import { Container } from "./style";

const DriverPosts = () => {
  const { user } = useLogin()

  const [services, setServices] = useState<IServices[]>([])
  const [loading, setLoading] = useState(true)

  const [originFilter, setOriginFilter] = useState("SP")
  const [destinationFilter, setDestinationFilter] = useState("RJ")

  useEffect(() => {
    api.get<SetStateAction<IServices[]>>("/services").then(({ data }) => {
      setTimeout(() => {
        setLoading(false)
        setServices(data)
      }, 1000)
    })
  }, [])

  return (
    <>
      <Header />
      <Container>
        <Grid container spacing={2} className="filters">
          <Grid item xs={6} className="center">
            <FormControl>
              <InputLabel id="origin">Origem</InputLabel>
              <CustomSelect
                id="origin"
                label="Origem"
                variant="outlined"
                defaultValue="all"
                onChange={(event) => {
                  setOriginFilter(`${event.target.value}`)
                }}
                startAdornment={<PlaceOutlined />}
              >
                <MenuItem value="all">Todos</MenuItem>
                <MenuItem value="AC">AC</MenuItem>
                <MenuItem value="AL">AL</MenuItem>
                <MenuItem value="AP">AP</MenuItem>
                <MenuItem value="AM">AM</MenuItem>
                <MenuItem value="BA">BA</MenuItem>
                <MenuItem value="CE">CE</MenuItem>
                <MenuItem value="ES">ES</MenuItem>
                <MenuItem value="GO">GO</MenuItem>
                <MenuItem value="MA">MA</MenuItem>
                <MenuItem value="MT">MT</MenuItem>
                <MenuItem value="MS">MS</MenuItem>
                <MenuItem value="MG">MG</MenuItem>
                <MenuItem value="PA">PA</MenuItem>
                <MenuItem value="PB">PB</MenuItem>
                <MenuItem value="PR">PR</MenuItem>
                <MenuItem value="PE">PE</MenuItem>
                <MenuItem value="PI">PI</MenuItem>
                <MenuItem value="RJ">RJ</MenuItem>
                <MenuItem value="RN">RN</MenuItem>
                <MenuItem value="RS">RS</MenuItem>
                <MenuItem value="RO">RO</MenuItem>
                <MenuItem value="RR">RR</MenuItem>
                <MenuItem value="SC">SC</MenuItem>
                <MenuItem value="SP">SP</MenuItem>
                <MenuItem value="SE">SE</MenuItem>
                <MenuItem value="TO">TO</MenuItem>
                <MenuItem value="DF">DF</MenuItem>
              </CustomSelect>
            </FormControl>
          </Grid>
          <Grid item xs={6} className="center">
            <FormControl>
              <InputLabel id="destination">Destino</InputLabel>

              <CustomSelect
                id="destination"
                label="Destino"
                variant="outlined"
                defaultValue="all"
                onChange={(event) => {
                  setDestinationFilter(`${event.target.value}`)
                }}
                startAdornment={<PlaceOutlined />}
              >
                <MenuItem value="all">Todos</MenuItem>
                <MenuItem value="AC">AC</MenuItem>
                <MenuItem value="AL">AL</MenuItem>
                <MenuItem value="AP">AP</MenuItem>
                <MenuItem value="AM">AM</MenuItem>
                <MenuItem value="BA">BA</MenuItem>
                <MenuItem value="CE">CE</MenuItem>
                <MenuItem value="ES">ES</MenuItem>
                <MenuItem value="GO">GO</MenuItem>
                <MenuItem value="MA">MA</MenuItem>
                <MenuItem value="MT">MT</MenuItem>
                <MenuItem value="MS">MS</MenuItem>
                <MenuItem value="MG">MG</MenuItem>
                <MenuItem value="PA">PA</MenuItem>
                <MenuItem value="PB">PB</MenuItem>
                <MenuItem value="PR">PR</MenuItem>
                <MenuItem value="PE">PE</MenuItem>
                <MenuItem value="PI">PI</MenuItem>
                <MenuItem value="RJ">RJ</MenuItem>
                <MenuItem value="RN">RN</MenuItem>
                <MenuItem value="RS">RS</MenuItem>
                <MenuItem value="RO">RO</MenuItem>
                <MenuItem value="RR">RR</MenuItem>
                <MenuItem value="SC">SC</MenuItem>
                <MenuItem value="SP">SP</MenuItem>
                <MenuItem value="SE">SE</MenuItem>
                <MenuItem value="TO">TO</MenuItem>
                <MenuItem value="DF">DF</MenuItem>
              </CustomSelect>
            </FormControl>
          </Grid>
        </Grid>

        {loading && (
          <>
            <Skeleton
              variant="rounded"
              animation="wave"
              width={"80%"}
              height={154}
              sx={{ maxWidth: "728px" }}
            />
            <Skeleton
              variant="rounded"
              animation="wave"
              width={"80%"}
              height={154}
              sx={{ maxWidth: "728px" }}
            />
            <Skeleton
              variant="rounded"
              animation="wave"
              width={"80%"}
              height={154}
              sx={{ maxWidth: "728px" }}
            />
          </>
        )}
        {services ? (
          services.map((post, index) => {
            return (
              post.typeUser !== user.type && (
                <Grid
                  container
                  rowSpacing={2}
                  columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                  key={index}
                  className="post-card"
                >
                  <Grid item xs={12}>
                    <p className="post-name">UserName</p>
                    <p className="post-description">{post.description}</p>
                  </Grid>
                  <Grid item xs={6} sm={4}>
                    <p>
                      Origem: {post.origin[0].city} - {post.origin[0].state}
                    </p>
                  </Grid>
                  <Grid item xs={6} sm={4}>
                    <p>
                      Destino: {post.destination[0].city} -{" "}
                      {post.destination[0].state}
                    </p>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <CButton variant="outlined">Iniciar Chat</CButton>
                  </Grid>
                </Grid>
              )
            )
          })
        ) : (
          <p>Sem pedidos</p>
        )}
      </Container>
      <Footer logo={logo} />
    </>
  )
}

export default DriverPosts
