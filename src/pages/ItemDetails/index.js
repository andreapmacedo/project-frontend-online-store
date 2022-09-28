import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import MainContext from '../../Context/MainContext'
import TopMenu from '../../components/TopMenu';
import SideMenu from '../../components/SideMenu';
import './ItemDetails.css';
import { itemDetails } from '../../services/api';
// import Review from '../../components/Review/Review';
import AmountButton from '../../components/AmountButton copy/AmountButton';

const ItemDetails = () => {
  let amount = 0;
  const {
    cartItems,
  } = useContext(MainContext);

  const [item, setItem] = useState({});

  const { id } = useParams();

  function getItemAmount() {
    let result = 0;
    cartItems.forEach((cartItem) => {
      if (cartItem.itemProduct.id === id) {
        result = (cartItem.itemAmount);
      }
    });
    amount = result;
  }

  useEffect(() => {
    const getItemDetails = async(selectedItemId) => {
      const details = await itemDetails(id);
      setItem(details);
    }
    getItemDetails(id);
  }, [id]);

  return (
    <div className="main-page-container">
    { getItemAmount() }
    <div className="main-top-menu-container">
      <TopMenu></TopMenu>
    </div>
    <div className="main-body-container" >
      <div className="main-body-side-menu">
        <SideMenu></SideMenu>
      </div>
      <section className="main-body">
        <div className="item-details">
          <div
            className="item-details-title"
            >
            <h1>
              { item.title }
            </h1>
          </div>
          <img src={ item.thumbnail } alt={ item.title } />
          <h4>
            Preço: R$ { item.price }
          </h4>
          <div className="btn-container">
            <AmountButton
            amount={ amount }
            itemId={ id }
            item={ { itemAmount: amount,  itemProduct: item} }
            />
          </div>
          {/* <h4>Quantidade: { amount }</h4> */}
          <h3>Total: R$ { (amount * item.price ).toFixed(2) } </h3>


        </div>
        {/* <Review /> */}
      </section>
    </div>
  </div>)
};

export default ItemDetails;