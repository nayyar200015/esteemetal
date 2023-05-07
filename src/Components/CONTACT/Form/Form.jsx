import React from 'react';
import formList from './formInputList';
import './OnlyFormStyle.css'

//* This is the Form Component that is reused in Contact and Send Inquiry page 
const Form = () => {
    return (
        <form className='row'>
            {
                formList.map(elem => {
                    const { type, placeholder } = elem
                    return (
                        <div className="col-lg-6 mb-4" key={placeholder}>
                            <input
                                type={type}
                                title='Please fill out this field.'
                                placeholder={placeholder}
                            />
                        </div>
                    )
                })
            }
            <div className="col-12 mb-4">
                <textarea id="msg" cols="30" rows="3" placeholder='Your Message' />
            </div>
            <div className="col-12">
                <button className='btn'><a href="/" rel='noreferrer'>Send Message</a></button>
            </div>
        </form>
    );
}

export default Form;
