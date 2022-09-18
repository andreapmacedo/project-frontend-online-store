import React from 'react';
import BotaoVoltar from '../../components/BotaoVoltar';
import TopMenu from '../../components/TopMenu';
import SideMenu from '../../components/SideMenu';
import MainCards from '../../components/CardsContainer';
import './style.css';

const Main = () => (
  <div className="main-page-container">
    <div className="main-top-menu-container">
      <TopMenu></TopMenu>
    </div>
    <div className="main-body-container" >
      <div className="main-body-side-menu">
        <SideMenu></SideMenu>
      </div>
      <div className="main-body-cards">
        <MainCards></MainCards>
      </div>
    </div>
    <BotaoVoltar />
  </div>
);

export default Main;