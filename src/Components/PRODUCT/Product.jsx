import React from 'react'
import Header from './Header/Header'
import ProductContent from './ProductContent/ProductContent';

const Product = () => {
    document.title = 'Products :: Esteemetal. Dubai.';
    return (
        <>
            <Header />
            <ProductContent />
        </>
    )
}

export default Product