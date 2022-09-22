import React, { useState, useEffect, useContext } from 'react';
import { itemCategory } from '../../services/api';
import './style.css';
import MainContext from '../../Context/MainContext'
import CategoryCard from '../CategoryCard';

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
        // TODO: show max quantity message
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
            onClick={ () => sendToCart(product) }
            shipping={ product.shipping.free_shipping }
          />
        </div>
      ))
  };
  
  // Este useEffect é responsável atualizar a lista de itens toda vez que o context for atualizado.
  useEffect(() => {
    async function getitems(){
      // const result = await itemCategory('MLB5672');
      const result = await itemCategory(selectedListItems);
      console.log('result', result);
      // console.log('result', result);
      setlistitems(result);
    }
    getitems();
  }, [selectedListItems]);
    
  return (
    <div className="main-cards-container">
      {renderItems()}
    </div>
  )
};

