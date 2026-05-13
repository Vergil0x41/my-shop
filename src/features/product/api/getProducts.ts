import { api } from "../../../shared/api/axios";

type Product = {
  price: number;
  rating: number;
};

const sortProducts = (products: Product[], sort: string) => {
  const arr = [...products];

  switch (sort) {
    case "price-asc":
      return arr.sort((a, b) => a.price - b.price);

    case "price-desc":
      return arr.sort((a, b) => b.price - a.price);

    case "rating":
      return arr.sort((a, b) => b.rating - a.rating);

    default:
      return arr;
  }
};

export const getProducts = async (params: any) => {
  const limit = params.limit || 12;
  const page = params.page || 1;
  const skip = (page - 1) * limit;

  let data;

  // 1. CATEGORY
  if (params.category && params.category !== "all") {
    const res = await api.get(
      `/products/category/${params.category}`,
      {
        params: { limit, skip },
      }
    );

    data = res.data;
  }

  // 2. SEARCH
  else if (params.search) {
    const res = await api.get("/products/search", {
      params: {
        q: params.search,
        limit,
        skip,
      },
    });

    data = res.data;
  }

  // 3. DEFAULT
  else {
    const res = await api.get("/products", {
      params: { limit, skip }
    })

    data = res.data
  }

  // 🔥 SORTING LAYER (IMPORTANT)
  if (params.sort && data?.products) {
    data.products = sortProducts(
      data.products,
      params.sort
    );
  }

  return data;
};