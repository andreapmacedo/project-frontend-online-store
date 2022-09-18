import React, { useState, useEffect } from 'react';
import { getCategories } from '../../services/api';
import './style.css';


export default function MainCards() {
  const [listitems, setlistitems] = useState([]);

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
      const result = await getCategories();
      // console.log('result', result);
      setlistitems(result);
    }
    getitems();
  }, []);
    
  return (
    <div className="main-cards-container">
      {renderitems()}
    </div>
  )
};

