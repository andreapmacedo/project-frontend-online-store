import React from 'react';
import BotaoVoltar from '../../components/BotaoVoltar';
import TopMenu from '../../components/TopMenu';
import SideMenu from '../../components/SideMenu';
// import CategoriesCards from '../../components/CategoriesCards';
import Cart from '../../components/Cart/Cart';
import './style.css';

const CartPage = () => (
  <div className="main-page-container">
    <div className="main-top-menu-container">
      <TopMenu></TopMenu>
    </div>
    <div className="main-body-container" >
      <div className="main-body-side-menu">
        <SideMenu></SideMenu>
      </div>
      <div className="main-body-cards">
        <Cart></Cart>
      </div>
    </div>
    <BotaoVoltar />
  </div>
);

export default CartPage;