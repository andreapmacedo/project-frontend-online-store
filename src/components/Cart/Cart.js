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
    const { results } = listitems;
    if(!results){
      return <p>Loading...</p>
    }

    function sendToCart(item){
      console.log(item);
      setCartItem([...cartItems, item])
    }

    return results
      .map((product) => (
        <div
          key={ product.id }
        >
          <CategoryCard
            productId={ product.id }
            title={ product.title }
            thumbnail={ product.thumbnail }
            price={ product.price }
            onClick={ () => sendToCart(product) }
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

