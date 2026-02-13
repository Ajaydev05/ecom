import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Navbar({ onSearch }) {
  const { cart } = useCart();

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="navbar">
      <div className="logo">ShopEase</div>

      <input
        type="text"
        placeholder="Search products..."
        onChange={(e) => onSearch(e.target.value)}
        className="search"
      />

      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/cart">Cart ({totalItems})</Link>
      </div>
    </div>
  );
}
