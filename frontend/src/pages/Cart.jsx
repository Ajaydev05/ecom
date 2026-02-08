import { useEffect, useState } from "react";
import axios from "axios";

export default function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios.get("/api/cart", {
      headers: { Authorization: localStorage.getItem("token") }
    }).then(res => setCart(res.data));
  }, []);

  return (
    <div>
      <h2>Your Cart</h2>
      {cart.map((item, i) => (
        <p key={i}>{item.name} - ₹{item.price}</p>
      ))}
    </div>
  );
}
