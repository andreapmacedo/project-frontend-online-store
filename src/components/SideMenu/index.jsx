import React, { useState, useEffect, useContext } from 'react';
// import { useHistory, useParams } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';
import { getCategories } from '../../services/api';
import MainContext from '../../Context/MainContext'
import './style.css';

export default function MainCards() {
  // const history = useNavigate();
  const navigate = useNavigate();
  const {
    setSelectedListItems,
  } = useContext(MainContext);

  const [listitems, setlistitems] = useState([]);


  function loadCategoryPage(itemId) {
    console.log(itemId);
    // console.log('typeof', typeof itemId);

    setSelectedListItems(itemId);
    // history.push(`/category`);
    navigate(`/category`);
  }

  function renderItems(){
    if(!listitems){
      return <p>Loading...</p>
    }
    return listitems.map((item, index) => {
      return (
        <div key={index}
          // onClick={() => console.log(item)}
          onClick={() => loadCategoryPage(item.id)}
        >
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

  // -----------------------------
  // does not work
  // async function fetchitems(){
  //   const result = await getCategories();
  //   console.log('result', result);
  //   console.log(typeof result);
  //   return result
  // };
  
  // useEffect(() => {
  //   const result = fetchitems();
  //   setlistitems(result);
    
  //   console.log('useEffect');
  // }, []);
  // -----------------------------
    
  return (
    <div className="side-menu-container">
      {renderItems()}
    </div>
  )
};
