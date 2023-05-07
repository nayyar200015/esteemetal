import React from 'react'
import List from './ServiceList'

//* These are the service boxes under carousel on Home Page. 
const ServiceBox = () => {
    return (
        //* contents of these service boxes are passed from ServiceList.js file.
        List.map((elem) => {
            const { svgPath, h2 } = elem;
            return (
                <div className="col m-2 cc" key={svgPath}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="43"
                        height="43"
                        x="0"
                        y="0"
                        fill="#c64526"
                        enableBackground="new 0 0 64 64"
                        version="1.1"
                        viewBox="0 0 64 64"
                        xmlSpace="preserve"
                    >
                        <path d={svgPath}></path>
                    </svg>
                    <h2 className='user-select-none'>{h2}</h2>
                </div>
            )
        })
    )
}

export default ServiceBox