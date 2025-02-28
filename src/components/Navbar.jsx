// import React from "react";
import { Link, NavLink } from "react-router-dom";
import NavLogo from "../assets/dumbell.png";
import "../styles/navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import { useRef } from "react";

function Navbar() {
  const linksRef = useRef(null);

  const toggleLinks = () => {
    if (linksRef.current) {
      linksRef.current.classList.toggle("open");
    }
  };

  return (
    <div className="navbar">
      <div className="navbar_main">
        <Link to="/">
          <img src={NavLogo} alt="" className="nav_logo_img" />
        </Link>
        <div className="links" ref={linksRef}>
          <NavLink to="/">Ana Sayfa</NavLink>
          <NavLink to="/calculators">Hesaplayıcılar</NavLink>
          <NavLink to="/programs">Programlar</NavLink>
          <NavLink to="/contact">İletişim</NavLink>
        </div>
        <div className="menu">
          <button className="menu_button" onClick={toggleLinks}>
            <MenuIcon sx={{ color: "black" }} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
