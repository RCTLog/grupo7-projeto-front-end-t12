import axios from "axios"

const api = axios.create({
  baseURL: "https://json-server-kenzie-fretes.herokuapp.com",
  timeout: 5000,
})

export default api
