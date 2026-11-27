
import React from "react";
import "./Part4.css"
export default function Cart2({ imageData, usage }) {
  return (
    <div className="categories"
      style={{
        height: "100%",
        width: "100%",
        overflow: "hidden",
        borderRadius: "16px",
        position:"relative"
      }}
    >
      <img
        src={imageData}
        alt="Workout clothing"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        //   display: "block",
        display:"flex",
        opacity:".75"
        }}
      />
      <h5 style={{color:"#fff", position:"absolute", left:"15px", bottom:"5px"}}>{usage}</h5>
    </div>
  );
}