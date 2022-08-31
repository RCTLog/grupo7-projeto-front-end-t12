import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

const MainRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<h2>HomePage</h2>} />
          <Route path="/login" element={<h2>Login Page</h2>} />
          <Route path="/register" element={<h2>Register Page</h2>} />
          <Route path="/dashboard" element={<h2>Dashboard Page</h2>} />
          
          <Route path="*" element={<h2>Página não existe</h2>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default MainRoutes;
