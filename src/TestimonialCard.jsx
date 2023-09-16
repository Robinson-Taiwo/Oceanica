/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
// import testimonial from './Testimonial'
import "./TestimonialCard.css"

const TestimonialCard = ({ text, pics, name }) => {
    return (
        <div className='TestimonialCard'>

            <img className='TestimonialCardImage' src={pics} alt="" />

            <div className='testimonialCardText'>
                {text}
            </div>

            <div className="testimonialCardName">
                {name}

            </div>
        </div>
    )
}

export default TestimonialCard
