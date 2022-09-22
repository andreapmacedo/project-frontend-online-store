import React, { useContext } from 'react';
import './AmountButton.css';
import MainContext from '../../Context/MainContext'

const AmountButton = (props) => {
  const { amount, itemId, item } = props;
  const {
    removeFromCart,
    addToCart,
    cartItems,
  } = useContext(MainContext);

 const add = () => {
   if (amount < item.itemProduct.available_quantity) {    
     addToCart(item.itemProduct);
    }
  }

  const remove = () => {
    if (amount > 0) {
      cartItems.forEach((cartItem) => {
        if (cartItem.itemProduct.id === itemId) {
          removeFromCart(cartItem);
        }
      });
    }
  }

  return (
  <div className="amount-button-container">
    <div className="amount-button-left">
      <input
        className="btnAddd"
        type="button"
        value="+"
        onClick={ add }
      />
    </div>    
    <div className="amount-button-center">
      { amount }
    </div>    
    <div className="amount-button-right">
      <input
        className="btnRemm"
        type="button"
        value="-"
        onClick={ remove }
      />    
    </div>    
  </div>
  )
};

export default AmountButton;