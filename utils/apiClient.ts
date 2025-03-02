import axios, { Axios } from "axios";

const API_PORT = "http://localhost:3002/";

const apiClient = axios.create({
  baseURL: API_PORT,
  headers: { "Content-Type": "application.json" },
});
export default apiClient;
