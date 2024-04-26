import axios from "axios";
import { backendApiUrl } from "../constant";

const instance = axios.create({
  baseURL: backendApiUrl, // Set your base URL
  timeout: 5000, // Set your timeout//
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("auth-token") || ""}`,
  },
});

export default instance;
