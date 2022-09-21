import React, { useState } from 'react';
import PropTypes from 'prop-types';

import MainContext from '../Context/MainContext';

function MainProvider({ children }) {
  const [selectedListItems, setSelectedListItems] = useState('');
  const [searchItem, setSearchItem] = useState('');
  const [btnStatus, setBtnStatus] = useState(true);
  const [cartItems, setCartItem] = useState([]);
  
  function addToCart(item) {
    if (cartItems.length === 0) {
      setCartItem([...cartItems, { itemAmount: 1,  itemProduct: item}])
    } const isTheProductThere = cartItems.some(({ itemProduct: { id } }) => id === item.id);      
    if (isTheProductThere) {
      const updateProducts = cartItems.map((cartItem) => {
        if (cartItem.itemProduct.id === item.id) {
          return ({
            itemAmount: cartItem.itemAmount + 1,
            itemProduct: item,
          })
        } else return cartItem;
      });
      setCartItem(updateProducts);
    } else {
      setCartItem([...cartItems, { itemAmount: 1,  itemProduct: item}])
    }
  };

  function removeFromCart(item) {
    console.log('item', item);
    if (cartItems[cartItems.indexOf(item)].itemAmount > 1) {
      const updateProducts = cartItems.map((cartItem) => {
        if (cartItem.itemProduct.id === item.itemProduct.id ) {
          return ({
            itemAmount: cartItem.itemAmount -1,
            itemProduct: item.itemProduct,
          })
        } else return cartItem;
      });
      setCartItem(updateProducts);
    } else {
      setCartItem(cartItems.filter((cartItem) => cartItem.itemProduct.id !== item.itemProduct.id));
    }    

  };

  const context = {
    selectedListItems,
    setSelectedListItems,
    searchItem,
    setSearchItem,
    cartItems,
    setCartItem,
    addToCart,
    removeFromCart,
    btnStatus,
    setBtnStatus,
  };

  return (
    <MainContext.Provider value={ context }>
      {children}
    </MainContext.Provider>
  );
}

MainProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainProvider;
