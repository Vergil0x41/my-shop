import { api } from "../../../shared/api/axios"

export const getProducts = async (params: any) => {
  const limit = params.limit || 12;
  const page = params.page || 1;
  const skip = (page - 1) * limit;

  const baseParams: any = {
    limit,
    skip,
  };

  // SEARCH
  if (params.search) {
    baseParams.q = params.search;
    const { data } = await api.get("/products/search", {
      params: baseParams,
    });
    return data;
  }

  // CATEGORY
  if (params.category && params.category !== "all") {
    const { data } = await api.get(
      `/products/category/${params.category}`,
      {
        params: baseParams,
      }
    );
    return data;
  }

  // DEFAULT + SORT (SERVER SIDE)
  if (params.sort) {
    const [sortBy, order] = params.sort.split("-");

    baseParams.sortBy = sortBy; // price | title | stock | rating
    baseParams.order = order;   // asc | desc
  }

  const { data } = await api.get("/products", {
    params: baseParams,
  });

  return data;
};