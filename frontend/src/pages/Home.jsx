import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("/api/products").then(res => setProducts(res.data));
  }, []);

  return (
    <div>
      <h1>Amazon-Style Store</h1>

      {products.map(p => (
        <div key={p._id}>
          <img src={p.image} width="200" />
          <h3>{p.name}</h3>
          <p>₹{p.price}</p>
          <button>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}
