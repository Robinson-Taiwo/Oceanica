/* eslint-disable no-unused-vars */
import React from 'react'
import data from './tours'
import desktop from "./assets/images/desktopPic.jpg"
import dots from "./assets/icons/dot.svg"
import "./Monita.css"

const Monita = () => {
    return (
        <div className='Monita'>

            {data.map((item, index) => {
                return (

                    // eslint-disable-next-line react/jsx-key
                    <div key={index} className="monita-container font-Manrope">



                        <img className='monita-image' src={desktop} alt="" />

                        <h1 className="monita-heading font-Manrope">
                            {item.heading}
                        </h1>

                        <div className="monita-text">
                            {item.des}
                        </div>

                        <div className="monita-from">
                            {item.from}
                        </div>


                    </div>

                )
            })}


            <div className="dot-container">

                <img className='monita-dots' src={dots} alt="" />
            </div>

        </div>
    )
}

export default Monita
