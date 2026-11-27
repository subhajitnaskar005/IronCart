import React, { useContext, useEffect, useState } from 'react'
import "./Cart.css"
import FavoriteIcon from '@mui/icons-material/Favorite';
import { WhistlistContext } from "./WhistListContext";
import localforage from 'localforage';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
export default function Cart({ data }) {
    let [whistSymbol, setWhistSymbol] = useState(true)
    let { checkoutCartCount, setCheckoutCartCount } = useContext(WhistlistContext)

    // TO update the whiatlist
    function updateStates() {
        setWhistSymbol(!whistSymbol)
    }

    // TO update the  localForge
    function updateCheckout() {
        async function updateForge() {
            localforage.setItem("checkoutCart", []);
            const d = await localforage.getItem("checkoutCart")
            await localforage.setItem("checkoutCart", [...d, data])
            let cart = await localforage.getItem("checkoutCart")
            // console.log(("Type of = ", typeof (cart), "cart data = ", cart));
    
                console.log("Cart data = ",cart);
    
                let filteredData = [
                    ...new Map(cart.map((m) => [m.id, m])).values()
                ]
                setCheckoutCartCount(filteredData ? filteredData.length : 0)
                console.log(checkoutCartCount);
        }
        updateForge()
    }


    return (
        <div className='cart' style={{ borderRadius: "12px", overflow: "hidden", display: "flex", flexDirection: "column", background: "rgb(27, 27, 27)" }}>
            <div style={{ height: "220px", maxWidth: "250px", display: "flex", alignItems: "center", justifyContent: "center", background: "rgb(42, 47, 36)" }}>
                <img src={`data:${data.imageType || "image/jpeg"};base64,${data.imageData}`} style={{ width: "100%", height: "100%", objectFit: "cover" }} alt='image' />
            </div>
            <div style={{ padding: "16px", display: "flex", flexDirection: "column", gap: "6px" }}>
                <p style={{ fontSize: "12px", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgb(168, 168, 168)" }}>{data.category ? data.category : "Cateogory"}{data.gender === "male" ? <p>(M)</p> : data.gender === "female" ? <p>(FM)</p> : <p>(AC)</p>}</p>
                <div style={{ display: "flex", alignItems: "baseline", gap: "10px" }}>
                    <span style={{ fontSize: "17px", fontWeight: "600", color: "rgb(244, 244, 244)" }}>{data.type ? data.type : "Tee"}</span>
                </div>
                <div style={{ display: "flex", gap: "10px" }}>
                    <span style={{ fontSize: "18px", fontWeight: "700" }}>₹ {data.salePrice ? data.salePrice : "799"}</span>
                    <span style={{ fontSize: "14px", textDecoration: "line-through", opacity: ".75" }}>{data.actualPrice ? data.actualPrice : "799"}</span>
                    <button onClick={updateStates} style={{ backgroundColor: "transparent", border: "none", color: "#fff", paddingLeft: "20px", cursor: "pointer" }}>{whistSymbol ? <FavoriteBorderIcon /> : <FavoriteIcon />}</button>
                    <button onClick={updateCheckout} style={{ backgroundColor: "transparent", border: "none", color: "#fff", cursor: "pointer" }}><ShoppingBasketIcon /></button>
                </div>
            </div>
        </div>
    )
}
