import React, { useEffect, useState, useContext } from 'react';
import './style.css';
import blackFriday from '../../assets/black-friday2.webp';
import { itemCategory } from '../../services/api';
import CategoryCard from '../CategoryCard';
import MainContext from '../../Context/MainContext'
// import { Info } from "phosphor-react";
import Loading from '../Loading/Loading';

export default function InitialPage() {
  // let intervalID;
  const [ products, setProducts ] = useState([]);

  const {
    addToCart,
    cartItems,
  } = useContext(MainContext);

  async function produtos() {
    const celular = await itemCategory('MLB1051'); //Celulares
    const joias = await itemCategory('MLB3937'); //Joias e relogios
    const informatica = await itemCategory('MLB1648'); //Informatica
    const items = [...celular.results.slice(0,4), ...joias.results.slice(0,4), ...informatica.results.slice(0,4)];
    setProducts(items);
  }

  useEffect(() => {
    produtos();
  }, []);

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
  
  // Função responsável por fechar o dialog de alerta
  // function closeDialog() {
  //   const modal = document.querySelector('.modal');
  //   modal.classList.remove("active");
  //   clearInterval(intervalID);
  // }

  function getCartItemQuantity(item) {
    let quantity = 0;
    cartItems.forEach((cartItem) => {
      if (cartItem.itemProduct.id === item.id) {
        quantity = cartItem.itemAmount;
      }
    });
    return quantity;
  }

  function sendToCart(item){
    const quantity = getCartItemQuantity(item);
    if (quantity < item.available_quantity) {    
      addToCart(item);
    } else {
      // openDialog();
    }
  }

  return (
    <div className="containerMain">
      <div className="alignContainer">
      <div className="banner">
        <img className="bannerImg" src={ blackFriday } alt="banner"/>
      </div>
      <div className="destaques">
        <h2>Produtos em destaque</h2>
        <div className="produtos-destaque">
        { products?.length > 0 ? (
          products.map((product) => (
            <CategoryCard
            productId={ product.id }
            title={ product.title }
            thumbnail={ product.thumbnail }
            price={ product.price }
            originalPrice={ product.original_price }
            onClick={ () => sendToCart(product) }
            shipping={ product.shipping.free_shipping }
          />
          ))
        ) : <Loading /> }
        </div>
      </div>
    </div>
    {/* <div className="modal"  onClick={ closeDialog } >
        <div className="modal-content">
          <span className="close" onClick={ closeDialog }>&times;</span>
            <div className="message">
              <Info size={32} />
              <p>A quantidade de itens disponíves pelo vendendor se esgotou!</p>
            </div>
            <div id="progress">
              <div id="bar"></div>
            </div>
        </div>
      </div> */}
    </div>
  )
}
