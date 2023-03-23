import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://api.realworld.io",
});

export default apiClient;
