import React from 'react'
import CarouselList from './CarouselList'
import Buttons from '../Buttons'

const ServiceCarouselSlides = () => {
  return (
    <>
    {/*//* carousel in service component */}
      <div className="carousel-inner">
        {
          CarouselList.map((elem) => {
            const { src, alt } = elem;
            return (
              <div className={`carousel-item ${alt === "Dubai landscape" ? "active" : ""}`} key={src}>
                <img className="d-block w-100" src={src} alt={alt} />
                <div className='carousel-caption'>
                  <h6>DUBAI - THE BUSINESS HUB</h6>
                </div>
              </div>
            )
          })
        }
      </div>
      {
        //* Previous and Next Buttons for carousel 
        Buttons.map((elem) => {
          const { forr, content } = elem;
          return (
            <a className={`carousel-control-${forr}`} href="#myCarousel" role="button" data-bs-slide={forr} key={forr}>
              <span className={`carousel-control-${forr}-icon`} aria-hidden="true" />
              <span className="sr-only">{content}</span>
            </a>
          )
        })
      }
    </>
  )
}


export default ServiceCarouselSlides
