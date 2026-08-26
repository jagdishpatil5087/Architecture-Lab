import axios from "axios";
import { BASE_URL } from "./env";

export const api = axios.create({
  baseURL: BASE_URL,
  timeout: 60000,
  headers: {
    "Content-Type": "application/json",
  },
});
