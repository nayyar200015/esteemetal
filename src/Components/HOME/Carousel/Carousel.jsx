import React, { useState } from 'react'
import CarouselList from './CarouselList'
import Buttons from '../Buttons'
import './carouselStyle.css'

//* This Carousel component is in Home page under Navbar 
const Carousel = () => {
    //* windowWidth contains the current innerwidth of the window. setWindowWidth() updates the windowWidth variable.
    const [innerWidth, setInnerWidth] = useState(window.innerWidth);
    //* This event function runs setWindowWidth() whenever window width changes. 
    window.addEventListener('resize', () => setInnerWidth(window.innerWidth))
    return (
        <>
            <div id="carouselExampleFade" className="carousel slide carousel-fade">
                <div className="carousel-inner">
                    {
                        CarouselList.map((elem) => {
                            const { src, alt, h1 } = elem;
                            return (
                                //* alt: Dubai landscape is the first slide to be active. 
                                <div className={`carousel-item ${alt === 'Dubai landscape' ? 'active' : ''}`} key={src}>
                                    <img src={src} className="d-block w-100" alt={alt} />
                                    <div className="carousel-caption position-absolute top-50">
                                        {/* //* This controls font-size of the carousel-caption when window width is less than 668px */}
                                        <h1 className={`fs-${innerWidth < 668 ? '6' : '2'}`}>{h1}</h1>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                {
                    //* Previous and Next Buttons for carousel 
                    Buttons.map((elem) => {
                        const { forr, content } = elem
                        return (
                            <button className={`carousel-control-${forr}`} type="button" data-bs-target="#carouselExampleFade" data-bs-slide={forr} key={forr}>
                                <span className={`carousel-control-${forr}-icon`} aria-hidden="true" />
                                <span className="visually-hidden">{content}</span>
                            </button>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Carousel