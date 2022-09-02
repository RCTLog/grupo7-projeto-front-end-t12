import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Register from "../pages/Register";

const MainRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<h2>HomePage</h2>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="*" element={<h2>Página não existe</h2>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default MainRoutes;
