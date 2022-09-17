import React, { useState, useEffect } from 'react';
import { getCategories } from '../../services/api';


export default function MainCards() {
  const [listitems, setlistitems] = useState([]);

  async function fetchitems(){
    const result = await getCategories();
    console.log('result', result);
    console.log(typeof result);
    return result
  };

  function renderitems(){
    if(!listitems){
      return <p>Loading...</p>
    }
    return listitems.map((item) => {
      return (
        <div>
          <h1>{item.name}</h1>
        </div>
      )
    });
  };
  
  


  useEffect(() => {
    async function getitems(){
      const result = await getCategories();
      console.log('result', result);
      setlistitems(result);
    }
    getitems();
  }, []);

  // useEffect(() => {
  //   setlistitems(fetchitems());
    
  //   console.log('useEffect');
  // }, []);


  return (
    <div>

      <h1>Listitems</h1>

      {renderitems()}

    </div>
  )
};

