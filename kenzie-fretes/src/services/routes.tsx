import { BrowserRouter, Routes, Route } from "react-router-dom"
import DriverPosts from "../components/DriverPosts"
import Login from "../pages/Login"
import Register from "../pages/Register"

const MainRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<h2>HomePage</h2>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<h2>Dashboard Page</h2>} />
          <Route path="/dashboard/driver/posts" element={<DriverPosts />} />

          <Route path="*" element={<h2>Página não existe</h2>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default MainRoutes
