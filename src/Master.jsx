import React from 'react'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import GymClothes from './GymClothes'
import Iron from './Iron'
import Accesores from './Accesores'
import Sale from './Sale'
import Part1 from './Part1'
import Navbar from './Navbar'
import MenClothes from './MenClothes'
import WomenClothes from './WomenClothes'
import Signup from './Signup'
import Signin from './Signin'
import ProductCart from './ProductCart'
import Checkout from './Checkout'
// import Card from './Card'


export default function Master() {
  function Mainlayout() {
    return (
      <div style={{ backgroundColor: "#000", color: "#fff" }}>
        <Navbar />
        <Outlet />
      </div>
    )
  }
  return (
    <div>
      <BrowserRouter>
        {/* <Iron/> */}
        <div style={{ backgroundColor: "#000", color: "#fff" }}>
          <Routes>
            <Route element={<Mainlayout />}>
              <Route path="/ironcart" element={<Iron />}></Route>
              <Route path="/gym_clothes/:gender" element={<MenClothes />}></Route>
              <Route path="/men_clothes/:gender" element={<MenClothes />}></Route>
              <Route path="/women_clothes/:gender" element={<WomenClothes />}></Route>
              <Route path="/accesories/:gender" element={<Accesores />}></Route>
              <Route path="/sale" element={<Sale />}></Route>
              <Route path="/whistList" element={<ProductCart />}></Route>
              <Route path="/checkout" element={<Checkout/>}></Route>
            </Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/" element={<Signin />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}
