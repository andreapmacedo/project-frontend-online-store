import React, { useState, useEffect, useContext } from 'react';

import { itemCategoryAndName } from '../../services/api';
import './style.css';
import MainContext from '../../Context/MainContext'
import CategoryCard from '../CategoryCard';
import Loading from '../Loading/Loading';


export default function SearchCards() {
  const [listitems, setlistitems] = useState([]);
  const {
    selectedListItems,
    // setCartItem,
    addToCart,
    // cartItems,
    searchItem,
    btnStatus,
  } = useContext(MainContext);
  
  function renderItems(){
    const { results } = listitems;
    if(!results){
      return <Loading />
    }

    function sendToCart(item){
      console.log(item);
      // setCartItem([...cartItems, item])
      addToCart(item);
    }
    // todo: tratar retorno undefined
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
    
  useEffect(() => {
    async function getitems(){
      const result = await itemCategoryAndName(selectedListItems, searchItem);
      console.log('result', result);
      if (result === '') {
        console.log('result vazio');
      }
      setlistitems(result);
    }
    getitems();
  }, []);

  useEffect(() => {
    async function getitems(){
      const result = await itemCategoryAndName(selectedListItems, searchItem);
      console.log('result', result);
      if (result === '') {
        console.log('result vazio');
      }
      setlistitems(result);
    }
    getitems();
  }, [btnStatus]);
  
      
  return (
    <div className="main-cards-container">
      {renderItems()}
    </div>
  )
};

