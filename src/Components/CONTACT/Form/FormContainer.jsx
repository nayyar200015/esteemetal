import React from 'react';
import Form from './Form';
import './FormStyle.css';

const FormContainer = () => {

    return (
        <div id='contactForm' className='py-5'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className='title mb-3'>
                            <p className='text-uppercase m-0'>contact us from here</p>
                            <h2>Write us</h2>
                        </div>
                        <Form />
                    </div>
                    <div className="col-lg-4 p-3 mt-4 mt-lg-0">
                        <div className='bg-white p-4'>
                            {/* //* This is a Contact div in the right side of the container */}
                            <h3>Contact</h3>
                            <ul>
                                <li>
                                    <b>Phone</b>
                                    <hr />
                                    <a href="callto:+97145579209">
                                        <p>+971 4 5579209</p>
                                    </a>
                                </li>
                                <li>
                                    <b>Fax</b>
                                    <hr />
                                    <p>+971 4 3544981</p>
                                </li>
                                <li>
                                    <b>Email</b>
                                    <hr />
                                    <a href="mailto:gmc@esteemetal.com">
                                        <p>gmc@esteemetal.com</p>
                                    </a>
                                </li>
                            </ul>
                            <p>
                                <b>Address:</b><br />
                                807, Ubora Commercial Tower. <br />
                                Business Bay, Dubai, UAE. <br />
                                P.O. Box 181500
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FormContainer;