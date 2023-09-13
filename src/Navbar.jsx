/* eslint-disable no-unused-vars */
import React from 'react'
import Logo from "./assets/icons/Logo.svg"
import menu from "./assets/icons/menu.svg"

import "./Navbar.css"

const Navbar = () => {
    return (
        <nav className='navbar'>

            <img src={Logo} alt="" />

            <img src={menu} alt="" />


        </nav>
    )
}

export default Navbar