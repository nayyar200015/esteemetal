import React from 'react'
import { Link } from 'react-router-dom'
import ProductList from './ProductList'
import Buttons from '../Buttons'

const Product = () => {
    return (
        //* maps to containers, that contains different carousels and content
        ProductList.map(elem => {
            const { containerId, h6, h2, slides } = elem;
            return (
                <div className='container' key={containerId}>
                    <div className="row">
                        <div className="col-lg-6 cc">
                            <h6>{h6}</h6>
                            <h2>{h2}</h2>
                        </div>
                        <div className="col-lg-2 cc mt-4 mb-5">
                            <Link className='ap' to='/products'>All Products</Link>
                        </div>
                    </div>
                    <div className="row row2">
                        <div className="col-12">
                            <div id={"carouselExampleControls" + containerId} className="carousel slide" data-ride="carousel">
                                <div className="carousel-inner">
                                    {
                                        //* maps to carousels in each container 
                                        slides.map((elem) => {
                                            const { slide, h2_2, p, alt } = elem;
                                            return (
                                                <div className={`carousel-item user-select-none ${['Rolled Steel Metal', 'Sourcing'].includes(alt) ? 'active' : ''}`} key={alt}>
                                                    <img className="d-block w-100" src={slide} alt={alt} />
                                                    <div className='carousel-caption'>
                                                        <h2>{h2_2}</h2>
                                                        <div className="extra-field">Esteemetal</div>
                                                        <h3>&nbsp;&nbsp;</h3>
                                                        <p className="font-sm">{p}</p>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                {
                                    //* Previous and Next Buttons for carousel 
                                    Buttons.map(elem => {
                                        const { forr, content } = elem
                                        return (
                                            <a href={`#carouselExampleControls${containerId}`} role="button" data-bs-slide={forr} key={forr}>
                                                <span className={`carousel-control-${forr}-icon`} aria-hidden="true" />
                                                <span className="sr-only">{content}</span>
                                            </a>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
    );
}

export default Product;