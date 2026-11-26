import React, { useEffect } from "react";
import "./Navbar.css";
import { NavLink, useNavigate } from "react-router-dom";
import BadgeOverlap from "./BadgeOverlap";
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const styles = {
  navLinkReset: {
    textDecoration: "none",
    color: "inherit",
    border: "none",
    outline: "none",
    background: "transparent",
    padding: "0",
    margin: "0"
  }
};
export default function Navbar() {

    return (
        <header className="navbar">
            <div className="navbar__inner">
                <NavLink style={styles.navLinkReset} to="/ironcart"><h1 style={{ cursor: "pointer" }}>IRON<span className="navbar__accent">CART</span></h1></NavLink>
                <nav className="links">
                    <NavLink onClick={() => setIconType(true)} className="navigate" to="/ironcart" end>Home</NavLink>
                    <NavLink onClick={() => setIconType(true)} className="navigate" to="/men_clothes/male">Men</NavLink>
                    <NavLink onClick={() => setIconType(true)} className="navigate" to="/women_clothes/female">Women</NavLink>
                    <NavLink onClick={() => setIconType(true)} className="navigate" to="/accesories/na">Accessories</NavLink>
                    <NavLink onClick={() => setIconType(true)} className="navigate" to="/sale">Sale</NavLink>
                </nav>

                <div className="navbar__actions">
                       <NavLink onClick={() => setIconType(false)} to="/whistList"><BadgeOverlap type="whistlist" value={<FavoriteIcon/>} /></NavLink>
                       <NavLink to="/checkout"><BadgeOverlap type="checkout" value={<ShoppingCartIcon/>}/></NavLink>
                </div>
            </div>
        </header>
    );
}