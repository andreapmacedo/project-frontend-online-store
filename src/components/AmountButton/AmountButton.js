import React, { useContext } from 'react';
import './AmountButton.css';
import MainContext from '../../Context/MainContext'

const AmountButton = (props) => {
  // let intervalID;
  const { amount, itemId, item } = props;
  const {
    removeFromCart,
    addToCart,
    cartItems,
  } = useContext(MainContext);

 const add = () => {
   if (amount < item.itemProduct.available_quantity) {    
     addToCart(item.itemProduct);
    }  else {
      // openDialog();
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

  // Função responsável por abrir o dialog de alerta ao esgotar um produto.
  // function openDialog() {
  //   const modal = document.querySelector('.modal');
  //   modal.classList.add("active");

  //   // O código abaixo lida com a barra de tempo de fechamento do dialog;
  //   let barWidth = 100;

  //   const animate = () => {
  //     const progressBar = document.getElementById("bar");
  //     barWidth--;
  //     progressBar.style.width = `${barWidth}%`;
  //   };
  //   animate();
  //   setTimeout(() => {
  //     intervalID = setInterval(() => {
  //       if (barWidth === 0) {
  //         clearInterval(intervalID);
  //         closeDialog();
  //         barWidth = 100;
  //       } else {
  //         animate();
  //       }
  //     }, 35);
  //   }, 500);
  // }
  
  // // Função responsável por fechar o dialog de alerta
  // function closeDialog() {
  //   const modal = document.querySelector('.modal');
  //   modal.classList.remove("active");
  //   clearInterval(intervalID);
  // }

  return (
  <div className="amount-button-container">
    
      <div className="amount-button-left"
        onClick={ remove }
        >
          -
      </div>    
    
    <div className="amount-button-center">
    { amount }
    
      
    </div> 
    
      <div className="amount-button-right"
        onClick={ add }
        >
          +
      </div>    
       
  </div>
  )
};

export default AmountButton;