import { useCartStore } from "../../features/cart/store/cartStore"
import { CartItem } from "./components/CartItem"
import { CartSummary } from "./components/CartSummary"
import "./CartPage.scss";

export const CartPage = () => {
  const { items } = useCartStore()

  if (items.length === 0) {
    return (
      <div className="cart-page cart-page--empty">
        Your cart is empty 🛒
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="cart-page__container">

        {/* LEFT - ITEMS */}
        <div className="cart-page__items">
          {items.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>

        {/* RIGHT - SUMMARY */}
        <CartSummary items={items} />

      </div>
    </div>
  )
}