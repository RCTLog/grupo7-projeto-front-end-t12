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
import CustomSelect, { SelectStates } from "../Select";
import { IServices } from "./driver.interfaces";
import logo from "../../assets/logo.svg";
import { Container } from "./style";
import FooterDashboard from "../FooterDashboard";

const DriverPosts = () => {
  const { user } = useLogin();

  const [services, setServices] = useState<IServices[]>([]);
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState(false);
  const [originFilter, setOriginFilter] = useState("SP");
  const [destinationFilter, setDestinationFilter] = useState("RJ");

  useEffect(() => {
    api.get<SetStateAction<IServices[]>>("/services").then(({ data }) => {
      setTimeout(() => {
        setLoading(false);
        setServices(data);
      }, 1000);
    });
  }, []);

  return (
    <>
      <Header />
      <Container>
        <Grid container spacing={2} className="filters">
          <Grid item xs={6} className="center">
            <SelectStates setState={setOriginFilter} Label="Origem" />
          </Grid>
          <Grid item xs={6} className="center">
            <SelectStates setState={setDestinationFilter} Label="Destino" />
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
              post.typeUser === "Motorista" && (
                <Grid
                  container
                  rowSpacing={2}
                  columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                  key={index}
                  className="post-card"
                >
                  <Grid item xs={12}>
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
            );
          })
        ) : (
          <p>Sem pedidos</p>
        )}
      </Container>
      <FooterDashboard />
    </>
  );
};

export default DriverPosts;
