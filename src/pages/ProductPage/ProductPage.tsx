import { useParams } from "react-router-dom";
import { useProduct } from "../../features/product/hooks/useProduct";
import { ProductGallery } from "./components/ProductGallery"
import { ProductInfo } from "./components/ProductInfo"
import "./ProductPage.scss"
import { useNavigate } from "react-router-dom"
import { FiArrowLeft } from "react-icons/fi"

export const ProductPage = () => {
  const { id } = useParams()

  const navigate = useNavigate()

  const { data, isLoading, error } = useProduct(Number(id))

  if (isLoading) return <div>Loading...</div>
  if (error || !data) return <div>Product not found</div>

  return (
    <div className="product-page">

      <button
      className="product-page__back"
      onClick={() => navigate(-1)}
      >
        <FiArrowLeft />
        Back
      </button>
      <div className="product-page__container">

        {/* LEFT - GALLERY */}
        <ProductGallery images={data.images} />

        {/* RIGHT - INFO */}
        <ProductInfo product={data} />

      </div>
    </div>
  );
};