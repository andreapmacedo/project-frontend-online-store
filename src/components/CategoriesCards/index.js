import React, { useState, useEffect, useContext } from 'react';
import { itemCategory } from '../../services/api';
import './style.css';
import MainContext from '../../Context/MainContext'
import CategoryCard from '../CategoryCard';


export default function CategoriesCards() {
  const [listitems, setlistitems] = useState([]);
  const {
    selectedListItems,
    setCartItem,
    cartItems
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
  
  // Este useEffect é responsável atualizar a lista de itens toda vez que o context for atualizado.
  useEffect(() => {
    async function getitems(){
      // const result = await itemCategory('MLB5672');
      const result = await itemCategory(selectedListItems);
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

