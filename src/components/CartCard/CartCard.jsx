import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import AmountButton from '../AmountButton/AmountButton';
import MainContext from '../../Context/MainContext';

import './CartCard.css';

import freeShippingSvg from '../../assets/free5.svg';

const CartCard = (props) => {
  const { productId, thumbnail, title, price, onClick, shipping, item } = props;
  const {
    cartItems,
  } = useContext(MainContext);

  function getItemAmount() {
    let result = 0;
    cartItems.forEach((cartItem) => {
      if (cartItem.itemProduct.id === productId) {
        result = (cartItem.itemAmount);
      }
    });
    return result;
  }

  return (
      <div className="cart-card" >
        <div className="free-shipping-svg">
        { shipping && <img src={ freeShippingSvg } alt="Profile" /> }          
        </div>
        
        <div 
          className="card-link"
        >
          <img
            className="imgBox"
            src={ thumbnail }
            alt={ title }
          />
          
          <div className="btn-container">
            <AmountButton
            amount={ getItemAmount() }
            itemId={ productId }
            item={ item }
            />
          </div>
          <div className="info-content">
            <div className="title-content">
              <p>{title}</p>
            </div>
            <div className="price-content">
              <p className="price">
                {' '}
                {`R$ ${price.toFixed(2).replace('.', ',')}`}
              </p>
            </div>
          </div>
        </div>
          
        
      </div>
  )
}

CartCard.propTypes = {
  productId: PropTypes.string,
  thumbnail: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.string,
  onClick: PropTypes.func,
}.isRequired;

export default CartCard;