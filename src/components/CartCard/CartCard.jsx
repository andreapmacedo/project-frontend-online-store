import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import AmountButton from '../AmountButton/AmountButton';
import MainContext from '../../Context/MainContext';
import { Trash } from 'phosphor-react';

import './CartCard.css';

import freeShippingSvg from '../../assets/free5.svg';

const CartCard = (props) => {
  const { productId, thumbnail, title, price, onClick, shipping, item } = props;
  const {
    cartItems,
    deleteFromCart,
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

  const deleteItem = (item) => {
    console.log('deleteItem', item);
      cartItems.forEach((cartItem) => {
        if (cartItem.itemProduct.id === item.itemProduct.id) {
          deleteFromCart(cartItem);
        }
      });
    
  }

  return (
    <div className="cart-card" >
        <div className="free-shipping-svg">
        { shipping && <img src={ freeShippingSvg } alt="Profile" /> }          
        </div>
        <button className="trash-icon"
          type="button"
          onClick={ () => deleteItem(item) }
        >
          <Trash size={24} color="red" />
        </button>
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
            {/* <div className="price-container">
              <p className="price">
                {' '}
                {`R$ ${price.toFixed(2).replace('.', ',')}`}
              </p>
            </div> */}
            <div className="price-container">
              <div className="price-left">
                {/* <p>de:</p>   */}
                {/* <p class="original-price">{ (originalPrice && (originalPrice !== price)) && `R$ ${ originalPrice.toFixed(2).replace('.', ',') }` }</p> */}
                <div>
                  { `${getItemAmount()} x `}
                </div>
                <div>
                  { `R$ ${price.toFixed(2).replace('.', ',')}` }    
                </div>

              </div>
              <div className="price-right">
                {/* <p>por:</p> */}
                <div>
                  Total:
                </div>
                <div>
                  <p className="price">
                    { `R$ ${ (getItemAmount() * price).toFixed(2).replace('.', ',')}` }
                  </p>
                </div>
              </div>
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