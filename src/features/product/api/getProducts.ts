import { api } from "../../../shared/api/axios"

type Product = {
  title: string;
  price: number;
  stock: number;
}

export const sortProducts = (
  products: Product[],
  sort: string
) => {
  const arr = [...products]

  switch (sort) {
    case "price-asc":
      return arr.sort((a, b) => a.price - b.price)

    case "price-desc":
      return arr.sort((a, b) => b.price - a.price)

    case "title-asc":
      return arr.sort((a, b) =>
        a.title.localeCompare(b.title)
      )

    case "title-desc":
      return arr.sort((a, b) =>
        b.title.localeCompare(a.title)
      )

    case "stock-asc":
      return arr.sort((a, b) => a.stock - b.stock)

    case "stock-desc":
      return arr.sort((a, b) => b.stock - a.stock)

    default:
      return arr
  }
}

export const getProducts = async (params: any) => {
  const limit = params.limit || 12
  const page = params.page || 1
  const skip = (page - 1) * limit

  let data

  if (params.category && params.category !== "all") {
    const res = await api.get(
      `/products/category/${params.category}`,
      {
        params: { limit, skip },
      }
    )

    data = res.data
  }

  else if (params.search) {
    const res = await api.get("/products/search", {
      params: {
        q: params.search,
        limit,
        skip,
      },
    })

    data = res.data
  }

  else {
    const res = await api.get("/products", {
      params: { limit, skip }
    })

    data = res.data
  }

  if (params.sort && data?.products) {
    data.products = sortProducts(
      data.products,
      params.sort
    )
  }

  return data
}