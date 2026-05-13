import { ProductCard } from "../../../features/product/ui/ProductCard"
import { Skeleton } from "../../../shared/api/ui/Skeleton"
import "./ProductGrid.scss"

type Props = {
  products: any[];
  isLoading: boolean;
};

export const ProductGrid = ({ products, isLoading }: Props) => {
  if (isLoading) {
    return (
      <div className="grid">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="grid__skeleton-card">
            <Skeleton height="180px" />
            <Skeleton height="16px" />
            <Skeleton height="16px" width="60%" />
            <Skeleton height="36px" />
          </div>
        ))}
      </div>
    )
  }

  if (!products.length) {
    return (
      <div className="grid__empty">
        No products found 😕
      </div>
    )
  }

  return (
    <div className="grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}