import React from 'react';
import './AboutStyle.css';
import ContentList from './ContentList';

const AboutContent = () => {
    return (
        <>
            <div className="container aboutContainer">
                <div className="row">
                    <div className="col-lg-6">
                        {/* //* Video on About page */}
                        <video src='Images/Estee-Video.mp4' autoPlay loop muted preload='none' />
                    </div>
                    <div className="col-lg-6">
                        <p id='aboutusheading'>ABOUT US</p>
                        <h2>Esteemetal – The UAE based Industrial Commodities Supplier</h2>
                        <p>With a team of professionals, Esteemetal has built a tradition of serving customers by sourcing and delivering steel, metals, Ferro Alloys, and various industrial commodities to different parts of the world. At Esteemetal, you get an opportunity to acquire direct supplies from some of the finest producers of a variety of commodities and raw materials at competitive prices.</p>
                        <p>We treat our customers with high regard and focus on your best interests so that you gain benefit from the goods that we deliver. Our solutions are wrapped into sheets of reliability and commitment, making you a class apart along with enabling you to leave a mark in the industry.</p>
                    </div>
                </div>
            </div>
            <div className="container aboutContainer">
                <div className="row">
                    <div className="col-lg-9" id='myAboutContent'>
                        {
                            ContentList.map((elem, index) => {
                                const { h3, p } = elem
                                return (
                                    //* Every odd row has this class flex-row-reverse which reverses the order of cols inside the row 
                                    <div className={`row ${index % 2 === 0 ? '' : 'flex-row-reverse'}`} key={h3}>
                                        <div className='col-sm-8 p-4'>
                                            <h3>{h3}</h3>
                                            <p>{p}</p>
                                        </div>
                                        <div className='col-sm-4'>
                                            <img src="/Images/icon-logo.png" alt="Esteemetal logo without text" />
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="col-lg-3 pt-4">
                        {/* //* Click this anchor to download it */}
                        <a href="Pdfs/Esteemetal-Brochure.pdf" download target='_blank' title='Download Brochure'>
                            <img src="Images/long-1.jpg" alt="Download Brochure" />
                            <div className="caption">
                                <h2>Download Brochure</h2>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AboutContent;
