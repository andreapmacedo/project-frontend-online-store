import React, { useState, useEffect, useContext } from 'react';
import './style.css';
import MainContext from '../../Context/MainContext'
import CategoryCard from '../CategoryCard';

export default function Cart() {
  const [listitems, setlistitems] = useState([]);
  const {
    setCartItem,
    cartItems,
  } = useContext(MainContext);
  
  function renderItems(){
    
    // const { cartItems } = listitems;
    console.log(cartItems);
    
    if(!cartItems){
      // return <p>Loading...</p>
      return <p>Seu carrinho está vazio</p>
    }

    // function sendToCart(item){
    //   console.log(item);
    //   setCartItem([...cartItems, item])
    // }

    return cartItems
      .map((product) => (
        <div
          key={ product.id }
        >
          <CategoryCard
            productId={ product.id }
            title={ product.title }
            thumbnail={ product.thumbnail }
            price={ product.price }
            // onClick={ () => sendToCart(product) }
            shipping={ product.shipping.free_shipping }
          />
        </div>
      ))
  };
        
  return (
    <div className="main-cards-container">
      {renderItems()}
    </div>
  )
};

