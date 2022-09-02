import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContentNotFound from "../components/ContentNotFound";
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
          <Route path="/dashboard" element={<h2>Dashboard Page</h2>} />

          <Route path="*" element={<ContentNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default MainRoutes;
