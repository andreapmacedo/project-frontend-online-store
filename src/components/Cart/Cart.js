import React, { useContext } from 'react';
import './style.css';
import MainContext from '../../Context/MainContext'
import CartCard from '../CartCard/CartCard';

export default function Cart() {
  const {
    removeFromCart,
    cartItems,
  } = useContext(MainContext);
  
  function renderItems(){
    
    if(!cartItems){
      return <p>Seu carrinho está vazio</p>
    }

    return cartItems
      .map((product, index) => (
        <div
          key={ index }
        >
          <CartCard
            productId={ product.itemProduct.id }
            title={ product.itemProduct.title }
            thumbnail={ product.itemProduct.thumbnail }
            price={ product.itemProduct.price }
            onClick={ () => removeFromCart(product) }
            shipping={ product.itemProduct.shipping.free_shipping }
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

