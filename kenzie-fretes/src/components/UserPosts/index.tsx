import { PlaceOutlined } from "@mui/icons-material"
import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Skeleton,
} from "@mui/material"
import { useContext, useEffect, useState } from "react"
import { useLogin } from "../../context/LoginContext/LoginProvider"
import api from "../../services/api"
import CButton from "../Button"
import { IServices, IUserPostsProps } from "./User.interfaces"
import { Container } from "./style"
import { UserContext } from "../../context/UserContext/UserProvider"

const UserPosts = ({
  setReload,
  reload,
  setModal,
  postId,
  setPostId,
}: IUserPostsProps) => {
  const { user, loading, setLoading } = useLogin()

  const [services, setServices] = useState<IServices[]>([])
  const [originFilter, setOriginFilter] = useState("SP")
  const [destinationFilter, setDestinationFilter] = useState("RJ")

  const { currentUser } = useContext(UserContext)
  useEffect(() => {
    setLoading(true)
    api.get<IServices[]>("/services").then(({ data }) => {
      const userData = data.filter(
        (post) => post.createUserId === currentUser.id
      )

      setTimeout(() => {
        setLoading(false)
        setServices(userData.reverse())
      }, 1000)
    })
  }, [reload])

  return (
    <>
      <Container>
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
                <Grid item xs={12} sm={6} md={4}>
                  <p>
                    Origem: {post.origin[0].city} - {post.origin[0].state}
                  </p>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <p>
                    Destino: {post.destination[0].city} -{" "}
                    {post.destination[0].state}
                  </p>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <p>Telefone: {post.contact}</p>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <CButton
                    variant="contained"
                    onClick={() => {
                      setModal(2)
                      setPostId(post.id)
                    }}
                  >
                    Editar Anuncio
                  </CButton>
                </Grid>
              </Grid>
            )
          })
        ) : (
          <p>Sem pedidos</p>
        )}
      </Container>
    </>
  )
}

export default UserPosts
