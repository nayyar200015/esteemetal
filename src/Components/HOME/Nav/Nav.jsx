import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import ProductContainerList from '../../PRODUCT/ProductContent/ProductContainerList';
import NavRoutingList from './NavRoutingList';
import './NavStyle.css';

//* This is navbar component which is reused on all the pages 
const Nav = () => {
  //* windowWidth contains the current innerwidth of the window. setWindowWidth() updates the windowWidth variable.
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  //* upperNavContainerHeight contains the current height of the upperNavContainer div 
  const [upperNavContainerHeight, setUpperNavContainerHeight] = useState('');
  //* This event function runs setWindowWidth() whenever window width changes. 
  window.addEventListener('resize', () => {
    setWindowWidth(window.innerWidth);
    setUpperNavContainerHeight(document.getElementById('upperNavContainer').clientHeight);
  })
  //* clicked contains boolean value of whether the hamburger bar is clicked or not. By default, it's unclicked (false).
  const [clicked, setClicked] = useState(false);

  return (
    <>
      {/*//* When screen width<992px, upper container-fluid gets position:sticky and zIndex:2 */}
      <div className={`container-fluid ${windowWidth <= 992 ? 'position-sticky top-0' : ''}`} style={{ zIndex: `${windowWidth <= 992 ? '2' : '' - 1}` }} id='upperNavContainer'>
        <div className="row justify-content-between m-auto">
          <div className="col-lg-4 col-10 d-flex">
            <Link to='/' className='d-flex align-items-center'>
              <img src="\Images\logo-esteemetals-rev.png" className='w-100' alt='Esteemetal logo' />
            </Link>
          </div>
          <div className="col-1 col-lg-8 d-flex justify-content-end">
            {
              windowWidth > 992 ?
                <ul className="nav justify-content-end d-none d-lg-flex">
                  {
                    //* This gets the list of elements (only h3) for upper container-fluid from ProductContainerList (in another folder)
                    ProductContainerList.map(elem => {
                      const { h3 } = elem;
                      return (
                        <li
                          className='nav-item'
                          key={h3}>
                          <Link
                            className='nav-link text-uppercase fst-italic text-white'
                            to={`/products#${h3.split(' ').join('-')}`}>{h3}
                          </Link>
                        </li>
                      )
                    })
                  }
                </ul> :
                <button className="navbar-toggler shadow-none"
                  //* When hamburger icon gets clicked, clicked is set to true, and when clicked again, clicked is set to false, and so on... 
                  onClick={() => setClicked(clicked ? false : true)}
                  data-bs-toggle="collapse"
                  data-bs-target="#lowerNavContainer">
                  {/* //* when clicked is true, color of hamburger icon is #c64526, else white */}
                  <i className="fa fa-bars" style={{ color: `${clicked ? '#c64526' : 'white'}`, fontSize: '1.7rem' }} aria-hidden="true"></i>
                </button>
            }
          </div>
        </div>
      </div>
      {/*//* When screen width<992px, lower container-fluid gets position:fixed and top:64px (that is the height of upper container-fluid), else lower container-fluid has position: sticky and top:0 */}
      <div className={`container-fluid ${windowWidth <= 992 ? 'collapse navbar-collapse position-fixed' : 'position-sticky top-0'}`} style={{ top: `${windowWidth <= 992 ? `${upperNavContainerHeight}px` : ''}` }} id='lowerNavContainer'>
        <div className="row justify-content-between m-auto">
          <div className="col-lg-6">
            <ul className="nav flex-column flex-lg-row">
              {
                //* This gets the list tabs in lower container-fluid from NavRoutingList.js file
                NavRoutingList.map(elem => {
                  const { name, to } = elem;
                  return (
                    <li
                      className='nav-item'
                      key={name}
                    >
                      <NavLink
                        className='nav-link text-uppercase'
                        to={to}>{name}
                      </NavLink>
                    </li>
                  )
                })
              }
            </ul>
          </div>
          <div className="col-lg-3">
            <li className='nav-item d-flex justify-content-lg-end'>
              <Link to='/send-inquiry' className='nav-link'>SEND INQUIRY</Link>
            </li>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
