import { useQuery } from "@tanstack/react-query"
import { api } from "../../../shared/api/axios"

export const useProduct = (id: number) => {
  return useQuery({
    queryKey: ["product", id],
    queryFn: async () => {
      const { data } = await api.get(`/products/${id}`)
      return data;
    },
    enabled: !!id,
  })
};