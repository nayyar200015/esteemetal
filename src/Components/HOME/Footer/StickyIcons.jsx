import React from 'react';

const StickyIcons = () => {
    return (
        <div className='position-fixed d-grid' id='StickyIcons'>
            {/* //todo: ye rel="noreferrer" ka matlab pta krna hay!!! */}
            <a href="https://wa.me/+971527116258" target='_blank' rel="noopener noreferrer" >
                <img src="Images/whatsappIcon.png" className='w-100 pb-3' alt="whatsapp" />
            </a>
            <button onClick={() => window.scrollTo(0, 0)} className='d-grid align-items-center'>
                <i className="fa fa-chevron-up w-100 text-white text-center" aria-hidden="true"></i>
            </button>
        </div>
    );
}

export default StickyIcons;
