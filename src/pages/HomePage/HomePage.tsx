import { useSearchParams } from "react-router-dom";
import { useProducts } from "../../features/product/hooks/useProducts"
import { ProductGrid } from "./components/ProductGrid"
import { CategoryChips } from "../../features/filters/ui/CategoryChips"
import { Pagination } from "../../features/filters/ui/Pagination"
import { SortSelect } from "../../features/filters/ui/SortSelect"

export const HomePage = () => {
  const [params] = useSearchParams();

  const search = params.get("search") || ""
  const category = params.get("category") || ""
  const page = Number(params.get("page") || 1)
  const sort = params.get("sort") || ""

  const { data, isLoading } = useProducts({
    search,
    category,
    page,
    limit: 12,
    sort
  })

  return (
    <div className="home">

      <CategoryChips />
      <SortSelect/>

      <ProductGrid
        products={data?.products || []}
        isLoading={isLoading}
      />

      {(data?.total ?? 0) > 0 && (
        <Pagination total={data?.total} limit={12} />
      )}

    </div>
  );
};