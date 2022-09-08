import { Backdrop, CircularProgress } from "@mui/material"
import { useLogin } from "./context/LoginContext/LoginProvider"
import { Homepage } from "./pages/Homepage"
import MainRoutes from "./services/routes"

const App = () => {
  const { loading } = useLogin()

  return (
    <>
      <Backdrop
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backgroundColor: "rgb(13, 17, 23, 0.8)",
          color: "var(--color-primary)",
        }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <MainRoutes />
    </>
  )
}

export default App
