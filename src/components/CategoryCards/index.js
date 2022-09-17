import React, { useState, useEffect, useContext } from 'react';
import { itemCategory } from '../../services/api';
import './style.css';
import MainContext from '../../Context/MainContext'


export default function CategoryCards() {
  const [listitems, setlistitems] = useState([]);
  const { selectedListItems } = useContext(MainContext);
  // const [category, setCategory] = useState(categoryId)

  function renderItems(){
    const { results } = listitems;
    if(!results){
      return <p>Loading...</p>
    }

    return results.map((item, index) => {
      return (
        <div key={index}>
          <h1>{item.id}</h1>
        </div>
      )
    });

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
      <h1>Listitems</h1>
      {renderItems()}
    </div>
  )
};

