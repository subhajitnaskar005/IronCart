import React, { useState } from 'react'
import ColorButtons from './ColorButtons'
import "./Part1.css"
import bannerVideo from "./assets/WHITNEY_ADAPT_PURPLE_8x3_Banner_1.mp4";

export default function Part1() {
  return (
    <div style={{padding: "149px 10vw", paddingBottom:"0px"}}>
      <div style={{ height: "auto", display: "flex"}}>
        <div style={{ width: "55%", fontFamily: "Barlow Condensed, sans-serif", fontWeight: "800", alignItems: "center", gap: "40px"}}>
          <p style={{ color: "yellow" }}>NEW SEASON DROP</p>
          <h1 style={{ fontSize: "70px", opacity: "90%" }}>GEAR UP.<br /> LIFT HEAVY.</h1>
          <p style={{fontWeight:"500", opacity:".55"}}>Performance clothing and training accessories built for every rep.</p>
          <div style={{ marginTop: "50px" }}>
            <a href="/gym_clothes/all"><button className='yellow-btn'>Shop Clothes</button></a>
            &nbsp;&nbsp;
            <a href="/accesories/na"><button className='black-btn'>Shop Aceesories</button></a>
          </div>
        </div>
        <div className='part1-section2'>
          <video src={bannerVideo} autoPlay muted loop playsInline />
        </div>
      </div>
      <div>
        <h1 style={{fontWeight:"900",paddingTop:"140px", display:"flex"}}>SHOP BY&nbsp;<span style={{color:"yellow"}}>C</span>ATEGORY</h1>
      </div>
    </div>
  )
}
