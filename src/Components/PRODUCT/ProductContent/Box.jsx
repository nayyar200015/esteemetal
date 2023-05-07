import React from 'react'

//* These are all the boxes containing a list. There are specific number of boxes in each row. 
const Box = ({ h3, list }) => {
    return (
        <div className="box col-sm-5">
            <h3 className='text-uppercase'>{h3}</h3>
            <ul>
                {
                    list.map(elem => <li key={elem}>{elem}</li>)
                }
            </ul>
        </div>
    )
}

export default Box