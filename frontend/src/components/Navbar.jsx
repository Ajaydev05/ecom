import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="navbar">
      <div className="logo">ShopEase</div>

      <input
        type="text"
        placeholder="Search products..."
        value={query}
        onChange={handleSearch}
        className="search"
      />

      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/cart">Cart</Link>
      </div>
    </div>
  );
}
