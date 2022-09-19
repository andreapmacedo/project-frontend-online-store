import React, { useContext } from 'react';
import './style.css';
import MainContext from '../../Context/MainContext';
import { ShoppingCart } from 'phosphor-react';

const TopMenu = () => {

  const {
    cartItems
  } = useContext(MainContext);

  return (
    <div className="top-menu-container" >
      <div className="cart-logo">
        <h1>Shopping Cart</h1>
      </div>
      <div
        className="cart-icon-container"
      >
        <div
          className="cart-icon"
        >
          <ShoppingCart size={36} color="#eee" /> 
        </div>
        <div className="cart-length-container">
          <div className="cart-lenght-text">
            <h1>{cartItems.length}</h1>
          </div>
        </div>
      </div>
    </div>  
  )
};

export default TopMenu;