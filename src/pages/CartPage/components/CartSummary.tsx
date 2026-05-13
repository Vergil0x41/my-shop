import './CartSummary.scss'

export const CartSummary = ({ items }: any) => {
  const total = items.reduce(
    (acc: number, item: any) =>
      acc + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-summary">

      <h3>Order Summary</h3>

      <div className="cart-summary__row">
        <span>Items:</span>
        <span>
          {items.reduce(
            (acc: number, i: any) => acc + i.quantity,
            0
          )}
        </span>
      </div>

      <div className="cart-summary__row">
        <span>Total:</span>
        <span>${total.toFixed(2)}</span>
      </div>

      <button className="cart-summary__checkout">
        Checkout
      </button>

    </div>
  );
};