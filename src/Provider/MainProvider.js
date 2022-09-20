import React, { useState } from 'react';
import PropTypes from 'prop-types';

import MainContext from '../Context/MainContext';

function MainProvider({ children }) {
  const [selectedListItems, setSelectedListItems] = useState('');
  const [searchItem, setSearchItem] = useState('');
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
    // console.log(cartItems);
  };

  function removeFromCart(item) {
    if (cartItems.length === 0) {
      console.log('Seu carrinho está vazio');
    }
    const updateProducts = cartItems.map((cartItem) => {
      if (cartItem.itemProduct.id === item.itemProduct.id) {
        return ({
          itemAmount: cartItem.itemAmount -1,
          itemProduct: item.itemProduct,
        })
      } else return cartItem;
    });
    // else {
    //   console.log('Seu carrinho NÃO está vazio');
      console.log(updateProducts);
      setCartItem(updateProducts);
    //   // cartItems.forEach((product) => {
    //   //   // if (product.itemProduct.id === item.id && product.itemAmount > 0){
    //   //   if (product.itemProduct.id === item.itemProduct.id){
    //   //     console.log('cheguei')
    //   //     setCartItem([...cartItems, { itemAmount: product.itemAmount-1,  itemProduct: item.itemProduct }])
    //   // }})
    // }
  };

  // function addToCart(item) {
  //   setCartItemB([...cartItems, item]);
  // }

  const context = {
    selectedListItems,
    setSelectedListItems,
    searchItem,
    setSearchItem,
    cartItems,
    setCartItem,
    addToCart,
    removeFromCart,
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
