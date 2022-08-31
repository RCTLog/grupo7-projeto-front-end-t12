import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "../pages/Login"

const MainRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<h2>Página não existe</h2>} />
          <Route index element={<h2>HomePage</h2>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<h2>Register Page</h2>} />
          <Route path="/dashboard" element={<h2>Dashboard Page</h2>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default MainRoutes
