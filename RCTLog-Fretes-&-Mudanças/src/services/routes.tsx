import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import ContentNotFound from "../components/ContentNotFound";
import DriverPosts from "../components/DriverPosts";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Homepage from "../pages/Homepage";
import Support from "../pages/Support";
import WorkWithUs from "../pages/WorkWithUs";
import ModalEditAnnouncement from "../components/ModalEditAnnouncement";
import ClientPosts from "../components/ClientPosts";

const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard/driver/posts" element={<DriverPosts />} />
        <Route path="/dashboard/client/posts" element={<ClientPosts />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/support" element={<Support />} />
        <Route path="/work-with-us" element={<WorkWithUs />} />
        <Route path="*" element={<ContentNotFound />} />
      </Routes>
    </>
  );
};

export default MainRoutes;
