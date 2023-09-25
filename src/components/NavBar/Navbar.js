import React from 'react';
import { Link } from "react-router-dom";
import { LogoIcon } from '../Logo/Logo.jsx';
import { CartIcon } from '../Logo/CartIcon.jsx';
import { useGetData } from '../../context/DataContext.js';

const Navbar = () => {
  const cartVal = useGetData()
  const items = cartVal.length
  return (
    <nav className="navbar">
      <h1><Link to="/"><LogoIcon /></Link> Amaze Shop</h1>
      <div className="links">
        <Link to="/cart" className='cart-button'>
          <CartIcon/>
          <span className='cart-counter'>{items}</span>
          </Link>
      </div> 
    </nav>
  );
}
 
export default Navbar;