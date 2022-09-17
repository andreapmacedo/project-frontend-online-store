import React, { useState, useEffect } from 'react';
import { itemCategory } from '../../services/api';
import './style.css';


export default function CategoryCards() {
  const [listitems, setlistitems] = useState([]);
  // const [category, setCategory] = useState(categoryId)

  function renderitems(){
    if(!listitems){
      return <p>Loading...</p>
    }
    return listitems.map((item, index) => {
      return (
        <div key={index}>
          <h1>{item.name}</h1>
        </div>
      )
    });
  };
  
  useEffect(() => {
    async function getitems(){
      const result = await itemCategory();
      // console.log('result', result);
      setlistitems(result);
    }
    getitems();
  }, []);
    
  return (
    <div className="main-cards-container">
      <h1>Listitems</h1>
      {renderitems()}
    </div>
  )
};

