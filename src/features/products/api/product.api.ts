import { api } from "@/services/api";
import { ENDPOINTS } from "./endpoints";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const getAllProductsApi = async () => {
  await delay(5000); // 5 seconds

  const response = await api.get(ENDPOINTS.GET_PRODUCTS);

  return response.data;
};

export const productsPromise = getAllProductsApi();
