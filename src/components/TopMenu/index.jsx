import React, { useState, useContext } from 'react';
import './style.css';
import MainContext from '../../Context/MainContext';
import { ShoppingCart, MagnifyingGlass } from 'phosphor-react';

const TopMenu = () => {
  const [searched, setSearched] = useState('');
  const {
    cartItems
  } = useContext(MainContext);

  const inputHandleChange = ({ target }) => {
    const { value } = target;
    setSearched(value);
  };

  return (
    <div className="top-menu-container" >
      <div className="cart-logo">
        <h1>Shopping Cart</h1>
      </div>

      <div className="search-bar">
        <div>
          <input
            className="search-input"
            autoComplete="off"
            // autoComplete="false"
            onChange={ inputHandleChange }
            value={ searched }
            name="search-input"
            type="text"
            placeholder="search"
          />          
        </div>
        <div className="search-icon" >
          <MagnifyingGlass size={32} color="#777" />
        </div>
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