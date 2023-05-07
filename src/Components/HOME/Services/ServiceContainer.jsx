import React from 'react'
import { Link } from 'react-router-dom'
import ServiceBox from './ServiceBox'
import ServiceCarouselSlides from './ServiceCarouselSlides'
import './serviceStyle.css'

const ServiceContainer = () => {
    return (
        <>
            {/* //* This container contains all the ServiceBoxes */}
            <section className='container overflow-hidden py-4' id='serviceContainer'>
                <div className="row">
                    <ServiceBox />
                </div>
            </section>
            {/* //* This container contains carousel and about information */}
            <section className="container mb-5" id='container2'>
                <div className="row">
                    <div className="col-lg-6 pb-3">
                        <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
                            <ServiceCarouselSlides />
                        </div>
                    </div>
                    <div className="col-lg-6 div2">
                        <h6>WELCOME</h6>
                        <h3><span>35</span> YEARS OF PROCUREMENT & SUPPLIES EXPERIENCE</h3>
                        <p>Esteemetal operates from Dubai-UAE as a trusted and professional trade supplier of steel, metals, ferro-alloys, and industrial raw materials, such as coal, etc.</p>
                        <button className='btn'><Link to='/about'>More</Link></button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ServiceContainer