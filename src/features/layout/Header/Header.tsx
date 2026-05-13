import { FiSearch, FiShoppingCart, FiX } from "react-icons/fi";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useCartStore } from "../../cart/store/cartStore";
import { useState } from "react";
import "./Header.scss";

export const Header = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { items } = useCartStore();

  const [input, setInput] = useState(
    searchParams.get("search") || ""
  );

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    if (input.trim()) {
      navigate(`/?search=${input}`);
    } else {
      navigate(`/`);
    }
  };

  const clearSearch = () => {
    setInput("");
    navigate("/");
  };

  const cartCount = items.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  return (
    <header className="header">
      <div
        className="header__logo"
        onClick={() => navigate("/")}
      >
        ShopX
      </div>

      <form
        className="header__search"
        onSubmit={handleSearch}
      >
        <FiSearch className="header__search-icon" />

        <input
          className="header__search-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Search products..."
          onKeyDown={(e) => {
            if (e.key === "Escape") {
              clearSearch();
            }
          }}
        />

        {input && (
          <button
            type="button"
            className="header__search-clear"
            onClick={clearSearch}
          >
            <FiX />
          </button>
        )}
      </form>

      <div
        className="header__cart"
        onClick={() => navigate("/cart")}
      >
        <FiShoppingCart className="header__cart-icon" />

        {cartCount > 0 && (
          <span className="header__badge">
            {cartCount}
          </span>
        )}
      </div>
    </header>
  );
};