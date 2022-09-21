import React, { useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import MainContext from '../../Context/MainContext';
import { ShoppingCart, MagnifyingGlass } from 'phosphor-react';
import './style.css';

const TopMenu = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const {
    cartItems,
    searchItem,
    setSearchItem
  } = useContext(MainContext);

  const inputHandleChange = ({ target }) => {
    const { value } = target;
    setSearchItem(value);
    // direcionar para página de busca
    // navigate(`/search`);
  };

  return (
    <div className="top-menu-container" 
      // onClick={() => navigate(`/category`)}
    >
      <div className="cart-logo">
        <h1>Shopping Cart</h1>
      </div>
      {(location.pathname === '/category' || location.pathname === '/search') &&
        <div className="search-bar">
          <div>
            <input
              className="search-input"
              autoComplete="off"
              onChange={ inputHandleChange }
              value={ searchItem }
              name="search-input"
              type="text"
              placeholder="search"
            />          
          </div>
          <div
            className="search-icon" 
            onClick={() => navigate(`/search`)}
          >
            <MagnifyingGlass size={32} color="#777" />
            
          </div>
        </div>
      }

      <div
        className="cart-icon-container"
        onClick={() => navigate(`/cart`)}
      >
        <div
          className="cart-icon"
        >
          <ShoppingCart size={36} color="#eee" /> 
        </div>
        <div
         className="cart-length-container"
        >
          <div className="cart-lenght-text">
            <h1>{cartItems.reduce((acc, curr) => curr.itemAmount + acc, 0)}</h1>
          </div>
        </div>
      </div>
    </div>  
  )
};

export default TopMenu;