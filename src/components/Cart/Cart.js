import React, { useState, useEffect, useContext } from 'react';
import './style.css';
import MainContext from '../../Context/MainContext'
import CartCard from '../CartCard/CartCard';

export default function Cart() {
  const [listitems, setlistitems] = useState([]);
  const {
    setCartItem,
    removeFromCart,
    cartItems,
  } = useContext(MainContext);
  
  // function sendToCart (item) {
  //   removeFromCart(item)
  // }


  function renderItems(){
    
    if(!cartItems){
      return <p>Seu carrinho está vazio</p>
    }

    return cartItems
      .map((product, index) => (
        <div
          key={ index }
        >
          {console.log(product.itemAmount)}
          {/* {product.itemAmount === 1 && */}
            <CartCard
              productId={ product.itemProduct.id }
              title={ product.itemProduct.title }
              thumbnail={ product.itemProduct.thumbnail }
              price={ product.itemProduct.price }
              onClick={ () => removeFromCart(product) }
              shipping={ product.itemProduct.shipping.free_shipping }
            />
          {/* } */}
        </div>
      ))
  };
        
  return (
    <div className="main-cards-container">
      {renderItems()}
    </div>
  )
};

