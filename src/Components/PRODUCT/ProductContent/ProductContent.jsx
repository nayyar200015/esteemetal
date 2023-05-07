import React from 'react';
import { Link } from 'react-router-dom';
import ProductContainerList from './ProductContainerList';
import Box from './Box';
import './ProductContentStyle.css'

const ProductContent = () => {
    return (
        <div id="productContainer">
            <div className="container py-5">
                <div className="row">
                    <div className="col-lg-4">
                        <div>
                            {
                                //* This is the white box on the left side of the container
                                //* The to parameter in the Link changes the url by adding the hash with the name of list item that is clicked on 
                                ProductContainerList.map(elem => {
                                    const { h3 } = elem
                                    return <li
                                        key={h3}
                                        id={`${h3.split(' ').join('')}1`}>
                                        <Link
                                            className='nav-link text-uppercase user-select-none'
                                            to={`/products#${h3.split(' ').join('-')}`}
                                        >{h3}
                                        </Link>
                                    </li>
                                })
                            }
                        </div>
                    </div>
                    <div className="col-lg-8">
                        {
                            //* This containes rows containing information about each element that is mapped from ProductContainerList 
                            ProductContainerList.map(elem => {
                                const { h3, imgSrc, p, Boxes } = elem
                                return (
                                    <div className="row" id={`${h3.split(' ').join('-')}`} key={h3}>
                                        <div className="col-12">
                                            <h3 className='text-uppercase mt-3'>{h3}</h3>
                                            <img src={imgSrc} className='w-100' alt={h3} />
                                            <p className='mt-3 mb-5'>{p}</p>
                                        </div>
                                        <div className="col-12 box">
                                            <div className="row justify-content-between">
                                                {
                                                    //* Each row contains the number of boxes that are mapped from Boxes, that is passed from ProductContainerList 
                                                    Boxes.map((elem, index) => {
                                                        const { h3, list } = elem
                                                        return <Box h3={h3} list={list} key={index} />
                                                    })
                                                }
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductContent;