/* eslint-disable no-unused-vars */
import React from 'react'
import data from './data'
import "./Home.css"
import Monita from './Monita'
import Testimonial from './Testimonial'
import Footer from './Footer'
import Navbar from './Navbar'
const Home = () => {



    return (
        <section className='Home'>
<Navbar/>
            <div className="first-frame">
                <h1 className="first-frame-head font-manrope">
                    Discover the water
                </h1>

                <p className="first-frame-text font-Manrope">
                    From pristine waters to majestic forests...we have it all
                </p>

                <button className="first-frame-cta">
                    Start Your Journey Today
                </button>

            </div>

            <div className="second-frame">
                {data.map((item, index) => {
                    return (
                        <div key={index} className="second-frame-info font-Manrope">

                            <div className="second-frame-heading">
                                {item.heading}
                            </div>

                            <div className="second-frame-des">
                                {item.des}
                            </div>



                        </div>
                    )
                })}



            </div>

            <Monita/>
            <Testimonial/>
            <Footer/>

           




        </section>
    )
}

export default Home