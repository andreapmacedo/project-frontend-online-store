import React, { useContext } from 'react';
import './style.css';
import MainContext from '../../Context/MainContext'
import CartCard from '../CartCard/CartCard';
// import AmountButton from '../AmountButton/AmountButton';
// import { ShoppingCart } from 'phosphor-react';
import carrinhoVazio from '../../assets/carrinhoVazio.svg';


export default function Cart() {
  const {
    removeFromCart,
    cartItems,
  } = useContext(MainContext);
  
  function renderItems(){    
    if(!cartItems.length){
      return (
        <div className="cart-empty">
          <img src={ carrinhoVazio } alt="sacola-img" />
          <p className="title-cart">Seu carrinho está vazio!</p>
          <p className="subtitle-cart">Vá para a página inicial ou procure no site os produtos que vão te deixar feliz. Quando encontrá-los, clique no botão adicionar ao carrinho ;)</p>
        </div>
      )
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
            item={ product }
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

