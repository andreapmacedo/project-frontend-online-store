import React from 'react';
import BotaoVoltar from '../../componentes/BotaoVoltar';
import TopMenu from '../../componentes/TopMenu';
import SideMenu from '../../componentes/SideMenu';
import MainCards from '../../componentes/MainCards';
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