import React, { useState, useEffect, useContext } from 'react';
import './style.css';
import MainContext from '../../Context/MainContext'
// import CategoryCard from '../CategoryCard';
import CartCard from '../CartCard/CartCard';

export default function Cart() {
  // const [listitems, setlistitems] = useState([{productId: '', product: {}, amount: 0}]);
  const [listitems, setlistitems] = useState([]);
  // const [listitems, setlistitems] = useState([]);
  const {
    setCartItem,
    cartItems,
  } = useContext(MainContext);
  

  function countItems(){
    if(!cartItems){
      // return <p>Loading...</p>
      return <p>Seu carrinho está vazio</p>
    }
    // cartItems.forEach((item) => {
    //   console.log(item);
    // }
  }

  function sortingItems(){



  }

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
      .map((product, index) => (
        <div
          // key={ product.id }
          key={ index }
        >
          {/* {setlistitems([...listitems, product.id])} */}
          {/* {if( listitems.contains() 'MLB123456789'){} */}

          <CartCard
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

