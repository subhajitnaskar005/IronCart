import React from 'react'
import "./Part2.css"
import accesoriesVideo from "./assets/vidssave.com Gym cinematic promotion video 1080P.mp4";
import clothesVideo from "./assets/vidssave.com GYMSHARK ATHLETE _ FX3 CINEMATIC 4K FITNESS VIDEO 360P.mp4";
export default function Part2() {
      function handleClick(data){
        if(data === "clothes") {window.location.href = "http://localhost:5173/gym_clothes/all";}
        else if(data === "accesories"){window.location.href = "http://localhost:5173/accesories/na";}
        else{<h1>Not Found...</h1>}
  }

    return (
        <div style={{ padding: "64px 5vw 24px", display:"flex",  flexWrap: "wrap", gap: "20px", paddingBottom:"80px"}}>
            <div className='iteams clothes'>
                <video  onClick={() => {handleClick("clothes")}} src={clothesVideo} autoPlay muted loop playsInline />
                <span style={{ fontWeight: "700", textTransform: "uppercase", fontSize: "36px" }}>gym clothes</span>
                <p style={{ color: " rgb(208, 208, 208)" }}>Tees, joggers, hoodies, compression wear</p>
            </div>
            <div className='iteams accesories'>
                <video onClick={() => {handleClick("accesories")}} src={accesoriesVideo} autoPlay muted loop playsInline />
                <span style={{ fontWeight: "700", textTransform: "uppercase", fontSize: "36px" }}>accesories</span>
                <p style={{ color: " rgb(208, 208, 208)" }}>Gloves, belts, bands, bottles, bags</p>
            </div>
        </div>
    )
}
