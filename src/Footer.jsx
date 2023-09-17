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


            <div className="footerHeadLinks">


                <div>

                    <h1 className="footerLinks-heading">
                        About & Support
                    </h1>

                    <div className='footer-line'>
                    </div>
                </div>



                <div>


                    <h1 className="footerLinks-heading">
                        Packages & Deals
                    </h1>


                    <div className='footer-line'>
                    </div>
                </div>


                <div>


                    <h1 className="footerLinks-heading">
                        Legal
                    </h1>


                    <div className='footer-line'>
                    </div>
                </div>

            </div>

            <div className="footerLinks">

                <div className="footerLinks1">



                    <div className="linkf">

                        <p className="footer-linkText">
                            Home
                        </p>
                    </div>

                    <div className="linkf">

                        <p className="footer-linkText">
                            Tours
                        </p>
                    </div>


                    <div className="linkf">

                        <p className="footer-linkText">
                            Pricing
                        </p>
                    </div>


                    <div className="linkf">

                        <p className="footer-linkText">
                            Contact & Support
                        </p>
                    </div>


                    <div className="linkf">

                        <p className="footer-linkText">
                            FAQs
                        </p>
                    </div>



                </div>

                <div className="footerLinks2">



                    <div className="linkf">

                        <p className="footer-linkText">
                            Travel Blog
                        </p>
                    </div>

                    <div className="linkf">

                        <p className="footer-linkText">
                            Subscriptions
                        </p>
                    </div>

                    <div className="linkf">

                        <p className="footer-linkText">
                            Popular Destinations
                        </p>
                    </div>

                    <div className="linkf">

                        <p className="footer-linkText">Last Minute Packages
                        </p>
                    </div>

                    <div className="linkf">

                        <p className="footer-linkText">
                            Site Map
                        </p>
                    </div>





                </div>

                <div className="footerLinks3">



                    <div className="linkf">

                        <p className="footer-linkText">
                            Terms & Conditions
                        </p>
                    </div>

                    <div className="linkf">

                        <p className="footer-linkText">
                            Privacy Statement
                        </p>
                    </div>

                    <div className="linkf">

                        <p className="footer-linkText">
                            Cookie Policy
                        </p>
                    </div>

                    <div className="linkf">

                        <p className="footer-linkText">
                            Disclaimer
                        </p>
                    </div>


                    <div className="linkf">

                        <p className="footer-linkText">
                            Payment Options
                        </p>
                    </div>




                </div>

            </div>

            <div className="footer-email">

                <div className="footerEmail-text">
                    Sign Up to receive 10% off your first package deal*
                </div>

            </div>


        </div>
    )
}

export default Footer