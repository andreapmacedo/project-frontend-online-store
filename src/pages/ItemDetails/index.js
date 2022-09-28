import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import MainContext from '../../Context/MainContext'
import TopMenu from '../../components/TopMenu';
import SideMenu from '../../components/SideMenu';
import './style.css';
import { itemDetails } from '../../services/api';
// import Review from '../../components/Review/Review';
import AmountButton from '../../components/AmountButton/AmountButton';
import { CaretLeft, ShoppingCart } from 'phosphor-react';

const ItemDetails = () => {
  const navigate = useNavigate();
  let amount = 0;
  const {
    cartItems,
    setCategorySelected,
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
    // return result;
    amount = result;
  }

  useEffect(() => {
    const getItemDetails = async(selectedItemId) => {
      const details = await itemDetails(id);
      setItem(details);
      setCategorySelected([]);
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
            Preço: R$ { (1 * item.price).toFixed(2) }
            {/* Preço: R$ { (item.price) } */}
          </h4>
          <div className="btn-container">
            <AmountButton
            amount={ amount }
            // amount={ getItemAmount() }
            itemId={ id }
            item={ { itemAmount: amount,  itemProduct: item} }
            // item={ { itemAmount: getItemAmount(),  itemProduct: item} }
            />
          </div>
          {/* <h4>Quantidade: { amount }</h4> */}
          <h3>Total: R$ { (amount * item.price ).toFixed(2) } </h3>
          {/* <h3>Total: R$ { (getItemAmount() * item.price ).toFixed(2) } </h3> */}
          <div className="buttons-container">
            <button
              className="back-button"
              onClick={ () => window.history.back() }
            >
              <CaretLeft size={18} color="#2FC08C" /> 
              <p>VOLTAR</p>
            </button>
            <button
              className="go-to-cart-button"
              onClick={ () => navigate('/cart') }
            >
              <ShoppingCart size={18} color="#2FC08C" /> 
              <p>CARRINHO</p>
            </button>
          </div>

        </div>
        {/* <Review /> */}
      </section>
    </div>
  </div>)
};

export default ItemDetails;