import React, { useState, useEffect, useContext } from 'react';
import { itemCategory } from '../../services/api';
import './style.css';
import MainContext from '../../Context/MainContext'
import CategoryCard from '../CategoryCard';
import { Info } from "phosphor-react";

export default function CategoriesCards() {
  const [listitems, setlistitems] = useState([]);

  const {
    selectedListItems,
    addToCart,
    cartItems,
  } = useContext(MainContext);
  
  function renderItems(){
    const { results } = listitems;
    if(!results){
      return <p>Loading...</p>
    }

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
        openDialog();
      }
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
            originalPrice={ product.original_price }
            onClick={ () => sendToCart(product) }
            shipping={ product.shipping.free_shipping }
          />
        </div>
      ))
  };
  
  // Este useEffect é responsável atualizar a lista de itens toda vez que o context for atualizado.
  useEffect(() => {
    async function getitems(){
      const result = await itemCategory(selectedListItems);
      setlistitems(result);
    }
    getitems();
  }, [selectedListItems]);

  // Função responsável por abrir o dialog de alerta ao esgotar um produto.
  function openDialog() {
    // setClassIsShowDialog('dialogOn');
    const modal = document.querySelector('.modal');
    modal.classList.add("active");
  }

  // Função responsável por fechar o dialog de alerta
  function closeDialog() {
    const modal = document.querySelector('.modal');
    modal.classList.remove("active");
  }

  return (
    <div className="main-cards-container">
      {renderItems()}
      <div className="modal"  onClick={ closeDialog } >
        <div className="modal-content">
          <span className="close" onClick={ closeDialog }>&times;</span>
          <div className="message">
            <Info size={32} />
            <p>A quantidade de itens disponíves pelo vendendor se esgotou!</p>
          </div>
        </div>
      </div>
    </div>
  )
};

