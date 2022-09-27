import React, { useContext, useEffect, useState } from 'react';
import './Cart.css';
import MainContext from '../../Context/MainContext'
import CartCard from '../CartCard/CartCard';
// import AmountButton from '../AmountButton/AmountButton';
// import { ShoppingCart } from 'phosphor-react';
import carrinhoVazio from '../../assets/carrinhoVazio.svg';
import { useNavigate } from 'react-router-dom';
import { Trash, CreditCard } from 'phosphor-react';


export default function Cart() {
  const navigate = useNavigate();
  const [subtotal, setSubtotal] = useState({itemQuantity: 0, itemPrice: 0});
  const {
    removeFromCart,
    cartItems,
    setCartItem,
  } = useContext(MainContext);
  
  const purchaseCheckout = () => {
    setCartItem([]);
    navigate('/purchaseCheckout')
  }


  function renderSubTotalSection(){    
    
      return (
        <div className="subtotal-container">
          <div className="subtotal-text">
            <div className="subtotal-text-up">
              Total de produdos
              <p>{`${subtotal.itemQuantity}`}</p>
            </div>
            <div className="subtotal-text-down">
              <div>
                Valor a pagar
              </div>
              <div>
                <p>{`R$ ${subtotal.itemPrice.toFixed(2).replace('.', ',')}`}</p>
              </div>
            </div>
          </div>
          
          <div className="subtotal-button">
            <div
              // type="button"
              className={cartItems.length ? "button-green" : "button-disabled"}
              // onClick={() => navigate('/purchaseCheckout')}
              onClick={ purchaseCheckout }
              {...(cartItems.length === 0 && { disabled: true })}
            >
              <div className="icon" >
              {cartItems.length ? <CreditCard size={24} color="#2FC08C" /> : <CreditCard size={24} color="#eee" />}
              </div>
              <div className="text">
                FINALIZAR COMPRA
              </div>
            </div>
            <div
              className={cartItems.length ? "button-red" : "button-disabled"}
              // onClick={() => navigate('/purchaseCheckout')}
              onClick={ purchaseCheckout }
              {...(cartItems.length === 0 && { disabled: true })}
            >
              <div className="icon" >
                {cartItems.length ? <Trash size={24} color="red" /> : <Trash size={24} color="#eee" />}
                {/* <Trash size={24} color="red" /> */}
              </div>  
              <div className="text">
                REMOVER TODOS OS PRODUTOS
              </div>  
            </div>
          </div>
        </div>
      )
    
  }
  
  useEffect(() => {
    function setSubtotall(){
      let itemQuantity = 0;
      let itemPrice = 0;
      cartItems.forEach((cartItem) => {
        itemQuantity += cartItem.itemAmount;
        itemPrice += cartItem.itemAmount * cartItem.itemProduct.price;
      });
      setSubtotal({itemQuantity, itemPrice});
    }
    setSubtotall();
  }, [cartItems]);

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
    <div className="cart-container">
      <div className="main-cart-cards-container">
        {renderItems()}
      </div>
      <div className="">
        {renderSubTotalSection()}  
      </div>
    </div>
  )
};

