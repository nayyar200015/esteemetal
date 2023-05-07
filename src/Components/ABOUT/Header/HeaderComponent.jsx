import React from 'react'
import './HeaderStyle.css'

//* This is header component which is reused on About and Product Page 
const HeaderComponent = (props) => {
    const { id, h1, bgImage } = props
    const headerStyle = { background: `url(${bgImage}) no-repeat fixed` }

    return (
        <header id={id} className='px-3 px-sm-5' style={headerStyle}>
            <div>
                <h1 className='text-uppercase'>{h1}</h1>
            </div>
        </header>
    )
}

export default HeaderComponent