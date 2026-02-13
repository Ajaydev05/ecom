import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Advertisement from "../components/Advertisement";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.get("/api/products").then(res => {
      setProducts(res.data);
    });
  }, []);

  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Navbar onSearch={setSearch} />
      <Advertisement />

      <div className="products">
        {filtered.map(p => (
          <div className="card" key={p._id}>
            <img src={p.image} alt={p.name} />
            <h3>{p.name}</h3>
            <p>₹{p.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>

      <div className="footer">
        © 2026 ShopEase | support@shopease.com
      </div>
    </>
  );
}
