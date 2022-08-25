import React from 'react'
import "../styles/Header.css"
import { CgMathEqual } from "react-icons/cg";

function Header() {
  return (
    <div className = "header">
        <p className = "title">COMVICTS</p>
        <div className = "menu"><CgMathEqual size={35} /></div>
    </div>
  )
}

export default Header