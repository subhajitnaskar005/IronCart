import { useContext, useEffect, useState } from "react";
import "./Cart.css"
import { WhistlistContext } from "./WhistListContext"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
export default function WhislistCart({ data }) {
    let {setUpdatedWhistlist,updatedWhistlist} = useContext(WhistlistContext)
    let [updateWhistlist, setUpdateWhistlist] = useState([data])
    let[cartData, setCartData] = useState(updatedWhistlist)
    // useEffect(() => {
    //     setCartData(...cartData, updateWhistlist)
    // },[updateWhistlist])
    // console.log("CartData = ",cartData);
    
    console.log("Update wlist = ",updateWhistlist);
    function passData() {
        const update = updateWhistlist.filter((f) => f.id !== data.id) 
        setUpdateWhistlist([...update])
        localStorage.setItem(
            "whistlist",
            JSON.stringify(update)
        );
        setUpdatedWhistlist(updateWhistlist)
    }

    function getList(key){
        try{
            const value = JSON.parse(localStorage.getItem(key))
            return Array.isArray(value) ? value : [];
        }catch{
            return [];
        }
    }

    return (
        <div className='cart' style={{ borderRadius: "12px", overflow: "hidden", display: "flex", flexDirection: "column", background: "rgb(27, 27, 27)" }}>
            {
                updateWhistlist.map((m) => (
                    <div key={m.id}>
                        <div style={{ height: "220px", maxWidth: "250px", display: "flex", alignItems: "center", justifyContent: "center", background: "rgb(42, 47, 36)" }}>
                            <img src={`data:${m.imageType || "image/jpeg"};base64,${m.imageData}`} style={{ width: "100%", height: "100%", objectFit: "cover" }} alt='image' />
                        </div>
                        <div style={{ padding: "16px", display: "flex", flexDirection: "column", gap: "6px" }}>
                            <p style={{ fontSize: "12px", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgb(168, 168, 168)" }}>{m.category ? m.category : "Cateogory"}{m.gender === "male" ? <p>(M)</p> : m.gender === "female" ? <p>(FM)</p> : <p>(AC)</p>}</p>
                            <div style={{ display: "flex", alignItems: "baseline", gap: "10px" }}>
                                <span style={{ fontSize: "17px", fontWeight: "600", color: "rgb(244, 244, 244)" }}>{data.type ? data.type : "Tee"}</span>
                            </div>
                            <div style={{ display: "flex", gap: "10px" }}>
                                <span style={{ fontSize: "18px", fontWeight: "700" }}>₹ {m.salePrice ? m.salePrice : "799"}</span>
                                <span style={{ fontSize: "14px", textDecoration: "line-through", opacity: ".75" }}>{m.actualPrice ? m.actualPrice : "799"}</span>
                                <button onClick={passData} style={{ backgroundColor: "transparent", border: "none", color: "#fff", paddingLeft: "20px", cursor: "pointer" }}><AddShoppingCartIcon /></button>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
