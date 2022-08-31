<<<<<<< HEAD
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
=======
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "../pages/Login"
>>>>>>> 79d3ce86b0215d837f3f151896da7358c2602e5f

const MainRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<h2>HomePage</h2>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<h2>Register Page</h2>} />
          <Route path="/dashboard" element={<h2>Dashboard Page</h2>} />
          
          <Route path="*" element={<h2>Página não existe</h2>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default MainRoutes;
