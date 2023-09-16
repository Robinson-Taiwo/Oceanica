/* eslint-disable no-unused-vars */
import React from 'react'
import Logo from "./assets/icons/Logo.svg"
import "./Footer.css"

const Footer = () => {
    return (
        <div className='footer'>

            <div className="footer-logo">

                <img src={Logo} alt="" />
            </div>

            <ul >
                <li>1 The Marina</li>
                <li>Lakeside</li>
                <li>Oceanvile</li>
                <li>STATE</li>
                <li>XXXX-XXXX</li>
            </ul>


        </div>
    )
}

export default Footer