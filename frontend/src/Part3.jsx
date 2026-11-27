import React from 'react'
import Cart from './Cart'
import "./Part3.css"
import man_cloth from "./assets/Man_clothes_banner.avif"
export default function Part3() {
  return (
    <div style={{ overflow: "hidden", paddingTop:"80px", borderTop:"2px solid #D3D3D333"}}>
      <div style={{ width: "100vw", backgroundColor: "transparent"}}>
        <div className='men_cloth_main_img' >
          <img src={man_cloth} alt="img" />
          <div className='men_cloth_main_img_ic' style={{ padding: "48px 10vw 72px" }}>
            <h1 style={{ fontWeight: "900", fontSize: "40px", color: "yellow" }}>MEN'S BEAST MODE</h1>
            <p style={{ opacity: ".65", color: "#fff", fontWeight: "500" }}>BUILT TO LIFT. BORN TO DOMINATE.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
