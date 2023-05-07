import React from 'react';
import Form from '../CONTACT/Form/Form';
import './SendInquiryStyle.css'

const SendInquiry = () => {
    document.title = 'Send Inquiry :: Esteemetal. Dubai.';
    return (
        <div id="Inquiry">
            <div className="container py-5">
                <div className="row">
                    <div className="col-12">
                        <div className='title mb-3'>
                            <h2>Send Inquiry</h2>
                        </div>
                    </div>
                </div>
                <Form />
            </div>
        </div>
    );
}

export default SendInquiry;
