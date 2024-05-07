
import axios from "axios";
import { backendApiUrl } from "../constant";

const instance = axios.create({
  baseURL: backendApiUrl, 
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("auth-token") || ""}`,
  },
});

export default instance;
