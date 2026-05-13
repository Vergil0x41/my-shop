import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useCartStore } from "../../cart/store/cartStore"
import "./ProductCard.scss"

type Props = {
  product: any;
};

export const ProductCard = ({ product }: Props) => {
  const navigate = useNavigate();
  const { addToCart } = useCartStore();

  const [imgIndex, setImgIndex] = useState(0);

  const images = product.images || [product.thumbnail];

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();

    addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      thumbnail: product.thumbnail,
      quantity: 1,
    });
  };

  return (
    <div
      className="product-card"
      onClick={() => navigate(`/product/${product.id}`)}
    >
      {/* IMAGE / SLIDER */}
      <div className="product-card__image">
        <img src={images[imgIndex]} alt={product.title} />

        {images.length > 1 && (
          <div className="product-card__dots">
            {images.map((_: any, i: number) => (
              <span
                key={i}
                className={`dot ${i === imgIndex ? "active" : ""}`}
                onClick={(e) => {
                  e.stopPropagation();
                  setImgIndex(i);
                }}
              />
            ))}
          </div>
        )}
      </div>

      {/* INFO */}
      <div className="product-card__info">
        <h3 className="product-card__title">
          {product.title}
        </h3>

        <div className="product-card__price">
          ${product.price}
        </div>

        <button
          className="product-card__button"
          onClick={handleAddToCart}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};