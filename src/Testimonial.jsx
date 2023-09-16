/* eslint-disable no-unused-vars */
import React from 'react'
import testimonial from './TestimonialData'
import "./Testimonial.css"
import dots from "./assets/icons/dot.svg"
import TestimonialCard from './TestimonialCard'

const Testimonial = () => {
    return (
        <div className='Testimonial'>

            <div className="Testimonial-heading">
                Our Testimonial
            </div>

            <div className="testimonialContent">

                <div className="testimonialContent">

                    {testimonial.map((data, index) => {
                        return (
                            <span key={index}>

                                <TestimonialCard

                                    pics={data.pics}

                                    text={data.text}

                                    name={data.name} />

                            </span>
                        )
                    })}

                </div>
            </div>

            <div className="dot-container">

                <img className='monita-dots' src={dots} alt="" />
            </div>


        </div>
    )
}

export default Testimonial