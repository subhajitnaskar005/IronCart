import React, { useContext, useEffect, useState } from 'react'   // added useEffect
import Cart from './Cart'
import {WhistlistContext} from "./WhistListContext"
import WhislistCart from './WhislistCart'

export default function ProductCart() {
   let data = JSON.parse(localStorage.getItem("whistlist")) || []
   let[localStorageData, setLocalStorageData] = useState([...data])
  //  setWhistCount(localStorageData.length)   
  return (
    <div style={{ backgroundColor: "#000", padding: "48px 14vw 72px", minHeight: "100vh", height: "auto" }}>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
          {localStorageData.map((m) => <WhislistCart key={m.id} data={m}/>)}
      </div>
    </div>
  )
}