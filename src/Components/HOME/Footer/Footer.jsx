import React from 'react'
import { Link } from 'react-router-dom'
import './FooterStyle.css'
import ProductContainerList from '../../PRODUCT/ProductContent/ProductContainerList';
import StickyIcons from './StickyIcons'

const Footer = () => {

    return (
        <>
            <footer id="footer">
                <div className="container py-5">
                    <div className="row">
                        <div className="col-lg-4 cc">
                            <img src="\Images\logo-esteemetals-rev.png" alt=" Esteemetal Logo" />
                            <p>
                                Esteemetal operates from Dubai-UAE as a trusted and professional trade supplier of steel, metals, ferro-alloys, and industrial raw materials, such as coal, etc.
                            </p>
                            <nav className='d-flex'>
                                <ul className="pagination justify-content-center">
                                    <li className="page-item">
                                        <a href="https://www.facebook.com/profile.php?id=100075805273181" target='_blank' id='fb' className="page-link" rel='noreferrer'><i className="fa fa-facebook" aria-hidden="true"></i>
                                        </a>
                                    </li>
                                    <li className="page-item">
                                        <a href="https://www.linkedin.com/company/estemeetal/" target='_blank' id='lnkdn' className="page-link" rel='noreferrer'><i className="fa fa-linkedin" aria-hidden="true"></i>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="col-lg-4 cc">
                            <h4><strong>PRODUCTS</strong></h4>
                            <ul className='nav flex-column'>
                                {
                                    ProductContainerList.map(elem => {
                                        const { h3 } = elem
                                        return (
                                            <li className='nav-item'
                                                key={h3}>
                                                <Link
                                                    className='nav-link text-capitalize'
                                                    to={`/products#${h3.split(' ').join('-')}`}>{h3}</Link></li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                        <div className="col-lg-4 cc">
                            <div id='contact'>
                                <ul>
                                    <li><b>Mailbox</b><hr /><p>P.O. Box 181500</p></li>
                                    <li><b>Phone</b><hr /><a href="callto:+97145579209">
                                        <p>+971 4 5579209</p>
                                    </a></li>
                                    <li><b>Fax</b><hr /><p>+971 4 3544981</p></li>
                                    <li><b>Email</b>
                                        <hr />
                                        <a href="mailto:gmc@esteemetal.com">
                                            <p>gmc@esteemetal.com</p>
                                        </a>
                                    </li>
                                    <li><b>Address</b><hr /><p>807, Ubora Commercial Tower</p></li>
                                    <li><hr /><p>Business Bay, Dubai, UAE.</p></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="smallContainer">
                    <div className="container">
                        <div className="row py-3" id='row2'>
                            <div className="col-lg-6 text-lg-start text-center">©2022 Esteemetal General Trading LLC. </div>
                            <div className="col-lg-6 text-lg-end text-center">Site developed by <a href='https://www.webinnovation.net/' target='_blank' rel='noreferrer'>webinnovation.net</a></div>
                        </div>
                    </div>
                </div>
                <StickyIcons />
            </footer>
        </>
    );
}

export default Footer;
