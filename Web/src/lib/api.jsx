import axios from "axios";
const PORT = "https://celsodosfrangos.onrender.com/";

const api = axios.create({
  baseURL: PORT,
});

export default api;
