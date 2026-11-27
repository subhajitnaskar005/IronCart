
import React from "react";
import Cart2 from "./Cart2";

import running from "./assets/Running.avif"
import Lifitng from "./assets/Lifitng.avif"
import Hiit from "./assets/Hiit.avif" 
import RestDay from "./assets/RestDay.avif"
import Runn_wm from "./assets/Runn_wm.avif" 
import Lifting_wm from "./assets/Lifting_wm.avif" 
import Hiit_wm from "./assets/Hiit_wm.avif"
import Pilates_wm from "./assets/Pilates_wm.avif"

export default function GenderTypeUsageCart({ type }) {
  const mn = [
    { image:  running, usage:"RUNNING"},
    { image:  Lifitng, usage:"LIFTING"},
    { image: Hiit, usage:"HIIT"},
    { image:  RestDay, usage:"REST DAY"},
  ];

  const wm = [
    { image: Runn_wm, usage:"RUNNING"},
    { image: Lifting_wm, usage:"LIFTING"},
    { image:  Hiit_wm, usage:"HIIT"},
    { image:  Pilates_wm, usage:"PILATES"},
  ];

  const images = type === "male" ? mn : wm;

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "16px",
        width: "100%",
      }}
    >
      {images.map((item, index) => (
        <div
          key={index}
          style={{
            width: "298px",
            height: "417px",
            flexShrink: 0,
          }}
        >
          <Cart2 imageData={item.image} usage={item.usage} />
        </div>
      ))}
    </div>
  );
}