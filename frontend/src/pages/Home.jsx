import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("/api/products").then(res => setProducts(res.data));
  }, []);

  return (
    <>
      <div className="header">ShopEase</div>

      <div className="hero">
        Welcome to ShopEase – Clothes, Books, Electronics
      </div>

      <div className="products">
        {products.map(p => (
          <div className="card" key={p._id}>
            <img src={p.image} />
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
