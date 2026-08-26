import { create, type Axios } from "axios";
import { BASE_URL } from "./env";

export const api: Axios = create({
  baseURL: BASE_URL,
  timeout: 60000,
  headers: {
    "Content-Type": "application/json",
  },
});
