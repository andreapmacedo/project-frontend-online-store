import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BotaoVoltar from '../../components/BotaoVoltar';
import TopMenu from '../../components/TopMenu';
import SideMenu from '../../components/SideMenu';
import './style.css';
import { itemDetails } from '../../services/api';

const ItemDetails = () => {
  const [item, setItem] = useState({});
  const [itemQuantity, setItemQuantity] = useState(1);
  const { id } = useParams();

  useEffect(() => {
    const getItemDetails = async(selectedItemId) => {
      const details = await itemDetails(id);
      setItem(details);
    }
    getItemDetails(id);
  }, [id]);

  const add = () => {
    setItemQuantity((prevState) => prevState + 1);
  }

  const remove = () => {
    if (itemQuantity > 0) {
      setItemQuantity((prevState) => prevState - 1);
    }
  }

  console.log(item);
  return (<div className="main-page-container">
    <div className="main-top-menu-container">
      <TopMenu></TopMenu>
    </div>
    <div className="main-body-container" >
      <div className="main-body-side-menu">
        <SideMenu></SideMenu>
      </div>
      <section className="main-body-cards">
        <h1>
          { item.title }
        </h1>
        <img src={ item.thumbnail } alt={ item.title } />
        <h4>
          Preço: R$ { item.price }
        </h4>
        <button
          className="remove-button"
          onClick={ () => remove() }
        >
          -
        </button>
        <button
          className="add-button"
          onClick={ () => add() }
        >
          +
        </button>
        <input
          type="number"
          value={ itemQuantity }
          onChange
        />
      </section>
    </div>
    <BotaoVoltar />
  </div>)
};

export default ItemDetails;