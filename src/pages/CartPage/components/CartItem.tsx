import { useCartStore } from "../../../features/cart/store/cartStore"
import "./CartItem.scss"

type Props = {
  item: {
    id: number;
    title: string;
    price: number;
    thumbnail: string;
    quantity: number;
  };
};

export const CartItem = ({ item }: Props) => {
  const {
    addToCart,
    removeFromCart,
    decreaseQuantity,
  } = useCartStore();

  return (
    <div className="cart-item">

      <img
        src={item.thumbnail}
        alt={item.title}
        className="cart-item__img"
      />

      <div className="cart-item__info">
        <h4 className="cart-item__title">
          {item.title}
        </h4>

        <p className="cart-item__price">
          ${item.price}
        </p>
      </div>

      {/* QUANTITY */}
      <div className="cart-item__qty">

        <button onClick={() => decreaseQuantity(item.id)}>
          -
        </button>

        <span>{item.quantity}</span>

        <button onClick={() => addToCart(item)}>
          +
        </button>

      </div>

      {/* REMOVE */}
      <button
        className="cart-item__remove"
        onClick={() => removeFromCart(item.id)}
      >
        Remove
      </button>

    </div>
  );
};