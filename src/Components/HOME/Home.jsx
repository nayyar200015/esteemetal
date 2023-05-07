import React from 'react';
import Carousel from './Carousel/Carousel';
import ServiceContainer from './Services/ServiceContainer';
import Products from './Products/Products';

const Home = () => {
    document.title = 'Welcome to Esteemetal. Dubai. :: Steel | Metals | Ferro Alloys | Industrial Commodities';
    return (
        <>
            <Carousel />
            <ServiceContainer />
            <Products />
        </>
    );
}

export default Home;
