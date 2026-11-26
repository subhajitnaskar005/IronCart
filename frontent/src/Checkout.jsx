import { useContext, useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { WhistlistContext } from "./WhistListContext";
import localforage from "localforage";

const styles = {
  main: { minHeight: "100vh" },
  page: { display: "flex", flexWrap: "wrap", gap: "24px", maxWidth: "1000px", margin: "20px auto", padding: "24px", background: "#fff", borderRadius: "12px", fontFamily: "sans-serif", color: "#333" },
  left: { flex: "1 1 400px" },
  back: { display: "flex", alignItems: "center", gap: "8px", fontSize: "20px", background: "none", border: "none", cursor: "pointer", color: "#333", padding: 0 },
  line: { border: "none", borderTop: "1px solid #ddd", margin: "16px 0" },
  itemCard: { display: "flex", alignItems: "center", gap: "14px", padding: "14px", marginBottom: "14px", borderRadius: "10px", boxShadow: "0 2px 10px rgba(0,0,0,0.1)" },
  image: { width: "60px", height: "70px", objectFit: "cover", borderRadius: "8px", background: "#eee" },
  qtyButton: { width: "26px", height: "26px", background: "#fff", border: "1px solid #ccc", borderRadius: "6px", cursor: "pointer" },
  trash: { background: "none", border: "none", cursor: "pointer", color: "#aaa" },
  right: { flex: "0 0 340px", maxWidth: "100%", boxSizing: "border-box", alignSelf: "flex-start", padding: "24px", background: "#3b72cc", color: "#fff", borderRadius: "12px" },
  pillRow: { display: "flex", flexWrap: "wrap", gap: "8px", margin: "10px 0 16px" },
  input: { width: "100%", boxSizing: "border-box", padding: "14px", marginTop: "10px", color: "#fff", background: "rgba(255,255,255,0.18)", border: "none", borderRadius: "8px", fontSize: "15px" },
  error: { color: "#ffe08a", fontSize: "13px", margin: "4px 0 0" },
  row: { display: "flex", justifyContent: "space-between", margin: "10px 0" },
  checkout: { display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%", padding: "16px", marginTop: "20px", color: "#fff", fontWeight: "bold", background: "#52b4d4", border: "none", borderRadius: "8px", cursor: "pointer", fontSize: "15px" },
};

export default function Checkout({ onBack }) {

  const [tempCartData, setTempCartData] = useState([])

  // Get the localForge cart data and store it tempCartData 
  useEffect(() => {
    async function getCart() {
      const data = await localforage.getItem("checkoutCart")
      setTempCartData(data)
    }
    getCart()
  }, [])


  // Clearing localForgeData
  async function clearLocalForge() {
    await localforage.setItem("checkoutCart",[])
  }

  //Filtering only unique data from tempCartData
  const uniqueData = [
    ...new Map(tempCartData.map((m) => [m.id, m])).values()
  ]

  const [cart, setCart] = useState([]);
  // Executes only when tempCartData will update and it will set the CartData with uniqurData(It is variable where i am storing unique datas only)
  useEffect(() => {
    setCart(uniqueData)
  }, [tempCartData])

  const [qty, setQty] = useState([])
  const [address, setAddress] = useState("");
  const [payment, setPayment] = useState("card");
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [upiId, setUpiId] = useState("");

  const [errors, setErrors] = useState({});
  const [orderDone, setOrderDone] = useState(false);

  // ----- Price calculation -----
  let subtotal = 0;
  cart.forEach((item) => {
    const currentQty = qty.find((m) => m.id === item.id)?.qty || 0;
    subtotal += Number(item.salePrice || 799) * currentQty;
  });
  const shipping = subtotal === 0 || subtotal >= 999 ? 0 : 49;
  const total = subtotal + shipping;

  // ----- Cart buttons -----


  // Qty will change after each update of Cart (means when i add new data the  cart throw localForge it will update)
  useEffect(() => {
    setQty(cart.map((m) => ({ id: m.id, price: m.salePrice, qty: 1 }) || []))
  }, [cart])


  // Updating quantity and price
  function changeQty(id, update) {
    setQty(
      qty.map((item) => {
        if (item.id === id) {
          const newQty = update ? item.qty + 1 : Math.max(1, item.qty - 1);
          return { ...item, qty: newQty };
        }
        return item;
      })
    );
  }

  function removeItem(id) {
    async function cartData() {
      setCart(await localforage.setItem("checkoutCart", cart.filter((item) => item.id !== id)))
    }
    cartData()
  }

  // ----- Check the form, then place the order -----
  function placeOrder() {
    const newErrors = {};
    if (address.trim() === "") newErrors.address = "Enter your delivery address";

    if (payment === "card") {
      if (cardName.trim() === "") newErrors.cardName = "Enter the name on the card";
      if (cardNumber.replace(/\s/g, "").length !== 16) newErrors.cardNumber = "Card number must be 16 digits";
      if (!/^\d{2}\/\d{2}$/.test(expiry)) newErrors.expiry = "Use MM/YY";
      if (cvv.length < 3) newErrors.cvv = "3 or 4 digits";
    }
    if (payment === "upi" && !upiId.includes("@")) {
      newErrors.upiId = "Enter a valid UPI ID (name@bank)";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Connect your payment gateway here (Razorpay, Cashfree, etc.)
      setOrderDone(true);
    }

    setCheckoutCart([])
    setCCartCount(0)
  }

  // ----- Screens -----
  if (orderDone) {
    return (
      <div style={styles.page}>
        <div>
          <h2>Order placed ✓</h2>
          <p>We will deliver to: {address}</p>
          <p>{payment === "cod" ? `Pay ₹${total} on delivery.` : `₹${total} paid.`}</p>
        </div>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div style={styles.page}>
        <h2>Your cart is empty</h2>
      </div>
    );
  }

  return (
    <div style={styles.page}>
      <style>{`.co-input::placeholder { color: #e3ecff; } .co-input:focus { outline: 2px solid #fff; }`}</style>

      {/* ---------- LEFT: cart ---------- */}
      <div style={styles.left}>
        <button style={styles.back} onClick={onBack}>
          <ArrowBackIcon /> Continue shopping
        </button>
        <hr style={styles.line} />

        <p style={{ margin: "0 0 4px" }}>Shopping cart</p>
        <p style={{ margin: "0 0 20px", color: "#666" }}>
          You have {cart.length} item{cart.length > 1 ? "s" : ""} in your cart
        </p>

        {cart.map((item) => (
          <div style={styles.itemCard} key={item.id}>
            <img style={styles.image} src={`data:${item.imageType || "image/jpeg"};base64,${item.imageData}`} alt="product" />

            <div style={{ flex: 1 }}>
              <div style={{ fontSize: "17px", fontWeight: "bold" }}>{item.type || "Tee"}</div>
              <small style={{ color: "#777" }}>{item.category || "Category"}</small>
            </div>

            <button style={styles.qtyButton} onClick={() => changeQty(item.id, false)}>-</button>
            {qty.map((m) => (m.id == item.id && m.qty))}
            <button style={styles.qtyButton} onClick={() => changeQty(item.id, true)}>+</button>

            <span style={{ width: "70px", textAlign: "right", fontSize: "18px", fontWeight: "bold" }}>
              ₹{Number(item.salePrice || 799)}
            </span>

            <button style={styles.trash} onClick={() => removeItem(item.id)} aria-label="Remove item">
              <DeleteIcon />
            </button>
          </div>
        ))}
      </div>

      {/* ---------- RIGHT: payment ---------- */}
      <div style={styles.right}>
        <h2 style={{ marginTop: 0 }}>Payment details</h2>

        <input className="co-input" style={{ ...styles.input, marginTop: 0 }} placeholder="Delivery address" value={address} onChange={(e) => setAddress(e.target.value)} />
        {errors.address && <p style={styles.error}>{errors.address}</p>}

        <p style={{ marginBottom: 0 }}>Payment method</p>
        <div style={styles.pillRow}>
          {[["card", "Card"], ["upi", "UPI"], ["cod", "Cash on delivery"]].map(([value, label]) => (
            <button
              key={value}
              onClick={() => setPayment(value)}
              style={{
                padding: "10px 16px", borderRadius: "8px", cursor: "pointer", fontWeight: "bold",
                border: "none",
                background: payment === value ? "#fff" : "rgba(255,255,255,0.18)",
                color: payment === value ? "#3b72cc" : "#fff",
              }}
            >
              {label}
            </button>
          ))}
        </div>

        {payment === "card" && (
          <>
            <input className="co-input" style={styles.input} placeholder="Cardholder's Name" value={cardName} onChange={(e) => setCardName(e.target.value)} />
            {errors.cardName && <p style={styles.error}>{errors.cardName}</p>}

            <input className="co-input" style={styles.input} placeholder="Card Number" inputMode="numeric" maxLength={19} value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} />
            {errors.cardNumber && <p style={styles.error}>{errors.cardNumber}</p>}

            <div style={{ display: "flex", gap: "10px" }}>
              <div style={{ flex: 1 }}>
                <input className="co-input" style={styles.input} placeholder="Expiration (MM/YY)" maxLength={5} value={expiry} onChange={(e) => setExpiry(e.target.value)} />
                {errors.expiry && <p style={styles.error}>{errors.expiry}</p>}
              </div>
              <div style={{ flex: 1 }}>
                <input className="co-input" style={styles.input} placeholder="CVV" type="password" maxLength={4} value={cvv} onChange={(e) => setCvv(e.target.value)} />
                {errors.cvv && <p style={styles.error}>{errors.cvv}</p>}
              </div>
            </div>
          </>
        )}

        {payment === "upi" && (
          <>
            <input className="co-input" style={styles.input} placeholder="UPI ID (name@bank)" value={upiId} onChange={(e) => setUpiId(e.target.value)} />
            {errors.upiId && <p style={styles.error}>{errors.upiId}</p>}
          </>
        )}

        {payment === "cod" && <p>Pay in cash when your order arrives.</p>}

        <hr style={{ border: "none", borderTop: "1px solid rgba(255,255,255,0.4)", margin: "24px 0 10px" }} />

        <div style={styles.row}><span>Subtotal</span><span>₹{subtotal}</span></div>
        <div style={styles.row}><span>Shipping</span><span>{shipping === 0 ? "Free" : `₹${shipping}`}</span></div>
        <div style={styles.row}><span>Total (Incl. taxes)</span><span>₹{total}</span></div>

        <button style={styles.checkout} onClick={placeOrder}>
          <span>₹{total}</span>
          <span onClick={clearLocalForge} style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            {payment === "cod" ? "PLACE ORDER" : "CHECKOUT"} <ArrowForwardIcon fontSize="small" />
          </span>
        </button>
      </div>
    </div>
  );
}