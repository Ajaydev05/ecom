import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cart, removeFromCart, clearCart } = useCart();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div style={{ padding: "40px" }}>
      <h2>Shopping Cart</h2>

      {cart.length === 0 && <p>Your cart is empty</p>}

      {cart.map(item => (
        <div key={item._id} style={{ marginBottom: "20px" }}>
          <img src={item.image} width="100" />
          <h3>{item.name}</h3>
          <p>₹{item.price} × {item.quantity}</p>
          <button onClick={() => removeFromCart(item._id)}>
            Remove
          </button>
        </div>
      ))}

      {cart.length > 0 && (
        <>
          <h3>Total: ₹{total}</h3>
          <button onClick={clearCart}>Clear Cart</button>
        </>
      )}
    </div>
  );
}
