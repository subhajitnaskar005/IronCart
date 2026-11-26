import { useState } from "react";

export default function CheckoutContent({data}) {
  const [items, setItems] = useState([...data]);
  const [method, setMethod] = useState("card");

  const total = items.reduce((sum, i) => sum + i.price * i.qty, 0);

  const changeQty = (id, delta) =>
    setItems(items.map((i) => (i.id === id ? { ...i, qty: Math.max(1, i.qty + delta) } : i)));

  const removeItem = (id) => setItems(items.filter((i) => i.id !== id));

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 20, padding: 24, background: "#000", color: "#fff" }}>

      {/* LEFT: table */}
      <table style={{ flex: "2 1 500px", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ background: "#ffd60a", color: "#000" }}>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Qty</th>
            <th>Total</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id} style={{ textAlign: "center", borderBottom: "1px solid #333" }}>
              <td><img src={item.image} alt={item.name} width="60" height="60" /></td>
              <td>{item.name}</td>
              <td>₹{item.price}</td>
              <td>
                <button onClick={() => changeQty(item.id, -1)}>-</button>
                {" "}{item.qty}{" "}
                <button onClick={() => changeQty(item.id, 1)}>+</button>
              </td>
              <td>₹{item.price * item.qty}</td>
              <td><button onClick={() => removeItem(item.id)}>×</button></td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* RIGHT: payment */}
      <div style={{ flex: "1 1 260px", background: "#ffd60a", color: "#000", padding: 20, borderRadius: 10 }}>
        <h3>Payment</h3>
        <p>Total: ₹{total}</p>

        <select value={method} onChange={(e) => setMethod(e.target.value)}>
          <option value="card">Card</option>
          <option value="upi">UPI</option>
          <option value="cod">Cash on delivery</option>
        </select>

        {method === "card" && (
          <div>
            <input placeholder="Card number" /><br />
            <input placeholder="Expiry" /> <input placeholder="CVV" />
          </div>
        )}
        {method === "upi" && <input placeholder="UPI id" />}

        <button style={{ marginTop: 12 }}>Pay ₹{total}</button>
      </div>
    </div>
  );
}