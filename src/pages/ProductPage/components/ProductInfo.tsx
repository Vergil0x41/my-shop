import { useCartStore } from "../../../features/cart/store/cartStore"

type Props = {
  product: any;
};

export const ProductInfo = ({ product }: Props) => {
  const { addToCart } = useCartStore();

  return (
    <div className="product-page__info">

      <h1>{product.title}</h1>

      <p className="price">${product.price}</p>

      <p className="desc">{product.description}</p>

      <button
        onClick={() =>
          addToCart({
            id: product.id,
            title: product.title,
            price: product.price,
            thumbnail: product.thumbnail,
            quantity: 1,
          })
        }
      >
        Add to cart
      </button>

    </div>
  );
};