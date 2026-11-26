import React, { useEffect, useState } from "react";
import axios from "axios";
import Cart from "./Cart";
import { useParams } from "react-router-dom";
import Loading from "./Loading";

export default function GymClothes() {
  const [clothes, setClothes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { gender } = useParams();
  useEffect(() => {
    axios.get("http://localhost:8081/gym_clothes")
      .then((res) => setClothes(Array.isArray(res.data) ? res.data : []))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Loading />;
  if (error) return <h2 style={{ color: "#fff" }}>Something went wrong: {error}</h2>;
  if (clothes.length === 0) return <h2 style={{ color: "#fff" }}>No products yet</h2>;

  return (
    <div style={{ backgroundColor: "#000", padding: "48px 11vw 72px", minHeight: "100vh", height: "auto" }}>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {clothes.map((c) => (
          gender === "all" || c.gender === gender ? (
            <div key={c.id}>
                <Cart data={c} />
            </div>
          ) : (null)
        ))}
      </div>
    </div>
  );
}