import axios from "axios";

const api = axios.create({
  baseURL: "https://json-server-kenzie-fretes.herokuapp.com",
  timeout: 5000,
});

const token = localStorage.getItem("@RCTL: Token");
api.defaults.headers.common.Authorization = `Bearer ${token}`;

export default api;
