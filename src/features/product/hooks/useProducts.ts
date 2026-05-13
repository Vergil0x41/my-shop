import { useQuery } from "@tanstack/react-query"
import { getProducts } from "../api/getProducts"

type Params = {
  search?: string;
  category?: string;
  sort?: string;
  page?: number;
  limit?: number;
};

export const useProducts = (params: Params) => {
  return useQuery({
    queryKey: [
      "products",
      params.search || "",
      params.category || "",
      params.sort || "",
      params.page || 1,
      params.limit || 12,
    ],

    queryFn: () => getProducts(params),

    keepPreviousData: true,
  })
}