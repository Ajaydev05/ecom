import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Advertisement from "../components/Advertisement";
import { useCart } from "../context/CartContext";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const { addToCart } = useCart();

  useEffect(() => {
    axios.get("/api/products").then(res => setProducts(res.data));
  }, []);

  const filtered = products.filter(p =>
    (category === "all" || p.category === category) &&
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Navbar onSearch={setSearch} />
      <Advertisement />

      {/* CATEGORY FILTER */}
      <div style={{ padding: "20px", textAlign: "center" }}>
        {["all", "clothing", "books", "electronics", "accessories"].map(cat => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            style={{
              margin: "5px",
              padding: "8px 15px",
              cursor: "pointer"
            }}
          >
            {cat.toUpperCase()}
          </button>
        ))}
      </div>

      <div className="products">
        {filtered.map(p => (
          <div className="card" key={p._id}>
            <img src={p.image} alt={p.name} />
            <h3>{p.name}</h3>
            <p>₹{p.price}</p>
            <button onClick={() => addToCart(p)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <div className="footer">
        © 2026 ShopEase
      </div>
    </>
  );
}
