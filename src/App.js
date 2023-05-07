import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Nav from './Components/HOME/Nav/Nav';
import Footer from './Components/HOME/Footer/Footer'
import Home from './Components/HOME/Home'
import About from './Components/ABOUT/About'
import Product from './Components/PRODUCT/Product'
import Contact from './Components/CONTACT/Contact'
import SendInquiry from './Components/SEND INQUIRY/SendInquiry'
import ScrollToTop from './Components/ScrollToTop';

const Apps = () => {
  return (
    <>
      <Nav />
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path="/products" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/send-inquiry" element={<SendInquiry />} />
        <Route path='*' element={<Home />} />
      </Routes>
      <Footer />
    </>
  )
}

export default Apps
